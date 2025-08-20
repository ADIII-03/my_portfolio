"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function PortfolioHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      setIsScrolled(currentScrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerOpacity = Math.max(0, 1 - scrollY / 300)
  const headerTransform = `translateY(${Math.min(scrollY * 0.5, 100)}px)`

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/ADIII-03", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aditya-raman-5a237230a/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:aradityaraman0518@gmail.com", label: "gmail" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 header-transition ${
          isScrolled ? "backdrop-blur-glass shadow-lg" : "bg-background/80"
        }`}
        style={{
          opacity: headerOpacity,
          transform: headerTransform,
        }}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center space-x-3 lg:space-x-4 animate-slide-in-left">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-300">
                <Image src="/your-photo.jpg" alt="Aditya Raman" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold font-serif  bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
                  ADITYA RAMAN
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground font-medium hidden sm:block">
                  Full Stack Developer
                </span>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8 animate-fade-in-up">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-foreground hover:text-primary transition-colors duration-300 font-medium group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4 animate-slide-in-right">
              <div className="flex items-center space-x-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300 hover:bg-muted rounded-full"
                    aria-label={social.label}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 text-foreground hover:text-primary transition-colors duration-300 hover:bg-muted rounded-lg"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {menuOpen && (
          <div className="lg:hidden border-t border-border backdrop-blur-glass animate-fade-in-up">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  onClick={() => setMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </a>
              ))}

              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300 hover:bg-muted rounded-full"
                        aria-label={social.label}
                      >
                        <social.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <div className="h-16 lg:h-20"></div>
    </>
  )
}
