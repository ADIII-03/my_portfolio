"use client"

import { useState, useEffect } from "react"


export default function HomePage() {
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

  
  const achievements = [
    { title: "LeetCode Problems", count: "150+", icon: "🧩" },
    { title: "Projects Built", count: "5+", icon: "🚀" },
    { title: "Years Coding", count: "2+", icon: "💻" },
    { title: "Contests Participated", count: "10+", icon: "🏆" },
  ]

  

  const codingProfiles = [
    {
      platform: "LeetCode",
      username: "adi03__",
      stats: {
        solved: "200+",
        easy: "70",
        medium: "81",
        hard: "7",
        ranking: "Top 20%",
        streak: "20 days",
      },
      color: "from-orange-500 to-yellow-500",
      bgColor: "from-orange-500/10 to-yellow-500/10",
      icon: "🟠",
    },
    {
      platform: "CodeChef",
      username: "adi_0518",
      stats: {
        rating: "1300+",
        stars: "1★",
        contests: "3",
        rank: "newbie",
        maxRating: "1307",
        globalRank: "55000+",
      },
      color: "from-amber-600 to-orange-600",
      bgColor: "from-amber-600/10 to-orange-600/10",
      icon: "👨‍🍳",
    },
    {
      platform: "Codeforces",
      username: "Aditya0318",
      stats: {
        rating: "353",
        rank: "newbie",
        contests: "1",
        maxRating: "353",
        problems: "3",
        contribution: "+0",
      },
      color: "from-blue-600 to-purple-600",
      bgColor: "from-blue-600/10 to-purple-600/10",
      icon: "⚔️",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-primary/40 to-chart-1/40 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out animate-pulse"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isVisible ? 1 : 0})`,
          boxShadow: "0 0 20px rgba(var(--primary), 0.3)",
        }}
      />

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/15 to-chart-1/15 rounded-full blur-xl animate-float opacity-60"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-chart-2/15 to-chart-3/15 rounded-full blur-xl animate-float-delayed opacity-50"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-chart-1/10 to-primary/10 rounded-full blur-2xl animate-float-slow opacity-40"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-lg animate-bounce opacity-30"></div>
          <div className="absolute bottom-1/3 right-10 w-16 h-16 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-md animate-pulse opacity-25"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-5xl md:text-7xl font-bold font-sans mb-6">
              <span className="neon-glow bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 inline-block animate-pulse">
                About Me
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-chart-1 mx-auto rounded-full animate-pulse"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <div className="group bg-card/60 backdrop-blur-md border border-border/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:bg-card/80 hover:border-primary/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-chart-1/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-chart-1 to-chart-2 rounded-full animate-pulse group-hover:animate-bounce"></div>
                    <h3 className="text-2xl font-bold text-primary group-hover:text-chart-1 transition-colors duration-300">
                      Full Stack Developer
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground/90 transition-colors duration-300">
                    I&apos;m a Full Stack Developer passionate about building interactive web applications and creating
                    seamless user experiences. I believe in crafting digital experiences that tell stories, inspired by
                    the visual aesthetics of cinema to create interfaces that are both functional and emotionally
                    engaging.
                  </p>
                </div>
              </div>

              <div className="group bg-card/60 backdrop-blur-md border border-border/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:bg-card/80 hover:border-chart-2/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-chart-2/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-3 h-3 bg-gradient-to-r from-chart-2 to-primary rounded-full animate-pulse group-hover:animate-bounce"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <h3 className="text-2xl font-bold text-primary group-hover:text-chart-2 transition-colors duration-300">
                      DSA Enthusiast & Competitive Programmer
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground/90 transition-colors duration-300">
                    I love solving LeetCode problems and have a keen interest towards competitive programming. Data
                    structures and algorithms fascinate me, and I enjoy the challenge of optimizing solutions and
                    tackling complex algorithmic problems. The thrill of finding elegant solutions drives my passion for
                    coding.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              
              <div className="bg-gradient-to-br from-chart-2/5 via-primary/5 to-chart-3/5 rounded-2xl p-6 backdrop-blur-sm border border-border/30 hover:border-chart-2/40 transition-all duration-500 group">
                <h4 className="text-xl font-bold text-primary mb-6 flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl animate-bounce">🎯</span>
                  Achievements
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={achievement.title}
                      className="text-center p-4 bg-card/40 rounded-xl border border-border/20 hover:bg-card/60 transition-all duration-300 hover:scale-105 cursor-pointer hover:border-primary/30 group/achievement"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div
                        className="text-2xl mb-2 animate-bounce group-hover/achievement:animate-spin transition-all duration-500"
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        {achievement.icon}
                      </div>
                      <div className="text-lg font-bold text-primary group-hover/achievement:text-chart-1 transition-colors duration-300">
                        {achievement.count}
                      </div>
                      <div className="text-xs text-muted-foreground group-hover/achievement:text-foreground transition-colors duration-300">
                        {achievement.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-0">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent animate-pulse">
                  Coding Platform Analytics
                </span>
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-chart-1 to-chart-2 mx-auto rounded-full animate-pulse"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {codingProfiles.map((profile, index) => (
                <div
                  key={profile.platform}
                  className={`group relative bg-gradient-to-br ${profile.bgColor} backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:border-primary/40 overflow-hidden`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Animated background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Floating particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full animate-ping"></div>
                  <div
                    className="absolute bottom-6 left-6 w-1 h-1 bg-chart-1/40 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl group-hover:animate-bounce transition-all duration-300">
                          {profile.icon}
                        </span>
                        <div>
                          <h4
                            className={`text-xl font-bold bg-gradient-to-r ${profile.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}
                          >
                            {profile.platform}
                          </h4>
                          <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                            @{profile.username}
                          </p>
                        </div>
                      </div>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse group-hover:animate-bounce"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(profile.stats).map(([key, value], statIndex) => (
                        <div
                          key={key}
                          className="bg-card/40 rounded-lg p-3 border border-border/20 hover:bg-card/60 transition-all duration-300 group-hover:border-primary/30 hover:scale-105"
                          style={{ animationDelay: `${statIndex * 100}ms` }}
                        >
                          <div
                            className={`text-lg font-bold bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}
                          >
                            {value}
                          </div>
                          <div className="text-xs text-muted-foreground capitalize group-hover:text-foreground/70 transition-colors duration-300">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Animated progress bar */}
                    <div className="mt-4 w-full bg-muted/30 rounded-full h-1 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${profile.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                        style={{
                          width: isVisible ? "85%" : "0%",
                          transitionDelay: `${index * 300}ms`,
                        }}
                      />
                    </div>
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
