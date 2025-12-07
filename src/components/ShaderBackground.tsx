import React from 'react';
import { Canvas, ThreeElement, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { AsciiRenderer } from '@react-three/drei';

// --- A1. Vertex Shader ----
const vertexShader_moon = '';

// --- A2. Fragement Shader ---
const fragmentShader_moon = ''; 

// --- B1. Vertex Shader ----
const vertexShader_stars = '';

// --- B2. Fragement Shader ---
const fragmentShader_stars = ''; 

interface uniformsProp {
    uniforms: {uTime: {value: number}, uResolution: {value: THREE.Vector2}}
}

function Moon(uniforms: uniformsProp): React.ReactElement {
    return(
        <>
        </>
    );
}

function Stars(uniforms: uniformsProp): React.ReactElement {
    return(
        <>
        </>
    );
}

function Scene(): React.ReactElement {
    const mesh = React.useRef(null);

    const uniforms = React.useMemo(
        () => ({
            uTime: {value: 0},
            uResolution: {value: new THREE.Vector2(window.innerWidth, window.innerHeight)}
        }), 
        []
    )

    useFrame((state) => {
        if (mesh.current) {
            uniforms.uTime.value = state.clock.elapsedTime;
        }
    });

    return(
    <mesh ref={mesh} position={[0, 0, 0]}>
        <Moon uniforms={uniforms}/>
        <Stars uniforms={uniforms}/>
    </mesh>
    );
}

export default function ShaderBackground(): React.ReactElement {
    return(
    <div className='w-[100vw] h-[100vh]'>
        <Canvas orthographic camera={{zoom: 100, position: [0, 0, 10]}}>
            <Scene />

            <AsciiRenderer 
                fgColor="white" 
                bgColor="black"
                characters=" .:-=+*%#@"
            />
            <color attach="background" args={["black"]}/>
        </Canvas>
    </div>
    );
}