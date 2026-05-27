import { motion } from 'framer-motion'

// ─── Subcomponente: fila de habilidad ─────────────────────────────────────────

const levels = ['Básico', 'Intermedio', 'Avanzado', 'Experto']

export default function SkillRow({ name, level, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="flex items-center gap-2 mb-2.5"
        >
            {/* Nombre */}
            <span className="text-sm text-[#8888aa] w-24 flex-shrink-0">{name}</span>
            {/* Bloques de nivel */}
            <div className="flex gap-2 flex-1">
                {levels.map((lvl, i) => {
                    const isFilled  = i < level - 1
                    const isCurrent = i === level - 1
                    return (
                        <div
                            key={lvl}
                            className={`
                                flex-1 h-7 rounded flex items-center justify-center
                                font-mono text-[12px] border transition-all duration-200
                                ${isCurrent
                                    ? 'bg-[#B14EFF]/30 border-[#B14EFF] text-white'
                                    : isFilled
                                    ? 'bg-[#B14EFF]/12 border-[#B14EFF]/35 text-[#B14EFF]'
                                    : 'bg-transparent border-[#B14EFF]/10 text-[#8888aa]/20'
                                }
                            `}
                        >
                            {lvl.charAt(0).toUpperCase()}
                        </div>
                    )
                })}
            </div>
        </motion.div>
    )
}
