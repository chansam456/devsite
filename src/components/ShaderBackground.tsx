import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTexture, Points, PointMaterial } from '@react-three/drei'
import grainUrl from './assets/grain.webp' //fix this

// --- Vertex Shader ---
const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

// --- A1. Fragment Shader ---
const moonFragmentShader = `
uniform sampler2D grainTex;
uniform float uTime;
uniform float uSeed;
uniform vec3 uBack;
uniform vec3 uShaderBack;
uniform float uStyle;
uniform float uGrainScale; 
uniform float uDistortion;
uniform float uNoiseScale;

varying vec2 vUv;

#define PI 3.141592653589793

// ---------------------- Modified by Sam Chan -----------------------
// Description : Array and textureless GLSL 2D simplex noise function.
// Author : Ian McEwan, Ashima Arts.
// Maintainer : stegu
// Lastmod : 20110822 (ijm)
// License : Copyright (C) 2011 Ashima Arts. All rights reserved.
// Distributed under the MIT License. See LICENSE file.
// https://github.com/ashima/webgl-noise
// https://github.com/stegu/webgl-noise
// -------------------------------------------------------------------

// Pseudo-random functions, used in Simplex noise function
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x * 34.0) + 10.0) * x); }

// Simplex noise function: implements 2D simplex noise
// Maps a 2D coordinate input to a scalar output value, creating a smooth, continuous, 
// non-repeating pattern (gradient noise). 2nd derivative continuous.
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

// Helper: normalizes simplex noise function; from [-1, 1] to [0, 1]
float snoise01(vec2 v) {
  return (1.0 + snoise(v)) * 0.5;
}

// Helper: Modifies noise based on global time parameter and (random) seed offset
float noise2d(vec2 st) {
  return snoise01(vec2(st.x + uTime * 0.03, st.y - uTime * 0.07 + uSeed)); //original: (uTime * 0.02, uTime * 0.04)
}

// Pattern function: Fractal Brownian Motion (FBM) to create a cloud effect
float pattern(vec2 p) {
  float value = 0.0;
  float amplitude = 0.9;
  
  // Loop to stack layers (Octaves)
  for (int i = 0; i < 4; i++) {
    value += amplitude * noise2d(p);
    p *= 2.0;       // Double frequency (zoom out)
    amplitude *= 0.67; // Half intensity
  }
  return value;
}

void main() {
  vec2 uv = vUv;
  vec2 p = gl_FragCoord.xy;
  
  uv = uStyle > 0.0 ? ceil(uv * 50.0) / 50.0 : uv; //modify style later
  
  vec3 grainColor = texture2D(grainTex, mod(p * uGrainScale * 5.0, 1024.0) / 1024.0).rgb;
  
  // blurAlpha modifies the transparency of all color with a value. Can be used with a mask.
  float blurAlpha = 1.0;
  
  float gr = pow(grainColor.r * 1.0, 1.5) + 0.5 * (1.0 - blurAlpha);
  float gg = grainColor.g;
  
  float ax = uDistortion * gr * cos(gg * 2.0 * PI);
  float ay = uDistortion * gr * sin(gg * 2.0 * PI);
  
  float ndx = 1.0 * 1.0 * uNoiseScale + 0.1 * (1.0 - blurAlpha);
  float ndy = 2.0 * 1.0 * uNoiseScale + 0.1 * (1.0 - blurAlpha);
  
  float nx = uv.x * ndx + ax;
  float ny = uv.y * ndy + ay;
  
  float n = pattern(vec2(nx, ny));
  
  n = pow(n * 1.05, 6.0);
  n = smoothstep(0.0, 1.0, n);
  
  // modify alpha values to debug
  vec4 front = vec4(uShaderBack, 0.0);
  vec4 back = vec4(uBack, 1.0);
  vec4 result = mix(back, front, n);
  
  float dist = distance(vUv, vec2(0.5));
  float edgeMask = 1.0 - smoothstep(0.498, 0.5, dist);
  result.a *= edgeMask;
  
  gl_FragColor = result;
}
`

function Moon() {
  const mesh = useRef<THREE.Mesh | null>(null)
  
  const [grainTexture] = useTexture([grainUrl])

  // Setup texture wrapping
  grainTexture.wrapS = grainTexture.wrapT = THREE.RepeatWrapping

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSeed: { value: 0.6237470630176325 * 100 }, //Math.random() replaced for time being
      uBack: { value: new THREE.Color('#909296') },
      uShaderBack: { value: new THREE.Color('#909296') }, 
      grainTex: { value: grainTexture },
      uStyle: { value: 0.0 },
      uGrainScale: { value: 1.0 }, 
      uDistortion: { value: 0.1 },  
      uNoiseScale: { value: 1.5 }, 
    }),
    [grainTexture]
  )

  useFrame((state) => {
    if (mesh.current) {
      uniforms.uTime.value = state.clock.getElapsedTime()
    }
  })

  return (
    <mesh ref={mesh} position={[0, -9.975, 0]}>
      <circleGeometry args={[10, 196]} />
      <shaderMaterial
        fragmentShader={moonFragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        transparent={true} 
      />
    </mesh>
  )
}

type StarFieldProps = {
  count: number;
  radius: number;
  color: string;
}

function StarField( {count, radius, color}: StarFieldProps ): React.ReactElement {
  // useMemo helps preserve memory by only generating random positions once
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // finds random positions of points
      let x = (Math.random() - 0.5) * 2 * radius
      let y = (Math.random() - 0.5) * 2 * radius
      let z = (Math.random() - 0.5) * 2 * radius
      
      p[i * 3] = x
      p[i * 3 + 1] = y
      p[i * 3 + 2] = z
    }
    return p
  }, [count, radius])

  return (
    <Points positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        opacity={0.7}
        size={2.5}                // individual star size modifier
        sizeAttenuation={false} // size is the same regardless of distance
        depthWrite={false}
      />
    </Points>
  )
}

export default function ShaderBackground(): React.ReactElement {
  return (
    <div className='fixed w-[100vw] h-[100vh] bg-normal-background'>
      <Canvas orthographic camera={{ position: [0, 0, 5], zoom: 300 }}>
        {/* FIXED: Suspense is required for useTexture */}
        <Suspense fallback={<></>}>
            <Moon />
            <StarField count={3000} radius={15} color='#444848'/>
        </Suspense>
      </Canvas>
    </div>
  )
}