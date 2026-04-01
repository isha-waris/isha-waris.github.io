import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown,Database, Server, Layers } from "lucide-react";
import { motion } from 'framer-motion';


const Hero = () => {
  return (
      <section id="hero" className="relative min-h-screen flex items-center justify-center">      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">

          <div className="text-left md:w-1/2 animate-fade-in mb-8 md:mb-0">

            <h1 className="text-6xl md:text-4xl font-bold mb-4 leading-tight gradient-text"> Hi, I'm Isha Waris </h1>

            <p className="text-lg max-w-xl mb-6 text-gray-300">
              .NET Developer with 1.5+ years of experience building RESTful APIs,
              real-time monitoring systems, and data-driven applications using
              ASP.NET Core, SQL Server, and modern web technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-techblue hover:bg-techblue/90 rounded-full px-6 transition-transform duration-200 hover:scale-105"
              >
                <a href="#projects">View My Work</a>
              </Button>

              <Button
                variant="outline"
                asChild
                className="rounded-full px-6 border-techblue text-techblue hover:bg-techblue/10 transition-transform duration-200 hover:scale-105"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">

              {/* Code Card */}
             <div className="bg-[#0d1117] border border-white/20 rounded-2xl p-5 shadow-xl backdrop-blur-md overflow-hidden">
                <pre className="text-xs md:text-sm font-mono leading-relaxed whitespace-pre-wrap break-words">

              <span className="text-purple-400">[ApiController]</span>
              {"\n"}
              <span className="text-purple-400">[Route</span>(<span className="text-green-400">"api/[controller]"</span>)<span className="text-purple-400">]</span>
              {"\n"}
              <span className="text-blue-400">public class</span> <span className="text-yellow-300">ProductsController</span> : <span className="text-blue-300">ControllerBase</span>
              {"\n"}{"{"}
              {"\n"}
                <span className="text-purple-400">[HttpGet]</span>
              {"\n"}
                <span className="text-blue-400">public</span> <span className="text-blue-300">IActionResult</span> <span className="text-yellow-300">GetProducts</span>()
              {"\n"}  {"{"}
              {"\n"}
                  <span className="text-blue-400">var</span> products = <span className="text-blue-300">new</span> <span className="text-yellow-300">List</span>&lt;<span className="text-green-400">string</span>&gt;
                  {"\n"}    {"{"}
              {"\n"}
                    <span className="text-green-400">"Laptop"</span>, <span className="text-green-400">"Mouse"</span>, <span className="text-green-400">"Keyboard"</span>
              {"\n"}    {"}"};
              {"\n"}
                  <span className="text-blue-400">return</span> <span className="text-yellow-300">Ok</span>(products);
              {"\n"}  {"}"}
              {"\n"}{"}"}

                </pre>
              </div>

              <div className="absolute -top-6 -left-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-lg flex items-center gap-3 float">
                <Server className="text-purple-400" size={20} />
                <div>
                  <p className="text-xs text-gray-400">Web & Backend</p>
                  <p className="text-white text-sm font-semibold">Scalable APIs</p>
                </div>
              </div>

              <div className="absolute top-1/2 -right-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-lg flex items-center gap-3 float">
                <Database className="text-pink-400" size={20} />
                <div>
                  <p className="text-xs text-gray-400">Database</p>
                  <p className="text-white text-sm font-semibold">SQL Server</p>
                </div>
              </div>

             <div className="absolute -bottom-6 left-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-lg flex items-center gap-3 float">
              <Layers className="text-blue-400" size={20} />
              <div>
                <p className="text-xs text-gray-400">Architecture</p>
                <p className="text-white text-sm font-semibold">Clean & Scalable</p>
              </div>
            </div>

            </div>
          </div>
        </div>

        {/* Scroll Down */}
        {/* <div className="absolute bottom-10 left-0 right-0 animate-bounce text-center">
          <a href="#about" className="inline-block text-gray-500 hover:text-techblue transition-colors">
            <ChevronDown size={32} />
          </a>
        </div> */}
      </div>      
    </section>
  );
};

export default Hero;