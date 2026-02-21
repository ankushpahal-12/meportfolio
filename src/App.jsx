import React, { useEffect } from 'react';
import Navbar from './components/pages/Navbar';
import Hero from './components/pages/Hero';
import About from './components/pages/About';
import Projects from './components/ProjectGrid';
import Skills from './components/pages/Skills';
import Experience from './components/pages/Experience';
import Education from './components/pages/Education';
import Certification from './components/pages/Certification';
import Training from './components/pages/Training';
import Impact from './components/pages/Impact';
import WhyHireMe from './components/pages/WhyHireMe';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import CustomCursor from './components/CustomCursor';
import SocialDock from './components/SocialDock';
import TimeWidget from './components/TimeWidget';
import Preloader from './components/Preloader';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReactLenis from 'lenis/react';

gsap.registerPlugin(ScrollTrigger);

function App() {

  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    // Lenis Smooth Scroll setup within useEffect to ensure DOM is ready
  }, []);

  return (
    <ReactLenis root>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      <main className="relative min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/20 overflow-x-hidden cursor-none">
        <CustomCursor />

        {/* Global Scanline Effect */}
        <div className="scanline"></div>

        {/* Subtle Noise Texture Overlay */}
        <div className="fixed inset-0 z-[100] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        {/* Social Dock - Fixed Left */}
        <div className="hidden md:block fixed left-6 top-1/2 -translate-y-1/2 z-50">
          <SocialDock orientation="vertical" />
        </div>

        {/* Background Gradients for Depth - Deep Blue */}
        <div className="fixed top-0 left-0 w-full h-[800px] bg-gradient-to-b from-blue-900/20 via-slate-900/10 to-transparent pointer-events-none z-0"></div>

        <Navbar />

        <div className="relative z-10 flex flex-col gap-0">
          <Hero />
          <Impact />
          <About />
          <Projects />
          <Skills />
          <Experience />

          <Education />

          <Certification />

          <Training />

          <WhyHireMe />
          <Contact />
        </div>

        <Footer />
        <TimeWidget />
      </main>
    </ReactLenis>
  );
}

export default App;
