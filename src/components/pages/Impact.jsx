import React, { useEffect, useRef } from 'react';
import { Zap, Globe, Trophy, Activity, BarChart3, TrendingUp, Hexagon } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Impact = () => {
    const sectionRef = useRef(null);

    const stats = [
        {
            icon: Zap,
            value: "20+",
            label: "Projects Delivered",
            desc: "Successful deployments",
            color: "yellow",
            progress: 85
        },
        {
            icon: Globe,
            value: "100%",
            label: "Client Satisfaction",
            desc: "Based on feedback",
            color: "blue",
            progress: 100
        },
        {
            icon: Trophy,
            value: "5+",
            label: "Hackathon Wins",
            desc: "Innovation awards",
            color: "purple",
            progress: 90
        },
        {
            icon: Activity,
            value: "24/7",
            label: "System Uptime",
            desc: "Reliable architecture",
            color: "green",
            progress: 98
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title Animation
            gsap.from(".impact-title", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                }
            });

            // Card Animation
            gsap.from(".impact-card", {
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: ".impact-grid",
                    start: "top 80%",
                }
            });

            // Progress Bar Animation
            gsap.from(".progress-fill", {
                width: 0,
                duration: 1.5,
                ease: "power2.out",
                delay: 0.5,
                scrollTrigger: {
                    trigger: ".impact-grid",
                    start: "top 80%",
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 relative bg-slate-950 overflow-hidden">

            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0)_0%,rgba(2,6,23,0.8)_100%)] z-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50"></div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] animate-pulse-slow"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-20">

                {/* Section Header */}
                <div className="impact-title text-center mb-20 relative">
                    <div className="inline-flex items-center justify-center p-2 mb-6 rounded-lg bg-slate-900/50 border border-white/5 backdrop-blur-md">
                        <BarChart3 className="text-blue-400 mr-2" size={16} />
                        <span className="text-blue-400 font-mono text-xs tracking-widest uppercase">
                            System Performance
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
                        Engineered for <br className="md:hidden" />
                        <span className="relative inline-block">
                            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500">Maximum Impact</span>
                            {/* Text Glow */}
                            <div className="absolute inset-0 bg-blue-500/20 blur-xl -z-10"></div>
                        </span>
                    </h2>

                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Metrics that matter. Building high-performance solutions that drive real business value and operational efficiency.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="impact-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="impact-card relative group perspective-1000">

                            {/* Card Container */}
                            <div className="relative p-6 h-full rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/5 group-hover:border-blue-500/30 transition-all duration-500 overflow-hidden shadow-[0_0_20px_-5px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)] group-hover:-translate-y-2">

                                {/* Geometric Background Decorations */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent -mr-8 -mt-8 rounded-full blur-xl group-hover:from-blue-500/10 transition-all duration-500"></div>
                                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-white/5 to-transparent -ml-8 -mb-8 rounded-full blur-xl group-hover:from-purple-500/10 transition-all duration-500"></div>

                                {/* HUD Corner Markers */}
                                <div className={`absolute top-4 right-4 w-2 h-2 border-t-2 border-r-2 border-${stat.color}-500/30 group-hover:border-${stat.color}-500 transition-colors`}></div>
                                <div className={`absolute bottom-4 left-4 w-2 h-2 border-b-2 border-l-2 border-${stat.color}-500/30 group-hover:border-${stat.color}-500 transition-colors`}></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Icon Header */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className={`p-3 rounded-xl bg-slate-950 border border-slate-800 text-${stat.color}-400 group-hover:scale-110 group-hover:text-white group-hover:border-${stat.color}-500/50 transition-all duration-300 shadow-inner`}>
                                            <stat.icon size={24} />
                                        </div>
                                        <div className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-500 uppercase">
                                            Metric_0{index + 1}
                                        </div>
                                    </div>

                                    {/* Value */}
                                    <div className="mt-auto">
                                        <div className="flex items-end gap-2 mb-1">
                                            <span className="text-4xl lg:text-5xl font-bold text-white tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                                                {stat.value}
                                            </span>
                                            <TrendingUp className={`w-5 h-5 mb-2 text-${stat.color}-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300`} />
                                        </div>

                                        <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wide mb-1">
                                            {stat.label}
                                        </h3>
                                        <p className="text-xs text-slate-500 font-mono mb-4">
                                            {stat.desc}
                                        </p>

                                        {/* Progress Bar */}
                                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                            <div
                                                className={`progress-fill h-full bg-${stat.color}-500 shadow-[0_0_10px_${stat.color}] relative`}
                                                style={{ width: `${stat.progress}%` }}
                                            >
                                                <div className="absolute right-0 top-0 bottom-0 w-full bg-gradient-to-r from-transparent to-white/30"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Impact;
