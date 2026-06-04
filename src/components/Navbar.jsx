import { useState, useEffect } from "react"
import { personalInfo } from "../data/portfolioData"
import NavLink from "./ui/NavLink"
import CVButton from "./ui/CVButton"

// Datos del navbar
const navLinks = [
    {label: "inicio", href: "#inicio"},
    {label: "sobre mí", href: "#sobre-mi"},
    {label: "skills", href: "#skills"},
    {label: "IA", href: "#ia"},
    {label: "proyectos", href: "#proyectos"},
    {label: "contacto", href: "#contacto"},
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [activeLink, setActiveLink] = useState("inicio")

    // Glassmorphism al hacer scroll, se queda estático después de 50px
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Detectar sección activa según scroll
    useEffect(() => {
        const sections = navLinks.map((link) => ({
            id: link.href.replace("#", ""),
            label: link.label,
        }))

        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3

            sections.forEach((section) => {
                const element = document.getElementById(section.id)
                
                if (element) {
                    const offsetTop = element.offsetTop
                    const offsetHeight = element.offsetHeight

                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveLink(section.label)
                    }
                }
            })
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Nombre formateado como logo: geraldine_romero.dev
    const logoText = personalInfo.name
        .toLowerCase()
        .replace(' ', '_') + '.dev'

    return (
        <nav
            className={`
                fixed top-0 left-0 right-0 z-50
                flex items-center justify-between
                px-8 py-3.5
                transition-all duration-300
                ${
                    scrolled
                        ? 'bg-[#0d0d14]/85 backdrop-blur-md border-b border-[#B14EFF]/15'
                        : 'bg-transparent border-b border-transparent'
                }
            `}
        >
            {/* Logo */}
            <a
                href="#inicio"
                className="font-mono text-xl font-medium text-[#B14EFF] tracking-wide"
            >
                {logoText}
            </a>

            {/* Links */}
            <ul className="flex items-center gap-7 list-none">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.href}
                        label={link.label}
                        href={link.href}
                        isActive={activeLink === link.label}
                        onClick={() => setActiveLink(link.label)}
                    />
                ))}
            </ul>

            {/* Botón CV */}
            <CVButton />
        </nav>
    )
}
