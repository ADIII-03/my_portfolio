"use client"

import { useState, useEffect, useRef } from "react"
import { X, Send } from "lucide-react"
import Image from "next/image"

export default function CyberChatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<any[]>([
    { role: "assistant", content: "Hey 👋 Ask me anything about my work or skills!" }
  ])
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim() || loading) return

    const userMsg = input
    setInput("")
    setMessages(prev => [...prev, { role: "user", content: userMsg }])
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      })

      const data = await res.json()
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: data.reply || "Something went wrong." }
      ])
    } catch {
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: "⚠️ Error contacting server." }
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-[999] w-16 h-16 rounded-full bg-gradient-to-br from-pink-600 to-red-600 shadow-xl hover:scale-105 transition-all"
      >
        <Image
          src="/avatar.webp"
          alt="AI"
          width={48}
          height={48}
          className="rounded-full mx-auto"
        />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-[9999] w-[360px] h-[520px] bg-black/90 backdrop-blur-xl border border-pink-500/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden">

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-pink-500/30">
            <div className="flex items-center gap-2">
              <Image src="/avatar.webp" alt="AI" width={36} height={36} className="rounded-full" />
              <div>
                <p className="text-pink-400 font-semibold text-sm">AI Assistant</p>
                <p className="text-xs text-gray-400">Online</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)}>
              <X className="text-pink-400 hover:text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                  msg.role === "user"
                    ? "ml-auto bg-pink-600 text-white"
                    : "bg-zinc-800 text-gray-200"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="text-sm text-pink-400 animate-pulse">
                Typing...
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-pink-500/30 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask something..."
              className="flex-1 bg-black/60 border border-pink-500/30 rounded-md px-3 py-2 text-white outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-pink-600 hover:bg-pink-700 px-4 rounded-md"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
