import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Twitter, FileText, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Resume from '../../assets/ankushcv.pdf';
import MediaModal from '../MediaModal';
import Typewriter from '../Typewriter';
import CyberButton from '../CyberButton'; // Imported new button

const Footer = () => {
    const footerRef = useRef(null);
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const [startTyping, setStartTyping] = useState(false);

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
                        toggleActions: "play none none reverse",
                        onEnter: () => setStartTyping(true) // Trigger typing on scroll
                    }
                }
            );

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
                    <span className="text-white">Ready to drive </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-gradient-x">
                        {startTyping && <Typewriter text="innovation & impact" delay={50} />}
                    </span>
                    <span className="text-white"> in your team.</span>
                </h2>

                {/* 2. Call-to-Action Buttons - EXTRAORDINARY UPDATE */}
                <div className="footer-element flex flex-wrap justify-center gap-6 mt-12 mb-20">
                    <CyberButton
                        href="mailto:ankushpayal58@gmail.com"
                        variant="primary"
                    >
                        <Mail size={20} />
                        <span>Contact Me</span>
                    </CyberButton>

                    <CyberButton
                        href="https://github.com/ankushpahal-12"
                        variant="secondary"
                    >
                        <Github size={20} />
                        <span>View GitHub</span>
                        <ArrowUpRight size={16} className="opacity-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </CyberButton>

                    <CyberButton
                        onClick={() => setIsResumeOpen(true)}
                        variant="primary"
                        className="bg-transparent border-slate-600"
                    >
                        <FileText size={20} />
                        <span>View CV</span>
                    </CyberButton>
                </div>

                {/* Divider Line with Gradient Center */}
                <div className="footer-element w-full h-px bg-slate-800 relative mb-12">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-[1px]"></div>
                </div>

                {/* 3. Footer Navigation & Socials */}
                {/* Main Footer Grid */}
                <div className="footer-element grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16 w-full">

                    {/* Brand & Socials (Col 1 - 4/12) */}
                    <div className="md:col-span-4 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20">
                                A
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">Ankush<span className="text-blue-500">.Pahal</span></span>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                            Crafting intelligent digital experiences. Based in India, working globally.
                        </p>
                        <div className="flex gap-4">
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
                                    className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-110"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* About Me (Col 2 - 5/12) */}
                    <div className="md:col-span-5 space-y-6">
                        <h4 className="text-white font-bold text-lg relative inline-block">
                            About Me
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-500 rounded-full"></span>
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            I'm Ankush, a passionate Full Stack AI Engineer. I specialize in building scalable web applications and integrating advanced AI models to solve real-world problems. I'm always eager to learn new technologies and take on challenging projects.
                        </p>
                    </div>

                    {/* Quick Links (Col 3 - 3/12) */}
                    <div className="md:col-span-3 space-y-6">
                        <h4 className="text-white font-bold text-lg relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-purple-500 rounded-full"></span>
                        </h4>
                        <nav className="flex flex-col gap-3">
                            {['Home', 'Projects', 'Skills', 'Certifications', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm text-left w-fit flex items-center gap-2 group"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors"></span>
                                    {item}
                                </button>
                            ))}
                        </nav>
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
