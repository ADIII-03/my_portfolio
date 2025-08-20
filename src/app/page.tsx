"use client"

import { useState } from "react"
import { CinematicIntro } from "@/app/components/Intro"
import { PortfolioHeader } from "@/app/components/portfolio-header"
import { HeroSection } from "@/app/components/hero-section"
import { ProjectsSection } from "@/app/components/projects-section"
import SkillsSection  from "@/app/components/skills"
import { ContactSection } from "./components/contact-section"
import AboutSection from "./components/about-section"
export default function Home() {
  const [showIntro, setShowIntro] = useState(true)

  const handleIntroComplete = () => {
    setShowIntro(false)
  }

  if (showIntro) {
    return <CinematicIntro onComplete={handleIntroComplete} />
  }

  return (
<>
     <PortfolioHeader />
      <div className="relative">
        <HeroSection />
        <main className="relative z-10 bg-background">
          <ProjectsSection />
          <AboutSection />
      <SkillsSection />
      
      <ContactSection />
    </main>
      </div>
    </>
  )
}
