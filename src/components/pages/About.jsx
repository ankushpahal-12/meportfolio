import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Cpu, Globe, Rocket, Terminal, Database, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// --- Matrix Rain Effect (Subtle) ---
const MatrixRain = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const columns = Math.floor(width / 20);
        const drops = [];
        for (let i = 0; i < columns; i++) drops[i] = 1;

        const draw = () => {
            ctx.fillStyle = 'rgba(2, 6, 23, 0.05)'; // Fade out trail (slate-950)
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#0f0'; // Green text
            ctx.font = '15px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = String.fromCharCode(0x30A0 + Math.random() * 96);
                const color = Math.random() > 0.95 ? '#fff' : '#0ea5e9'; // White or Sky Blue
                ctx.fillStyle = color;
                ctx.fillText(text, i * 20, drops[i] * 20);

                if (drops[i] * 20 > height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 50);
        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        return () => clearInterval(interval);
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 opacity-10 pointer-events-none" />;
};

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".reveal-text", {
                scrollTrigger: {
                    trigger: ".reveal-text",
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.1
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="about" className="py-32 relative overflow-hidden bg-slate-950">
            {/* Background Layers */}
            <div className="absolute inset-0 bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <MatrixRain />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column - Holographic ID Card */}
                    <div className="relative group perspective-1000">
                        {/* Decorative Elements */}
                        <div className="absolute -top-12 -left-12 w-32 h-32 border-t-2 border-l-2 border-blue-500/30 rounded-tl-3xl"></div>
                        <div className="absolute -bottom-12 -right-12 w-32 h-32 border-b-2 border-r-2 border-purple-500/30 rounded-br-3xl"></div>

                        <div className="relative bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden transform transition-transform duration-500 group-hover:rotate-y-2 group-hover:rotate-x-2 shadow-2xl">
                            {/* Scanline */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-blue-400/50 shadow-[0_0_15px_rgba(96,165,250,0.8)] animate-scan-fast opacity-50"></div>

                            <div className="flex flex-col gap-6">
                                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                            <Terminal size={24} className="text-blue-400" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Identity</div>
                                            <div className="text-lg font-bold text-white">Ankush Pahal</div>
                                        </div>
                                    </div>
                                    <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-mono flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                        ONLINE
                                    </div>
                                </div>

                                <div className="space-y-4 font-mono text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Role</span>
                                        <span className="text-blue-300">AI Engineer</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Clearance</span>
                                        <span className="text-purple-300">Level 5 (Full Stack)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Location</span>
                                        <span className="text-white">India / Remote</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">System Uptime</span>
                                        <span className="text-green-300">99.9%</span>
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-white/5">
                                    <div className="text-xs text-slate-500 mb-2 uppercase tracking-wider">Core Directives</div>
                                    <div className="flex flex-wrap gap-2">
                                        {['Innovation', 'Scalability', 'Precision', 'Automation'].map((tag) => (
                                            <span key={tag} className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-xs text-slate-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Narrative Content */}
                    <div className="space-y-10">
                        <div className="reveal-text">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="h-px w-12 bg-blue-500"></span>
                                <span className="text-blue-400 font-mono text-sm tracking-widest uppercase">
                                    System Architecture
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Intelligence</span> for the Future.
                            </h2>
                        </div>

                        <div className="reveal-text space-y-6 text-slate-400 text-lg leading-relaxed border-l-2 border-slate-800 pl-6">
                            <p>
                                I am an <strong className="text-white">AI & ML Engineer</strong> who views code as a tool for evolution. My work bridges the gap between theoretical AI models and robust, scalable production systems.
                            </p>
                            <p>
                                Unlike traditional developers, I don't just write code; I design <strong className="text-blue-400">intelligent ecosystems</strong>. From data ingestion pipelines to real-time inference engines, I architect solutions that learn, adapt, and drive business value.
                            </p>
                        </div>

                        <div className="reveal-text grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: Cpu, title: "Neural Networks", desc: "Architecting Deep Learning models.", color: "blue" },
                                { icon: Database, title: "Data Engineering", desc: "Building scalable value pipelines.", color: "purple" },
                                { icon: Rocket, title: "Model Deployment", desc: "Serving AI at scale.", color: "green" },
                                { icon: Sparkles, title: "GenAI Solutions", desc: "Crafting LLM-driven experiences.", color: "pink" }
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="relative p-6 rounded-2xl bg-slate-900/40 border border-white/5 overflow-hidden transition-all duration-500 group hover:border-white/10 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] hover:-translate-y-1"
                                >
                                    {/* Hover Gradient Background (Fade In) */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                    {/* Animated Border Glow */}
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                                        <div className={`absolute top-0 right-0 w-24 h-24 bg-${item.color}-500/20 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2`}></div>
                                    </div>

                                    <div className="relative z-10 flex gap-4">
                                        <div className={`min-w-[48px] h-12 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center text-${item.color}-400 group-hover:text-white group-hover:scale-110 group-hover:border-${item.color}-500/50 transition-all duration-500 shadow-lg`}>
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-base mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-300">
                                                {item.title}
                                            </h4>
                                            <p className="text-slate-500 text-sm group-hover:text-slate-300 transition-colors duration-300">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;