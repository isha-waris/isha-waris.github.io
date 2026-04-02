import React from 'react';
import { Github, Linkedin, Mail, User, Code, FolderOpen, ChevronUp } from 'lucide-react'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navItems = [
    { name: 'about', icon: <User size={14} /> },
    { name: 'skills', icon: <Code size={14} /> },
    { name: 'projects', icon: <FolderOpen size={14} /> },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-950 to-gray-900 text-white py-10 border-t border-gray-800">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-40" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-wide">Isha Waris</h3>
            <p className="text-gray-400 text-sm mt-1">.NET Developer</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name}`}
                className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors capitalize"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/isha-waris" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-all">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/isha-waris/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-all">
              <Linkedin size={18} />
            </a>
            <a href="mailto:ishawaris844@gmail.com" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-all">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-3">
          <p>© {currentYear} All Rights Reserved</p>
          
          <button 
            onClick={handleScrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all group"
          >
            Back to Top 
            <span className="p-2 rounded-full bg-gray-800 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <ChevronUp size={16} />
            </span>
          </button>

          <p className="text-gray-600">Built with React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
