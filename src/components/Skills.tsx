import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Server,
  Database,
  Wrench,
  Globe,
  Smartphone,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-5 h-5 text-blue-400" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "C#", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 75 },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5 text-purple-400" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: ".NET Core", level: 95 },
        { name: "ASP.NET Core", level: 90 },
        { name: "REST APIs", level: 88 },
        { name: "Entity Framework", level: 85 },
      ],
    },
    {
      title: "Frontend",
      icon: <Globe className="w-5 h-5 text-green-400" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "React.js", level: 80 },
        { name: "HTML/CSS", level: 90 },
      ],
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5 text-orange-400" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "SQL Server", level: 90 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      title: "Tools",
      icon: <Wrench className="w-5 h-5 text-yellow-400" />,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "Postman", level: 85 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 relative overflow-hidden"
    >
      {/* Clean background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-36 h-36 bg-purple-500/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-green-500/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="section-heading text-white text-center mb-16">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {skillCategories.map((category, index) => (
            <div key={index} className="h-full">
              <Card className="group relative h-full overflow-hidden border border-gray-700 bg-gray-800 shadow-lg transition-shadow duration-200 hover:shadow-xl">
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${category.color}/10 pointer-events-none`}
                />

                <CardContent className="relative pt-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gray-700 rounded-lg group-hover:bg-gray-600 transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4 flex-grow">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="group/skill">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-300 group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-400 group-hover/skill:text-blue-400 transition-colors">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
