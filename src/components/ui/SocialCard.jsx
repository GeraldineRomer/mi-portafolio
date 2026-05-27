import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react"

// ─── Mapa de íconos por label ─────────────────────────────────────────────────
const iconMap = {
    GitHub:   <IconBrandGithub size={25} />,
    LinkedIn: <IconBrandLinkedin size={25} />,
    Email:    <IconMail size={25} />,
}

// ─── Subcomponente: card de red social ────────────────────────────────────────
export default function SocialCard({ label, href, user }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-[#13131f] border border-[#B14EFF]/15 hover:border-[#B14EFF]/50 rounded-xl p-4 transition-all duration-200 group"
        >
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#B14EFF]/10 border border-[#B14EFF]/20 text-[#8888aa] group-hover:text-[#B14EFF] transition-colors duration-200">
                {iconMap[label]}
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-medium text-white/80">{label}</span>
                <span className="font-mono text-[12px] text-[#8888aa]">{user}</span>
            </div>
        </a>
    )
}
