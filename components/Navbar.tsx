import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-black/90 backdrop-blur-md py-4 shadow-sm border-b border-white/10'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="#home"
          className="hover:opacity-90 transition-opacity text-white shrink-0"
        >
          <Logo className="h-24 md:h-32" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${isScrolled ? 'text-zinc-300 hover:text-arkin-gold' : 'text-zinc-200 hover:text-white'
                }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`px-6 py-2 border text-sm tracking-widest uppercase transition-all duration-300 ${isScrolled
                ? 'border-arkin-gold text-arkin-gold hover:bg-arkin-gold hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-zinc-900'
              }`}
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-arkin-dark border-t border-white/10 flex flex-col items-center py-8 space-y-6 shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium tracking-widest uppercase text-white hover:text-arkin-gold"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;