import React, { useState, useEffect } from "react";
import { Menu, X, User, Code, FolderOpen, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: "About", href: "#about", icon: <User size={16} /> },
    { label: "Skills", href: "#skills", icon: <Code size={16} /> },
    { label: "Projects", href: "#projects", icon: <FolderOpen size={16} /> },
    // { label: 'Contact', href: '#contact', icon: <Phone size={16} /> },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg shadow-blue-500/10 py-2"
          : "bg-gray-900/85 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-cyan-300 hover:via-purple-300 hover:to-pink-300 transition-all"
        >
          Isha Waris
        </a>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              <span className="text-white">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-gray-200"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-gray-700 shadow-lg md:hidden">
            <div className="flex flex-col p-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-white">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
