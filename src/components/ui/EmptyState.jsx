import { IconEye } from '@tabler/icons-react'
import { motion } from 'framer-motion'

// ─── Animación ────────────────────────────────────────────────────────────────
const fadeUp = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// ─── Subcomponente: estado vacío ──────────────────────────────────────────────
export default function EmptyState() {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-2 flex flex-col items-center justify-center gap-4 bg-[#13131f] border border-dashed border-[#B14EFF]/20 rounded-xl py-16"
        >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#B14EFF]/10 border border-[#B14EFF]/20">
                <IconEye size={22} className="text-[#B14EFF]/40" />
            </div>
            <div className="text-center">
                <p className="font-mono text-sm text-[#8888aa]/60">// proyectos en construcción</p>
                <p className="text-sm text-[#8888aa]/40 mt-1">Pronto habrá contenido aquí</p>
            </div>
        </motion.div>
    )
}
