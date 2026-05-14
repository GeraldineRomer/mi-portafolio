import { useEffect, useState } from "react"

// ─── Datos ────────────────────────────────────────────────────────────────────
const roles = [
    'Web Developer',
    'Data Analyst',
    'AI Enthusiast',
]

// ─── Subcomponente: rol con efecto typewriter ─────────────────────────────────
export default function TypewriterRole() {
    const [index,   setIndex]   = useState(0)
    const [display, setDisplay] = useState('')
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const current = roles[index]
        let timeout

        if (!deleting && display.length < current.length) {
            // Escribiendo
            timeout = setTimeout(() => {
                setDisplay(current.slice(0, display.length + 1))
            }, 80)
        } else if (!deleting && display.length === current.length) {
            // Pausa antes de borrar
            timeout = setTimeout(() => setDeleting(true), 1800)
        } else if (deleting && display.length > 0) {
            // Borrando
            timeout = setTimeout(() => {
            setDisplay(current.slice(0, display.length - 1))
        }, 45)
        } else if (deleting && display.length === 0) {
            // Siguiente rol
            setDeleting(false)
            setIndex((prev) => (prev + 1) % roles.length)
        }

        return () => clearTimeout(timeout)
    }, [display, deleting, index])

    return (
        <span className="text-[#B14EFF] font-mono">
            {display}
            <span className="animate-pulse">|</span>
        </span>
    )
}
