import { IconBrandGithub, IconBrandLinkedin, IconHeart } from "@tabler/icons-react"
import { personalInfo } from "../data/portfolioData"
import SocialIcon from "./ui/SocialIcon"
import FooterNavLink from "./ui/FooterNavLink"

export default function Footer() {
    const logoText = personalInfo.name
        .toLowerCase()
        .replace(' ', '_') + '.dev'

    const navLinks = [
        { label: 'inicio',      href: '#inicio'      },
        { label: 'sobre mí',    href: '#sobre-mi'    },
        { label: 'skills',      href: '#skills'      },
        { label: 'proyectos',   href: '#proyectos'   },
        { label: 'IA',          href: '#ia'          },
        { label: 'contacto',    href: '#contacto'    },
    ]

    return (
        <footer className="relative border-t border-[#B14EFF]/10 bg-[#0d0d14]">

            {/* Gradiente superior decorativo */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B14EFF]/20 to-transparent" />
            <div className="max-w-6xl mx-auto px-8 py-10">
                {/* Fila principal */}
                <div className="flex items-start justify-between gap-8 mb-8">
                    {/* ── Logo + descripción ── */}
                    <div className="flex flex-col gap-3">
                        <a
                            href="#inicio"
                            className="font-mono text-sm font-medium text-[#B14EFF]"
                        >
                            {logoText}
                        </a>
                        <p className="text-sm text-[#8888aa]/60 leading-relaxed max-w-56">
                            {personalInfo.banner1}<br />
                            {personalInfo.banner2}
                        </p>
                    </div>

                    {/* ── Navegación ── */}
                    <div className="flex flex-col gap-3">
                        <p className="font-mono text-[15px] text-[#B14EFF]/70">// navegación</p>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                            {navLinks.map((link) => (
                                <FooterNavLink
                                    key={link.href}
                                    label={link.label}
                                    href={link.href}
                                />
                            ))}
                        </div>
                    </div>

                    {/* ── Contacto ── */}
                    <div className="flex flex-col gap-3">
                        <p className="font-mono text-[15px] text-[#B14EFF]/70">// contacto</p>
                        <div className="flex flex-col gap-2">
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="font-mono text-sm text-[#8888aa]/60 hover:text-[#B14EFF] transition-colors duration-200"
                            >
                                {personalInfo.email}
                            </a>
                            <div className="flex gap-2 mt-1">
                                <SocialIcon
                                    icon={<IconBrandGithub size={20} />}
                                    href={personalInfo.github}
                                    label="GitHub"
                                />
                                <SocialIcon
                                    icon={<IconBrandLinkedin size={20} />}
                                    href={personalInfo.linkedin}
                                    label="LinkedIn"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divisor */}
                <div className="h-px bg-gradient-to-r from-transparent via-[#B14EFF]/15 to-transparent mb-6" />
                {/* Fila inferior */}
                <div className="flex items-center justify-between">
                    <p className="font-mono text-[15px] text-[#8888aa]/40">
                        // made with <IconHeart size={15} className="inline text-[#B14EFF] mx-0.5" /> and curiosity · {new Date().getFullYear()}
                    </p>
                    <p className="font-mono text-[15px] text-[#8888aa]/40">
                        {logoText}
                    </p>
                </div>

            </div>
        </footer>
    )
}
