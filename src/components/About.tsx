import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  GraduationCap,
  Lightbulb,
  Code,
  Zap,
  Server,
  Database,
  Layers,
  Award,
  Users,
  Coffee,
  Target,
} from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: <Briefcase className="text-blue-500" size={24} />,
      value: "1.5+",
      label: "Years Experience",
    },
    {
      icon: <Code className="text-green-500" size={24} />,
      value: "10+",
      label: "Projects Completed",
    },
    {
      icon: <Server className="text-purple-500" size={24} />,
      value: "5+",
      label: "APIs Built",
    },
    {
      icon: <Coffee className="text-yellow-500" size={24} />,
      value: "500+",
      label: "Cups of Coffee",
    },
  ];

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-900 via-gray-950 to-black py-20 relative overflow-hidden"
    >
      {/* Clean background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/5 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/3 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="section-heading text-white text-center mb-16">
          About Me
        </h2>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-200 group cursor-default">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-300 font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="rounded-xl">
            <Card className="bg-gray-900 border border-gray-700 text-white h-full flex flex items-center justify-center relative overflow-hidden shadow-lg hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 to-purple-500/10 transition-opacity duration-300 pointer-events-none"></div>
              <CardContent className="relative pt-6 flex flex-col justify-center items-center text-center h-full z-10">
                <div className="relative mb-6">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-400 shadow-2xl shadow-purple-500/50 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full"></div>
                    <img
                      src="/images/mypic.jpeg"
                      alt="Isha Waris"
                      className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300 relative z-10"
                    />
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Isha Waris
                </h3>
                <p className="text-lg bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 font-semibold">
                  .NET Developer
                </p>
                <p className="text-sm text-gray-300 max-w-sm leading-relaxed font-medium">
                  Passionate about building scalable, clean backend systems and
                  creating innovative solutions.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="w-full h-full bg-gray-900 border border-gray-700 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:border-purple-500/50 transition-all duration-300 group">
            <CardContent className="pt-6 flex flex-col justify-center items-center text-center h-full relative">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-purple-500/10 to-pink-500/10 transition-opacity duration-300 pointer-events-none"></div>
              <div className="relative z-10 w-full">
                <h3 className="text-lg font-semibold mb-6 flex items-center justify-center text-white">
                  <Briefcase size={20} className="text-blue-400 mr-2" />
                  Professional Background
                </h3>

                <div className="space-y-4 text-left">
                  <p className="text-sm text-gray-300 leading-relaxed font-medium">
                    .NET Developer with 1.5+ years of experience building
                    RESTful APIs, real-time monitoring systems, and data-driven
                    applications using ASP.NET Core, SQL Server, and modern web
                    technologies.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full group-hover/item:scale-150 transition-transform"></div>
                      <p className="text-sm text-gray-300 font-medium">
                        Built real-time industrial monitoring system
                      </p>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full group-hover/item:scale-150 transition-transform"></div>
                      <p className="text-sm text-gray-300 font-medium">
                        Designed scalable REST APIs using ASP.NET Core
                      </p>
                    </div>
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full group-hover/item:scale-150 transition-transform"></div>
                      <p className="text-sm text-gray-300 font-medium">
                        Optimized database queries for performance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        </div>

        <div className="lg:col-span-2">
          <Card className="bg-gray-900 border border-gray-700 text-white relative overflow-hidden shadow-lg group hover:shadow-xl hover:border-blue-500/50 transition-all duration-300">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 transition-opacity duration-300 pointer-events-none"></div>
            <CardContent className="pt-6 relative z-10">
              <h3 className="text-xl font-bold mb-8 flex items-center justify-center bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                <Target size={20} className="text-blue-400 mr-2" />
                What I Deliver
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Server className="text-purple-400" size={24} />,
                    title: "Backend Systems",
                    desc: "Scalable APIs built with ASP.NET Core",
                  },
                  {
                    icon: <Database className="text-pink-400" size={24} />,
                    title: "Database Design",
                    desc: "Optimized SQL Server & data handling",
                  },
                  {
                    icon: <Layers className="text-blue-400" size={24} />,
                    title: "Architecture",
                    desc: "Clean and scalable system design",
                  },
                  {
                    icon: <Zap className="text-yellow-400" size={24} />,
                    title: "Performance",
                    desc: "Fast and reliable applications",
                  },
                  {
                    icon: <Code className="text-green-400" size={24} />,
                    title: "Clean Code",
                    desc: "Maintainable code practices",
                  },
                  {
                    icon: <Award className="text-cyan-400" size={24} />,
                    title: "Quality Assurance",
                    desc: "Thorough testing and validation",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-md transition-all duration-200 cursor-pointer hover:border-blue-500/50 hover:shadow-lg hover:bg-gray-800 group/card"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {item.icon}
                      <p className="text-sm text-gray-200 font-semibold">
                        {item.title}
                      </p>
                    </div>
                    <p className="text-gray-300 font-medium text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
