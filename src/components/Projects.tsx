import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  ExternalLink,
  Github,
  Code,
  Database,
  Server,
  Globe,
  Smartphone,
  Eye,
} from "lucide-react";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "techvista",
      title: "TechVista",
      description:
        "SPA showcasing tech innovations with modern UI and optimized performance. Features responsive design, smooth animations, and fast loading times.",
      technologies: ["React", "Material UI", "Vite"],
      icon: <Globe className="w-16 h-16 text-white drop-shadow-lg" />,
      gradient: "from-blue-500 to-cyan-500",
      features: ["Responsive Design", "Modern UI", "Performance Optimized"],
      links: {
        demo: "https://github.com/isha-waris",
        github: "https://github.com/isha-waris/tech-vista-app",
      },
    },
    {
      id: "taskmaster",
      title: "TaskMaster API",
      description:
        "RESTful API for managing tasks with authentication and data validation. Built with clean architecture and comprehensive documentation.",
      technologies: ["C#", ".NET", "ASP.NET Core", "SQL Server"],
      icon: <Server className="w-16 h-16 text-white drop-shadow-lg" />,
      gradient: "from-purple-500 to-pink-500",
      features: ["RESTful Design", "JWT Auth", "Clean Architecture"],
      links: {
        demo: "https://github.com/isha-waris",
        github: "https://github.com/isha-waris/taskmaster-fullstack",
      },
    },
    {
      id: "blogplatform",
      title: "Blog Platform API",
      description:
        "Blogging platform with user authentication and rich text editing. Features content management, user roles, and API documentation.",
      technologies: ["C#", ".NET", "ASP.NET Core", "SQL Server"],
      icon: <Database className="w-16 h-16 text-white drop-shadow-lg" />,
      gradient: "from-green-500 to-emerald-500",
      features: ["User Auth", "Rich Text", "Content Management"],
      links: {
        demo: "https://github.com/isha-waris",
        github: "https://github.com/isha-waris/BlogPlatform",
      },
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 relative overflow-hidden"
    >
      {/* Clean background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-56 h-56 bg-blue-500/10 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-44 h-44 bg-purple-500/10 rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-green-500/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="section-heading text-white text-center mb-16">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <div key={index} className="h-full">
              <Card className="group relative h-full flex flex-col overflow-hidden border border-gray-700 bg-gray-900 shadow-lg transition-shadow duration-200 hover:shadow-xl">
                {/* Project Icon Header */}
                <div
                  className={`relative h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/5"></div>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 hover:opacity-80 transition-opacity"
                  >
                    {project.icon}
                  </a>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-xl group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-grow space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-200">
                      Key Features:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-200 border border-gray-700"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-200">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 text-xs rounded-full text-white bg-gradient-to-r ${project.gradient} hover:opacity-80 transition-opacity`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="border-t border-gray-700 pt-4">
                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <Button
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-white transition-colors duration-200"
                      onClick={() => navigate(`/projects/${project.id}`)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 sm:flex-none border-cyan-500/50 text-cyan-300 hover:bg-gray-800 hover:border-cyan-400 hover:text-cyan-200 transition-all duration-200"
                        onClick={() =>
                          window.open(project.links.github, "_blank")
                        }
                      >
                        <Github className="w-4 h-4" />
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 sm:flex-none border-cyan-500/50 text-cyan-300 hover:bg-gray-800 hover:border-cyan-400 hover:text-cyan-200 transition-all duration-200"
                        onClick={() =>
                          window.open(project.links.demo, "_blank")
                        }
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-2xl mx-auto shadow-xl">
            <h3 className="text-xl font-semibold text-white mb-4">
              Interested in seeing more?
            </h3>
            <p className="text-gray-300 mb-6">
              Check out my GitHub for more projects and contributions, or
              contact me to discuss your next project.
            </p>
            <div className="flex gap-4 justify-center relative z-20">
              <Button
                onClick={() =>
                  window.open("https://github.com/isha-waris", "_blank")
                }
                className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 text-white font-semibold shadow-lg shadow-purple-500/30"
              >
                <Github className="w-4 h-4 mr-2" />
                View GitHub
              </Button>
              <Button
                onClick={() => {
                  const c = document.getElementById("contact");
                  if (c)
                    c.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 text-cyan-300 hover:from-cyan-500/40 hover:to-purple-500/40 hover:border-cyan-400 hover:text-cyan-200 font-semibold"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
