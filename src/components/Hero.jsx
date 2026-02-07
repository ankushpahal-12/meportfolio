import React, { useEffect, useRef } from 'react';
import { Github, FileText, ChevronRight, Terminal, Cpu, Database, Cloud, Linkedin, Twitter, Mail, Brain, Code, Network } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import NeuralBackground from './NeuralBackground';

gsap.registerPlugin(TextPlugin);

const SocialLink = ({ href, icon: Icon }) => (
    <a
        href={href}
        className="social-link p-3 bg-slate-900/50 hover:bg-blue-600/20 border border-slate-800 hover:border-blue-500/50 rounded-xl text-slate-400 hover:text-blue-400 transition-colors shadow-lg group backdrop-blur-sm opacity-0 translate-y-4 inline-block relative overflow-hidden"
    >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <Icon size={20} className="relative z-10" />
    </a>
);

const Hero = () => {
    const heroRef = useRef(null);
    const tl = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.current
                .to('.hero-badge', { opacity: 1, y: 0, duration: 0.8 })
                .to('.hero-title span', { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, "-=0.6")
                .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
                .to('.hero-desc', { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
                .to('.hero-btn', { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, "-=0.4")
                .to('.tech-badge', { opacity: 1, scale: 1, duration: 0.5, stagger: 0.05 }, "-=0.4")
                .to('.profile-container', { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.2)" }, "-=0.8")
                .to('.social-link', { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, "-=0.5");

            // Typing Effect moved to main timeline or kept separate loop
            const techList = ["Neural Networks", "Deep Learning", "Computer Vision", "NLP & LLMs", "Reinforcement Learning"];
            let masterTl = gsap.timeline({ repeat: -1 });

            techList.forEach((tech) => {
                let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1.5 });
                tl.to('.typing-tech', { duration: 1.5, text: tech, ease: "none" });
                masterTl.add(tl);
            });

            // Scanner Effect for Profile
            gsap.to('.scanner-line', {
                top: '100%',
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut"
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
            {/* Background Canvas */}
            <NeuralBackground />

            {/* Ambient Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

                {/* Left Content */}
                <div className="order-2 lg:order-1">
                    {/* Status Badge */}
                    <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-6 opacity-0 translate-y-4 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        System Online • Ready to Deploy
                    </div>

                    {/* Headline */}
                    <h1 className="hero-title text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-4 leading-[1.1]">
                        <span className="block opacity-0 translate-y-8">Architecting</span>
                        <span className="block opacity-0 translate-y-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-white">
                            Intelligent Systems
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <h2 className="hero-subtitle text-xl lg:text-2xl text-slate-400 mb-6 opacity-0 translate-y-4 font-light">
                        Hi, I'm <span className="text-white font-semibold">Ankush Pahal</span>.
                        <span className="block mt-1 text-blue-400/80 font-mono text-lg">
                            &lt;AI_Engineer /&gt; specializing in <span className="typing-tech text-white border-r-2 border-blue-500 pr-1"></span>
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="hero-desc text-slate-400 text-base lg:text-lg max-w-xl leading-relaxed mb-8 opacity-0 translate-y-4 border-l-2 border-slate-800 pl-4">
                        Transforming complex data into actionable intelligence. Passionate about building scalable ML models and pushing the boundaries of what's possible with code.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <a href="#projects" className="hero-btn btn-primary px-8 py-4 flex items-center justify-center gap-2 opacity-0 translate-y-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 font-medium group">
                            <Brain size={18} className="group-hover:animate-pulse" />
                            View Projects
                        </a>
                        <a href="/resume.pdf" className="hero-btn btn-secondary px-8 py-4 flex items-center justify-center gap-2 opacity-0 translate-y-4 bg-slate-900/50 hover:bg-slate-800 text-white border border-slate-700 hover:border-blue-500/50 rounded-xl transition-all backdrop-blur-sm">
                            <FileText size={18} />
                            Download CV
                        </a>
                    </div>

                    {/* Tech Stack - "Model Parameters" style */}
                    <div className="flex flex-wrap gap-3">
                        {[
                            { icon: Terminal, label: 'Python' },
                            { icon: Cpu, label: 'TensorFlow' },
                            { icon: Network, label: 'PyTorch' },
                            { icon: Database, label: 'SQL' },
                            { icon: Cloud, label: 'AWS' }
                        ].map((tech, index) => (
                            <div key={index} className="tech-badge flex items-center gap-2 px-3 py-1.5 bg-slate-900/80 border border-slate-800 rounded-lg text-slate-300 text-xs font-mono opacity-0 scale-90 hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default">
                                <tech.icon size={14} className="text-blue-500" />
                                {tech.label}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Content - Profile with Scanner Effect */}
                <div className="profile-container order-1 lg:order-2 flex flex-col items-center lg:items-end relative opacity-0 scale-90">
                    <div className="relative w-72 h-72 lg:w-96 lg:h-96 mb-8 perspective-1000">

                        {/* Rotating Borders/Rings */}
                        <div className="absolute inset-0 rounded-full border border-blue-500/20 w-full h-full animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute inset-4 rounded-full border border-purple-500/20 w-[calc(100%-2rem)] h-[calc(100%-2rem)] animate-[spin_15s_linear_infinite_reverse]"></div>

                        {/* Profile Image Container */}
                        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-slate-800 bg-slate-950 p-1 group">
                            <div className="w-full h-full rounded-full overflow-hidden relative">
                                <img
                                    src={profileImg}
                                    alt="Profile"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 mix-blend-overlay"></div>

                                {/* Scanner Effect */}
                                <div className="scanner-line absolute top-0 left-0 w-full h-[2px] bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)] opacity-50"></div>
                            </div>
                        </div>

                        {/* Floating "Stats" Cards */}
                        <div className="absolute -top-4 -right-4 bg-slate-900/90 backdrop-blur-md p-3 rounded-lg border border-slate-700/50 shadow-xl animate-float">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                                    <Code size={16} />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 font-mono">Accuracy</div>
                                    <div className="text-sm font-bold text-white">98.5%</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-8 -left-8 bg-slate-900/90 backdrop-blur-md p-3 rounded-lg border border-slate-700/50 shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                                    <Brain size={16} />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 font-mono">Models</div>
                                    <div className="text-sm font-bold text-white">Deployed</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Social Stats/Dock */}
                    <div className="flex gap-4">
                        <SocialLink href="https://github.com/ankushpahal-12" icon={Github} />
                        <SocialLink href="https://www.linkedin.com/in/pahalankush/" icon={Linkedin} />
                        <SocialLink href="mailto:ankushpayal58@gmail.com" icon={Mail} />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;