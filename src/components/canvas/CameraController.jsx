// src/components/canvas/CameraController.jsx
import { useRef, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useLocation } from "react-router-dom";
import * as THREE from "three";

const positions = {
  "/": new THREE.Vector3(0, 2, 12),       // Home
  "/about": new THREE.Vector3(20, 2, 12), // About a destra
  "/projects": new THREE.Vector3(-20, 2, 12), // Projects a sinistra
  "/projects/:id": new THREE.Vector3(-20, 4, 10), // ProjectDetails leggermente sopra
  "*": new THREE.Vector3(0, 2, 12),       // Default
};

export default function CameraController() {
  const { camera } = useThree();
  const location = useLocation();
  const targetPos = useRef(new THREE.Vector3());
  const tempVec = new THREE.Vector3();

  // Aggiorna il target quando cambia la rotta
  useEffect(() => {
    const path = location.pathname;
    let pos = positions[path] || positions["*"];
    targetPos.current.copy(pos);
  }, [location]);

  useFrame(() => {
    // Interpolazione fluida della camera verso target
    camera.position.lerp(tempVec.copy(targetPos.current), 0.05);
    camera.lookAt(0, 0, 0); // Mantiene il focus sul centro della scena
  });

  return null;
}
