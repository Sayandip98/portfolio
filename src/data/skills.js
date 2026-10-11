export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "languages", label: "Languages" },
  { id: "databases", label: "Databases" },
  // { id: "ai-ml", label: "AI & ML" }, // Commented: Full-stack web development focus
  { id: "tools", label: "Dev Tools" }
];

export const skillsData = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    focus: "Component Lifecycle, Custom Hooks, State Management",
    tag: "Core Stack",
    iconName: "Code2"
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    focus: "Async/Await, Closures, DOM Architecture, Event Loop",
    tag: "Core",
    iconName: "FileCode2"
  },
  {
    name: "HTML5 & Modern CSS3",
    category: "frontend",
    focus: "Semantic Structure, Flexbox, Grid, Custom Properties",
    tag: "Core",
    iconName: "Layout"
  },
  {
    name: "Vite & Tooling",
    category: "frontend",
    focus: "HMR, Bundling Optimization, Asset Pipeline",
    tag: "Tooling",
    iconName: "Zap"
  },
  {
    name: "Responsive & Adaptive UI",
    category: "frontend",
    focus: "Mobile-First Design, Media Queries, Fluid Spacing",
    tag: "Design",
    iconName: "Smartphone"
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    focus: "Runtime Environment, Event-Driven I/O, File System",
    tag: "Core Backend",
    iconName: "Server"
  },
  {
    name: "Express.js",
    category: "backend",
    focus: "REST APIs, Middleware Pipelines, Routing Architecture",
    tag: "Backend",
    iconName: "Cpu"
  },
  {
    name: "RESTful API Design",
    category: "backend",
    focus: "Status Codes, CRUD Operations, JSON Serialization",
    tag: "Architecture",
    iconName: "Network"
  },

  // Languages
  {
    name: "Python",
    category: "languages",
    focus: "Scripting, Backend Automation, CLI Toolkits",
    tag: "Language",
    iconName: "Terminal"
  },
  {
    name: "C / C++",
    category: "languages",
    focus: "Data Structures, Algorithms, Memory Management",
    tag: "Core Foundation",
    iconName: "Binary"
  },
  {
    name: "Java",
    category: "languages",
    focus: "Object-Oriented Programming, Design Patterns",
    tag: "Language",
    iconName: "Coffee"
  },
  {
    name: "SQL",
    category: "languages",
    focus: "Complex Queries, Joins, Schema Modeling",
    tag: "Data Query",
    iconName: "Database"
  },

  // Databases
  {
    name: "MongoDB",
    category: "databases",
    focus: "Document Modeling, Mongoose, Aggregations",
    tag: "NoSQL",
    iconName: "Database"
  },
  {
    name: "MySQL / PostgreSQL",
    category: "databases",
    focus: "Relational Tables, Foreign Keys, Normalization",
    tag: "Relational",
    iconName: "HardDrive"
  },

  // AI & ML (Commented per requirements - Full-stack web development focus)
  /*
  {
    name: "AI & Machine Learning Foundations",
    category: "ai-ml",
    focus: "Supervised Learning, Model Evaluation, Neural Networks",
    tag: "Active Exploration",
    iconName: "Brain"
  },
  {
    name: "LLM Integration & Prompt Engineering",
    category: "ai-ml",
    focus: "API Integrations, Contextual Ingestion, Structured Prompts",
    tag: "Practical AI",
    iconName: "Sparkles"
  },
  {
    name: "Data Analysis (Pandas & NumPy)",
    category: "ai-ml",
    focus: "Data Cleaning, Vectorized Computations, Exploratory Analysis",
    tag: "Data Science",
    iconName: "LineChart"
  },
  */

  // Developer Tools
  {
    name: "Git & GitHub",
    category: "tools",
    focus: "Version Control, Branching, Pull Requests, Code Review",
    tag: "Essential",
    iconName: "GitBranch"
  },
  {
    name: "Postman",
    category: "tools",
    focus: "API Testing, Mock Endpoints, Environment Configs",
    tag: "Testing",
    iconName: "Send"
  },
  {
    name: "VS Code & Terminal",
    category: "tools",
    focus: "Productivity Shortcuts, Debugging, PowerShell / Bash",
    tag: "Workflow",
    iconName: "Command"
  }
];
