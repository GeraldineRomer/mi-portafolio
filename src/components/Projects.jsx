import { motion } from 'framer-motion'
import { projects } from '../data/portfolioData'
import ProjectCard from './ui/ProjectCard'
import EmptyState from './ui/EmptyState'

// ─── Animación ────────────────────────────────────────────────────────────────
const fadeUp = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Projects() {
    const hasProjects = projects.length > 0
    return (
        <section
            id="proyectos"
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
                        // 04. proyectos
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#B14EFF]/30 to-transparent" />
                </motion.div>

                {/* Grid de proyectos */}
                <div className="grid grid-cols-2 gap-6">
                {hasProjects
                    ? projects.map((project, i) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={i}
                        />
                    ))
                    : <EmptyState />
                }
                </div>

                {/* Nota al pie */}
                <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="font-mono text-[15px] text-[#8888aa]/40 text-center mt-10"
                >
                    // más proyectos en{' '}
                    <a
                        href="https://github.com/GeraldineRomer"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#B14EFF]/60 hover:text-[#B14EFF] transition-colors duration-200"
                    >
                        github.com/GeraldineRomer
                    </a>
                </motion.p>

            </div>

            {/* Separador inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B14EFF]/20 to-transparent" />
        </section>
    )
}
