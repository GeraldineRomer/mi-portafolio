import { motion } from 'framer-motion'
import { timeline } from '../data/portfolioData'
import TimelineColumn from './ui/TimelineColumn'
import TimelineLegend from './ui/TimelineLegend'

// ─── Animación ────────────────────────────────────────────────────────────────
const fadeUp = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Timeline() {
    const formal   = timeline.filter((i) => i.type === 'formal')
    const informal = timeline.filter((i) => i.type === 'informal')
    const work     = timeline.filter((i) => i.type === 'work')
    
    return (
        <section
            id="experiencia"
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
                        // 04. experiencia & educación
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#B14EFF]/30 to-transparent" />
                </motion.div>

                {/* Columnas */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-6"
                >
                    {/* Columna izquierda: formal + informal */}
                    <div className="flex flex-col gap-6">
                        <TimelineColumn
                            title="// educación formal"
                            items={formal}
                        />
                        <TimelineColumn
                            title="// cursos & certificaciones"
                            items={informal}
                        />
                    </div>

                    {/* Columna derecha: experiencia */}
                    <TimelineColumn
                        title="// experiencia"
                        items={work.length > 0 ? work : [{
                            year:        '2025 — present',
                            title:       'Proyectos propios & freelance',
                            description: 'Desarrollo web, análisis de datos e integración de IA en proyectos personales.',
                            type:        'work',
                        }]}
                    />
                </motion.div>
                {/* Leyenda */}
                <TimelineLegend />
            </div>
            {/* Separador inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B14EFF]/20 to-transparent" />
        </section>
    )
}
