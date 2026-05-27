import { motion } from 'framer-motion'
import TimelineDot from './TimelineDot'

// ─── Subcomponente: ítem de timeline ──────────────────────────────────────────
export default function TimelineItem({ item, index, isLast }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex gap-4"
        >
            {/* Punto + línea vertical */}
            <div className="flex flex-col items-center">
                <TimelineDot type={item.type} />
                {!isLast && (
                    <div className="w-px flex-1 bg-gradient-to-b from-[#B14EFF]/30 to-transparent mt-1" />
                )}
            </div>

            {/* Contenido */}
            <div className={`flex flex-col gap-1 ${!isLast ? 'pb-8' : ''}`}>
                <span className="font-mono text-[12px] text-[#B14EFF]">{item.year}</span>
                <h3 className="text-sm font-medium text-white">{item.title}</h3>
                <p className="text-xs text-[#8888aa] leading-relaxed">{item.description}</p>
                {item.badge && (
                    <span className="inline-block w-fit font-mono text-[10px] text-[#B14EFF]/80 border border-[#B14EFF]/25 rounded-full px-2.5 py-0.5 mt-1">
                        {item.badge}
                    </span>
                )}
            </div>
        </motion.div>
    )
}
