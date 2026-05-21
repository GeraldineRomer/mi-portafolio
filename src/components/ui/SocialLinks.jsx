import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react"
import { personalInfo } from "../../data/portfolioData"

// ─── Subcomponente: redes sociales ────────────────────────────────────────────
export default function SocialLinks() {
    const links = [
        { icon: <IconBrandGithub size={30} />,   href: personalInfo.github,   label: 'GitHub'   },
        { icon: <IconBrandLinkedin size={30} />, href: personalInfo.linkedin, label: 'LinkedIn' },
        { icon: <IconMail size={30} />,          href: `mailto:${personalInfo.email}`, label: 'Email' },
    ]

    return (
        <div className="flex gap-3">
            {links.map(({ icon, href, label }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-12 h-12 flex items-center justify-center rounded-lg border border-[#B14EFF]/20 bg-[#B14EFF]/05 text-[#8888aa] hover:text-[#B14EFF] hover:border-[#B14EFF]/50 transition-all duration-200"
                >
                    {icon}
                </a>
            ))}
        </div>
    )
}
