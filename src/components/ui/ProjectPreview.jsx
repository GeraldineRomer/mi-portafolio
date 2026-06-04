import { IconEye } from "@tabler/icons-react"

// ─── Subcomponente: preview del proyecto ─────────────────────────────────────
export default function ProjectPreview({ screenshot, title }) {
    if (screenshot) {
        return (
            <img
                src={screenshot}
                alt={`Preview de ${title}`}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
        )
    }

  // Placeholder cuando no hay screenshot
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#B14EFF]/10 border border-[#B14EFF]/20">
                <IconEye size={22} className="text-[#B14EFF]/40" />
            </div>
            <span className="font-mono text-[12px] text-[#8888aa]/40">// screenshot próximamente</span>
        </div>
    )
}
