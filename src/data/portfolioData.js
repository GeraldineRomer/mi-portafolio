export const personalInfo = {
    name: "Geraldine Romero",
    role: "Web Developer · Data Analyst · AI Enthusiast",
    banner1: "La web es mi lienzo,",
    banner2: "los datos mi lenguaje.",
    bio: "Soy Geraldine, ingeniera de sistemas recién graduada con mucha curiosidad. Me apasiona el desarrollo web y el análisis de datos, y últimamente no puedo dejar de explorar cómo la inteligencia artificial puede hacer que todo sea más interesante.\nEstoy buscando mi primera oportunidad en la industria del software, ese lugar donde pueda aprender rápido, aportar desde el primer día y crecer junto a un equipo.\nFuera del código, soy creadora de contenido sobre reseñas de libros, estoy aprendiendo a bailar ritmos argentinos y a tocar el piano — porque aparentemente una pantalla no es suficiente para mí.",
    email: "tuemail@gmail.com", //pendiente crear correo freelancer
    github: "https://github.com/GeraldineRomer", 
    linkedin: "https://www.linkedin.com/in/geraldine-romero-47476b257/",
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
        description: "Universidad Autónoma de Manizales · énfasis en desarrollo web y datos",
        type: "formal",
    },
    {
        year: "2026",
        title: "Fundamentos de la nube AWS",
        description: "Nequi",
        type: "informal",
        badge: "certificación",
    },
    {
        year: "2026",
        title: "Inglés",
        description: "Aprendizaje activo · en progreso",
        type: "formal",
        badge: "en curso",
    },
]

export const learning = [
    { icon: "brain",    text: "Generative AI Leader Certification", status: "en progreso" },
    { icon: "language", text: "Inglés técnico — nivel intermedio",         status: "activo" },
    { icon: "react",    text: "AWS Cloud Practitioner",                  status: "en progreso" },
]
