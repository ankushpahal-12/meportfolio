import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Twitter, FileText, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Resume from '../assets/ankushcv.pdf';
import MediaModal from './MediaModal';

const Footer = () => {
    const footerRef = useRef(null);
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Staggered Fade In for Footer Content
            gsap.fromTo('.footer-element',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Magnetic Effect for Social Icons & Buttons
            const magnetics = document.querySelectorAll('.magnetic-btn');

            magnetics.forEach((btn) => {
                btn.addEventListener('mousemove', (e) => {
                    const { left, top, width, height } = btn.getBoundingClientRect();
                    const x = e.clientX - (left + width / 2);
                    const y = e.clientY - (top + height / 2);

                    gsap.to(btn, {
                        x: x * 0.3,
                        y: y * 0.3,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });

                btn.addEventListener('mouseleave', () => {
                    gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
                });
            });

        }, footerRef);

        return () => ctx.revert();
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer ref={footerRef} className="relative pt-32 pb-12 bg-slate-950 overflow-hidden border-t border-slate-900/50">

            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                {/* 1. Main Heading */}
                <h2 className="footer-element text-5xl md:text-7xl font-bold tracking-tight mb-6">
                    <span className="text-white">Let's build </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-gradient-x">
                        intelligent systems
                    </span>
                    <span className="text-white"> together.</span>
                </h2>

                {/* 2. Call-to-Action Buttons */}
                <div className="footer-element flex flex-wrap justify-center gap-6 mt-12 mb-20">
                    <a
                        href="mailto:ankushpayal58@gmail.com"
                        className="magnetic-btn btn-primary px-8 py-4 flex items-center gap-2 text-lg group"
                    >
                        <Mail size={20} />
                        <span>Contact Me</span>
                    </a>

                    <a
                        href="https://github.com/ankushpahal-12"
                        target="_blank"
                        rel="noreferrer"
                        className="magnetic-btn btn-secondary px-8 py-4 flex items-center gap-2 text-lg group bg-slate-900/50 backdrop-blur-sm"
                    >
                        <Github size={20} />
                        <span>View GitHub</span>
                        <ArrowUpRight size={16} className="opacity-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>

                    <button
                        onClick={() => setIsResumeOpen(true)}
                        className="magnetic-btn btn-secondary px-8 py-4 flex items-center gap-2 text-lg group bg-slate-900/50 backdrop-blur-sm cursor-pointer"
                    >
                        <FileText size={20} />
                        <span>View CV</span>
                    </button>
                </div>

                {/* Divider Line with Gradient Center */}
                <div className="footer-element w-full h-px bg-slate-800 relative mb-12">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-[1px]"></div>
                </div>

                {/* 3. Footer Navigation & Socials */}
                <div className="footer-element w-full flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Navigation */}
                    <nav className="flex gap-8">
                        {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors uppercase tracking-wider"
                            >
                                {item}
                            </button>
                        ))}
                    </nav>

                    {/* Social Icons (Minimal) */}
                    <div className="flex gap-6">
                        {[
                            { icon: Github, href: "https://github.com/ankushpahal-12" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/pahalankush/" },
                            { icon: Mail, href: "mailto:ankushpayal58@gmail.com" }
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                className="magnetic-btn p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 transition-all duration-300"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* 4. Meta & Signature */}
                <div className="footer-element mt-16 text-center">
                    <p className="text-slate-600 text-sm font-light">
                        &copy; {new Date().getFullYear()} Ankush. Built with
                        <span className="text-slate-400 font-medium"> React</span>,
                        <span className="text-slate-400 font-medium"> GSAP</span> &
                        <span className="text-slate-400 font-medium"> Vite</span>.
                    </p>
                </div>

            </div>

            {/* Resume Preview Modal */}
            <MediaModal
                isOpen={isResumeOpen}
                onClose={() => setIsResumeOpen(false)}
                title="My Resume"
                fileName="ankushcv.pdf"
                fileSrc={Resume}
            />
        </footer>
    );
};

export default Footer;
