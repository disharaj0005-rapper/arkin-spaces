import React from 'react';
import { STATS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-arkin-dark relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-arkin-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm blur-lg"></div>
            <div className="relative overflow-hidden shadow-2xl border border-white/5">
              <img
                src="/images/about-image.jpg"
                alt="Luxury Home Detail"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Text Side */}
          <div>
            <h4 className="text-arkin-gold text-sm tracking-[0.2em] uppercase mb-4 font-bold">About Arkin Spaces</h4>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
              Excellence In <br /> Every Detail
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Arkin Spaces is a premier construction and design firm dedicated to delivering exceptional quality in every project. From concept to completion, we bring expertise, innovation, and unwavering commitment to crafting spaces that stand the test of time.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-10">
              Our team of seasoned architects, engineers, and designers work collaboratively to ensure every project reflects our client's unique vision while maintaining the highest standards of craftsmanship and sustainability in Basaveshwaranagar and beyond.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              {STATS.map((stat, index) => (
                <div key={index}>
                  <h3 className="text-3xl md:text-4xl font-serif text-arkin-gold mb-1 font-semibold">{stat.value}</h3>
                  <p className="text-xs md:text-sm text-zinc-500 uppercase tracking-wider font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;