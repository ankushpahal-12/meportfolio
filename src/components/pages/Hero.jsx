import React, { useEffect, useRef, useState } from 'react';
import { FileText, Cpu, Database, Cloud, Terminal, Network, Code, Brain, Activity, Shield, Zap } from 'lucide-react';
import profileImg from '../../assets/profile.jpg';
import ankushcv from '../../assets/ankushcv.pdf';
import MediaModal from '../MediaModal';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import NeuralBackground from '../NeuralBackground';
import SocialDock from '../SocialDock';
import CyberButton from '../CyberButton';

gsap.registerPlugin(TextPlugin);

const Hero = () => {
    const heroRef = useRef(null);
    const tl = useRef(null);
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.current
                .to('.hero-badge', { opacity: 1, y: 0, duration: 0.8 })
                .to('.hero-title span', { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, "-=0.6")
                .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
                .to('.hero-desc', { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
                .to('.hero-btn-group', { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
                .to('.tech-badge', { opacity: 1, scale: 1, duration: 0.5, stagger: 0.05 }, "-=0.4")
                .to('.profile-container', { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.2)" }, "-=0.8")
                .to('.social-link', { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, "-=0.5");

            // Typing Effect
            const techList = ["Neural Networks", "Deep Learning", "Computer Vision", "NLP & LLMs", "Reinforcement Learning"];
            let masterTl = gsap.timeline({ repeat: -1 });

            techList.forEach((tech) => {
                let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1.5 });
                tl.to('.typing-tech', { duration: 1.5, text: tech, ease: "none" });
                masterTl.add(tl);
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
            {/* Background Canvas */}
            <NeuralBackground />

            {/* Ambient Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-10 pointer-events-none animate-float"></div>

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

                {/* Left Content */}
                <div className="order-2 lg:order-1">
                    {/* Status Badge */}
                    <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-8 opacity-0 translate-y-4 backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        System Online • Ready to Deploy
                    </div>

                    {/* Headline */}
                    <div className="hero-title mb-6 relative z-10">
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
                            <span className="block opacity-0 translate-y-8">Architecting</span>
                            <span className="block opacity-0 translate-y-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-white drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                                Intelligence
                            </span>
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <h2 className="hero-subtitle text-xl lg:text-2xl text-slate-300 mb-8 opacity-0 translate-y-4 font-light">
                        Hi, I'm <span className="text-white font-semibold">Ankush Pahal</span>.
                        <span className="block mt-2 text-blue-400 font-mono text-lg flex items-center gap-2">
                            <Terminal size={18} />
                            <span>Building</span>
                            <span className="typing-tech text-white border-r-2 border-blue-500 pr-1 h-6 inline-block"></span>
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="hero-desc text-slate-400 text-lg max-w-xl leading-relaxed mb-10 opacity-0 translate-y-4 border-l-2 border-slate-800 pl-6">
                        Bridging the gap between theoretical AI and production-grade software. I specialize in designing scalable ML pipelines and robust full-stack systems.
                    </p>

                    {/* Buttons */}
                    <div className="hero-btn-group flex flex-col sm:flex-row gap-6 mb-12 opacity-0 translate-y-4">
                        <CyberButton href="#projects" variant="primary">
                            <Brain size={20} />
                            View Projects
                        </CyberButton>

                        <CyberButton onClick={() => setIsResumeOpen(true)} variant="secondary">
                            <FileText size={20} />
                            View CV
                        </CyberButton>
                    </div>

                    {/* Tech Stack - "System Modules" style */}
                    <div className="flex flex-wrap gap-3">
                        {[
                            { icon: Terminal, label: 'Python' },
                            { icon: Cpu, label: 'TensorFlow' },
                            { icon: Network, label: 'PyTorch' },
                            { icon: Database, label: 'SQL' },
                            { icon: Cloud, label: 'AWS' }
                        ].map((tech, index) => (
                            <div key={index} className="tech-badge flex items-center gap-2 px-4 py-2 bg-slate-900/40 border border-white/5 rounded-lg text-slate-300 text-xs font-mono opacity-0 scale-90 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-300 transition-all cursor-default shadow-lg backdrop-blur-sm group">
                                <tech.icon size={14} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                                {tech.label}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Content - Profile with HUD Scanner */}
                <div className="profile-container order-1 lg:order-2 flex flex-col items-center lg:items-end relative opacity-0 scale-90">
                    <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px] mb-8 perspective-1000">

                        {/* Rotating HUD Rings */}
                        <div className="absolute inset-0 rounded-full border border-blue-500/20 w-full h-full animate-[spin_10s_linear_infinite] [border-style:dashed]"></div>
                        <div className="absolute inset-8 rounded-full border border-purple-500/20 w-[calc(100%-4rem)] h-[calc(100%-4rem)] animate-[spin_15s_linear_infinite_reverse] [border-style:dotted]"></div>

                        {/* Static HUD Elements */}
                        <div className="absolute -inset-4 border border-white/5 rounded-full w-[calc(100%+2rem)] h-[calc(100%+2rem)]"></div>
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
                        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"></div>

                        {/* Profile Image Container */}
                        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-slate-800 bg-slate-950 p-2 group shadow-[0_0_50px_rgba(59,130,246,0.15)]">
                            <div className="w-full h-full rounded-full overflow-hidden relative">
                                <img
                                    src={profileImg}
                                    alt="Profile"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                                />

                                /* Overlay Gradient */
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 mix-blend-overlay opacity-80 group-hover:opacity-40 transition-opacity"></div>

                                /* Scanner Effect */
                                <div className="scanner-line absolute top-0 left-0 w-full h-[2px] bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,1)] opacity-75"></div>

                                /* Grid Overlay */
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
                            </div>
                        </div>

                        {/* Floating Holographic Stats */}
                        <div className="absolute top-0 right-0 translate-x-1/4 translate-y-1/4 bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-[0_0_30px_-5px_rgba(37,99,235,0.3)] animate-float z-20 hover:border-blue-500/50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-400 border border-blue-500/20">
                                    <Activity size={20} />
                                </div>
                                <div>
                                    <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider mb-0.5">Model Accuracy</div>
                                    <div className="text-lg font-bold text-white font-mono">98.5%</div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-12 -left-12 bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)] animate-float z-20 hover:border-purple-500/50 transition-colors" style={{ animationDelay: '2s' }}>
                            <div className="flex items-center gap-4">
                                <div className="p-2.5 bg-purple-500/10 rounded-lg text-purple-400 border border-purple-500/20">
                                    <Shield size={20} />
                                </div>
                                <div>
                                    <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider mb-0.5">System Status</div>
                                    <div className="text-lg font-bold text-white font-mono text-green-400">SECURE</div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Corner Brackets */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500/50 rounded-br-lg"></div>

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
        </section>
    );
};

export default Hero;