import { motion } from 'framer-motion'

// ─── Subcomponente: leyenda ───────────────────────────────────────────────────

// ─── Animación ────────────────────────────────────────────────────────────────
const fadeUp = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function TimelineLegend() {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-6 mt-6"
        >
            <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#B14EFF] shadow-[0_0_8px_rgba(177,78,255,0.6)]" />
                <span className="font-mono text-[12px] text-[#8888aa]/60">Educación formal</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full border-2 border-[#B14EFF]" />
                <span className="font-mono text-[12px] text-[#8888aa]/60">Educación informal · Cursos · Certificaciones</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full border-5 border-[#B14EFF]" />
                <span className="font-mono text-[12px] text-[#8888aa]/60">Experiencia</span>
            </div>
        </motion.div>
    )
}
