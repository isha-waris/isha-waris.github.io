import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "@/components/ProjectData";
import { ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return <div className="text-white p-10">Project not found : {id}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white">
      
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <span
              className="cursor-pointer hover:text-white"
              onClick={() => navigate("/#projects")}
            >
              Home
            </span>
            <ChevronRight size={16} />
            <span className="text-white">{project.title}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

          {/* Description */}
          <p className="text-gray-300 mb-8">{project.description}</p>

          {/* Tech Stack */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-3">Features</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          {/* Screenshots */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.screenshots.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="screenshot"
                  className="rounded-xl border border-gray-800"
                />
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProjectDetails;