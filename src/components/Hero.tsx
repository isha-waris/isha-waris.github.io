import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Database, Server, Layers } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 md:pt-28 flex items-center justify-center overflow-hidden"
    >
      {/* Clean, minimal background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

      {/* Simple geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full hidden sm:block"></div>
      <div className="absolute bottom-32 right-32 w-24 h-24 bg-blue-500/20 rounded-full hidden sm:block"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-indigo-500/20 rounded-full hidden sm:block"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between max-w-6xl mx-auto gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 leading-snug sm:leading-tight md:leading-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse"
              style={{ animationDuration: "3s" }}
            >
              Hi, I'm Isha Waris
            </h1>

            <p className="text-base sm:text-lg md:text-xl max-w-full sm:max-w-xl mb-6 sm:mb-8 text-gray-300 leading-relaxed">
              .NET Developer with 1.5+ years of experience building RESTful
              APIs, real-time monitoring systems, and data-driven applications
              using ASP.NET Core, SQL Server, and modern web technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                asChild
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/50"
              >
                <a href="#projects">View My Work</a>
              </Button>

              <Button
                variant="outline"
                asChild
                className="w-full sm:w-auto border-2 border-cyan-500/50 text-cyan-300 hover:bg-gray-800 hover:border-cyan-400 hover:text-cyan-200 px-6 py-3 rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
              {/* Clean code card */}
              <div className="bg-[#0d1117] border border-gray-700 rounded-2xl p-4 sm:p-6 shadow-xl">
                <pre className="text-[10px] sm:text-xs md:text-sm font-mono leading-relaxed whitespace-pre-wrap break-words text-gray-300">
                  <span className="text-purple-400">[ApiController]</span>
                  {"\n"}
                  <span className="text-purple-400">[Route</span>(
                  <span className="text-green-400">"api/[controller]"</span>)
                  <span className="text-purple-400">]</span>
                  {"\n"}
                  <span className="text-blue-400">public class</span>{" "}
                  <span className="text-yellow-300">ProductsController</span> :{" "}
                  <span className="text-blue-300">ControllerBase</span>
                  {"\n"}
                  {"{"}
                  {"\n"}
                  <span className="text-purple-400">[HttpGet]</span>
                  {"\n"}
                  <span className="text-blue-400">public</span>{" "}
                  <span className="text-blue-300">IActionResult</span>{" "}
                  <span className="text-yellow-300">GetProducts</span>()
                  {"\n"} {"{"}
                  {"\n"}
                  <span className="text-blue-400">var</span> products ={" "}
                  <span className="text-blue-400">new</span>{" "}
                  <span className="text-yellow-300">List</span>&lt;
                  <span className="text-green-400">string</span>&gt;
                  {"\n"} {"{"}
                  {"\n"}
                  <span className="text-green-400">"Laptop"</span>,{" "}
                  <span className="text-green-400">"Mouse"</span>,{" "}
                  <span className="text-green-400">"Keyboard"</span>
                  {"\n"} {"}"};{"\n"}
                  <span className="text-blue-400">return</span>{" "}
                  <span className="text-yellow-300">Ok</span>(products);
                  {"\n"} {"}"}
                  {"\n"}
                  {"}"}
                </pre>
              </div>

              {/* Clean floating cards (desktop/tablet only) */}
              <div className="hidden md:block absolute -top-4 -left-4 sm:-top-4 sm:-left-8 bg-gray-800/90 backdrop-blur-sm border border-gray-600 rounded-xl p-3 sm:p-4 shadow-lg">
                <Server className="text-purple-400 mb-2" size={18} />
                <p className="text-xs text-gray-400">Web & Backend</p>
                <p className="text-white text-sm font-semibold">
                  Scalable APIs
                </p>
              </div>

              <div className="hidden md:block absolute top-1/2 -right-4 sm:-right-8 bg-gray-800/90 backdrop-blur-sm border border-gray-600 rounded-xl p-3 sm:p-4 shadow-lg">
                <Database className="text-pink-400 mb-2" size={18} />
                <p className="text-xs text-gray-400">Database</p>
                <p className="text-white text-sm font-semibold">SQL Server</p>
              </div>

              <div className="hidden md:block absolute -bottom-4 left-4 sm:left-8 bg-gray-800/90 backdrop-blur-sm border border-gray-600 rounded-xl p-3 sm:p-4 shadow-lg">
                <Layers className="text-blue-400 mb-2" size={18} />
                <p className="text-xs text-gray-400">Architecture</p>
                <p className="text-white text-sm font-semibold">
                  Clean & Scalable
                </p>
              </div>

              {/* Mobile-friendly at bottom */}
              <div className="md:hidden mt-6 grid grid-cols-1 gap-2">
                <div className="bg-gray-800/90 backdrop-blur-sm border border-gray-600 rounded-xl p-3 shadow-lg">
                  <Server className="text-purple-400 mb-2" size={18} />
                  <p className="text-xs text-gray-400">Web & Backend</p>
                  <p className="text-white text-sm font-semibold">
                    Scalable APIs
                  </p>
                </div>
                <div className="bg-gray-800/90 backdrop-blur-sm border border-gray-600 rounded-xl p-3 shadow-lg">
                  <Database className="text-pink-400 mb-2" size={18} />
                  <p className="text-xs text-gray-400">Database</p>
                  <p className="text-white text-sm font-semibold">SQL Server</p>
                </div>
                <div className="bg-gray-800/90 backdrop-blur-sm border border-gray-600 rounded-xl p-3 shadow-lg">
                  <Layers className="text-blue-400 mb-2" size={18} />
                  <p className="text-xs text-gray-400">Architecture</p>
                  <p className="text-white text-sm font-semibold">
                    Clean & Scalable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gray-400 w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
