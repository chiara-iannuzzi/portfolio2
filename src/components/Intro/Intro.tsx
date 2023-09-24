"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Computers = ({ isMobile = true }) => {
    
  const computer = useGLTF("./planet/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        castShadow
        intensity={1}
        shadow-mapSize={1024}
      />
      <Preload all />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const Intro = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(true);

  useEffect(() => {
    requestAnimationFrame(() => {
        console.log('toto')
        return (
            <div className="h-screen w-screen">
                <Canvas
                    onError={(error) => console.error("An error occurred while initializing WebGL:", error)}
                    frameloop='demand'
                    shadows
                    dpr={[1, 2]}
                    camera={{ position: [20, 3, 5], fov: 25 }}
                    gl={{ preserveDrawingBuffer: true }}
                >
                    <Suspense>
                        <OrbitControls></OrbitControls>
                        <Computers isMobile={isMobile} />
                    </Suspense>
                </Canvas>
            </div>  
          );
    });
  }, []);

  return (
    <div className="h-screen w-screen">
        <Canvas
            onError={(error) => console.error("An error occurred while initializing WebGL:", error)}
            frameloop='demand'
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense>
                <OrbitControls></OrbitControls>
                <Computers isMobile={isMobile} />
            </Suspense>
        </Canvas>
    </div>  
  );

};

export default Intro;