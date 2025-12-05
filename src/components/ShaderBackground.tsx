import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// --- 1. Vertex Shader ----
const vertexShader = '';

// --- 2. Fragement Shader ---
const fragmentShader = ''; //glsl code here

function Moon(): React.ReactElement {
    return(
        <>
        </>
    );
}

function Stars(): React.ReactElement {
    return(
        <>
        </>
    );
}

export default function ShaderBackground(): React.ReactElement {

    useFrame(() => ('something'));

    return(
    <Canvas>
        <Moon />
        <Stars />
    </Canvas>
    );
}