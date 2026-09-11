import { useState } from "react"
import FormField from "./FormField" 
import emailjs from '@emailjs/browser'
import { IconCheck, IconLoader2, IconSend, IconAlertCircle } from "@tabler/icons-react"

export default function ContactForm() {
    const [form, setForm]     = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle') // idle | sending | sent | error

    const handleChange = (field) => (e) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }))
        if (status === 'error') setStatus('idle')
    }

    const handleSubmit = async (e) => {
        e.preventDefault() 

        if (!form.name || !form.email || !form.message) {
            setStatus('error')
            return
        }

        setStatus('sending')

        try {
            // Conexión real con EmailJS
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: form.name,
                    email: form.email,
                    message: form.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            
            setStatus('sent')
            
            setTimeout(() => {
                setForm({ name: '', email: '', message: '' })
                setStatus('idle')
            }, 3000)
            
        } catch (error) {
            console.error('Error enviando el mensaje:', error)
            setStatus('error')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-[#13131f] border border-[#B14EFF]/15 rounded-xl p-6 flex flex-col gap-5">
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

            {status === 'error' && (
                <span className="text-red-400 text-sm flex items-center gap-2">
                    <IconAlertCircle size={16} /> Hubo un error. Verifica los campos o intenta más tarde.
                </span>
            )}

            <button
                type="submit"
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
        </form>
    )
}
