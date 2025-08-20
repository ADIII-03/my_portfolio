"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const [cursorText, setCursorText] = useState("|")
  const [scrollY, setScrollY] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<any[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorText((prev) => (prev === "|" ? " " : "|"))
    }, 600)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < 80; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          type: Math.random() > 0.7 ? "triangle" : "circle",
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
        })
      }
    }

    const drawParticle = (particle: any) => {
      ctx.save()
      ctx.globalAlpha = particle.opacity
      ctx.translate(particle.x, particle.y)
      ctx.rotate(particle.rotation)

      if (particle.type === "triangle") {
        ctx.strokeStyle = "#ec4899"
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(0, -particle.size)
        ctx.lineTo(-particle.size, particle.size)
        ctx.lineTo(particle.size, particle.size)
        ctx.closePath()
        ctx.stroke()
      } else {
        ctx.strokeStyle = "#be123c"
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(0, 0, particle.size, 0, Math.PI * 2)
        ctx.stroke()
      }
      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid pattern
      ctx.strokeStyle = "rgba(190, 18, 60, 0.1)"
      ctx.lineWidth = 1
      for (let i = 0; i < canvas.width; i += 50) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, canvas.height)
        ctx.stroke()
      }
      for (let i = 0; i < canvas.height; i += 50) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(canvas.width, i)
        ctx.stroke()
      }

      // Animate particles
      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.rotation += particle.rotationSpeed

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        drawParticle(particle)
      })

      requestAnimationFrame(animate)
    }

    initParticles()
    animate()

    window.addEventListener("resize", resizeCanvas)
    return () => window.removeEventListener("resize", resizeCanvas)
  }, [])

  return (
<section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pb-24">

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      <div
        className="absolute inset-0 cinematic-gradient opacity-90"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />

      <div
        className="absolute w-96 h-96 md:w-[600px] md:h-[600px] bg-gradient-to-r from-primary/20 via-secondary/30 to-primary/20 rounded-full blur-3xl animate-pulse opacity-60"
        style={{ transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)` }}
      />
      <div
        className="absolute w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tr from-secondary/30 via-primary/20 to-secondary/30 rounded-full blur-2xl animate-pulse opacity-40 delay-1000"
        style={{ transform: `translateY(${scrollY * 0.2}px) rotate(${-scrollY * 0.1}deg)` }}
      />

      <div
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
          opacity: Math.max(0, 1 - scrollY / 800),
        }}
      >
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full mb-8 fade-in-up">
          <div className="absolute inset-0 rounded-full neon-border animate-pulse"></div>
          <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-secondary/50">
            <Image src="/your-photo.jpg" alt="Aditya Raman" fill className="object-cover rounded-full" />
          </div>
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-xl animate-pulse"></div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-mono text-foreground mb-6 slide-in-left">
          Hello, I&apos;m{" "}
          <span className="block md:inline text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text neon-glow animate-pulse">
            ADITYA RAMAN
            <span className="ml-2 text-secondary animate-pulse">{cursorText}</span>
          </span>
        </h1>

     <p className="text-xl md:text-3xl text-muted-foreground mt-6 max-w-4xl leading-relaxed fade-in-up">
  I’m a <span className="text-secondary font-semibold">full stack developer</span> learning and growing day by day,
  week by week. I’m also a <span className="text-primary font-semibold">problem solver</span> with a keen interest in
  competitive programming, and I love to challenge myself.
</p>


        <div className="flex flex-col sm:flex-row gap-6 mt-12 fade-in-up">
        <a href="#projects">
  <button className="group px-10 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 neon-border">
    <span className="flex items-center gap-2">
      View My Work
      <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
    </span>
  </button>
</a>

          <a
            href="/Aditya_Raman_Resume.pdf"
            download="Aditya_Raman_Resume.pdf"
            className="px-10 py-4 border-2 border-secondary text-secondary rounded-lg hover:bg-secondary/10 transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            Download Resume
          </a>
        </div>

        <div className="flex gap-6 mt-12 fade-in-up">
          <a
            href="https://github.com/ADIII-03"
            className="p-3 rounded-full border border-muted-foreground/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
          >
            <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-raman-5a237230a/"
            className="p-3 rounded-full border border-muted-foreground/30 hover:border-secondary hover:bg-secondary/10 transition-all duration-300 group"
          >
            <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-secondary transition-colors" />
          </a>
          <a
            href="mailto:aradityaraman0518@example.com"
            className="p-3 rounded-full border border-muted-foreground/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
          >
            <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{ opacity: Math.max(0, 1 - scrollY / 400) }}
      >
        <ChevronDown className="w-8 h-8 text-secondary animate-pulse" />
      </div>
    </section>
  )
}
