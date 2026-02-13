import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Code, Cpu, Globe } from 'lucide-react';
import GlassCard from './GlassCard';
import Typewriter from './Typewriter';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background Decorative Elem */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-6">
                <GlassCard className="p-8 md:p-12 border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                        {/* Left Column: Heading & Visuals */}
                        <div className="md:col-span-5 relative flex flex-col gap-8">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="w-12 h-px bg-blue-500"></span>
                                    <span className="text-blue-400 font-mono text-sm tracking-widest uppercase whitespace-nowrap">
                                        Who I Am
                                    </span>
                                </div>

                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                    <span className="block text-slate-400 text-2xl md:text-3xl mb-3 font-light">I build</span>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-white">
                                        <Typewriter text="Intelligent Systems." delay={70} startDelay={500} />
                                    </span>
                                </h2>
                            </div>

                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                <div className="relative bg-slate-900/80 border border-white/10 p-6 rounded-xl backdrop-blur-md">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 border border-blue-500/10">
                                            <Code size={24} />
                                        </div>
                                        <div>
                                            <p className="text-slate-200 font-bold text-lg">Full Stack AI</p>
                                            <p className="text-slate-500 text-xs uppercase tracking-wider">End-to-End Development</p>
                                        </div>
                                    </div>
                                    <div className="w-full bg-slate-700/30 h-px mb-4"></div>
                                    <div className="flex items-center gap-3 text-slate-400 text-sm">
                                        <MapPin size={16} className="text-purple-400 shrink-0" />
                                        <span>Based in <span className="text-slate-200 font-medium">Jhajjar, Haryana</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Bio Content */}
                        <div className="md:col-span-7 space-y-8">
                            <div className="bg-slate-950/30 rounded-2xl p-8 border border-white/5 shadow-inner">
                                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                                    I am an <strong className="text-blue-400">AI & ML Engineer</strong> transformed into a passionate problem solver. My journey isn't just about code; it's about bridging the gap between <span className="text-white font-medium">complex algorithms</span> and <span className="text-white font-medium">real-world impact</span>.
                                </p>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    Growing up in Jhajjar, I learned the value of resilience. Today, I apply that same grit to debugging complex neural networks and optimizing scalable data pipelines. I don't just build models; I engineer solutions that <strong className="text-purple-400">scale</strong> and <strong className="text-purple-400">perform</strong>.
                                </p>

                                <div className="flex flex-wrap gap-3 mt-8">
                                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono">
                                        #DeepLearning
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono">
                                        #SystemDesign
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-mono">
                                        #ProblemSolving
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-colors group">
                                    <Cpu className="text-slate-500 group-hover:text-blue-400 mb-3 transition-colors" size={24} />
                                    <h4 className="text-white font-bold mb-1">Architecture</h4>
                                    <p className="text-slate-500 text-xs">Robust & Scalable Systems</p>
                                </div>
                                <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 hover:border-purple-500/30 transition-colors group">
                                    <Globe className="text-slate-500 group-hover:text-purple-400 mb-3 transition-colors" size={24} />
                                    <h4 className="text-white font-bold mb-1">Deployment</h4>
                                    <p className="text-slate-500 text-xs">Production Ready Code</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </section>
    );
};

export default About;