import React from 'react';
import { Eye, Target, Heart } from 'lucide-react';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-arkin-gold text-sm tracking-[0.2em] uppercase mb-4 font-bold">What Drives Us</h4>
          <h2 className="font-serif text-4xl md:text-5xl text-white">Vision & Mission</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-arkin-dark p-10 border border-white/5 shadow-sm hover:shadow-xl hover:border-arkin-gold/30 transition-all duration-300 group text-center">
            <div className="w-16 h-16 mx-auto mb-8 border border-arkin-gold/30 rounded-full flex items-center justify-center group-hover:bg-arkin-gold group-hover:text-white text-arkin-gold transition-all duration-300">
              <Eye size={24} />
            </div>
            <h3 className="font-serif text-2xl text-white mb-4">Our Vision</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              To be the most trusted and innovative construction company, setting benchmarks in quality, design, and customer satisfaction across the region.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-arkin-dark p-10 border border-white/5 shadow-sm hover:shadow-xl hover:border-arkin-gold/30 transition-all duration-300 group text-center">
            <div className="w-16 h-16 mx-auto mb-8 border border-arkin-gold/30 rounded-full flex items-center justify-center group-hover:bg-arkin-gold group-hover:text-white text-arkin-gold transition-all duration-300">
              <Target size={24} />
            </div>
            <h3 className="font-serif text-2xl text-white mb-4">Our Mission</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              To deliver world-class construction solutions that exceed expectations, built on a foundation of integrity, innovation, and sustainable practices.
            </p>
          </div>

           {/* Card 3 */}
           <div className="bg-arkin-dark p-10 border border-white/5 shadow-sm hover:shadow-xl hover:border-arkin-gold/30 transition-all duration-300 group text-center">
            <div className="w-16 h-16 mx-auto mb-8 border border-arkin-gold/30 rounded-full flex items-center justify-center group-hover:bg-arkin-gold group-hover:text-white text-arkin-gold transition-all duration-300">
              <Heart size={24} />
            </div>
            <h3 className="font-serif text-2xl text-white mb-4">Our Values</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Quality craftsmanship, transparent communication, timely delivery, and an unwavering dedication to turning our clients' dreams into reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;