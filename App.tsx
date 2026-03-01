import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-zinc-100 bg-arkin-dark selection:bg-arkin-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Vision />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;