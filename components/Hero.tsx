import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-image.jpg"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-arkin-darker"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-arkin-gold text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
          Building Dreams Into Reality
        </h2>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-8 drop-shadow-2xl">
          Crafting Spaces <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-arkin-gold to-white">
            That Inspire
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-300 text-lg md:text-xl mb-10 font-light leading-relaxed">
          With decades of excellence in architecture and construction, we transform visions into extraordinary living and working environments.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#services"
            className="px-8 py-4 bg-arkin-gold text-arkin-darker font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 border border-white text-white font-bold tracking-widest uppercase hover:border-arkin-gold hover:text-arkin-gold transition-colors duration-300 flex items-center justify-center gap-2"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-arkin-gold"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-arkin-gold"></div>
      </div>
    </section>
  );
};

export default Hero;