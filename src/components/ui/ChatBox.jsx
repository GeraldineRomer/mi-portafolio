import { useEffect, useRef, useState } from "react"
import { learning, personalInfo, projects, skills } from "../../data/portfolioData"
import { IconLoader2, IconSend, IconSparkles } from "@tabler/icons-react"
import MessageBubble from "./MessageBubble"
import TypingIndicator from "./TypingIndicator"
import { GoogleGenerativeAI } from "@google/generative-ai"

// ─── Inicializar Gemini ───────────────────────────────────────────────────────
const getModel = () => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY
    const genAI = new GoogleGenerativeAI({ apiKey })
    return genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })
}

// ─── Contexto del portafolio para el chatbot ─────────────────────────────────
const buildContext = () => `
    Eres el asistente virtual del portafolio de ${personalInfo.name}.
    Tu función es responder preguntas sobre ella de forma cercana, breve y profesional.
    Responde siempre en español, con un tono conversacional y amigable.
    No inventes información — si no sabes algo, dilo con honestidad.
    Mantén las respuestas cortas: máximo 3-4 oraciones.

    INFORMACIÓN SOBRE ${personalInfo.name.toUpperCase()}:

    Perfil: ${personalInfo.bio}

    Skills técnicos:
    ${skills.map((s) => `- ${s.name} (nivel ${s.level}/4)`).join('\n')}

    Proyectos:
    ${projects.map((p) => `- ${p.title}: ${p.description} | Tecnologías: ${p.technologies.join(', ')}`).join('\n')}

    Aprendizaje actual:
    ${learning.map((l) => `- ${l.text} (${l.status})`).join('\n')}

    Contacto: ${personalInfo.email}
    GitHub: ${personalInfo.github}
    LinkedIn: ${personalInfo.linkedin}
`


// ─── Subcomponente: chat ──────────────────────────────────────────────────────
export default function ChatBox() {
    const [messages, setMessages] = useState([
        {
            role:    'assistant',
            content: `¡Hola! Soy el asistente virtual de ${personalInfo.name}. Puedes preguntarme sobre su stack, proyectos, disponibilidad o lo que quieras saber. 😊`,
        },
    ])
    const [input,   setInput]   = useState('')
    const [loading, setLoading] = useState(false)
    const bottomRef             = useRef(null)
    const chatRef               = useRef(null)

    // Scroll automático al último mensaje
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, loading])

    const sendMessage = async (text) => {
        const userText = text || input.trim()
        
        if (!userText || loading) return

        // Agrega mensaje del usuario
        setMessages((prev) => [...prev, { role: 'user', content: userText }])
        setInput('')
        setLoading(true)

        try {
            const model = getModel()
            
            const chat = model.startChat({
                history: [],
                generationConfig: { maxOutputTokens: 300 },
            })
            console.log('Chat ', chat);
            
            const prompt = `${buildContext()}\n\nPregunta del visitante: ${userText}`
            console.log('Prompt ', prompt);
            const result = await chat.sendMessage(prompt)
            console.log('Result ', result);
            const text   = await result.response.text()
            console.log('Text ', text);

            setMessages((prev) => [...prev, { role: 'assistant', content: text }])
        } catch (error) {
            console.error('Error en el chat:', error)
            setMessages((prev) => [
                ...prev,
                {
                role:    'assistant',
                content: 'Lo siento, tuve un problema al responder. Puedes contactar a Geraldine directamente por email. 😊',
                },
            ])
        } finally {
            setLoading(false)
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        sendMessage()
        }
    }

    return (
        <div className="bg-[#13131f] border border-[#B14EFF]/15 rounded-xl flex flex-col h-[420px]">

            {/* Header del chat */}
            <div className="flex items-center gap-3 px-5 py-3.5 border-b border-[#B14EFF]/10">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#B14EFF]/10 border border-[#B14EFF]/20">
                    <IconSparkles size={15} className="text-[#B14EFF]" />
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-medium text-white/80">Asistente IA</span>
                    <span className="font-mono text-[12px] text-[#8888aa]/60">powered by Gemini 2.0 Flash</span>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="font-mono text-[12px] text-[#8888aa]/50">en línea</span>
                </div>
            </div>

            {/* Mensajes */}
            <div
                ref={chatRef}
                className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4 scrollbar-thin"
            >
                {messages.map((msg, i) => (
                    <MessageBubble key={i} message={msg} />
                ))}
                {loading && <TypingIndicator />}
                <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-5 py-3.5 border-t border-[#B14EFF]/10 flex gap-3 items-center">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Escribe tu pregunta..."
                    className="flex-1 bg-[#0d0d14] border border-[#B14EFF]/15 focus:border-[#B14EFF]/50 focus:outline-none rounded-lg px-4 py-2.5 text-sm text-white/80 placeholder:text-[#8888aa]/40 transition-colors duration-200"
                />
                <button
                    onClick={() => sendMessage()}
                    disabled={!input.trim() || loading}
                    className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg bg-[#B14EFF] hover:bg-[#7C3AED] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
                >
                {loading
                    ? <IconLoader2 size={15} className="text-white animate-spin" />
                    : <IconSend size={15} className="text-white" />
                }
                </button>
            </div>

        </div>
    )
}
