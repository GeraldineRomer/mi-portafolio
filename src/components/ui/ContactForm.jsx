import { useState } from "react"
import FormField from "./FormField"
import { IconCheck, IconLoader2, IconSend } from "@tabler/icons-react"

// ─── Subcomponente: formulario ────────────────────────────────────────────────
export default function ContactForm() {
    const [form, setForm]     = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle') // idle | sending | sent | error

    const handleChange = (field) => (e) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }))
    }

    const handleSubmit = async () => {
        // Validación básica
        if (!form.name || !form.email || !form.message) return

        setStatus('sending')

        // Simula envío — aquí conectarás EmailJS más adelante
        await new Promise((res) => setTimeout(res, 1500))
        setStatus('sent')

        // Reset después de 3 segundos
        setTimeout(() => {
        setForm({ name: '', email: '', message: '' })
        setStatus('idle')
        }, 3000)
    }

    return (
        <div className="bg-[#13131f] border border-[#B14EFF]/15 rounded-xl p-6 flex flex-col gap-5">
        <p className="font-mono text-[15px] text-[#B14EFF]/70">// envíame un mensaje</p>

        <FormField
            label="// nombre"
            id="name"
            placeholder="Tu nombre"
            value={form.name}
            onChange={handleChange('name')}
        />
        <FormField
            label="// email"
            id="email"
            type="email"
            placeholder="tuemail@gmail.com"
            value={form.email}
            onChange={handleChange('email')}
        />
        <FormField
            label="// mensaje"
            id="message"
            placeholder="Cuéntame sobre tu proyecto o propuesta..."
            value={form.message}
            onChange={handleChange('message')}
            multiline
        />

        {/* Botón enviar */}
        <button
            onClick={handleSubmit}
            disabled={status === 'sending' || status === 'sent'}
            className={`
                w-full flex items-center justify-center gap-2
                font-medium text-sm py-3 rounded-lg
                transition-all duration-200
                ${status === 'sent'
                    ? 'bg-green-500/20 border border-green-500/40 text-green-400 cursor-default'
                    : status === 'sending'
                    ? 'bg-[#B14EFF]/30 border border-[#B14EFF]/30 text-white/50 cursor-wait'
                    : 'bg-[#B14EFF] hover:bg-[#7C3AED] text-white cursor-pointer'
                }
            `}
        >
            {status === 'sent' ? (
                <><IconCheck size={20} /> ¡Mensaje enviado!</>
                ) : status === 'sending' ? (
                <><IconLoader2 size={20} className="animate-spin" /> Enviando...</>
                ) : (
                <><IconSend size={20} /> Enviar mensaje</>
            )}
        </button>

        </div>
    )
}
