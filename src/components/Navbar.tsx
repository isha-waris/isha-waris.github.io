import React, { useState, useEffect } from 'react';
import { Menu, X, User, Code, FolderOpen, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: 'About', href: '#about', icon: <User size={16} /> },
    { label: 'Skills', href: '#skills', icon: <Code size={16} /> },
    { label: 'Projects', href: '#projects', icon: <FolderOpen size={16} /> },
    // { label: 'Contact', href: '#contact', icon: <Phone size={16} /> },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-md py-2' : 'bg-black py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        
        <a
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-pink-300 bg-clip-text text-transparent"
        >
          Isha Waris
        </a>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-300 font-medium"
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black border-t border-gray-800 shadow-lg md:hidden">
            <div className="flex flex-col p-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
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