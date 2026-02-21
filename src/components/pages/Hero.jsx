import React, { useEffect, useRef, useState } from 'react';
import { FileText, Cpu, Database, Cloud, Terminal, Network, Code, Brain, Activity, Shield, Zap } from 'lucide-react';
import profileImg from '../../assets/profile.jpg';
import ankushcv from '../../assets/ankushcv.pdf';
import MediaModal from '../MediaModal';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import StarField from '../StarField';
import NeuralBackground from '../NeuralBackground';
import SocialDock from '../SocialDock';
import CyberButton from '../CyberButton';

gsap.registerPlugin(TextPlugin);

import Lottie from "lottie-react";
import animationData from "../../assets/1.json";

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
                .to('.showcase-container', { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.2)" }, "-=0.8")
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
        <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-tr from-[#020617] via-[#0f172a] to-[#1e1b4b]">
            {/* Background Canvas */}
            <StarField />
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
                            { icon: "devicon-python-plain colored", label: 'Python' },
                            { icon: "devicon-tensorflow-original colored", label: 'TensorFlow' },
                            { icon: "devicon-pytorch-original colored", label: 'PyTorch' },
                            { icon: "devicon-mysql-plain colored", label: 'SQL' },
                            { icon: "devicon-amazonwebservices-plain-wordmark colored", label: 'AWS' }
                        ].map((tech, index) => (
                            <div key={index} className="tech-badge flex items-center gap-2 px-4 py-2 bg-slate-900/40 border border-white/5 rounded-lg text-slate-300 text-xs font-mono opacity-0 scale-90 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-300 transition-all cursor-default shadow-lg backdrop-blur-sm group">
                                <i className={`${tech.icon} text-sm opacity-70 group-hover:opacity-100 transition-opacity`} />
                                {tech.label}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Content - Tech Showcase GIF */}
                {/* Right Content - Tech Showcase Lottie Animation */}
                <div className="showcase-container order-1 lg:order-2 flex flex-col items-center lg:items-end relative opacity-0 scale-90 w-full">
                    <div className="relative w-full max-w-2xl flex items-center justify-center [mask-image:radial-gradient(circle,white_60%,transparent_100%)]">
                        <Lottie
                            animationData={animationData}
                            loop={true}
                            autoplay={true}
                            className="w-full h-auto object-contain block mix-blend-screen"
                        />
                        {/* Subtle Ambient Glow behind Animation */}
                        <div className="absolute inset-0 bg-blue-500/5 blur-[120px] -z-10 rounded-full"></div>
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