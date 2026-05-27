const levels = ['Básico', 'Intermedio', 'Avanzado', 'Experto']

// ─── Subcomponente: encabezado de niveles ─────────────────────────────────────
export default function LevelHeader() {
    return (
        <div className="flex gap-2 mb-3 ml-[96px]">
        {levels.map((lvl) => (
            <div
                key={lvl}
                className="flex-1 text-center font-mono text-[12px] text-[#8888aa]/50 tracking-wide"
            >
                {lvl}
            </div>
        ))}
        </div>
    )
}
