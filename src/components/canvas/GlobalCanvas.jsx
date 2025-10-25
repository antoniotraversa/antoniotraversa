// src/components/canvas/GlobalCanvas.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import SignalPattern from "../animations/SignalPattern";
import CameraController from "./CameraController";

const GlobalCanvas = () => {
  return (
    <Canvas
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 6, 14], fov: 50 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: -1,
        background: "transparent",
      }}
    >
      <Suspense fallback={null}>
        {/* Controller della camera */}
        <CameraController />

        {/* Luci globali */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 15, 8]}
          intensity={1.2}
          color="#ffffff"
        />

        {/* Pattern principale */}
        <SignalPattern />

        {/* Ambiente HDRI per riflessi morbidi */}
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
};

export default GlobalCanvas;
