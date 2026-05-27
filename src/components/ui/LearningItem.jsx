import { motion } from 'framer-motion'
import StatusBadge from './StatusBadge'

// ─── Subcomponente: ítem de aprendizaje ───────────────────────────────────────
export default function LearningItem({ item, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`
                flex items-center gap-4 py-4 px-1
                ${index !== 0 ? 'border-t border-[#B14EFF]/08' : ''}
            `}
        >
            {/* Ícono */}
            <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg bg-[#B14EFF]/10 border border-[#B14EFF]/20">
                <span className="text-base">{item.emoji}</span>
            </div>

            {/* Texto */}
            <div className="flex flex-col gap-0.5 flex-1">
                <span className="text-sm text-white/80 font-medium">{item.text}</span>
                {item.detail && (
                    <span className="text-sm text-[#8888aa]">{item.detail}</span>
                )}
            </div>

            {/* Estado */}
            <StatusBadge status={item.status} />
        </motion.div>
    )
}
