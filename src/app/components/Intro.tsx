"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface CinematicIntroProps {
  onComplete: () => void
}

export function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [currentPhase, setCurrentPhase] = useState(0)
  const [showSkip, setShowSkip] = useState(false)
  const [matrixChars, setMatrixChars] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  // Initialize matrix characters
  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*".split("")
    const randomChars = Array.from({ length: 50 }, () =>
      chars[Math.floor(Math.random() * chars.length)]
    )
    setMatrixChars(randomChars)
    setMounted(true)
  }, [])

  // Show skip button after 1 second
  useEffect(() => {
    const timer = setTimeout(() => setShowSkip(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  // Run phases
  useEffect(() => {
    const phases = [
      { duration: 2000, phase: 1 }, // Matrix rain + compunknown intro
      { duration: 3000, phase: 2 }, // Name typewriter
      { duration: 2000, phase: 3 }, // Title reveal
      { duration: 2000, phase: 4 }, // Glitch effect
      { duration: 1500, phase: 5 }, // Final transition
    ]

    let timeoutId: NodeJS.Timeout

    const runPhases = (index: number) => {
      if (index < phases.length) {
        setCurrentPhase(phases[index].phase)
        timeoutId = setTimeout(() => runPhases(index + 1), phases[index].duration)
      } else {
        onComplete()
      }
    }

    runPhases(0)

    return () => clearTimeout(timeoutId)
  }, [onComplete])

  const handleSkip = () => {
    onComplete()
  }

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-background">
      {/* === Cyberpunk Background === */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Neon gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background/10 to-accent/30"></div>

        {/* Faint grid lines */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-[1px] h-full bg-accent/20"
              style={{ left: `${i * 5}%` }}
            />
          ))}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i + 20}
              className="absolute h-[1px] w-full bg-accent/20"
              style={{ top: `${i * 5}%` }}
            />
          ))}
        </div>
      </div>

      {/* === Matrix Rain === */}
      <div className="absolute inset-0 opacity-20 z-10">
        {matrixChars.map((char, i) => (
          <div
            key={i}
            className="matrix-char absolute text-sm"
            style={{
              left: `${(i * 2) % 100}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          >
            {char}
          </div>
        ))}
      </div>

      {/* === Atmospheric Particles === */}
      <div className="absolute inset-0 z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-accent rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* === Skip Button === */}
      {showSkip && (
        <Button
          onClick={handleSkip}
          variant="outline"
          className="absolute top-8 right-8 z-20 cyber-border bg-transparent text-accent hover:bg-accent/10 transition-all duration-300"
        >
          Skip Intro
        </Button>
      )}

      {/* === Main Cinematic Content === */}
      <div className="relative z-20 text-center max-w-4xl px-8">
        {/* Phase 1 */}
        {currentPhase >= 1 && (
          <div className="fade-scale">
            <div className="text-lg text-muted-foreground mb-4 font-mono">
              INITIALIZING PORTFOLIO_SYSTEM...
            </div>
            <div className="text-xs text-accent font-mono opacity-60">
              &gt; Loading neural networks...
            </div>
          </div>
        )}

        {/* Phase 2 */}
        {currentPhase >= 2 && (
          <div className="mt-12">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4">
              <span className="typewriter neon-glow">ADITYA RAMAN</span>
            </h1>
          </div>
        )}

        {/* Phase 3 */}
        {currentPhase >= 3 && (
          <div className="slide-cinema">
            <div className="text-xl md:text-3xl text-secondary font-light tracking-widest mb-8">
              CREATIVE TECHNOLOGIST
            </div>
            <div className="text-base md:text-lg text-muted-foreground font-mono">
              Crafting digital experiences at the intersection of design & code
            </div>
          </div>
        )}

        {/* Phase 4 */}
        {currentPhase >= 4 && (
          <div className="mt-12">
            <div className="glitch-effect text-2xl md:text-4xl text-primary font-bold">
              ENTER_THE_MATRIX
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8 text-xs font-mono text-accent/60">
              <div>&gt; React.js</div>
              <div>&gt; TypeScript</div>
              <div>&gt; Node.js</div>
              <div>&gt; Python</div>
              <div>&gt; Design Systems</div>
              <div>&gt; AI/ML</div>
            </div>
          </div>
        )}

        {/* Phase 5 */}
        {currentPhase >= 5 && (
          <div className="fade-scale mt-16">
            <div className="glow-box p-6 rounded-lg bg-card/50 backdrop-blur-sm">
              <div className="text-accent text-lg font-mono mb-2">
                READY_TO_LAUNCH
              </div>
              <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-neon-gradient animate-pulse"
                  style={{
                    animation: "pulse 1s ease-in-out, typewriter 2s steps(100, end)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* === Cinematic Vignette === */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30"></div>
      </div>
    </div>
  )
}
