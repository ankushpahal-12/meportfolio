import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Github, ExternalLink, Code2, Brain, Sparkles, Award } from 'lucide-react';

const Interenships = () => {
    const internships = [
        {
            title: "AI Engineer Intern",
            company: "Infosys",
            duration: "Feb 2026 - Present",
            description: "Architecting production-grade AI systems and scaling LLM-based applications. Spearheading the integration of production-grade RAG systems and optimizing model inference at scale.",
            skills: ["LLM Scaling", "RAG Systems", "AI Architectures", "Prompt Engineering"],
            github: "https://github.com/ankushpahal-12",
            sourceCode: "https://github.com/ankushpahal-12",
            certificate: "#",
            type: "Internship",
            color: "from-indigo-400 via-blue-500 to-indigo-600",
            glowColor: "rgba(79, 70, 229, 0.4)"
        },
        {
            title: "Model Engineering Trainee",
            company: "Live Training Phase",
            duration: "2 Months",
            description: "Deep-dive into industrial-grade model engineering. Mastered the lifecycle of high-performance models, from mathematical foundations to distributed training and edge deployment.",
            skills: ["Deep Learning", "Neural Nets", "Model Quantization", "GPU Compute"],
            github: "https://github.com/ankushpahal-12",
            sourceCode: "https://github.com/ankushpahal-12",
            certificate: "#",
            type: "Live Training",
            color: "from-purple-400 via-pink-500 to-red-500",
            glowColor: "rgba(236, 72, 153, 0.4)"
        }
    ];

    return (
        <section id="internships" className="py-24 relative overflow-hidden bg-[var(--bg-primary)]">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="text-center mb-24 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black uppercase tracking-[0.3em] mb-6 shadow-glow transition-all"
                    >
                        <Sparkles size={14} className="animate-spin-slow" />
                        Professional Odyssey
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
                        className="text-5xl md:text-7xl font-black text-[var(--text-primary)] tracking-tight uppercase leading-none"
                    >
                        Internship <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500">Expeditions.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
                    {internships.map((intern, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "circOut", delay: index * 0.2 }}
                            whileHover={{ y: -15, transition: { duration: 0.4 } }}
                            className="group relative"
                        >
                            {/* Card Glow Effect */}
                            <div
                                className="absolute -inset-0.5 rounded-[4rem] opacity-0 group-hover:opacity-100 transition duration-1000 blur-2xl -z-10 group-hover:duration-200 shadow-2xl"
                                style={{ background: `radial-gradient(circle at center, ${intern.glowColor}, transparent 70%)` }}
                            ></div>

                            <div className="p-10 lg:p-14 rounded-[4rem] bg-[var(--bg-secondary)]/10 backdrop-blur-3xl border border-white/5 group-hover:border-indigo-500/40 transition-all duration-700 h-full relative overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.1)] group-hover:shadow-indigo-500/20">
                                {/* Dynamic Particle Overlay */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8 mb-10">
                                    <div className="flex items-center gap-6">
                                        <motion.div
                                            whileHover={{ rotate: 15, scale: 1.1 }}
                                            className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-indigo-600/20 to-indigo-600/5 flex items-center justify-center text-indigo-500 border border-indigo-500/20 shadow-inner group-hover:shadow-indigo-500/40 transition-all duration-500"
                                        >
                                            {index === 0 ? <Brain size={40} className="drop-shadow-glow" /> : <Code2 size={40} className="drop-shadow-glow" />}
                                        </motion.div>
                                        <div>
                                            <div className="flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] mb-2 leading-none">
                                                <Award size={12} className="animate-pulse" />
                                                {intern.type}
                                            </div>
                                            <h3 className="text-3xl font-black text-[var(--text-primary)] tracking-tighter leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-300 transition-all duration-500">
                                                {intern.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="px-5 py-3 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 text-xs font-black text-indigo-400 uppercase tracking-widest text-center shadow-lg">
                                        {intern.duration}
                                    </div>
                                </div>

                                <div className="mb-10">
                                    <h4 className="inline-block px-4 py-1.5 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-indigo-400 font-black mb-4 uppercase text-[10px] tracking-[0.3em]">
                                        @ {intern.company}
                                    </h4>
                                    <p className="text-[var(--text-secondary)] text-xl leading-relaxed font-semibold opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                                        {intern.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3 mb-12">
                                    {intern.skills.map((skill, i) => (
                                        <motion.span
                                            key={i}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            className="px-5 py-2.5 rounded-2xl bg-[var(--bg-secondary)]/40 border border-[var(--border-color)] text-[11px] font-black text-[var(--text-secondary)] hover:text-white hover:border-indigo-500 hover:bg-indigo-500/20 uppercase tracking-[0.15em] transition-all duration-300"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/5">
                                    <motion.a
                                        href={intern.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-2 text-[10px] font-black text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-[0.2em] group/link"
                                    >
                                        <Github size={16} className="group-hover/link:scale-110 transition-transform" />
                                        GitHub
                                    </motion.a>
                                    <motion.a
                                        href={intern.sourceCode}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-2 text-[10px] font-black text-[var(--text-tertiary)] hover:text-indigo-400 transition-colors uppercase tracking-[0.2em] group/link"
                                    >
                                        <ExternalLink size={16} className="group-hover/link:scale-110 transition-transform" />
                                        Source Code
                                    </motion.a>
                                    <motion.a
                                        href={intern.certificate}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-2 text-[10px] font-black text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-[0.2em] group/link"
                                    >
                                        <Award size={16} className="group-hover/link:scale-110 transition-transform" />
                                        Certificate
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Interenships;
