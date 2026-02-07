import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProjectGrid from './components/ProjectGrid';
import Education from './components/Education';
import Training from './components/Training';
import Certification from './components/Certification';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';

import Contact from './components/Contact';

import Outro from './components/Outro';
import { ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/20 overflow-x-hidden cursor-none">
      <CustomCursor />

      {/* Subtle Noise Texture Overlay */}
      <div className="fixed inset-0 z-[100] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Background Gradients for Depth - Deep Blue */}
      <div className="fixed top-0 left-0 w-full h-[800px] bg-gradient-to-b from-blue-900/20 via-slate-900/10 to-transparent pointer-events-none z-0"></div>

      <Navbar />

      <div className="relative z-10 flex flex-col gap-24">
        <Hero />
        <About />
        <Skills />
        <ProjectGrid />

        <div className="bg-slate-900/30 flex flex-col gap-24">
          <Education />
          <Training />
          <Certification />
        </div>


        <Outro />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}

export default App;
