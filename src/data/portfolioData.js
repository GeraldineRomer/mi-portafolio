
import project1Screenshot from "../assets/projects/project1.png";

export const personalInfo = {
    name: "Geraldine Romero",
    role: "Web Developer · Data Analyst · AI Enthusiast",
    banner1: "La web es mi lienzo,",
    banner2: "los datos mi lenguaje.",
    bio: "Soy Geraldine, ingeniera de sistemas recién graduada con mucha curiosidad. Me apasiona el desarrollo web y el análisis de datos, y últimamente no puedo dejar de explorar cómo la inteligencia artificial puede hacer que todo sea más interesante.\nEstoy buscando mi primera oportunidad en la industria del software, ese lugar donde pueda aprender rápido, aportar desde el primer día y crecer junto a un equipo.\nFuera del código, soy creadora de contenido sobre reseñas de libros, estoy aprendiendo a bailar ritmos argentinos y a tocar el piano — porque aparentemente una pantalla no es suficiente para mí.",
    email: "geraldineromero.ingeniera@gmail.com", //pendiente crear correo freelancer
    github: "https://github.com/GeraldineRomer", 
    linkedin: "https://www.linkedin.com/in/geraldine-romero-47476b257/",
    // Redes sociales para Contact
    socials: [
        {
        label: 'GitHub',
        href:  'https://github.com/GeraldineRomer',
        user:  '@GeraldineRomer',
        },
        {
        label: 'LinkedIn',
        href:  'https://linkedin.com/in/geraldine-romero-47476b257/',
        user:  'in/geraldine-romero',
        },
        {
        label: 'Email',
        href:  'geraldineromero.ingeniera@gmail.com',
        user:  'geraldineromero.ingeniera@gmail.com',
        },
    ],
}

export const stats = [
    { number: "2+", label: "proyectos" },
    { number: "4",   label: "lenguajes" },
    { number: "1",   label: "objetivo" },
]

export const skills = [
    { name: "React",        category: "frontend", level: 3 },
    { name: "React Native", category: "frontend", level: 2 },
    { name: "Angular",category: "frontend", level: 2 },
    { name: "CSS / Tailwind",category: "frontend", level: 3 },
    { name: "NodeJS",category: "backend", level: 3 },
    { name: "FastAPI",category: "backend", level: 3 },
    { name: "Flask",category: "backend", level: 2 },
    { name: "Python",       category: "Lenguages",     level: 4 },
    { name: "JavaScript",   category: "Lenguages", level: 3 },
    { name: "TypeScript",   category: "Lenguages", level: 3 },
    { name: "MySQL Workbench",          category: "database",     level: 4 },
    { name: "SQL Server",          category: "database",     level: 4 },
    { name: "MongoDB",          category: "database",     level: 3 },
    { name: "Pinecone",          category: "database",     level: 2 },
    { name: "Google Gemini API",    category: "data",     level: 3 },
    { name: "LangChain",    category: "data",     level: 2 },
    { name: "PowerBI",    category: "data",     level: 2 },
    { name: "Power Apps",    category: "automation",     level: 3 },
    { name: "Power Automate",    category: "automation",     level: 3 },
    { name: "N8N",    category: "automation",     level: 2 },
    { name: "AWS",    category: "cloud",     level: 2 },
    { name: "Google Cloud",    category: "cloud",     level: 2 },
    { name: "Excel",    category: "ofimatica",     level: 3 },
    { name: "Word",    category: "ofimatica",     level: 3 },
    { name: "PowerPoint",    category: "ofimatica",     level: 3 },
    { name: "GitHub",    category: "another",     level: 3 },
    { name: "Scrum",    category: "another",     level: 3 },
]

export const projects = [
    {
        id:           1,
        title:        "Chatbot RAG Multi-Tenant - Gestiòn y consulta de Documentos",
        description:  "Chatbot que cuenta con un sistema de recuperación de información (RAG) para gestionar y consultar documentos. Permite a los usuarios interactuar con el sistema mediante preguntas y respuestas, proporcionando información relevante basada en los documentos almacenados.",
        technologies: ["FastAPI","Python", "LangChain", "Pinecone Cloud", "Google Gemini API", "React", "Vercel", "Render"],
        github:       "https://github.com/GeraldineRomer/Chatbot-RAG",
        live:         "https://chatbot-rag-frontend-one.vercel.app",
        screenshot:   project1Screenshot, // reemplaza con "/assets/projects/proyecto1.png" cuando tengas la imagen
        featured:     true,
    },
    {
        id:           2,
        title:        "TO-Do List App",
        description:  "Aplicación web de lista de tareas que permite a los usuarios crear, editar y eliminar tareas.",
        technologies: ["FastAPI", "Python", "Angular"],
        github:       "https://github.com/GeraldineRomer/Backend-To-Do-App",
        live:         null, // null si no tiene sitio web desplegado
        screenshot:   null,
        featured:     true,
    },
]

export const timeline = [
    {
        year: "2021 — 2026",
        title: "Ingeniera de Sistemas",
        description: "Universidad Autónoma de Manizales",
        type: "formal",
    },
    {
        year: "2026 (13 horas)",
        title: "AWS Cloud Practitioner Essentials",
        description: "AWS Entrena LATAM",
        type: "informal",
        badge: "certificación",
    },
    {
        year: "2026 (10 horas)",
        title: "Power BI + IA",
        description: "Daxus",
        type: "informal",
        badge: "certificación",
    },
    {
        year: "2026 (3 horas)",
        title: "Fundamentos de la Nube AWS",
        description: "Nequi",
        type: "informal",
        badge: "certificación",
    },
    {
        year: "2026 (2 horas)",
        title: "AI Design Patterns with Ollama",
        description: "Udemy",
        type: "informal",
        badge: "certificación",
    },
    {
        year: "2026",
        title: "Inglés",
        description: "American School Way",
        type: "formal",
        badge: "en curso",
    },
    {
        year: "Febrero 2025 - Junio 2025",
        title: "Ingenieria de Sistemas | Apoyo voluntario",
        description: "Hospital San Lorenzo de Supía",
        type: "work",
        badge: "finalizado",
    },
    {
        year: "Julio 2025 - Enero 2026",
        title: "Aprendiz (Analista) de Ingeniería de Software",
        description: "Bancolombia",
        type: "work",
        badge: "finalizado",
    },
]

export const learning = [
    {
        emoji:  '🤖',
        text:   'AWS Cloud Practitioner',
        detail: 'AWS & Nequi',
        status: 'finalizado',
    },
    {
        emoji:  '🌐',
        text:   'Inglés',
        detail: 'American School Way',
        status: 'en progreso',
    },
    {
        emoji:  '🤖',
        text:   'Curso Gratis para Crear Agentes de AI con Copilot Studio',
        detail: 'Platzi',
        status: 'pendiente',
    },
]

// ─── EMOJIS TECH PARA LEARNING LOG ───────────────────────────────────────────

// Lenguajes & código
// 💻 Computador        🖥️  Monitor           ⌨️  Teclado
// 🖱️  Mouse            📱  Móvil             🔌  Cable/Plugin
// ⚙️  Engranaje        🔧  Llave inglesa      🛠️  Herramientas
// 🔩  Tornillo         🔑  Llave             🗝️  Llave antigua

// Desarrollo web
// 🌐  Web/Globe        📡  Señal/API          🔗  Link/Cadena
// 🖼️  Frontend         📐  Diseño/Layout      🎨  CSS/Diseño
// ✏️  Editor           📝  Notas/Docs         🗂️  Archivos

// Datos & análisis
// 📊  Gráfica barras   📈  Tendencia arriba   📉  Tendencia abajo
// 🗃️  Base de datos    📦  Paquete/Package    🗄️  Servidor/Storage
// 🔢  Números          🧮  Cálculo            📋  Lista/Tabla

// Inteligencia artificial
// 🤖  Robot/IA         🧠  Cerebro/ML         🔮  Predicción
// ⚡  Velocidad/GPU    🌊  Data flow          🧬  Algoritmo
// 👁️  Visión artificial 🗣️  NLP/Lenguaje      🎯  Precisión/Accuracy

// Frameworks & herramientas
// ⚛️  React            🟢  Node.js            🐍  Python
// 🐳  Docker           ☁️  Cloud/AWS          🔥  Firebase
// 🐙  GitHub           📦  npm/Package        🚀  Deploy/Vercel
// 🧪  Testing          🔍  Debug/Search       📌  Importante

// Aprendizaje & crecimiento
// 📚  Libros/Docs      🎓  Certificación      📖  Curso/Lectura
// ✅  Completado       🔄  En progreso        ⏳  Pendiente
// 🏆  Logro            🌱  Crecimiento        💡  Idea/Concepto
// 🗺️  Roadmap          🧩  Puzzle/Problema    🎯  Meta/Objetivo

// Idiomas & comunicación
// 🌍  Global/Idiomas   💬  Conversación       📢  Comunicación
// ✍️  Escritura        🗨️  Diálogo            🌐  Multilenguaje

// Seguridad & sistemas
// 🔐  Seguridad        🛡️  Protección         🔏  Encriptación
// 🖧  Red              📶  Conectividad       🧱  Arquitectura
