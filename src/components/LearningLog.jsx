import { motion } from 'framer-motion'
import LearningItem from './ui/LearningItem'
import { learning } from '../data/portfolioData'

// ─── Animación ────────────────────────────────────────────────────────────────
const fadeUp = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function LearningLog() {
    return (
        <section
            id="aprendizaje"
            className="relative px-8 py-24"
        >
            {/* Separador superior */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B14EFF]/20 to-transparent" />

            <div className="max-w-6xl mx-auto">

                {/* Encabezado */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-14"
                >
                    <span className="font-mono text-[18px] text-[#B14EFF] tracking-widest">
                        // 06. currently exploring
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#B14EFF]/30 to-transparent" />
                </motion.div>

                {/* Card principal */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-[#13131f] border border-[#B14EFF]/15 rounded-xl p-6"
                >
                    {/* Subtítulo */}
                    <div className="flex items-center justify-between mb-2">
                        <p className="font-mono text-[15px] text-[#B14EFF]/70">
                            // lo que estoy aprendiendo ahora mismo
                        </p>
                        <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            <span className="font-mono text-[15px] text-[#8888aa]/50">en curso</span>
                        </div>
                    </div>

                    {/* Lista */}
                    <div className="flex flex-col">
                        {learning.map((item, i) => (
                            <LearningItem key={item.text} item={item} index={i} />
                        ))}
                    </div>

                </motion.div>

            </div>

            {/* Separador inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B14EFF]/20 to-transparent" />
        </section>
    )
}
