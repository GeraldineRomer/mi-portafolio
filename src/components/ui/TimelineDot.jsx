// ─── Subcomponente: punto de la timeline ──────────────────────────────────────
export default function TimelineDot({ type }) {
    return (
        <div className="flex flex-col items-center">
            <div
                className={`
                w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1
                    ${type === 'formal'
                        ? 'bg-[#B14EFF] shadow-[0_0_8px_rgba(177,78,255,0.6)]'
                        : type === 'work'
                        ? 'bg-[#B14EFF] border-[5px] border-[#B14EFF]/40'
                        : 'bg-transparent border-2 border-[#B14EFF]'
                    }
                `}
            />
        </div>
    )
}
