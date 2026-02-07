import React, { useEffect, useRef } from 'react';
import { Github, FileText, ChevronRight, Terminal, Cpu, Database, Cloud, Linkedin, Twitter, Mail } from 'lucide-react';
import profileImg from '../assets/profile.jpg'; // Placeholder import
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const SocialLink = ({ href, icon: Icon }) => (
    <a
        href={href}
        className="social-link p-3 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 hover:border-blue-500/50 rounded-xl text-slate-400 hover:text-blue-400 transition-colors shadow-lg group backdrop-blur-sm opacity-0 translate-y-4 inline-block"
    >
        <Icon size={20} />
    </a>
);

const Hero = () => {
    const heroRef = useRef(null);
    const tl = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.current
                .to('.hero-bg', { opacity: 1, duration: 1.5, stagger: 0.2 }) // bg elements
                .to('.hero-badge', { opacity: 1, y: 0, duration: 0.8 }, "-=1")
                .to('.hero-title span', { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, "-=0.6")
                .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.8 }, "-=0.6") // Subtitle animation
                .to('.hero-desc', { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
                .to('.hero-btn', { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, "-=0.4")
                .to('.tech-badge', { opacity: 1, scale: 1, duration: 0.5, stagger: 0.05 }, "-=0.4") // Tech badges after buttons
                .to('.profile-container', { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "back.out(1.2)" }, "-=0.8")
                .to('.social-link', { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, "-=0.5");

            // Typing Effect for Technologies
            const techList = ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Python & PyTorch", "Computer Vision", "NLP & LLMs"];
            let masterTl = gsap.timeline({ repeat: -1 });

            techList.forEach((tech) => {
                let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1.5 });
                tl.to('.typing-tech', { duration: 1.5, text: tech, ease: "none" });
                masterTl.add(tl);
            });

            // Button Hover Animations
            const buttons = document.querySelectorAll('.hero-btn');
            buttons.forEach(btn => {
                btn.addEventListener('mouseenter', () => gsap.to(btn, { scale: 1.03, duration: 0.2 }));
                btn.addEventListener('mouseleave', () => gsap.to(btn, { scale: 1, duration: 0.2 }));
            });

            const socialLinks = document.querySelectorAll('.social-link');
            socialLinks.forEach(link => {
                link.addEventListener('mouseenter', () => gsap.to(link, { scale: 1.1, y: -5, duration: 0.2 }));
                link.addEventListener('mouseleave', () => gsap.to(link, { scale: 1, y: 0, duration: 0.2 }));
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="hero-bg absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none opacity-0"></div>
            <div className="hero-bg absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -z-10 pointer-events-none opacity-0"></div>

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Text Content - Left Side */}
                <div className="order-2 lg:order-1">
                    <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider mb-6 opacity-0 translate-y-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Available for New Projects
                    </div>

                    <h1 className="hero-title text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-2 leading-[1.1] whitespace-nowrap">
                        <span className="inline-block opacity-0 translate-y-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">ANKUSH</span>
                        <span className="inline-block opacity-0 translate-y-8 text-blue-500 ml-4">PAHAL</span>
                    </h1>

                    {/* Subtitle - Restoring Context */}
                    <h2 className="hero-subtitle text-2xl lg:text-3xl font-semibold text-slate-300 mb-6 opacity-0 translate-y-4">
                        Artificial Intelligence Engineer
                    </h2>

                    <div className="hero-desc h-8 mb-6 opacity-0 translate-y-4">
                        <span className="text-lg text-slate-400 font-mono">
                            Expertise in <span className="typing-tech text-blue-400 font-bold border-r-2 border-blue-500 pr-1"></span>
                        </span>
                    </div>

                    <p className="hero-desc text-slate-400 text-base lg:text-lg max-w-xl leading-relaxed mb-8 opacity-0 translate-y-4">
                        Ready to build intelligent solutions? I'm currently available for full-time opportunities and freelance projects. If you have a challenging problem that needs an AI-driven solution, let's connect.
                    </p>

                    {/* CTA Buttons - Moved below name/text */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <a href="#projects" className="hero-btn btn-primary px-8 py-4 flex items-center justify-center gap-2 opacity-0 translate-y-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 font-medium">
                            View Portfolio
                            <ChevronRight size={18} />
                        </a>
                        <a href="/resume.pdf" className="hero-btn btn-secondary px-8 py-4 flex items-center justify-center gap-2 opacity-0 translate-y-4 bg-slate-800/50 hover:bg-slate-800 text-white border border-slate-700 rounded-xl transition-all">
                            <FileText size={18} />
                            Download CV
                        </a>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-3">
                        {[
                            { icon: Terminal, label: 'Python' },
                            { icon: Cpu, label: 'TensorFlow' },
                            { icon: Database, label: 'SQL' },
                            { icon: Cloud, label: 'AWS' }
                        ].map((tech, index) => (
                            <div key={index} className="tech-badge flex items-center gap-2 px-3 py-1.5 bg-slate-900/50 border border-slate-800 rounded-lg text-slate-400 text-xs font-mono opacity-0 scale-90">
                                <tech.icon size={14} className="text-blue-400" />
                                {tech.label}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Profile Image - Right Side - Enhanced Glow */}
                <div className="profile-container order-1 lg:order-2 flex flex-col items-center lg:items-end relative opacity-0 scale-90">
                    <div className="relative w-72 h-72 lg:w-96 lg:h-96 mb-8">
                        {/* Animated Gradient Glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-40 animate-pulse-slow"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-2xl transform scale-105"></div>

                        {/* Profile Container - Padded Glass Card */}
                        <div className="relative w-full h-full rounded-2xl border border-white/10 shadow-2xl bg-slate-900/50 backdrop-blur-sm p-3 group">
                            <div className="w-full h-full rounded-xl overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
                                {/* Placeholder for Profile Image */}
                                <div className="w-full h-full flex items-center justify-center bg-slate-950 text-slate-700 font-mono text-sm">
                                    <img src={profileImg} alt="Profile" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerText = 'Add details in src/assets/profile.jpg' }} />
                                </div>

                                {/* Overlay Effect */}
                                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div
                            className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3 animate-float"
                        >
                            <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                                <Cpu size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Focus</p>
                                <p className="text-sm font-bold text-white">Deep Learning</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Dock - Below Profile */}
                    <div className="flex gap-4">
                        <SocialLink href="#" icon={Linkedin} />
                        <SocialLink href="#" icon={Github} />
                        <SocialLink href="#" icon={Twitter} />
                        <SocialLink href="mailto:hello@example.com" icon={Mail} />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;