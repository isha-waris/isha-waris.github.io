import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Code, Server, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="w-5 h-5 text-techblue" />,
      skills: ['C#', 'JavaScript', 'Python', 'C++']
    },
    {
      title: 'Backend',
      icon: <Server className="w-5 h-5 text-techblue" />,
      skills: [
        '.NET',
        'ASP.NET Core',
        'RESTful APIs',
        'Entity Framework Core',
        'JWT Authentication',
        'Layered Architecture',
        'Microservices'
      ]
    },
    {
      title: 'Frontend',
      icon: <Code className="w-5 h-5 text-techblue" />,
      skills: ['React.js', 'HTML', 'CSS']
    },
    {
      title: 'Databases',
      icon: <Database className="w-5 h-5 text-techblue" />,
      skills: ['SQL Server', 'MongoDB', 'Firebase']
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench className="w-5 h-5 text-techblue" />,
      skills: ['Git', 'Postman', 'SSMS', 'VS Code', 'SonarQube', 'Flutter', 'Docker', 'CI/CD']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="bg-gradient-to-b from-gray-900 via-gray-950 to-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-white text-center mb-10">Skills</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card
                className="group relative h-full overflow-hidden card-shadow border border-gray-800 bg-gray-900/60 backdrop-blur transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:border-blue-500"
              >
                {/* Glow overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 pointer-events-none" />

                <CardContent className="relative pt-6 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    {category.icon}
                    <h3 className="text-lg font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full text-white 
                        bg-gradient-to-r from-blue-500 to-indigo-600 
                        hover:from-indigo-600 hover:to-blue-500 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;