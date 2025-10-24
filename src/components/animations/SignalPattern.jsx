// src/components/canvas/SignalPattern.jsx
import React, { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Trail } from "@react-three/drei";
import * as THREE from "three";

export const SignalPattern = () => {
  const [theme, setTheme] = useState({
    baseColor: "#000",
    textColor: "#fff",
    primaryColor: "#1F376E",
  });

  // === Leggi colori CSS dinamicamente ===
  useEffect(() => {
    const getThemeColors = () => {
      const computed = getComputedStyle(document.documentElement);
      const textColor =
        computed.getPropertyValue("--color-text-muted")?.trim() || "#4F5569";
      const primaryColor =
        computed.getPropertyValue("--color-primary")?.trim() || "#1F376E";
      const isDark = document.documentElement.classList.contains("dark");
      const baseColor = isDark
        ? computed.getPropertyValue("--color-bg")?.trim() || "#04060D"
        : computed.getPropertyValue("--color-bg")?.trim() || "#EBEFFF";
      setTheme({ baseColor, textColor, primaryColor });
    };
    getThemeColors();
    const obs = new MutationObserver(getThemeColors);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => obs.disconnect();
  }, []);

  const linesRef = useRef([]);
  // AUMENTATO: Più linee per coprire più spazio
  const numLines = 15;
  const pointsPerLine = 200;

  const lines = useMemo(() => {
    const arr = [];
    for (let i = 0; i < numLines; i++) {
      const points = [];
      for (let j = 0; j < pointsPerLine; j++) {
        points.push(new THREE.Vector3(j / 5 - 20, 0, 0));
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color(theme.textColor),
        transparent: true,
        opacity: 0.1 + (i / numLines) * 0.3,
      });
      arr.push({ geometry, material, index: i, id: `line-${i}` });
    }
    return arr;
  }, [theme.textColor]);

  // === Onde animate e pulsanti ===
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    for (const line of linesRef.current) {
      if (!line) continue;

      const i = line.userData.index;
      const pos = line.geometry.attributes.position;
      for (let j = 0; j < pos.count; j++) {
        const x = j / 5 - 20;
        const y =
          Math.sin(x * 1.5 + t * 2 + i) * 0.4 +
          Math.sin(x * 0.5 + t * 0.7) * 0.2;
        // AUMENTATO: Maggiore spaziatura verticale
        pos.setY(j, y + i * 0.5 - 4);
      }
      pos.needsUpdate = true;

      const pulse = 0.5 + Math.sin(t * 1.5 + i * 0.5) * 0.5;
      line.material.opacity = (0.2 + (i / numLines) * 0.3) * pulse;
    }
  });

  // === Frammenti di codice dinamici (MIGLIORAMENTO CHIAVE) ===
  const codeGroup = useRef();
  
  // Definisce i confini 3D in cui i frammenti possono muoversi
  const bounds = useMemo(() => ({ x: 15, y: 10, z: 8 }), []);

  const snippets = useMemo(() => {
    const texts = [
      "C", "C++", "Java", "Dart", "JavaScript", "Flutter",
      "React", "Python", "SQL", "Unreal", "git", "API",
      "JSON", "async", "await", "Node.js", "Shader"
    ];
    // AUMENTATO: Più frammenti
    return Array.from({ length: 50 }, (_, i) => ({
      id: `snippet-${i}`,
      text: texts[Math.floor(Math.random() * texts.length)],
      // Posizione iniziale casuale all'interno dei confini
      pos: new THREE.Vector3(
        (Math.random() - 0.5) * bounds.x * 1.8,
        (Math.random() - 0.5) * bounds.y * 1.8,
        (Math.random() - 0.5) * bounds.z * 1.8
      ),
      // NUOVO: Vettore di velocità 3D casuale
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.03,
        (Math.random() - 0.5) * 0.03,
        (Math.random() - 0.5) * 0.03
      ).normalize().multiplyScalar(Math.random() * 0.02 + 0.01), // Velocità normalizzata
    }));
  }, [bounds]);

  useFrame(() => {
    if (!codeGroup.current) return;

    for (const [i, trailMesh] of codeGroup.current.children.entries()) {
      const mesh = trailMesh.children[0];
      const data = snippets[i];

      if (mesh) {
        // NUOVO: Applica la velocità 3D
        mesh.position.add(data.velocity);

        // NUOVO: Logica di "rimbalzo" sui muri invisibili (bounds)
        // Questo crea il movimento "ramificato" e dinamico
        if (Math.abs(mesh.position.x) > bounds.x) {
          data.velocity.x *= -1;
          mesh.position.x = Math.sign(mesh.position.x) * bounds.x;
        }
        if (Math.abs(mesh.position.y) > bounds.y) {
          data.velocity.y *= -1;
          mesh.position.y = Math.sign(mesh.position.y) * bounds.y;
        }
        if (Math.abs(mesh.position.z) > bounds.z) {
          data.velocity.z *= -1;
          mesh.position.z = Math.sign(mesh.position.z) * bounds.z;
        }
      }
    }
  });

  return (
    <>
      {lines.map((line) => (
        <line
          key={line.id}
          ref={(el) => (linesRef.current[line.index] = el)}
          geometry={line.geometry}
          material={line.material}
          userData={{ index: line.index }}
        />
      ))}

      <group ref={codeGroup}>
        {snippets.map((data) => (
          <Trail
            key={data.id}
            width={0.6} // Larghezza scia
            length={6} // Lunghezza scia
            color={theme.primaryColor}
            attenuation={(t) => t * t} // Scia svanisce quadraticamente
          >
            <Text
              position={data.pos}
              color={theme.textColor}
              fontSize={0.25}
              anchorX="center"
              anchorY="middle"
              fillOpacity={0.8}
            >
              {data.text}
            </Text>
          </Trail>
        ))}
      </group>
    </>
  );
};

export default SignalPattern;
