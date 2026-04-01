import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, GraduationCap, Lightbulb, Code, Zap, Server, Database, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {

  const hoverEffect = {
    scale: 1.03,
    boxShadow: "0px 0px 25px rgba(59,130,246,0.4)"
  };

  return (
    <section id="about"  className="bg-gradient-to-b from-gray-900 via-gray-950 to-black py-20">
      
      <div className="container mx-auto">
        
        <h2 className="section-heading text-white text-center mb-10">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <motion.div className="w-full">
            <motion.div whileHover={hoverEffect}>
              <Card className="bg-gray-900/70 border-gray-700 text-white h-full flex flex items-center justify-center">
                
                <CardContent className="pt-6 flex flex-col justify-center items-center text-center h-full">

                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="relative mb-4"
                  >
                    <div className="absolute inset-0 rounded-full bg-blue-500 blur-2xl opacity-20"></div>

                    <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl">
                      <img
                        src="/images/mypic.jpeg"
                        alt="Isha Waris"
                        className="w-full h-full object-cover hover:scale-110 transition duration-500"
                      />
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-semibold">Isha Waris</h3>
                  <p className="text-sm text-gray-400 mb-2">.NET Developer</p>

                  <p className="text-sm text-gray-400 max-w-sm">Passionate about building scalable, clean backend systems.</p>

                </CardContent>

              </Card>
            </motion.div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={hoverEffect}>
              <Card className="bg-gray-900/70 border border-gray-700 text-white h-full flex flex items-center justify-center">
                <CardContent className="pt-6 flex flex-col justify-center items-center text-center h-full">
                  
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Briefcase size={20} className="text-blue-400 mr-2" />
                    Background
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    .NET Developer with 1.5+ years of experience building RESTful APIs,
                    real-time monitoring systems, and data-driven applications using 
                    ASP.NET Core, SQL Server, and modern web technologies. Skilled 
                    in designing scalable backend systems, optimizing databases, and 
                    integrating frontend applications with React. Focused on writing clean, 
                    maintainable code and delivering reliable, performance-oriented solutions.
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">✔ Built real-time industrial monitoring system</p>
                  <p className="text-sm text-gray-300 leading-relaxed">✔ Designed scalable REST APIs using ASP.NET Core</p>
                  <p className="text-sm text-gray-300 leading-relaxed">✔ Optimized database queries for performance</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="bg-gray-900/70 border border-gray-700 text-white">
              <CardContent className="pt-6">

                <h3 className="text-xl font-semibold mb-6 flex items-center justify-center">
                  <Briefcase size={20} className="text-blue-400 mr-2" />
                  What I Deliver
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                  {[
                    { icon: <Server className="text-purple-400" size={20} />, title: "Backend Systems", desc: "Scalable APIs built with ASP.NET Core" },
                    { icon: <Database className="text-pink-400" size={20} />, title: "Database Design", desc: "Optimized SQL Server & data handling" },
                    { icon: <Layers className="text-blue-400" size={20} />, title: "Architecture", desc: "Clean and scalable system design" },
                    { icon: <Zap className="text-yellow-400" size={20} />, title: "Performance", desc: "Fast and reliable applications" },
                    { icon: <Code className="text-green-400" size={20} />, title: "Clean Code", desc: "Maintainable code practices" },
                    { icon: <Briefcase className="text-cyan-400" size={20} />, title: "Client Delivery", desc: "Solutions aligned with business needs" },
                  ].map((item, index) => (

                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 0px 25px rgba(59,130,246,0.4)",
                      }}
                      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 shadow-lg transition duration-300 cursor-pointer"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        {item.icon}
                        <p className="text-sm text-gray-400">{item.title}</p>
                      </div>

                      <p className="text-white font-semibold text-sm">
                        {item.desc}
                      </p>
                    </motion.div>

                  ))}

                </div>

              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;