// ─── Subcomponente: ícono de red social ───────────────────────────────────────
export default function SocialIcon({ icon, href, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#B14EFF]/15 bg-[#B14EFF]/05 text-[#8888aa]/60 hover:text-[#B14EFF] hover:border-[#B14EFF]/40 transition-all duration-200"
        >
            {icon}
        </a>
    )
}
