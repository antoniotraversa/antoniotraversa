// src/components/canvas/HeroRight3D.jsx
import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Plane, Html } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";

const InteractivePanel = ({ to, label, color, ...props }) => {
  const meshRef = useRef();
  const navigate = useNavigate();
  const [hovered, setHover] = useState(false);

  useFrame(() => {
    if (!meshRef.current) return;
    const targetScale = hovered ? 0.95 : 0.85; // più piccoli
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.08
    );
  });

  return (
    <Plane
      ref={meshRef}
      args={[3, 1.5]} // pannelli più compatti
      onClick={() => navigate(to)}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHover(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHover(false);
        document.body.style.cursor = "auto";
      }}
      {...props}
    >
      <meshStandardMaterial
        color={color}
        transparent
        opacity={hovered ? 0.9 : 0.7}
        metalness={0.3}
        roughness={0.05}
        emissive={hovered ? color : "#000000"}
        emissiveIntensity={hovered ? 0.7 : 0.3}
        side={THREE.DoubleSide}
      />
      <Html center position-z={0.01}>
        <div
          className="text-2xl sm:text-3xl font-extrabold select-none transition-all duration-300"
          style={{
            fontFamily: "var(--font-sans)",
            color: "var(--color-text)",
            textShadow: hovered
              ? `0 0 12px var(--color-text), 0 0 20px ${color}`
              : "0 0 6px rgba(0,0,0,0.4)",
          }}
        >
          {label}
        </div>
      </Html>
    </Plane>
  );
};

const DataFolderScene = ({ theme }) => {
  const groupRef = useRef();

  useFrame(({ clock, mouse }) => {
    if (!groupRef.current) return;

    // Oscillazione verticale tipo respiro
    groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.1;

    // Parallasse morbida
    const targetRotationX = mouse.y * 0.2;
    const targetRotationY = mouse.x * 0.2;
    groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.05;
  });

  return (
    <group ref={groupRef}>
      <InteractivePanel
        to="/projects"
        label="Projects"
        color={theme.primary}
        position={[-1.5, 0, 0]}
        rotation={[0, 0.25, 0]}
      />
      <InteractivePanel
        to="/about"
        label="About"
        color={theme.secondary}
        position={[1.5, 0, 0]}
        rotation={[0, -0.25, 0]}
      />
    </group>
  );
};

export default function HeroRight3DWrapper() {
  const [theme, setTheme] = useState({
    primary: "#1F376E",
    secondary: "#4F5569",
  });

  useEffect(() => {
    const getThemeColors = () => {
      const computed = getComputedStyle(document.documentElement);
      const primaryColor = computed.getPropertyValue("--color-primary")?.trim() || "#1F376E";
      const secondaryColor = computed.getPropertyValue("--color-secondary")?.trim() || "#4F5569";
      setTheme({ primary: primaryColor, secondary: secondaryColor });
    };
    getThemeColors();
    const obs = new MutationObserver(getThemeColors);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      style={{ width: "100%", height: "100%", cursor: "grab" }}
      onPointerDown={() => (document.body.style.cursor = "grabbing")}
      onPointerUp={() => (document.body.style.cursor = "grab")}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-5, -5, 10]} intensity={0.8} color={theme.primary} />
      <Suspense fallback={null}>
        <DataFolderScene theme={theme} />
      </Suspense>
    </Canvas>
  );
}
