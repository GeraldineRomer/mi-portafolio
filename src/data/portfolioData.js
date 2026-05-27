
export const personalInfo = {
    name: "Geraldine Romero",
    role: "Web Developer · Data Analyst · AI Enthusiast",
    banner1: "La web es mi lienzo,",
    banner2: "los datos mi lenguaje.",
    bio: "Soy Geraldine, ingeniera de sistemas recién graduada con mucha curiosidad. Me apasiona el desarrollo web y el análisis de datos, y últimamente no puedo dejar de explorar cómo la inteligencia artificial puede hacer que todo sea más interesante.\nEstoy buscando mi primera oportunidad en la industria del software, ese lugar donde pueda aprender rápido, aportar desde el primer día y crecer junto a un equipo.\nFuera del código, soy creadora de contenido sobre reseñas de libros, estoy aprendiendo a bailar ritmos argentinos y a tocar el piano — porque aparentemente una pantalla no es suficiente para mí.",
    email: "tuemail@gmail.com", //pendiente crear correo freelancer
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
        href:  'mailto:tuemail@gmail.com',
        user:  'tuemail@gmail.com',
        },
    ],
}

export const stats = [
    { number: "1+", label: "proyectos" },
    { number: "4",   label: "lenguajes" },
    { number: "1",   label: "objetivo" },
]

export const skills = [
    { name: "React",        category: "frontend", level: 3 },
    { name: "JavaScript",   category: "frontend", level: 3 },
    { name: "CSS / Tailwind",category: "frontend", level: 2 },
    { name: "Python",       category: "data",     level: 2 },
    { name: "SQL",          category: "data",     level: 2 },
    { name: "AI / APIs",    category: "data",     level: 2 },
]

export const projects = [
    {
        id: 1,
        title: "Dashboard para manejo de redes sociales con IA",
        description: "Visualización de datos en tiempo real con predicciones ML integradas.",
        technologies: ["React", "Python", "ML", "Power BI"],
        github: "https://github.com/tunombre/proyecto1",
        live: "https://proyecto1.vercel.app",
        icon: "chart",
    },
    {
        id: 2,
        title: "Portafolio Diseñador Mecánico con Asistente IA",
        description: "Portafolio web con asistente IA que responde preguntas sobre la experiencia y proyectos en tiempo real, al igual que contacta.",
        technologies: ["Claude API", "React"],
        github: "https://github.com/tunombre/proyecto2",
        live: "https://proyecto2.vercel.app",
        icon: "robot",
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
        status: 'en progreso',
    },
    {
        emoji:  '🌐',
        text:   'Inglés',
        detail: 'American School Way',
        status: 'en progreso',
    },
    {
        emoji:  '🤖',
        text:   'Google Generative AI Leader',
        detail: 'Google Academy',
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
