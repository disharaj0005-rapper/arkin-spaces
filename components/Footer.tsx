import React from 'react';
import { Logo } from './Logo';
import { CONTACT_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-arkin-darker border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <Logo />
          <div className="flex flex-wrap gap-8 justify-center">
             <a href="#home" className="text-zinc-400 hover:text-arkin-gold text-sm uppercase tracking-wider">Home</a>
             <a href="#about" className="text-zinc-400 hover:text-arkin-gold text-sm uppercase tracking-wider">About</a>
             <a href="#services" className="text-zinc-400 hover:text-arkin-gold text-sm uppercase tracking-wider">Services</a>
             <a href="#contact" className="text-zinc-400 hover:text-arkin-gold text-sm uppercase tracking-wider">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Arkin Spaces. All rights reserved.
          </p>
          <div className="text-zinc-600 text-xs flex gap-4">
             <span>{CONTACT_DETAILS.location}</span>
             <span>|</span>
             <span>{CONTACT_DETAILS.email}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;