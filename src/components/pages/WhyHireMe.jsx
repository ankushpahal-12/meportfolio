import React, { useEffect, useRef } from 'react';
import { Target, Users, Zap, Briefcase, ArrowRight, CheckCircle2, Star, Code2, Rocket, BrainCircuit } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import CyberButton from '../CyberButton';
import profileImg from '../../assets/profile.jpg';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const WhyHireMe = () => {
    const containerRef = useRef(null);

    const benefits = [
        {
            icon: Rocket,
            title: "Day 1 Impact",
            desc: "Minimal onboarding time. I hit the ground running with production-ready code.",
            color: "blue"
        },
        {
            icon: BrainCircuit,
            title: "Problem Solver",
            desc: "I don't just fix bugs; I re-engineer systems for scalability.",
            color: "purple"
        },
        {
            icon: Users,
            title: "Team Multiplier",
            desc: "I document, mentor, and improve team velocity.",
            color: "green"
        },
        {
            icon: Code2,
            title: "Full-Stack Vision",
            desc: "Understanding the entire stack from DB to UI for holistic optimization.",
            color: "orange"
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".reveal-up", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                }
            });

            // Typewriter Effect
            gsap.to(".typewriter-text", {
                text: "Lines of Code.",
                duration: 1.5,
                ease: "power1.in",
                delay: 0.5,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                }
            });

            gsap.from(".benefit-card", {
                y: 50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".benefits-grid",
                    start: "top 85%",
                }
            });


            gsap.from(".profile-visual", {
                scale: 0.9,
                opacity: 0,
                duration: 1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="pt-24 md:pt-32 pb-8 md:pb-12 relative bg-slate-950 overflow-hidden">

            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">

                    {/* Left: Persuasive Text */}
                    <div className="order-2 lg:order-1 space-y-8">

                        <div className="reveal-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono uppercase tracking-wider shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Open to Opportunities
                        </div>

                        <h2 className="reveal-up text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                            More Than Just <br />
                            <span className="typewriter-text text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500"></span>
                            <span className="text-blue-400 sm:hidden">_</span>
                        </h2>

                        <p className="reveal-up text-lg text-slate-400 leading-relaxed max-w-lg">
                            Hiring isn't just about filling a seat. It's about ROI.
                            I bring a unique blend of <strong className="text-white">technical expertise</strong>, <strong className="text-white">product ownership</strong>, and <strong className="text-white">relentless execution</strong> to drive your engineering goals forward.
                        </p>

                        <div className="reveal-up flex flex-col gap-4">
                            {[
                                "Production-Grade System Design",
                                "AI/ML Integration capabilities",
                                "Cross-functional communication"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:border-blue-500/50 transition-colors">
                                        <CheckCircle2 size={16} className="text-blue-400 group-hover:text-blue-300" />
                                    </div>
                                    <span className="text-slate-300 font-medium group-hover:text-white transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="reveal-up pt-4">
                            <CyberButton href="#contact" variant="primary" className="shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)]">
                                Let's Build Something Great <ArrowRight size={18} className="ml-2" />
                            </CyberButton>
                        </div>
                    </div>

                    {/* Right: Square Profile Image */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="profile-visual relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border border-white/10 group">
                            {/* Cyber Overlay */}
                            <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10"></div>
                            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.8)_100%)] z-10"></div>

                            {/* Image */}
                            <img
                                src={profileImg}
                                alt="Ankush Pahal"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                            />

                            {/* Decorative Borders */}
                            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-blue-500/50 z-20 rounded-tl-lg"></div>
                            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-purple-500/50 z-20 rounded-br-lg"></div>

                            {/* Status Tag */}
                            <div className="absolute bottom-6 left-6 z-20 flex flex-col">
                                <span className="text-xs text-slate-400 font-mono uppercase tracking-widest mb-1">Status</span>
                                <span className="text-lg font-bold text-white flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                    Online
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom: Bento Grid Benefits (Full Width) */}
                <div className="benefits-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="benefit-card relative p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-white/20 transition-all duration-500 group overflow-hidden"
                        >
                            {/* Hover Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-${benefit.color}-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`w-12 h-12 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-center text-${benefit.color}-400 group-hover:scale-110 group-hover:bg-${benefit.color}-500/20 transition-all duration-500`}>
                                        <benefit.icon size={24} />
                                    </div>
                                    <div className={`w-8 h-8 rounded-full border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0`}>
                                        <Star size={12} className={`text-${benefit.color}-400 fill-${benefit.color}-400`} />
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                                        {benefit.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyHireMe;
