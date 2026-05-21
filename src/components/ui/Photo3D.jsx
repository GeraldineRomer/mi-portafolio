import { useState } from "react"
import { motion } from 'framer-motion'

// ─── Subcomponente: foto 3D ───────────────────────────────────────────────────
export default function Photo3D() {
    const [tilt, setTilt] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientY - rect.top)  / rect.height - 0.5) * 20
        const y = ((e.clientX - rect.left) / rect.width  - 0.5) * -20
        setTilt({ x, y })
    }

    const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-52 h-52 mx-auto cursor-pointer"
            style={{ perspective: '600px' }}
        >
        {/* Anillo exterior giratorio */}
        <div
            className="absolute inset-0 rounded-full border border-[#B14EFF]/20 animate-spin"
            style={{ animationDuration: '10s' }}
        />
        {/* Anillo medio */}
        <div
            className="absolute inset-2 rounded-full border border-dashed border-[#B14EFF]/15 animate-spin"
            style={{ animationDuration: '15s', animationDirection: 'reverse' }}
        />

        {/* Foto con efecto 3D */}
        <motion.div
            animate={{
                rotateX: tilt.x,
                rotateY: tilt.y,
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="absolute inset-4 rounded-full overflow-hidden border-2 border-[#B14EFF]/40"
            style={{
                background: 'linear-gradient(135deg, rgba(177,78,255,0.15), rgba(124,58,237,0.1))',
                boxShadow: '0 0 30px rgba(177,78,255,0.2), inset 0 0 30px rgba(177,78,255,0.05)',
            }}
        >
            {/* Reemplaza este div con tu <img> cuando tengas la foto */}
            <div className="w-full h-full flex items-center justify-center">
            <span className="font-mono text-[#B14EFF]/50 text-xs">// tu foto</span>
            </div>
        </motion.div>

        {/* Badge de disponibilidad */}
        <div className="absolute -bottom-1 -right-1 flex items-center gap-1.5 bg-[#13131f] border border-[#B14EFF]/25 rounded-full px-2.5 py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-[15px] text-[#8888aa]">disponible</span>
        </div>
        </div>
    )
}
