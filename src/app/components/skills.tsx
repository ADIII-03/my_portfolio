"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function SkillsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    setIsVisible(true)

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      color: "from-primary/20 to-primary/40",
      skills: ["C", "C++", "JavaScript", "TypeScript", "Python"],
    },
    {
      title: "Developer Tools",
      icon: "🛠️",
      color: "from-secondary/20 to-secondary/40",
      skills: ["VS Code", "Postman", "Git"],
    },
    {
      title: "Technologies/Frameworks",
      icon: "⚡",
      color: "from-accent/20 to-accent/40",
      skills: ["GitHub", "ReactJS", "Redux", "NextJS", "NodeJS", "ExpressJS", "MongoDB"],
    },
  ]

  const proficiencyLevels = [
    { name: "JavaScript/TypeScript", level: 95, color: "from-primary to-primary/80" },
    { name: "React & Next.js", level: 92, color: "from-secondary to-secondary/80" },
    { name: "Node.js & Express", level: 88, color: "from-accent to-accent/80" },
    { name: "Python", level: 85, color: "from-primary/80 to-secondary/80" },
    { name: "C/C++", level: 82, color: "from-secondary/80 to-accent/80" },
    { name: "MongoDB", level: 80, color: "from-accent/80 to-primary/80" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Effects - matching contact section */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isVisible ? 1 : 0})`,
        }}
      />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl animate-float-3d"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-xl animate-float-delayed-3d"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-2xl animate-float-slow-3d"></div>
        <div className="absolute top-1/2 right-10 w-28 h-28 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl animate-float-3d"></div>

        <div className="absolute top-1/4 left-1/3 w-64 h-64 border-2 border-primary/20 rounded-full animate-spin-slow-3d"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-secondary/20 rounded-full animate-spin-reverse-3d"></div>

        <div className="absolute top-32 left-1/2 text-6xl text-primary/20 animate-float-code font-mono">&lt;/&gt;</div>
        <div className="absolute bottom-40 left-20 text-4xl text-secondary/20 animate-float-delayed-code font-mono">
          {}
        </div>
        <div className="absolute top-2/3 right-32 text-5xl text-accent/20 animate-float-slow-code font-mono">[]</div>
        <div className="absolute top-1/2 left-16 text-3xl text-primary/20 animate-float-code font-mono">()</div>

        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <div className="absolute top-16 right-1/3 w-20 h-20 bg-gradient-radial from-primary/40 to-transparent rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-32 left-1/2 w-16 h-16 bg-gradient-radial from-secondary/40 to-transparent rounded-full animate-pulse-glow-delayed"></div>
        <div className="absolute top-1/3 left-12 w-12 h-12 bg-gradient-radial from-accent/40 to-transparent rounded-full animate-pulse-glow-slow"></div>
      </div>

      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
            >
              <span className="text-xl">←</span>
              Back to Home
            </Link>
          </div>

          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-6xl md:text-8xl font-bold font-sans mb-6">
              <span className="neon-glow text-primary hover:scale-105 transition-transform duration-300 inline-block">
                My Skills
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full animate-pulse"></div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-primary">Proficiency Levels</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {proficiencyLevels.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 neon-border-subtle hover:shadow-lg hover:shadow-primary/25 transition-all duration-500 hover:scale-[1.02] group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted/40 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out group-hover:animate-pulse`}
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 200}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-primary">Technical Arsenal</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <div
                  key={category.title}
                  className={`group bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-8 neon-border-subtle hover:shadow-lg hover:shadow-primary/25 transition-all duration-500 hover:scale-[1.02]`}
                  style={{ animationDelay: `${categoryIndex * 200}ms` }}
                >
                  <div className="text-center mb-6">
                    <div
                      className="text-5xl mb-4 animate-bounce"
                      style={{ animationDelay: `${categoryIndex * 300}ms` }}
                    >
                      {category.icon}
                    </div>
                    <h3
                      className={`text-2xl font-bold text-primary group-hover:scale-105 transition-transform duration-300`}
                    >
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className={`px-5 py-4 bg-background/50 backdrop-blur-sm rounded-xl border border-primary/30 text-center font-medium text-foreground hover:bg-primary/10 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer group-hover:animate-pulse`}
                        style={{
                          animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                          transitionDelay: `${skillIndex * 50}ms`,
                        }}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
