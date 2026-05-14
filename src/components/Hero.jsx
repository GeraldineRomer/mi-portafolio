import { motion } from 'framer-motion'
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconFolder,
    IconMail,
    IconCircle,
} from '@tabler/icons-react'
import { personalInfo } from '../data/portfolioData'
import GridBackground from './ui/GridBackground'
import TypewriterRole from './ui/TypeWriterRole'
import RightPanel from './ui/RightPanel'

export default function Hero() {
    return (
        <section
            id="inicio"
            className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        >
            <GridBackground />
            <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-6">
                {/* ── Columna izquierda ── */}
                <div className="flex flex-col gap-5">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center justify-center font-mono text-[15px] leading-none text-[#B14EFF] border border-[#B14EFF]/35 bg-[#B14EFF]/08 px-6 py-3 rounded-full">
                            // always learning
                        </span>
                    </motion.div>
                    {/* Saludo + nombre */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-col gap-1"
                    >
                        <span className="font-mono text-sm text-[#8888aa]">hola, soy</span>
                        <h1 className="text-4xl font-semibold text-white tracking-tight">
                            {personalInfo.name}
                        </h1>
                    </motion.div>
                    {/* Línea acento */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 40 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-0.5 bg-[#B14EFF] rounded-full"
                    />
                    {/* Banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col gap-1"
                    >
                        <p className="text-2xl font-medium text-white/55 leading-snug">
                            {personalInfo.banner1}
                        </p>
                        <p className="text-2xl font-medium text-[#B14EFF] leading-snug">
                            {personalInfo.banner2}
                        </p>
                    </motion.div>
                    {/* Typewriter */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="font-mono text-sm text-[#8888aa]"
                    >
                        <TypewriterRole />
                    </motion.div>
                    {/* Botones CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex gap-3 flex-wrap"
                    >
                        <a
                            href="#proyectos"
                            className="inline-flex items-center gap-2 bg-[#B14EFF] hover:bg-[#7C3AED] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors duration-200"
                        >
                            <IconFolder size={16} />
                            Ver proyectos
                        </a>
                        <a
                            href="#contacto"
                            className="inline-flex items-center gap-2 border border-[#B14EFF]/40 text-white/60 hover:text-white hover:border-[#B14EFF]/70 text-sm px-5 py-2.5 rounded-lg transition-colors duration-200"
                        >
                            <IconMail size={16} />
                            Contactar
                        </a>
                    </motion.div>
                    {/* Redes sociales */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex items-center gap-4 pt-1"
                    >
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#8888aa] hover:text-[#B14EFF] transition-colors duration-200"
                        >
                            <IconBrandGithub size={20} />
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noreferrer"
                        className="text-[#8888aa] hover:text-[#B14EFF] transition-colors duration-200"
                        >
                            <IconBrandLinkedin size={20} />
                        </a>
                        {/* Línea separadora */}
                        <div className="w-px h-4 bg-[#8888aa]/30" />
                        <span className="font-mono text-[10px] text-[#8888aa]/50">
                            {personalInfo.email}
                        </span>
                    </motion.div>
                </div>
                {/* ── Columna derecha ── */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <RightPanel />
                </motion.div>
            </div>
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="font-mono text-[10px] text-[#8888aa]/40">scroll</span>
                <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                        <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-[#B14EFF]/30 animate-pulse"
                        style={{ animationDelay: `${i * 0.3}s` }}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
