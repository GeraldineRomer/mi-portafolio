import { motion } from 'framer-motion'
import { personalInfo, stats } from '../data/portfolioData'
import SocialLinks from './ui/SocialLinks'
import StatCard from './ui/StatCard'

// ─── Animación al hacer scroll ────────────────────────────────────────────────
const fadeUp = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function About() {
    return (
        <section
            id="sobre-mi"
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
                        // 01. sobre_mí
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#B14EFF]/30 to-transparent" />
                </motion.div>
                {/* Contenido principal */}
                <div className="grid grid-cols-2 gap-16 items-start">
                    {/* ── Columna izquierda: foto + bio ── */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col gap-8"
                    >
                        {/* <ProfilePhoto /> */}
                        {/* Bio */}
                        <div className="flex flex-col gap-4">
                            <div>
                                <h2 className="text-4xl font-semibold text-white mb-1">
                                    {personalInfo.name}
                                </h2>
                                <p className="font-mono text-sm text-[#B14EFF]">
                                    Ing. Sistemas · Junior Dev
                                </p>
                            </div>
                            <p className="text-[15px] text-[#8888aa] leading-7 whitespace-pre-line">
                                {personalInfo.bio}
                            </p>
                            {/* Detalle extra con comentario de código */}
                            <p className="font-mono text-sm text-[#8888aa]/50 leading-relaxed border-l-2 border-[#B14EFF]/30 pl-4">
                                // Actualmente explorando IA, datos y cómo
                                <br />
                                // construir productos que resuelvan problemas reales.
                            </p>
                        </div>
                        <SocialLinks />
                    </motion.div>
                    {/* ── Columna derecha: stats + stack ── */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ delay: 0.15 }}
                        className="flex flex-col gap-6"
                    >
                        {/* Contadores */}
                        <div className="grid grid-cols-3 gap-4">
                            {stats.map((stat) => (
                                <StatCard
                                key={stat.label}
                                number={stat.number}
                                label={stat.label}
                                />
                            ))}
                        </div>
                        {/* Card de stack */}
                        <div className="bg-[#13131f] border border-[#B14EFF]/15 rounded-xl p-5">
                            <p className="font-mono text-[15px] text-[#B14EFF]/70 mb-4">// stack actual</p>
                            <div className="flex flex-wrap gap-2">
                                {['React', 'JavaScript', 'Python', 'SQL', 'Tailwind', 'AI / APIs', 'Git'].map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-sm px-3 py-1 rounded-full border border-[#B14EFF]/25 text-[#B14EFF] bg-[#B14EFF]/06 hover:bg-[#B14EFF]/15 transition-colors duration-200 cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {/* Card de valores */}
                        <div className="bg-[#13131f] border border-[#B14EFF]/15 rounded-xl p-5">
                            <p className="font-mono text-[15px] text-[#B14EFF]/70 mb-4">// lo que me mueve</p>
                            <div className="flex flex-col gap-3">
                                {[
                                    { emoji: '🧠', text: 'Aprendizaje continuo como estilo de vida'    },
                                    { emoji: '🔍', text: 'Curiosidad ante cada problema nuevo'          },
                                    { emoji: '📊', text: 'Decisiones basadas en datos, no suposiciones' },
                                    { emoji: '🤝', text: 'Colaboración y trabajo en equipo'             },
                                ].map(({ emoji, text }) => (
                                    <div key={text} className="flex items-center gap-3">
                                        <span className="text-base">{emoji}</span>
                                        <span className="text-sm text-[#8888aa]">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Separador inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B14EFF]/20 to-transparent" />
        </section>
    )
}
