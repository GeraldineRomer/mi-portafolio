import { motion } from 'framer-motion'
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react"
import ProjectPreview from "./ProjectPreview"

// ─── Subcomponente: card de proyecto ─────────────────────────────────────────
export default function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-[#13131f] border border-[#B14EFF]/15 hover:border-[#B14EFF]/40 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(177,78,255,0.08)] flex flex-col"
        >

            {/* Preview */}
            <div className="relative h-52 bg-[#0d0d14] overflow-hidden border-b border-[#B14EFF]/10">
                <ProjectPreview
                    screenshot={project.screenshot}
                    title={project.title}
                />
                {/* Overlay con gradiente al hacer hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#13131f] via-transparent to-transparent opacity-60" />
            </div>

            {/* Contenido */}
            <div className="flex flex-col gap-4 p-6 flex-1">

                {/* Título */}
                <div>
                    <h3 className="text-base font-medium text-white mb-2 group-hover:text-[#B14EFF] transition-colors duration-200">
                        {project.title}
                    </h3>
                    <p className="text-sm text-[#8888aa] leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-[#B14EFF]/25 text-[#B14EFF] bg-[#B14EFF]/06"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Botones — empuja hacia abajo con mt-auto */}
                <div className="flex gap-3 mt-auto pt-2">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 border border-[#B14EFF]/25 hover:border-[#B14EFF]/60 text-[#8888aa] hover:text-white text-xs font-medium py-2.5 rounded-lg transition-all duration-200"
                        >
                            <IconBrandGithub size={15} />
                            Ver código
                        </a>
                    )}
                    {project.live && (
                        <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-[#B14EFF] hover:bg-[#7C3AED] text-white text-xs font-medium py-2.5 rounded-lg transition-all duration-200"
                        >
                            <IconExternalLink size={15} />
                            Ver sitio
                        </a>
                    )}
                    {/* Si no tiene live, el botón de github ocupa todo el ancho */}
                    {project.github && !project.live && (
                        <div className="flex-1" />
                    )}
                </div>
            </div>
        </motion.div>
    )
}
