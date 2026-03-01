import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-arkin-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-arkin-gold text-sm tracking-[0.2em] uppercase mb-4 font-bold">What We Do</h4>
          <h2 className="font-serif text-4xl md:text-5xl text-white">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group relative h-[450px] overflow-hidden cursor-pointer shadow-lg border border-white/5"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="font-serif text-2xl text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {service.title}
                </h3>
                <div className="h-[2px] w-12 bg-arkin-gold mb-4 transition-all duration-300 group-hover:w-full"></div>
                <p className="text-zinc-300 text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;