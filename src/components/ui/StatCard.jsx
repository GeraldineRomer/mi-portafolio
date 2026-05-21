// ─── Subcomponente: contador animado ──────────────────────────────────────────
export default function StatCard({ number, label }) {
    return (
        <div className="bg-[#B14EFF]/06 border border-[#B14EFF]/20 rounded-xl p-4 text-center">
        <div className="font-mono text-2xl font-medium text-[#B14EFF]">{number}</div>
        <div className="text-[10px] text-[#8888aa] mt-1">{label}</div>
        </div>
    )
}
