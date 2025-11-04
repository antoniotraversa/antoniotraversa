// src/components/canvas/SignalPattern.jsx
import React, { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
// Importa Icosahedron da drei
import { Text, Trail, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

// === NUCLEO ENERGETICO FLUIDO CENTRALE ===
/**
 * Nucleo fluido da cui emanano tutti i raggi e i codici.
 * Ruota su se stesso creando scie energetiche.
 */
const EnergyCore = ({ color }) => {
  const groupRef = useRef();
  const fluidCoreRef = useRef();
  const trailsRef = useRef([]);

  // Sfere fluide per effetto blob
  const fluidSpheres = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: `fluid-${i}`,
      offset: new THREE.Vector3(
        Math.sin(i * Math.PI * 2 / 12) * 0.4,
        Math.cos(i * Math.PI * 2 / 12) * 0.4,
        Math.sin(i * Math.PI / 6) * 0.3
      ),
      phase: (i / 12) * Math.PI * 2,
      speed: 0.8 + Math.random() * 0.4,
    }));
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!groupRef.current) return;

    // Pulsazione organica del gruppo
    const pulse = 1 + Math.sin(t * 1.5) * 0.1 + Math.sin(t * 2.8) * 0.05;
    groupRef.current.scale.set(pulse, pulse, pulse);

    // Rotazione fluida del nucleo
    if (fluidCoreRef.current) {
      fluidCoreRef.current.rotation.y = t * 0.3;
      fluidCoreRef.current.rotation.x = Math.sin(t * 0.4) * 0.3;
      fluidCoreRef.current.rotation.z = Math.cos(t * 0.35) * 0.2;
    }

    // Animazione sfere fluide per effetto blob
    trailsRef.current.forEach((sphere, i) => {
      if (!sphere) return;
      const data = fluidSpheres[i];
      const localT = t * data.speed + data.phase;
      
      // Movimento orbitale complesso
      const radius = 0.3 + Math.sin(localT * 2) * 0.15;
      sphere.position.x = Math.cos(localT) * radius;
      sphere.position.y = Math.sin(localT * 1.5) * radius;
      sphere.position.z = Math.sin(localT * 0.8) * radius;
      
      // Pulsazione individuale
      const spherePulse = 0.9 + Math.sin(localT * 3) * 0.1;
      sphere.scale.set(spherePulse, spherePulse, spherePulse);
    });
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Luce principale del nucleo - illumina tutta la scena */}
      <pointLight color={color} intensity={8} distance={30} decay={1.5} />
      
      {/* Luce secondaria pulsante */}
      <pointLight 
        color={new THREE.Color(color).offsetHSL(0.1, 0.2, 0.3)} 
        intensity={4} 
        distance={18} 
        decay={2} 
      />

      {/* Nucleo fluido centrale - sfera principale */}
      <group ref={fluidCoreRef}>
        <mesh>
          <sphereGeometry args={[0.9, 32, 32]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={3}
            metalness={0.3}
            roughness={0.6}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Sfere fluide orbitanti che creano l'effetto blob/fluido */}
        {fluidSpheres.map((data, i) => (
          <Trail
            key={data.id}
            width={0.8}
            length={12}
            color={color}
            attenuation={(t) => t * t * t}
          >
            <mesh ref={(el) => (trailsRef.current[i] = el)}>
              <sphereGeometry args={[0.25, 16, 16]} />
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={2.5}
                transparent
                opacity={0.9}
                metalness={0.5}
                roughness={0.4}
              />
            </mesh>
          </Trail>
        ))}
      </group>

      {/* Anelli energetici sottili che ruotano */}
      {[0, 1, 2].map((i) => (
        <mesh
          key={`ring-${i}`}
          rotation={[
            Math.PI / 2 + i * 0.4,
            i * 0.8,
            i * 0.6
          ]}
        >
          <torusGeometry args={[1.5 + i * 0.25, 0.015, 12, 64]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.25 - i * 0.06}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
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

  // === RAGGI ENERGETICI DAL NUCLEO ===
  const raysRef = useRef([]);
  const numRays = 80;
  
  const rays = useMemo(() => {
    const arr = [];
    
    for (let i = 0; i < numRays; i++) {
      // Direzione radiale casuale dal centro
      const theta = (i / numRays) * Math.PI * 2 + Math.random() * 0.5;
      const phi = Math.acos(2 * Math.random() - 1);
      const length = 15 + Math.random() * 25;
      
      const direction = new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta),
        Math.sin(phi) * Math.sin(theta),
        Math.cos(phi)
      ).normalize();
      
      // Crea curva dal centro verso l'esterno
      const points = [];
      const segments = 60;
      
      for (let j = 0; j < segments; j++) {
        const t = j / (segments - 1);
        const distance = t * length;
        
        // Aggiungi rumore per curve organiche
        const noise = Math.sin(j * 0.3 + i) * 0.5 + Math.cos(j * 0.2) * 0.3;
        const perpendicular = new THREE.Vector3(
          -direction.y, 
          direction.x, 
          0
        ).normalize();
        
        const point = direction.clone()
          .multiplyScalar(distance)
          .add(perpendicular.multiplyScalar(noise));
        
        points.push(point);
      }
      
      const curve = new THREE.CatmullRomCurve3(points);
      const geometry = new THREE.TubeGeometry(curve, segments, 0.02 + Math.random() * 0.03, 6, false);
      
      // Colore con variazione
      const rayColor = new THREE.Color(theme.primaryColor);
      rayColor.offsetHSL((i / numRays) * 0.15 - 0.075, 0.1, Math.random() * 0.2 - 0.1);
      
      const material = new THREE.MeshBasicMaterial({
        color: rayColor,
        transparent: true,
        opacity: 0.15 + Math.random() * 0.25,
        blending: THREE.AdditiveBlending,
      });
      
      arr.push({
        geometry,
        material,
        index: i,
        id: `ray-${i}`,
        phase: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 1.5,
      });
    }
    
    return arr;
  }, [theme.primaryColor]);

  // Animazione raggi
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    
    for (const ray of raysRef.current) {
      if (!ray) continue;
      const data = rays[ray.userData?.index];
      if (!data) continue;
      
      const phase = data.phase;
      const speed = data.speed;
      
      // Pulsazione opacità lungo il raggio
      const pulse = Math.sin(t * speed + phase) * 0.5 + 0.5;
      if (ray.material) {
        ray.material.opacity = (0.1 + pulse * 0.3) * (0.8 + Math.sin(t * 0.5 + phase) * 0.2);
      }
      
      // Leggera rotazione dei raggi
      ray.rotation.z = t * 0.05 * speed + phase;
    }
  });

  // === CAMPO DI PARTICELLE AMBIENTE ===
  const ambientParticlesRef = useRef();
  const ambientParticleCount = 300;
  
  const ambientParticles = useMemo(() => {
    const positions = new Float32Array(ambientParticleCount * 3);
    const velocities = [];
    
    for (let i = 0; i < ambientParticleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
      
      velocities.push({
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01,
      });
    }
    
    return { positions, velocities };
  }, []);

  // Animazione particelle ambiente
  useFrame(({ clock }) => {
    if (!ambientParticlesRef.current) return;
    
    const positions = ambientParticlesRef.current.geometry.attributes.position.array;
    const t = clock.getElapsedTime();
    
    for (let i = 0; i < ambientParticleCount; i++) {
      const vel = ambientParticles.velocities[i];
      const idx = i * 3;
      
      // Movimento lento e ondulatorio
      positions[idx] += vel.x;
      positions[idx + 1] += vel.y + Math.sin(t + i * 0.1) * 0.002;
      positions[idx + 2] += vel.z;
      
      // Mantieni le particelle nel campo visivo
      if (Math.abs(positions[idx]) > 30) vel.x *= -1;
      if (Math.abs(positions[idx + 1]) > 20) vel.y *= -1;
      if (Math.abs(positions[idx + 2]) > 20) vel.z *= -1;
    }
    
    ambientParticlesRef.current.geometry.attributes.position.needsUpdate = true;
  });
  // === FRAMMENTI DI CODICE CHE ESCONO DAL NUCLEO ===
  const codeGroup = useRef();
  const snippets = useMemo(() => {
    const texts = [
      "C","C++","Java","Dart","JavaScript","Flutter","React","Python",
      "SQL","Unreal","git","API","JSON","async","await","Node.js","Shader",
      "WebGL","Three.js","GLSL","Vue","TypeScript","GraphQL","MongoDB"
    ];
    return Array.from({ length: 70 }, (_, i) => {
      // Tutti partono dal centro (nucleo)
      const angle = (i / 70) * Math.PI * 2 + Math.random() * 0.3;
      const elevation = (Math.random() - 0.5) * Math.PI;
      
      // Direzione di espansione
      const direction = new THREE.Vector3(
        Math.cos(angle) * Math.cos(elevation),
        Math.sin(elevation),
        Math.sin(angle) * Math.cos(elevation)
      ).normalize();
      
      return {
        id: `snippet-${i}`,
        text: texts[Math.floor(Math.random() * texts.length)],
        pos: new THREE.Vector3(0, 0, 0), // Partono dal centro
        direction: direction,
        speed: 0.012 + Math.random() * 0.015,
        orbitSpeed: (Math.random() - 0.5) * 0.0008,
        distance: 0, // Distanza attuale dal centro
        maxDistance: 22 + Math.random() * 8,
        birthTime: Math.random() * 10, // Sfasamento iniziale
      };
    });
  }, []);

  useFrame(({ clock }) => {
    if (!codeGroup.current) return;
    const t = clock.getElapsedTime();
    
    for (const [i, trailMesh] of codeGroup.current.children.entries()) {
      const mesh = trailMesh.children[0];
      const data = snippets[i];
      if (!mesh) continue;
      
      const age = t - data.birthTime;
      
      if (age < 0) {
        // Non ancora nato, rimani nascosto nel nucleo
        mesh.position.set(0, 0, 0);
        mesh.scale.set(0, 0, 0);
        continue;
      }
      
      // Scala in base all'età
      const scale = Math.min(age * 0.5, 1);
      mesh.scale.set(scale, scale, scale);
      
      // Espansione radiale dal centro
      data.distance += data.speed;
      
      // Reset quando raggiunge la distanza massima
      if (data.distance > data.maxDistance) {
        data.distance = 0;
        data.birthTime = t + Math.random() * 2; // Rinascita sfasata
        
        // Nuova direzione casuale
        const newAngle = Math.random() * Math.PI * 2;
        const newElevation = (Math.random() - 0.5) * Math.PI;
        data.direction.set(
          Math.cos(newAngle) * Math.cos(newElevation),
          Math.sin(newElevation),
          Math.sin(newAngle) * Math.cos(newElevation)
        ).normalize();
      }
      
      // Calcola posizione basata sulla direzione e distanza
      mesh.position.copy(data.direction).multiplyScalar(data.distance);
      
      // Aggiungi rotazione orbitale leggera
      const orbitAngle = t * data.orbitSpeed;
      const rotationAxis = new THREE.Vector3(0, 1, 0);
      mesh.position.applyAxisAngle(rotationAxis, orbitAngle);
      
      // Oscillazione verticale fluida
      mesh.position.y += Math.sin(t * 0.8 + i * 0.2) * 0.015 * data.distance * 0.1;
      
      // Rallenta quando si allontana (effetto gravitazionale)
      const slowdown = 1 - (data.distance / data.maxDistance) * 0.3;
      data.speed = (0.012 + Math.random() * 0.005) * slowdown;
    }
    
    // Rotazione lentissima del gruppo
    codeGroup.current.rotation.y += 0.0002;
  });

  return (
    <>
      {/* === NUCLEO ENERGETICO CENTRALE === */}
      <EnergyCore color={theme.primaryColor} />

      {/* === RAGGI ENERGETICI DAL NUCLEO === */}
      {rays.map((ray) => (
        <mesh
          key={ray.id}
          ref={(el) => (raysRef.current[ray.index] = el)}
          geometry={ray.geometry}
          material={ray.material}
          userData={{ index: ray.index }}
        />
      ))}

      {/* === PARTICELLE AMBIENTE === */}
      <points ref={ambientParticlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={ambientParticleCount}
            array={ambientParticles.positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color={theme.primaryColor}
          transparent
          opacity={0.3}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
      
      {/* === FRAMMENTI DI CODICE CHE ORBITANO === */}
      <group ref={codeGroup}>
        {snippets.map((data) => (
          <Trail
            key={data.id}
            width={0.5}
            length={8}
            color={theme.primaryColor}
            attenuation={(t) => t * t * 0.7}
          >
            <Text
              position={data.pos}
              color={theme.textColor}
              fontSize={0.28}
              anchorX="center"
              anchorY="middle"
              fillOpacity={0.85}
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