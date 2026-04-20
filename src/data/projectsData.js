export const PROJECTS = [
  {
    id: "antoniotraversa-portfolio",
    title: "antoniotraversa.it - Personal Portfolio",
    type: "WEB",
    framework: "React + Vite + Tailwind",
    frameworkIcon: "R",
    imageUrl: "/images/pp.png",
    summary:
      "A web portfolio designed to present projects, skills, and vision in a clear, fast, and professional way, with a strong focus on performance and visual impact.",
    status: "In progress",
  },

  // 🎮 UE5 GAMES
  {
    id: "domgames-ue5",
    title: "DOMGames",
    type: "GAME",
    framework: "Unreal Engine 5",
    frameworkIcon: "UE",
    imageUrl: "/images/pp.png",
    summary:
      "A DOM-themed game inspired by the music movement and electronic music events, featuring simple internal minigames and a strong, recognizable DOM-style identity.",
    status: "In development",
  },
  {
    id: "metaclub-ue5",
    title: "MetaClub",
    type: "GAME",
    framework: "Unreal Engine 5",
    frameworkIcon: "UE",
    imageUrl: "/images/metaclublogo.png",
    summary:
      "A 3D DJ simulator: connect any compatible MIDI controller and start mixing in real time with an immersive interface, visual feedback, and direct performance control.",
    status: "Prototype",
  },
  {
    id: "creationlab-ue5",
    title: "CreationLab",
    type: "EXPERIMENT",
    framework: "Unreal Engine 5",
    frameworkIcon: "UE",
    imageUrl: "/images/pp.png",
    summary:
      "A general experimentation space where I try new ideas, systems, and prototypes; not everything is carried forward, but every test helps shape the method and future solutions.",
    status: "Research",
  },
  {
    id: "otherworld-ue5",
    title: "Otherworld",
    type: "GAME",
    framework: "Unreal Engine 5",
    frameworkIcon: "UE",
    imageUrl: "/images/pp.png",
    summary:
      "A GTA-like game set between Lazio and Campania, featuring free exploration, a recognizable Italian atmosphere, and a structure open to missions, driving, and world interaction.",
    status: "Prototype",
  },

  // 📱 FLUTTER APPS
  {
    id: "travyplay-flutter",
    title: "TravyPlay",
    type: "MOBILE",
    framework: "Flutter",
    frameworkIcon: "F",
    imageUrl: "/images/pp.png",
    summary:
      "An all-in-one player that combines music, IPTV, OpenLibrary books, and video playback into a single, fluid, centralized experience.",
    status: "In development",
  },
  {
    id: "domapp-flutter",
    title: "DOMApp",
    type: "MOBILE",
    framework: "Flutter",
    frameworkIcon: "F",
    imageUrl: "/images/pp.png",
    summary:
      "A mobile app designed to manage content and interactions quickly, with a fluid interface and a strong focus on ease of use.",
    status: "MVP",
  },
  {
    id: "trmanagerclient-flutter",
    title: "TRManager Client",
    type: "MOBILE",
    framework: "Flutter + Handheld UI",
    frameworkIcon: "F",
    imageUrl: "/images/pp.png",
    summary:
      "A handheld and mobile client for a restaurant management system, built to take orders, check tables, and communicate with the central server.",
    status: "In development",
  },

  // 🌐 BACKEND
  {
    id: "trmanager-backend-node",
    title: "TRManager Backend",
    type: "BACKEND",
    framework: "Node.js + Database",
    frameworkIcon: "N",
    imageUrl: "/images/pp.png",
    summary:
      "The server side of the restaurant management system, with database, APIs, business logic, and data synchronization to support the handheld clients.",
    status: "In development",
  },

  // 🤖 AI
  {
    id: "tassistai",
    title: "TAssistAI",
    type: "AI",
    framework: "Windows AI App",
    frameworkIcon: "AI",
    imageUrl: "/images/pp.png",
    summary:
      "A Windows-based AI assistant designed to help with daily tasks, speed up workflows, and provide practical support across different scenarios.",
    status: "Research",
  },

  // 🛠 UE PLUGINS
  {
    id: "unrealmetadata-plugin",
    title: "UnrealMetadata",
    type: "PLUGIN",
    framework: "Unreal Engine",
    frameworkIcon: "UE",
    imageUrl: "/images/pp.png",
    summary:
      "An editor plugin for extracting, managing, and organizing audio metadata in Unreal Engine projects, with a workflow designed to be fast and precise.",
    status: "In development",
  },
  {
    id: "unrealt-plugin",
    title: "UnrealT",
    type: "PLUGIN",
    framework: "Unreal Engine",
    frameworkIcon: "UE",
    imageUrl: "/images/pp.png",
    summary:
      "An editor plugin for building complete game frameworks, creating technical foundations and reusable workflows directly inside Unreal Engine.",
    status: "Prototype",
  },
  {
    id: "unrealwaveform-plugin",
    title: "UnrealWaveform",
    type: "PLUGIN",
    framework: "Unreal Engine",
    frameworkIcon: "UE",
    imageUrl: "/images/pp.png",
    summary:
      "A plugin for extracting and visualizing audio waveforms in Unreal Engine, useful for synchronization, visual editing, and faster audio integration.",
    status: "In development",
  },
];

export const PROJECT_DETAILS = {
  "antoniotraversa-portfolio": {
    overview:
      "This portfolio is designed as a product showcase first: it presents projects with a clear hierarchy, fast navigation, and a strong visual identity that works well on both desktop and mobile.",
    highlights: [
      "Structured to guide visitors from the hero section to project detail pages without friction.",
      "Built to balance visual appeal, readability, and performance.",
      "Organized around real projects so the content stays practical and credible.",
    ],
    techNotes: ["React", "Vite", "Responsive layout system", "Theming support"],
    mediaLabel: "Portfolio visuals",
    mediaNote:
      "The site itself acts as the primary visual case study, with the cover image used as a representative asset.",
    videoLabel: "Presentation video",
    videoNote:
      "A video walkthrough slot is ready here for a future recorded demo or project presentation.",
    media: {
      listCover: {
        src: "/images/pp.png",
        alt: "Portfolio cover",
      },
      mainImage: {
        src: "/images/pp.png",
        alt: "Portfolio main visual",
      },
      photoGallery: [
        {
          src: "/images/pp.png",
          alt: "Portfolio main preview",
          kind: "gallery",
        },
      ],
      videoGallery: [],
    },
    statusNote:
      "Currently evolving as the main public-facing portfolio and content hub.",
    nextStep:
      "The next phase is to refine content density and add more visual proof for each project.",
  },
  "domgames-ue5": {
    overview:
      "DOMGames is a game concept built around the DOM music movement, blending electronic music culture with lightweight internal minigames and a clear DOM-style visual language.",
    highlights: [
      "Theme-driven design centered on DOM events and electronic music culture.",
      "Simple minigames that keep the experience accessible and fun.",
      "A recognizable identity built around rhythm, energy, and style.",
    ],
    techNotes: ["Unreal Engine 5", "Gameplay prototyping", "Music-driven mood", "Realtime interaction"],
    mediaLabel: "Game visuals",
    mediaNote:
      "This section is the right place for screenshots, concept art, gameplay captures, or trailer frames.",
    videoLabel: "Gameplay trailer",
    videoNote:
      "A short gameplay video can be embedded here once a trailer or demo capture is available.",
    media: {
      listCover: {
        src: "/images/pp.png",
        alt: "DOMGames cover art",
      },
      mainImage: {
        src: "/images/pp.png",
        alt: "DOMGames main visual",
      },
      photoGallery: [
        {
          src: "/images/pp.png",
          alt: "DOMGames visual preview",
          kind: "gallery",
        },
      ],
      videoGallery: [],
    },
    statusNote:
      "The project is in active development and continues to evolve around its core identity.",
    nextStep:
      "Next work focuses on expanding the minigame set and refining the presentation layer.",
  },
  "metaclub-ue5": {
    overview:
      "MetaClub is a 3D DJ simulator built around real-world MIDI controller input, allowing a connected device to drive the mix in an immersive 3D environment.",
    highlights: [
      "MIDI-first workflow that makes external hardware the primary control surface.",
      "Immersive 3D interface designed to feel like a live DJ setup.",
      "Realtime feedback for a more physical and responsive mixing experience.",
    ],
    techNotes: ["Unreal Engine 5", "MIDI input", "Realtime UI", "3D performance interface"],
    mediaLabel: "Simulator visuals",
    mediaNote:
      "This area can host screenshots of the booth, mixer layout, and controller mapping screens.",
    videoLabel: "Live mixing demo",
    videoNote:
      "A demo video would work especially well here to show the MIDI workflow in action.",
    media: {
      listCover: {
        src: "/images/metaclublogo2.png",
        alt: "MetaClub cover",
      },
      mainImage: {
        src: "/images/metaclublogo.png",
        alt: "MetaClub main visual",
      },
      photoGallery: [
        {
          src: "/images/metaclublogo.png",
          alt: "MetaClub visual preview",
          kind: "gallery",
        },
      ],
      videoGallery: [
        {
          title: "Live mixing demo",
          description: "Embed your MetaClub demo video here when ready.",
          embedUrl: "",
        },
      ],
    },
    statusNote:
      "The prototype is focused on validating the control flow and the feel of the mix.",
    nextStep:
      "Future iterations should refine mapping, feedback timing, and visual polish.",
  },
  "creationlab-ue5": {
    overview:
      "CreationLab is a flexible experimentation space where new mechanics, workflows, and ideas are tested before they are promoted into larger projects.",
    highlights: [
      "A safe place to try concepts quickly without overcommitting early.",
      "Useful for validating systems, UX ideas, and technical approaches.",
      "Not every prototype is meant to continue, but each one produces useful insight.",
    ],
    techNotes: ["Unreal Engine 5", "Prototyping", "Experimentation", "Research-driven workflow"],
    mediaLabel: "Prototype notes",
    mediaNote:
      "Screenshots, blockouts, or quick test captures fit here when a concept deserves visual documentation.",
    videoLabel: "Prototype capture",
    videoNote:
      "A short screen recording works well to document how a test behaved at the time.",
    statusNote:
      "This project intentionally stays open-ended so it can absorb different experiments.",
    nextStep:
      "The next step is simply to keep testing, selecting, and refining what proves useful.",
  },
  "otherworld-ue5": {
    overview:
      "Otherworld is a GTA-like open-world project set between Lazio and Campania, using a recognizable Italian backdrop to support exploration, driving, and mission-based gameplay.",
    highlights: [
      "Large open-world direction with room for traversal, missions, and systems.",
      "Italian setting used as a strong identity layer rather than a generic backdrop.",
      "Built to support a balance between free roaming and structured objectives.",
    ],
    techNotes: ["Unreal Engine 5", "Open-world design", "Mission structure", "Driving systems"],
    mediaLabel: "World visuals",
    mediaNote:
      "Use this section for environment shots, map fragments, driving captures, or level design references.",
    videoLabel: "World walkthrough",
    videoNote:
      "A walkthrough video would be ideal for showing the atmosphere and scale of the world.",
    statusNote:
      "The prototype phase is aimed at defining the core tone, scope, and travel flow.",
    nextStep:
      "The next work should sharpen the map structure and the mission loop.",
  },
  "travyplay-flutter": {
    overview:
      "TravyPlay is an all-in-one media player that brings together music, IPTV, OpenLibrary books, and video playback in a single place.",
    highlights: [
      "A single interface for multiple content types and use cases.",
      "Designed to keep switching between media fast and frictionless.",
      "Useful as a central hub for both entertainment and reading.",
    ],
    techNotes: ["Flutter", "Media playback", "IPTV integration", "OpenLibrary"],
    mediaLabel: "Media hub visuals",
    mediaNote:
      "This section can show player screens, browsing states, and multi-content navigation views.",
    videoLabel: "Player demo",
    videoNote:
      "A demo video would be useful to show how the app switches between media types.",
    statusNote:
      "The project is still evolving as features and navigation patterns are refined.",
    nextStep:
      "Future work should focus on media organization and a smoother content discovery flow.",
  },
  "domapp-flutter": {
    overview:
      "DOMApp is a mobile app focused on managing content and interactions quickly through a fluid interface and a minimal learning curve.",
    highlights: [
      "Fast interaction patterns designed for practical day-to-day use.",
      "Clean interface choices that keep the app easy to navigate.",
      "Built around efficiency rather than unnecessary complexity.",
    ],
    techNotes: ["Flutter", "Mobile UI", "Content management", "Responsive interface"],
    mediaLabel: "App visuals",
    mediaNote:
      "Screenshots of key app states belong here, especially screens that show the interaction flow.",
    videoLabel: "App walkthrough",
    videoNote:
      "A short walkthrough video can demonstrate the interface and navigation rhythm.",
    statusNote:
      "The MVP is in place and can continue to grow around the most useful interactions.",
    nextStep:
      "The next phase should improve the content flow and refine edge-case states.",
  },
  "trmanagerclient-flutter": {
    overview:
      "TRManager Client is the handheld side of a restaurant management system, built for order taking, table lookup, and fast communication with the central server.",
    highlights: [
      "Optimized for palm-sized devices and quick operator input.",
      "Designed to reduce friction during service and ordering.",
      "Tightly connected to the backend so data stays synchronized.",
    ],
    techNotes: ["Flutter", "Handheld UI", "Order workflow", "Server sync"],
    mediaLabel: "Client UI visuals",
    mediaNote:
      "This section is ideal for order screens, table lists, and handheld-oriented UI captures.",
    videoLabel: "Operational demo",
    videoNote:
      "A demo video would be useful to show the restaurant workflow in action.",
    statusNote:
      "The client is built to support real-world restaurant operations with a practical layout.",
    nextStep:
      "The next improvements should focus on speed, readability, and operator ergonomics.",
  },
  "trmanager-backend-node": {
    overview:
      "TRManager Backend is the server side of the restaurant management platform, providing database access, APIs, business rules, and synchronization for the handheld clients.",
    highlights: [
      "Central source of truth for orders, tables, and connected client data.",
      "Designed to support real-time operations through structured APIs.",
      "Handles business logic and persistence behind the mobile client layer.",
    ],
    techNotes: ["Node.js", "Database layer", "REST APIs", "Business rules"],
    mediaLabel: "Backend architecture",
    mediaNote:
      "Use this section for architecture diagrams, schema screenshots, or API dashboards.",
    videoLabel: "Backend overview",
    videoNote:
      "A screen capture or architecture walkthrough could sit here as the project grows.",
    statusNote:
      "The server side remains foundational and can expand as more client behavior is added.",
    nextStep:
      "The next step is to refine endpoints, data models, and operational stability.",
  },
  "tassistai": {
    overview:
      "TAssistAI is a Windows-based AI assistant built to support daily work, speed up routine actions, and provide practical help across different contexts.",
    highlights: [
      "Created to feel useful in everyday Windows workflows.",
      "Aims to reduce repetitive tasks and help with quick actions.",
      "Designed as a practical assistant rather than a novelty demo.",
    ],
    techNotes: ["Windows app", "AI integration", "Automation", "Workflow support"],
    mediaLabel: "Assistant visuals",
    mediaNote:
      "This is the right place for the assistant UI, command windows, or interaction screenshots.",
    videoLabel: "Assistant demo",
    videoNote:
      "A demo recording would clearly show how the assistant behaves in a real session.",
    statusNote:
      "The research phase is focused on usefulness, speed, and practical interaction design.",
    nextStep:
      "The next iteration should improve context awareness and command reliability.",
  },
  "unrealmetadata-plugin": {
    overview:
      "UnrealMetadata is an editor plugin for extracting, managing, and organizing audio metadata inside Unreal Engine projects with a fast and precise workflow.",
    highlights: [
      "Focuses on audio metadata extraction and organization.",
      "Designed to keep editor work fast and readable.",
      "Useful when audio pipelines need structure and repeatability.",
    ],
    techNotes: ["Unreal Engine", "Editor plugin", "Audio metadata", "Workflow tooling"],
    mediaLabel: "Plugin visuals",
    mediaNote:
      "Show plugin panels, editor states, and metadata inspection views in this area.",
    videoLabel: "Plugin walkthrough",
    videoNote:
      "A short editor walkthrough would fit well here once the plugin UI is ready.",
    statusNote:
      "The plugin is actively evolving around a clean metadata workflow.",
    nextStep:
      "The next work should refine automation, validation, and editor ergonomics.",
  },
  "unrealt-plugin": {
    overview:
      "UnrealT is an editor plugin aimed at creating complete game frameworks, with reusable technical foundations and workflow building blocks directly inside Unreal Engine.",
    highlights: [
      "Targets framework-level setup rather than isolated features.",
      "Helps organize reusable technical building blocks.",
      "Intended to speed up the creation of structured game foundations.",
    ],
    techNotes: ["Unreal Engine", "Editor plugin", "Framework tooling", "Reusable workflows"],
    mediaLabel: "Framework visuals",
    mediaNote:
      "Use this section for editor views, framework diagrams, or setup screenshots.",
    videoLabel: "Framework demo",
    videoNote:
      "A demo video could explain how the framework-building workflow behaves in the editor.",
    statusNote:
      "The prototype is centered on shaping a reliable and reusable internal structure.",
    nextStep:
      "The next stage should make framework composition more modular and easier to repeat.",
  },
  "unrealwaveform-plugin": {
    overview:
      "UnrealWaveform is a plugin for extracting and visualizing audio waveforms in Unreal Engine, making synchronization, visual editing, and audio integration easier.",
    highlights: [
      "Extracts audio waveform data for editor use.",
      "Supports visual inspection and synchronization tasks.",
      "Adds a practical layer for audio-driven content workflows.",
    ],
    techNotes: ["Unreal Engine", "Audio tooling", "Waveform extraction", "Editor integration"],
    mediaLabel: "Waveform visuals",
    mediaNote:
      "This area can host waveform screenshots, editor previews, or integration examples.",
    videoLabel: "Waveform demo",
    videoNote:
      "A short demo video would be useful to show the waveform workflow in motion.",
    statusNote:
      "The plugin is being shaped around fast audio inspection and integration.",
    nextStep:
      "The next work should focus on presentation quality and editor usability.",
  },
};

export function getProjectById(projectId) {
  return PROJECTS.find((project) => project.id === projectId);
}

export function getProjectDetailsById(projectId) {
  return PROJECT_DETAILS[projectId] ?? null;
}

function createDefaultGallery(project) {
  return [
    {
      src: project.imageUrl,
      alt: `${project.title} cover image`,
      kind: "cover",
    },
  ];
}

function normalizeImageEntry(entry, fallbackSrc, fallbackAlt) {
  if (!entry || typeof entry !== "object") {
    return {
      src: fallbackSrc,
      alt: fallbackAlt,
      kind: "image",
    };
  }

  return {
    src: entry.src || fallbackSrc,
    alt: entry.alt || fallbackAlt,
    kind: entry.kind || "image",
    caption: entry.caption || "",
  };
}

function normalizeVideoEntry(entry, index) {
  if (!entry || typeof entry !== "object") {
    return null;
  }

  return {
    title: entry.title || `Video ${index + 1}`,
    description: entry.description || "",
    embedUrl: entry.embedUrl || "",
    thumbnail: entry.thumbnail || "",
  };
}

export function getProjectMediaById(projectId) {
  const project = getProjectById(projectId);
  const details = getProjectDetailsById(projectId);

  if (!project) {
    return null;
  }

  const media = details?.media ?? {};

  const fallbackImage = {
    src: project.imageUrl,
    alt: `${project.title} image`,
    kind: "image",
  };

  const listCover = normalizeImageEntry(
    media.listCover ?? media.cover,
    fallbackImage.src,
    `${project.title} cover image`,
  );

  const mainImage = normalizeImageEntry(
    media.mainImage ?? media.main ?? media.cover,
    fallbackImage.src,
    `${project.title} main image`,
  );

  const legacyGallery = Array.isArray(media.gallery) ? media.gallery : [];
  const photoSource = Array.isArray(media.photoGallery) && media.photoGallery.length > 0
    ? media.photoGallery
    : legacyGallery;

  const photoGallery = (photoSource.length > 0
    ? photoSource
    : createDefaultGallery(project)
  ).map((entry) => normalizeImageEntry(entry, fallbackImage.src, `${project.title} gallery image`));

  const legacyVideo = media.video ? [media.video] : [];
  const videoSource = Array.isArray(media.videoGallery) && media.videoGallery.length > 0
    ? media.videoGallery
    : legacyVideo;

  const videoGallery = videoSource
    .map((entry, index) => normalizeVideoEntry(entry, index))
    .filter(Boolean);

  return {
    listCover,
    mainImage,
    photoGallery,
    videoGallery,

    // Compatibility aliases for existing callers
    cover: listCover,
    main: mainImage,
    photos: photoGallery,
    videos: videoGallery,
    gallery: photoGallery,
    video: videoGallery[0] ?? null,
  };
}