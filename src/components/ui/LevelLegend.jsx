import { motion } from 'framer-motion'

// ─── Subcomponente: leyenda de niveles ────────────────────────────────────────

// ─── Animación ────────────────────────────────────────────────────────────────
const fadeUp = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function LevelLegend() {
    const descriptions = [
        { label: 'Básico',      desc: 'conozco los fundamentos'           },
        { label: 'Intermedio',  desc: 'Puedo trabajar de forma autónoma'  },
        { label: 'Avanzado',    desc: 'Manejo conceptos complejos'        },
        { label: 'Experto',     desc: 'Dominio profundo y experiencia'    },
    ]

    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 bg-[#13131f] border border-[#B14EFF]/15 rounded-xl p-5"
        >
            <p className="font-mono text-[15px] text-[#B14EFF]/70 mb-4">// leyenda de niveles</p>
            <div className="grid grid-cols-4 gap-4">
                {descriptions.map(({ label, desc }) => (
                    <div key={label} className="flex flex-col gap-1.5">
                        <span className="font-mono text-[15px] text-[#B14EFF]">{label}</span>
                        <span className="text-[12px] text-[#8888aa]/60 leading-relaxed">{desc}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}
