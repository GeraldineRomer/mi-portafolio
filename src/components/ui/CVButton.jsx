export default function CVButton() {
    return (
        <button
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="
                font-mono text-xs font-medium
                text-[#B14EFF] border border-[#B14EFF]/40
                bg-[#B14EFF]/5 hover:bg-[#B14EFF]/15
                rounded-md px-4 py-1.5
                transition-colors duration-200
            "
        >
        </button>
    )
}
