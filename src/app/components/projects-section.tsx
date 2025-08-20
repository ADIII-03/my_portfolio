import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye } from "lucide-react"

const projects = [
  {
    title: "Humanity Club Organisation",
    subtitle: "NGO Management Platform",
    description:
      "A comprehensive full-stack website with admin controls, volunteer management, and donation tracking using modern web technologies.",
    image: "Screenshot 2025-08-19 183709.png",
    tech: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://hc-opage.vercel.app/", // Added site link
    githubUrl: "https://github.com/ADIII-03/HCOpage", // Added GitHub link
    featured: true,
  },
  {
    title: "SANGAM",
    subtitle: "Women's Safety Platform",
    description:
      "A full-stack web application empowering women's safety through NGO creation, volunteer coordination, and donation management with real-time features.",
    image: "Screenshot 2025-08-19 183925.png",
    tech: ["React", "Node.js", "Cloudinary", "Mailtrap", "Nodemailer", "Mapbox", "DaisyUI", "Socket.io"],
    liveUrl: "https://sangam-frontend-rust.vercel.app/", // Added site link
    githubUrl: "https://github.com/ADIII-03/sangam-frontend", // Added GitHub link
    featured: true,
  },
  {
    title: "CHATRAVERSE",
    subtitle: "Multilingual Chat Application",
    description:
      "An innovative real-time chat application that connects users globally with complementary language preferences for seamless multilingual communication.",
    image: "/Screenshot 2025-08-19 183757.png",
    tech: ["React", "Stream", "Node.js", "MongoDB", "DaisyUI"],
    liveUrl: "https://chatrraverse-frontend-git-main-aditya-ramans-projects.vercel.app/login", // Added site link
    githubUrl: "https://github.com/ADIII-03/Chatrraverse-frontend", // Added GitHub link
    featured: false,
  },
]

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold font-serif mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore my latest work showcasing full-stack development, innovative solutions, and modern web technologies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 ${
                project.featured ? "ring-2 ring-primary/20" : ""
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-primary to-accent text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  Featured
                </div>
              )}

              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image || "/placeholder.svg?height=300&width=400&query=modern web application screenshot"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <Button
                    size="sm"
                    className="bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg backdrop-blur-sm"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Eye className="w-4 h-4 mr-2" />
                      View Live
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-background/90 hover:bg-background border-primary/20 shadow-lg backdrop-blur-sm"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="space-y-2">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm font-medium text-accent">{project.subtitle}</p>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-accent/20 to-primary/20 text-accent border border-accent/20 rounded-full hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-md"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/20 hover:bg-primary/5 bg-transparent"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Interested in working together?</p>
          <a href="#contact">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact me
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
