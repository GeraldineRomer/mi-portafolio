export default function NavLink({ label, href, isActive, onClick }) {
    return (
        <li>
            <a
                href={href}
                onClick={onClick}
                className={`
                    text-xl transition-colors duration-200 pb-0.5 border-b
                    ${isActive
                        ? 'text-[#B14EFF] border-[#B14EFF]'
                        : 'text-[#8888aa] border-transparent hover:text-white'
                    }
                `}
            >
                {label}
            </a>
        </li>
    )
}
