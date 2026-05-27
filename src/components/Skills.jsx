import { motion } from 'framer-motion'
import SkillCard from './ui/SkillCard'
import LevelLegend from './ui/LevelLegend'

// ─── Animación ────────────────────────────────────────────────────────────────
const fadeUp = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const categories = [
    { key: 'frontend', label: '// frontend'  },
    { key: 'data',     label: '// data & AI' },
]

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative px-8 py-24"
        >
            {/* Separador superior */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B14EFF]/20 to-transparent" />
            <div className="max-w-6xl mx-auto">
                {/* Encabezado de sección */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-14"
                >
                    <span className="font-mono text-[18px] text-[#B14EFF] tracking-widest">
                        // 02. skills &amp; stack
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#B14EFF]/30 to-transparent" />
                </motion.div>
                {/* Cards de categorías */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-6"
                >
                    {categories.map((cat) => (
                        <SkillCard key={cat.key} category={cat} />
                    ))}
                </motion.div>

                {/* Leyenda */}
                <LevelLegend />

            </div>

            {/* Separador inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B14EFF]/20 to-transparent" />
        </section>
    )
}
