// ─── Subcomponente: indicador de estado ───────────────────────────────────────
export default function StatusBadge({ status }) {
    return (
        <div className="flex items-center gap-1.5 flex-shrink-0">
        <div className="w-1.5 h-1.5 rounded-full bg-[#B14EFF] animate-pulse" />
        <span className="font-mono text-[15px] text-[#B14EFF]">{status}</span>
        </div>
    )
}
