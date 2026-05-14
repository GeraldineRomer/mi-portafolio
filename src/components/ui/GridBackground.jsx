// ─── Subcomponente: fondo con grid animado ────────────────────────────────────
export default function GridBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid de puntos */}
        <div
            className="absolute inset-0"
            style={{
                backgroundImage: `
                    linear-gradient(rgba(177,78,255,0.04) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(177,78,255,0.04) 1px, transparent 1px)
                `,
                backgroundSize: '28px 28px',
            }}
        />
        {/* Gradiente radial desde la izquierda */}
        <div
            className="absolute inset-0"
            style={{
            background: 'radial-gradient(ellipse 60% 60% at 20% 50%, rgba(177,78,255,0.08) 0%, transparent 70%)',
            }}
        />
        </div>
    )
}
