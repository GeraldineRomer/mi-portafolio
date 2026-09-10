import { motion } from 'framer-motion'
import SocialCard from './ui/SocialCard'
import { personalInfo } from '../data/portfolioData'
import ContactForm from './ui/ContactForm'

// ─── Animación ────────────────────────────────────────────────────────────────
const fadeUp = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Contact() {
    return (
        <section
            id="contacto"
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
                        // 07. contacto
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#B14EFF]/30 to-transparent" />
                </motion.div>

                <div className="grid grid-cols-2 gap-16 items-start">

                {/* ── Columna izquierda ── */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col gap-8"
                >
                    {/* Texto */}
                    <div className="flex flex-col gap-3">
                    <h2 className="text-2xl font-semibold text-white">
                        ¿Trabajamos juntos?
                    </h2>
                    <p className="text-sm text-[#8888aa] leading-relaxed">
                        Estoy disponible para proyectos freelance, colaboraciones y
                        oportunidades laborales. Si tienes algo en mente, escríbeme —
                        me encanta conocer nuevas ideas.
                    </p>
                    <p className="font-mono text-[13px] text-[#B14EFF]/50 border-l-2 border-[#B14EFF]/30 pl-4">
                        // tiempo de respuesta promedio: 24 horas
                    </p>
                    </div>

                    {/* Redes sociales */}
                    <div className="flex flex-col gap-3">
                        <p className="font-mono text-[15px] text-[#B14EFF]/70">// encuéntrame en</p>
                        {personalInfo.socials.map((link) => (
                            <SocialCard key={link.label} {...link} />
                        ))}
                    </div>
                </motion.div>

                {/* ── Columna derecha: formulario ── */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: 0.15 }}
                >
                    <ContactForm />
                </motion.div>

                </div>
            </div>

            {/* Separador inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B14EFF]/20 to-transparent" />
        </section>
    )
}
