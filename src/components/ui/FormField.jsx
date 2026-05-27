// ─── Subcomponente: campo del formulario ──────────────────────────────────────
export default function FormField({ label, id, type = 'text', placeholder, value, onChange, multiline }) {
    const baseClass = `
        w-full bg-[#0d0d14] border border-[#B14EFF]/15
        focus:border-[#B14EFF]/60 focus:outline-none
        rounded-lg px-4 py-3 text-sm text-white/80
        placeholder:text-[#8888aa]/40 font-body
        transition-colors duration-200
    `

    return (
        <div className="flex flex-col gap-1.5">
            <label
                htmlFor={id}
                className="font-mono text-[10px] text-[#B14EFF]/70"
            >
                {label}
            </label>
            {multiline ? (
                <textarea
                id={id}
                rows={5}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`${baseClass} resize-none`}
                />
            ) : (
                <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={baseClass}
                />
            )}
        </div>
    )
}
