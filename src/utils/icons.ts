// src/utils/icons.ts
import React from 'react';

// Importa da Font Awesome (fa)
import {
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaSun,
  FaMoon,
  FaApple,
  FaAndroid,
  FaJava,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaNodeJs,
  FaPalette, // <<< ICONA AGGIUNTA QUI
} from 'react-icons/fa';

// Importa da Simple Icons (si)
import {
  SiFlutter,
  SiDart,
  SiUnrealengine,
  SiCplusplus,
  SiC,
  SiAstro,
  SiJavascript,
  SiJson,
} from 'react-icons/si';

// Importa da Tabler Icons (tb) per icone generiche
import { TbApi, TbBolt } from 'react-icons/tb'; // <<< RIMOSSO TbShaders

// Definiamo un tipo per i nostri componenti icona
export type IconType = React.ComponentType<any>;

/**
 * Mappa unificata per tutte le icone del progetto.
 * Questa è ora l'UNICA fonte per le icone.
 */
export const iconMap: { [key: string]: IconType } = {
  // === Icone dell'Header ===
  github: FaGithub,
  instagram: FaInstagram,
  envelope: FaEnvelope,
  sun: FaSun,
  moon: FaMoon,

  // === Icone della Tech Stack ===
  // (Brand da Simple Icons)
  flutter: SiFlutter,
  dart: SiDart,
  unrealengine: SiUnrealengine,
  unreal: SiUnrealengine, // Alias
  'c++': SiCplusplus,
  c: SiC,
  astro: SiAstro,
  javascript: SiJavascript,

  // (Brand da Font Awesome)
  ios: FaApple,
  android: FaAndroid,
  java: FaJava,
  css: FaCss3Alt,
  react: FaReact,
  python: FaPython,
  'node.js': FaNodeJs,
  git: FaGitAlt,

  // (Icone generiche)
  sql: FaDatabase,
  api: TbApi,
  json: SiJson,
  async: TbBolt, // Placeholder per async/await
  await: TbBolt, // Placeholder per async/await
  shader: FaPalette, // <<< CORRETTO: Usa FaPalette
};