import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import ankushcv from '../assets/ankushcv.pdf';
import MediaModal from './MediaModal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Magnetic Component
const Magnetic = ({ children }) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Disable on mobile/touch
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const xTo = gsap.quickTo(element, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(element, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = element.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.35); // Adjust strength
            yTo(y * 0.35);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return React.cloneElement(children, { ref });
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const navRef = useRef(null);
    const containerRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Scroll Animation for Navbar
            ScrollTrigger.create({
                start: "top top",
                end: 99999,
                onUpdate: (self) => {
                    // Shrink and solid background on scroll
                    if (self.scroll() > 50) {
                        gsap.to(containerRef.current, {
                            scale: 0.95,
                            backgroundColor: "rgba(15, 23, 42, 0.8)", // slate-900/80
                            backdropFilter: "blur(16px)",
                            boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5)",
                            border: "1px solid rgba(255,255,255,0.05)",
                            y: 10,
                            duration: 0.5,
                            ease: "power2.out"
                        });
                    } else {
                        gsap.to(containerRef.current, {
                            scale: 1,
                            backgroundColor: "rgba(15, 23, 42, 0.4)", // transparent/glass
                            backdropFilter: "blur(8px)",
                            boxShadow: "0 0 0 0 rgba(0,0,0,0)",
                            border: "1px solid rgba(255,255,255,0.05)",
                            y: 0,
                            duration: 0.5,
                            ease: "power2.out"
                        });
                    }
                }
            });
        }, navRef);

        return () => ctx.revert();
    }, []);

    // Mobile Menu Animation
    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(menuRef.current,
                { opacity: 0, y: -20, display: 'none' },
                { opacity: 1, y: 0, display: 'flex', duration: 0.4, ease: "power3.out" }
            );
        } else if (menuRef.current) {
            gsap.to(menuRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.3,
                ease: "power3.in",
                onComplete: () => gsap.set(menuRef.current, { display: 'none' })
            });
        }
    }, [isOpen]);

    const navLinks = [
        { name: 'Projects', href: '#projects' },
        { name: 'Training', href: '#training' },
        { name: 'Skills', href: '#skills' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
        { name: 'Resume', href: ankushcv, target: '_blank' },
    ];

    return (
        <>
            <div ref={navRef} className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pointer-events-none">
                {/* 
                Floating Pill Container 
                pointer-events-auto needed because parent has pointer-events-none to let click through to sides 
            */}
                <div
                    ref={containerRef}
                    className="pointer-events-auto relative px-2 py-2 md:px-6 md:py-3 rounded-full bg-slate-900/40 border border-white/5 backdrop-blur-md transition-all duration-300 mx-4 max-w-[90vw] md:max-w-fit flex items-center justify-between gap-4 md:gap-12"
                >
                    {/* Logo */}
                    <Magnetic>
                        <a href="#" className="flex items-center gap-2 px-2 group">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs group-hover:scale-110 transition-transform">
                                AI
                            </div>
                            <span className="text-sm font-bold tracking-tight text-white hidden sm:block">
                                Ankush<span className="text-blue-500">.Eng</span>
                            </span>
                        </a>
                    </Magnetic>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Magnetic>
                                    <a
                                        href={link.href}
                                        target={link.target}
                                        rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                                        onClick={(e) => {
                                            if (link.name === 'Resume') {
                                                e.preventDefault();
                                                setIsResumeOpen(true);
                                            }
                                        }}
                                        className="relative px-5 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-full hover:bg-white/5 block group overflow-hidden"
                                    >
                                        <span className="relative z-10">{link.name}</span>
                                        {/* Hover Glow Effect */}
                                        <span className="absolute inset-0 bg-blue-500/10 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 ease-out origin-center"></span>
                                    </a>
                                </Magnetic>
                            </li>
                        ))}
                    </ul>

                    {/* Social / CTA */}
                    <div className="hidden md:flex items-center gap-2 pl-4 border-l border-white/10">
                        <Magnetic>
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                                <Github size={18} />
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                                <Twitter size={18} />
                            </a>
                        </Magnetic>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay - Separate from the pill to avoid layout issues */}
                <div
                    ref={menuRef}
                    className="absolute top-24 left-4 right-4 bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-white/10 p-6 flex-col items-center gap-6 hidden md:hidden shadow-2xl pointer-events-auto"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target={link.target}
                            rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                            className="text-lg font-medium text-slate-200 hover:text-blue-400 transition-colors w-full text-center py-2"
                            onClick={(e) => {
                                if (link.name === 'Resume') {
                                    e.preventDefault();
                                    setIsResumeOpen(true);
                                }
                                setIsOpen(false);
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex gap-4 mt-2">
                        <div className="flex gap-4 mt-2">
                            <a href="https://github.com/ankushpahal-12" className="p-3 bg-white/5 rounded-full"><Github size={20} /></a>
                            <a href="https://www.linkedin.com/in/pahalankush/" className="p-3 bg-white/5 rounded-full"><Linkedin size={20} /></a>
                        </div>
                    </div>
                </div>

            </div>

            {/* Resume Preview Modal */}
            <MediaModal
                isOpen={isResumeOpen}
                onClose={() => setIsResumeOpen(false)}
                title="My Resume"
                fileName="ankushcv.pdf"
                fileSrc={ankushcv}
            />
        </>
    );
};

export default Navbar;
