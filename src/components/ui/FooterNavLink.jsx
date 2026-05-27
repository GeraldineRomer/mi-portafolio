// ─── Subcomponente: link de navegación ───────────────────────────────────────
export default function FooterNavLink({ label, href }) {
    return (
        <a
            href={href}
            className="font-mono text-sm text-[#8888aa]/60 hover:text-[#B14EFF] transition-colors duration-200"
        >
            {label}
        </a>
    )
}
