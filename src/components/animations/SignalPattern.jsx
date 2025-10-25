// src/components/canvas/SignalPattern.jsx
import React, { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
// Importa Icosahedron da drei
import { Text, Trail, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

// === NUOVO COMPONENTE: SFERA ENERGETICA ===
/**
 * Crea un nucleo energetico pulsante al centro della scena,
 * composto da 3 wireframe che ruotano in modo indipendente.
 */
const EnergyCore = ({ color }) => {
  const groupRef = useRef();
  const sphere1Ref = useRef();
  const sphere2Ref = useRef();
  const sphere3Ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!groupRef.current) return;

    // Rotazioni differenziate per un effetto complesso
    if (sphere1Ref.current) {
      sphere1Ref.current.rotation.x = t * 0.2;
      sphere1Ref.current.rotation.y = t * 0.3;
    }
    if (sphere2Ref.current) {
      sphere2Ref.current.rotation.y = -t * 0.4;
      sphere2Ref.current.rotation.z = t * 0.1;
    }
    if (sphere3Ref.current) {
      sphere3Ref.current.rotation.z = t * 0.3;
      sphere3Ref.current.rotation.x = -t * 0.1;
    }

    // Pulsazione di energia
    const pulse = 0.95 + Math.sin(t * 2.5) * 0.05;
    groupRef.current.scale.set(pulse, pulse, pulse);
  });

  return (
    // Posizionato al centro (0,0,0)
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Luce interna che "emana" dalla sfera e illumina gli snippets vicini */}
      <pointLight color={color} intensity={4} distance={10} decay={2} />

      {/* Sfera 1 (principale) */}
      <Icosahedron ref={sphere1Ref} args={[2.0, 4]}>
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.3}
        />
      </Icosahedron>

      {/* Sfera 2 (dettaglio interno) */}
      <Icosahedron ref={sphere2Ref} args={[1.98, 4]}>
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.15}
        />
      </Icosahedron>

      {/* Sfera 3 (aura esterna) */}
      <Icosahedron ref={sphere3Ref} args={[2.02, 4]}>
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.1}
        />
      </Icosahedron>
    </group>
  );
};
// ==========================================

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
      const textColor = computed.getPropertyValue("--color-text-muted")?.trim() || "#4F5569";
      const primaryColor = computed.getPropertyValue("--color-primary")?.trim() || "#1F376E";
      const isDark = document.documentElement.classList.contains("dark");
      const baseColor = isDark
        ? computed.getPropertyValue("--color-bg")?.trim() || "#04060D"
        : computed.getPropertyValue("--color-bg")?.trim() || "#EBEFFF";
      setTheme({ baseColor, textColor, primaryColor });
    };
    getThemeColors();
    const obs = new MutationObserver(getThemeColors);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  // === LINEE OCEANICHE ===
  const linesRef = useRef([]);
  const numLines = 25;
  const pointsPerLine = 250;
  const lines = useMemo(() => {
    const arr = [];
    for (let i = 0; i < numLines; i++) {
      const points = [];
      for (let j = 0; j < pointsPerLine; j++) {
        points.push(new THREE.Vector3(j / 5 - 25, 0, (Math.random() - 0.5) * 2));
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const color = new THREE.Color(theme.primaryColor).offsetHSL(0, 0, (i / numLines) * 0.3);
      const material = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity: 0.1 + (i / numLines) * 0.4,
      });
      arr.push({ geometry, material, index: i, id: `line-${i}` });
    }
    return arr;
  }, [theme.primaryColor]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    for (const line of linesRef.current) {
      if (!line) continue;
      const i = line.userData.index;
      const pos = line.geometry.attributes.position;
      for (let j = 0; j < pos.count; j++) {
        const x = j / 5 - 25;
        const z = pos.getZ(j) || 0;
        const y =
          Math.sin(x * 1.5 + t * 2 + i) * 0.4 +
          Math.sin(x * 0.3 + t * 0.7) * 0.2 +
          Math.sin(i + t * 0.5) * 0.1;
        pos.setY(j, y + i * 0.5 - 6); // Posiziona le linee oceaniche in basso
        pos.setZ(j, z + Math.sin(j * 0.1 + t * 0.3) * 0.05);
      }
      pos.needsUpdate = true;
      const pulse = 0.4 + Math.sin(t * 1.2 + i * 0.3) * 0.6;
      line.material.opacity = (0.2 + (i / numLines) * 0.4) * pulse;
    }
  });

  // === FRAMMENTI DI CODICE ===
  const codeGroup = useRef();
  const bounds = useMemo(() => ({ x: 18, y: 12, z: 10 }), []);
  const snippets = useMemo(() => {
    const texts = [
      "C","C++","Java","Dart","JavaScript","Flutter","React","Python",
      "SQL","Unreal","git","API","JSON","async","await","Node.js","Shader"
    ];
    return Array.from({ length: 60 }, (_, i) => ({
      id: `snippet-${i}`,
      text: texts[Math.floor(Math.random() * texts.length)],
      pos: new THREE.Vector3(
        (Math.random() - 0.5) * bounds.x * 2,
        (Math.random() - 0.5) * bounds.y * 2,
        (Math.random() - 0.5) * bounds.z * 2
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.03,
        (Math.random() - 0.5) * 0.03,
        (Math.random() - 0.5) * 0.03
      ).normalize().multiplyScalar(Math.random() * 0.02 + 0.01),
    }));
  }, [bounds]);

  useFrame(() => {
    if (!codeGroup.current) return;
    for (const [i, trailMesh] of codeGroup.current.children.entries()) {
      const mesh = trailMesh.children[0];
      const data = snippets[i];
      if (mesh) {
        mesh.position.add(data.velocity);

        // rimbalzo nei bounds
        ["x","y","z"].forEach(ax => {
          if (Math.abs(mesh.position[ax]) > bounds[ax]) {
            data.velocity[ax] *= -1;
            mesh.position[ax] = Math.sign(mesh.position[ax]) * bounds[ax];
          }
        });

        // oscillazione verticale per effetto "onde"
        mesh.position.y += Math.sin(mesh.position.x * 0.5 + Date.now() * 0.001) * 0.005;
      }
    }
    codeGroup.current.rotation.y += 0.001; // rotazione lenta del gruppo
  });

  return (
    <>
      {/* === SFERA DI ENERGIA CENTRALE === */}
      <EnergyCore color={theme.primaryColor} />

      {/* === LINEE OCEANICHE ESISTENTI === */}
      {lines.map((line) => (
        <line
          key={line.id}
          ref={(el) => (linesRef.current[line.index] = el)}
          geometry={line.geometry}
          material={line.material}
          userData={{ index: line.index }}
        />
      ))}
      
      {/* === FRAMMENTI DI CODICE ESISTENTI === */}
      <group ref={codeGroup}>
        {snippets.map((data) => (
          <Trail
            key={data.id}
            width={0.6}
            length={7}
            color={theme.primaryColor}
            attenuation={(t) => t * t * 0.8}
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