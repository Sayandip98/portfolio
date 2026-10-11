export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  // { id: "ai", label: "AI & Intelligence" }, // Commented: Full-stack web development focus
  { id: "frontend", label: "Frontend & UI" }
];

export const projectsData = [
  {
    id: "cinereserve",
    title: "CineReserve — Interactive Cinema Booking & Seat Allocation",
    category: "fullstack",
    headline: "Real-time seat reservation engine with dynamic theater grid visualization.",
    problem: "Traditional ticket systems suffer from high latency, rigid booking sessions, and unintuitive seat selection interfaces on mobile viewports.",
    description: "A full-stack movie reservation platform built with a modern React interface and Node.js REST API. Features an interactive SVG-powered theater seat visualizer, category-based ticket tiering, instant cart management, and responsive booking flows.",
    tags: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Modern CSS"],
    status: "Active Project",
    githubUrl: "https://github.com/Sayandip-Kundu/cinereserve",
    demoUrl: null, // Clearly marked as demo in development / local run
    demoAvailable: false,
    demoNote: "Live deployment undergoing cloud migration. Source code & local setup available on GitHub.",
    stats: [
      { label: "Architecture", value: "MERN Stack" },
      { label: "Rendering", value: "Dynamic Grid" },
      { label: "State", value: "Context API" }
    ],
    previewType: "cinema",
    featured: true
  },
  {
    id: "devmetrics",
    title: "DevMetrics — Developer Workflow & GitHub Analytics",
    category: "frontend",
    headline: "Visual analytics dashboard monitoring commit cadence and repo velocity.",
    problem: "Developers frequently lack clear, digestible visual summaries of their daily coding trends and sprint velocity without configuring complex corporate CI/CD tools.",
    description: "An intuitive web dashboard that queries repository metrics via GitHub APIs to render interactive commit history charts, language distribution breakdowns, and productivity heatmaps with zero configuration.",
    tags: ["React", "Vite", "Data Visualization", "GitHub API", "CSS Grid"],
    status: "Featured Showcase",
    githubUrl: "https://github.com/Sayandip-Kundu/dev-metrics",
    demoUrl: "https://sayandip-kundu.github.io/dev-metrics",
    demoAvailable: true,
    demoNote: "Interactive client-side web application running live.",
    stats: [
      { label: "API", value: "REST v3" },
      { label: "Charts", value: "Custom SVG" },
      { label: "Performance", value: "99+ Lighthouse" }
    ],
    previewType: "analytics",
    featured: true
  },
  /* AI & Intelligence Project (Commented per requirements - Full-stack web development focus)
  {
    id: "cognitext",
    title: "CogniText — AI Semantic Code & Document Assistant",
    category: "ai",
    headline: "Context-aware developer companion exploring LLM prompts and code explanation.",
    problem: "Engineers lose significant time parsing legacy or unfamiliar codebases without clear inline documentation and contextual summarization.",
    description: "An exploratory AI productivity utility integrating LLM endpoints to analyze code snippets, generate concise function documentation, and perform semantic explanation of complex algorithms.",
    tags: ["Python", "React", "LLM APIs", "Prompt Engineering", "FastAPI"],
    status: "AI Research Prototype",
    githubUrl: "https://github.com/Sayandip-Kundu/cognitext-ai",
    demoUrl: null,
    demoAvailable: false,
    demoNote: "Internal research prototype. Video demo and architecture diagram documented in repository.",
    stats: [
      { label: "Model Layer", value: "OpenAI API" },
      { label: "Backend", value: "FastAPI" },
      { label: "Focus", value: "Semantic Extraction" }
    ],
    previewType: "ai",
    featured: true
  },
  */
  {
    id: "pulseflow",
    title: "PulseFlow — Real-Time Agile Workspace & Task Board",
    category: "fullstack",
    headline: "Fast, distraction-free collaborative Kanban board with fluid drag interactions.",
    problem: "Mainstream project management suites are often bloated with excessive widgets, slowing down solo developers and small agile teams during focused sprints.",
    description: "A lightweight, high-performance task management workspace built for developers. Features customizable workflow columns, persistent client state, tag filtering, and responsive keyboard shortcuts.",
    tags: ["React", "JavaScript", "HTML5 Drag & Drop", "Local Persistence", "CSS Modules"],
    status: "Completed Application",
    githubUrl: "https://github.com/Sayandip-Kundu/pulseflow-workspace",
    demoUrl: "https://sayandip-kundu.github.io/pulseflow",
    demoAvailable: true,
    demoNote: "Client-side interactive Kanban with state persistence.",
    stats: [
      { label: "Speed", value: "Instant State" },
      { label: "UI System", value: "Custom CSS3" },
      { label: "Workflow", value: "Kanban / Agile" }
    ],
    previewType: "kanban",
    featured: false
  }
];
