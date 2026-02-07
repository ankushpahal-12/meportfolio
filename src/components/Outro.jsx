import React, { useEffect, useRef } from 'react';
import { ArrowRight, Code, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Register plugins inside component to ensure availability or assume global registration if done in App
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Outro = () => {
    const sectionRef = useRef(null);
    const cursorRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%", // Trigger when section is well into view
                    toggleActions: "play none none none" // Play once
                }
            });

            // 1. Typing Animation
            tl.to('.typing-text', {
                duration: 3.5,
                text: {
                    value: "Building intelligent systems that scale.",
                    delimiter: ""
                },
                ease: "none",
                onUpdate: () => {
                    // Optional: Randomize cursor blinking speed or color during typing
                }
            });

            // 2. Fade out cursor
            tl.to(cursorRef.current, { opacity: 0, display: 'none', duration: 0.5 });

            // 3. Reveal Subtext & Buttons
            tl.fromTo('.outro-fade',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" },
                "-=0.2"
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="min-h-[80vh] flex flex-col items-center justify-center relative px-6 overflow-hidden bg-slate-950">
            {/* Abstract Background - Low Opacity */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[80px]"></div>
            </div>

            {/* Content Container */}
            <div className="max-w-5xl mx-auto text-center relative z-10">
                {/* Headline with Cursor */}
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 min-h-[1.2em] md:min-h-[1.5em] leading-tight">
                    <span className="typing-text"></span>
                    <span ref={cursorRef} className="animate-blink inline-block w-1.5 h-10 md:h-16 lg:h-20 bg-blue-500 ml-1 align-middle"></span>
                </h2>

                {/* Subtext */}
                <p className="outro-fade opacity-0 text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                    From concept to deployment, I engineer AI solutions that drive real-world impact.
                </p>

                {/* CTA Buttons */}
                <div className="outro-fade opacity-0 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a href="#projects" className="btn-primary px-8 py-4 flex items-center gap-2 group">
                        <Code size={20} />
                        View My Work
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#contact" className="btn-secondary px-8 py-4 flex items-center gap-2">
                        <Sparkles size={20} />
                        Let's Build Something
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Outro;
