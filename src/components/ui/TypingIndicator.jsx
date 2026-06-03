import { IconRobot } from "@tabler/icons-react";

// ─── Subcomponente: indicador de escritura ────────────────────────────────────
export default function TypingIndicator() {
    return (
        <div className="flex gap-2.5">
            <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-lg bg-[#13131f] border border-[#B14EFF]/15">
                <IconRobot size={14} className="text-[#B14EFF]" />
            </div>
            <div className="bg-[#13131f] border border-[#B14EFF]/10 rounded-xl rounded-tl-none px-4 py-3 flex gap-1.5 items-center">
                {[0, 1, 2].map((i) => (
                <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[#B14EFF]/50 animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                />
                ))}
            </div>
        </div>
    )
}
