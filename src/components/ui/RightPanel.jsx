import Photo3D from "./Photo3D";

const techStack = ['React', 'Python', 'JavaScript', 'SQL', 'AI']

// ─── Subcomponente: panel derecho ─────────────────────────────────────────────
export default function RightPanel() {
    return (
        <div className="flex flex-col gap-4 w-full">

        {/* Foto */}
        <Photo3D />

        {/* Card disponibilidad */}
        <div className="bg-[#13131f] border border-[#B14EFF]/15 rounded-xl p-4">
            <p className="font-mono text-[10px] text-[#B14EFF]/70 mb-3">// estado actual</p>
            <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-xs text-[#8888aa]">Disponible para proyectos</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B14EFF]" />
                <span className="text-xs text-[#8888aa]">Abierta a oportunidades</span>
            </div>
            </div>
        </div>

        {/* Card tech stack */}
        <div className="bg-[#13131f] border border-[#B14EFF]/15 rounded-xl p-4">
            <p className="font-mono text-[10px] text-[#B14EFF]/70 mb-3">// tech stack</p>
            <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
                <span
                key={tech}
                className="text-[10px] px-2.5 py-1 rounded-full border border-[#B14EFF]/25 text-[#B14EFF] bg-[#B14EFF]/06"
                >
                {tech}
                </span>
            ))}
            </div>
        </div>

        </div>
    )
}
