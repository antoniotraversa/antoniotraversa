// src/components/canvas/HeroCanvas.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import SignalPattern from '../animations/SignalPattern';

const Background = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      gl={{ alpha: true }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'transparent',
        pointerEvents: 'none', // non blocca click
      }}
    >
      <ambientLight intensity={1.2} />
      <pointLight position={[5, 5, 5]} intensity={1.5} />
      {/* Aggiunto Suspense per componenti R3F che caricano assets (come Trail) */}
      <Suspense fallback={null}>
        <SignalPattern />
      </Suspense>
    </Canvas>
  );
};

export default Background;