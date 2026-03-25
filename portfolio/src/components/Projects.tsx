import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'techvista',
      title: 'TechVista',
      description: 'SPA showcasing tech innovations with modern UI and optimized performance.',
      technologies: ['React', 'Material UI', 'Vite']
    },
    {
      id: 'taskmaster',
      title: 'TaskMaster API',
      description: 'RESTful API for managing tasks with authentication and data validation.',
      technologies: ['C#', '.NET', 'ASP.NET Core', 'SQL Server']
    },
    {
      id: 'blogplatform',
      title: 'Blog Platform API',
      description: 'Blogging platform with user authentication and rich text editing.',
      technologies: ['C#', '.NET', 'ASP.NET Core', 'SQL Server']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="bg-gradient-to-b from-gray-900 via-gray-950 to-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-white text-center mb-12">
          My Projects
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className="group relative h-full flex flex-col overflow-hidden border border-gray-800 bg-gray-900/60 backdrop-blur hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300">

                <CardHeader>
                  <CardTitle className="text-white text-lg">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-grow">
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full text-white bg-gradient-to-r from-blue-500 to-indigo-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="border-t border-gray-800">
                  <Button
                    className="w-full bg-techblue hover:bg-techblue/90"
                      onClick={() => navigate(`/projects/${project.id}`)}
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;