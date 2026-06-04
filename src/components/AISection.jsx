import { motion } from 'framer-motion'
import ChatBox from './ui/ChatBox'

// ─── Animación ────────────────────────────────────────────────────────────────
const fadeUp = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// ─── Preguntas sugeridas ──────────────────────────────────────────────────────
const suggestions = [
    '¿Cuál es tu stack principal?',
    '¿Qué proyectos has hecho?',
    '¿Estás disponible para trabajar?',
    '¿Qué estás aprendiendo ahora?',
]

export default function AISection() {
    return (
        <section
            id="ia"
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
                        // 03. AI integration
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#B14EFF]/30 to-transparent" />
                </motion.div>

                <div className="grid grid-cols-2 gap-16 items-start">
                    {/* ── Columna izquierda: info ── */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col gap-6"
                    >
                        <div className="flex flex-col gap-3">
                            <h2 className="text-2xl font-semibold text-white">
                                Pregúntame lo que quieras
                            </h2>
                            <p className="text-sm text-[#8888aa] leading-relaxed">
                                Este asistente conoce mi stack, proyectos y disponibilidad.
                                Está construido con <span className="text-[#B14EFF]">Gemini 2.0 Flash</span> e
                                integrado directamente en mi portafolio.
                            </p>
                            <p className="font-mono text-sm text-[#B14EFF]/50 border-l-2 border-[#B14EFF]/30 pl-4">
                                // así es como integro IA en proyectos reales
                            </p>
                        </div>

                        {/* Herramientas IA */}
                        <div className="bg-[#13131f] border border-[#B14EFF]/15 rounded-xl p-5">
                        <p className="font-mono text-[15px] text-[#B14EFF]/70 mb-4">// herramientas que uso</p>
                            <div className="flex flex-wrap gap-2">
                                {['Gemini API', 'Claude API', 'LangChain', 'HuggingFace', 'scikit-learn', 'Pandas'].map((tool) => (
                                    <span
                                        key={tool}
                                        className="text-sm px-3 py-1 rounded-full border border-[#B14EFF]/25 text-[#B14EFF] bg-[#B14EFF]/06 hover:bg-[#B14EFF]/15 transition-colors duration-200 cursor-default"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Preguntas sugeridas */}
                        <div className="flex flex-col gap-2">
                            <p className="font-mono text-[15px] text-[#B14EFF]/70">// preguntas sugeridas</p>
                            {suggestions.map((s) => (
                                <button
                                    key={s}
                                    onClick={() => document.querySelector('#chat-input')?.focus()}
                                    className="text-left text-sm text-[#8888aa] border border-[#B14EFF]/10 hover:border-[#B14EFF]/35 hover:text-white bg-[#13131f] rounded-lg px-4 py-2.5 transition-all duration-200"
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Columna derecha: chatbot ── */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ delay: 0.15 }}
                    >
                        <ChatBox />
                    </motion.div>

                </div>
            </div>

            {/* Separador inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B14EFF]/20 to-transparent" />
        </section>
    )
}
