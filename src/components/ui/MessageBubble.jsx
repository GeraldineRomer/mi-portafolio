import { IconRobot, IconUser } from '@tabler/icons-react'
import { motion } from 'framer-motion'

// ─── Subcomponente: burbuja de mensaje ───────────────────────────────────────
export default function MessageBubble({ message }) {
    const isUser = message.role === 'user'

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
        >
            {/* Avatar */}
            <div className={`
                w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-lg
                ${isUser
                    ? 'bg-[#B14EFF]/20 border border-[#B14EFF]/30'
                    : 'bg-[#13131f] border border-[#B14EFF]/15'
                }
            `}>
                {isUser
                    ? <IconUser size={14} className="text-[#B14EFF]" />
                    : <IconRobot size={14} className="text-[#B14EFF]" />
                }
            </div>

            {/* Texto */}
            <div className={`
                max-w-[75%] rounded-xl px-4 py-2.5 text-sm leading-relaxed
                ${isUser
                    ? 'bg-[#B14EFF]/15 border border-[#B14EFF]/25 text-white/80 rounded-tr-none'
                    : 'bg-[#13131f] border border-[#B14EFF]/10 text-[#8888aa] rounded-tl-none'
                }
            `}>
                {message.content}
            </div>
        </motion.div>
    )
}
