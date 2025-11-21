import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Danzas', href: '#danzas' },
    { name: 'Gastronomía', href: '#gastronomia' },
    { name: 'Música', href: '#musica' },
    { name: 'Leyendas', href: '#leyendas' },
    { name: 'Festividades', href: '#festividades' },
    { name: 'Propuesta', href: '#propuesta' },
    { name: 'Ensayo', href: '#ensayo' },
    { name: 'Créditos', href: '#creditos' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-2 font-bold text-xl md:text-2xl text-[#0052A5]">
          <BookOpen className="h-8 w-8 text-[#E8112D]" />
          <span className={scrolled ? 'text-gray-800' : 'text-white shadow-black drop-shadow-md'}>Cultura Ecuador</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-[#FFD700] transition-colors ${scrolled ? 'text-gray-700' : 'text-white drop-shadow-md'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-[#0052A5] font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
