import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedSphere = () => {
    const sphereRef = useRef();

    useFrame((state) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Sphere ref={sphereRef} args={[1, 64, 64]} scale={2.5}>
            <MeshDistortMaterial
                color="#4f46e5"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.2}
                metalness={0.8}
            />
        </Sphere>
    );
};

const Hero3DModel = () => {
    return (
        <div className="w-full h-[300px] md:h-[400px] absolute lg:relative lg:inset-auto inset-0 -z-0 pointer-events-none opacity-30 lg:opacity-100 lg:pointer-events-auto">
            <Canvas camera={{ position: [0, 0, 8] }}>
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
                <directionalLight position={[-10, -10, -5]} intensity={1} color="#6366f1" />
                <AnimatedSphere />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};

export default Hero3DModel;
