import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Github, ExternalLink, Code2, Brain, Sparkles, Award, Eye } from 'lucide-react';

const Internships = ({ openMediaModal }) => {
    const internships = [
        {
            title: "AI Engineer Intern",
            company: "Infosys",
            duration: "Feb 2026 - Present",
            description: "Architecting production-grade AI systems and scaling LLM-based applications. Spearheading the integration of production-grade RAG systems and optimizing model inference at scale.",
            skills: ["LLM Scaling", "RAG Systems", "AI Architectures", "Prompt Engineering"],
            github: "https://github.com/ankushpahal-12",
            sourceCode: "https://github.com/ankushpahal-12",
            certificate: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            type: "Internship",
            color: "from-indigo-600 via-blue-600 to-indigo-700",
            glowColor: "rgba(79, 70, 229, 0.4)"
        },
        {
            title: "Machine Learning Trainee",
            company: "All Soft Solutions in collaboration with IBM",
            duration: "2 Months",
            description: "Deep-dive into industrial-grade model engineering. Mastered the lifecycle of high-performance models, from mathematical foundations to distributed training and edge deployment.",
            skills: ["Deep Learning", "Neural Nets", "Model Quantization", "GPU Compute"],
            github: "https://github.com/ankushpahal-12",
            sourceCode: "https://github.com/ankushpahal-12",
            certificate: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            type: "Live Training",
            color: "from-violet-600 via-purple-600 to-indigo-600",
            glowColor: "rgba(139, 92, 246, 0.4)"
        }
    ];

    return (
        <section id="internships" className="py-32 relative bg-transparent overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-indigo-400 text-[10px] font-black uppercase tracking-[0.5em] mb-6 shadow-xl"
                        >
                            <Sparkles size={14} className="animate-spin-slow" />
                            Professional Odyssey
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-black text-[var(--text-primary)] tracking-tighter uppercase leading-none"
                        >
                            Internship <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-400">Expeditions.</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                    {internships.map((intern, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "circOut", delay: index * 0.2 }}
                            className="group relative"
                        >
                            <div className="p-12 lg:p-16 rounded-[4rem] bg-[var(--bg-secondary)] border border-[var(--border-color)] group-hover:border-indigo-500/30 transition-all duration-700 h-full relative overflow-hidden shadow-2xl">
                                {/* Border Accent Glow */}
                                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${intern.color} opacity-40 group-hover:opacity-100 transition-opacity`}></div>

                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-12">
                                    <div className="flex items-start gap-8">
                                        <div className={`w-20 h-20 rounded-[2.5rem] bg-gradient-to-br ${intern.color} p-[1px] shadow-[0_0_20px_rgba(79,70,229,0.3)] group-hover:scale-110 transition-transform duration-700`}>
                                            <div className="w-full h-full bg-[var(--bg-primary)] rounded-[2.5rem] flex items-center justify-center text-[var(--text-primary)]">
                                                {index === 0 ? <Brain size={32} /> : <Code2 size={32} />}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em] mb-3 leading-none px-1">
                                                <Award size={12} className="animate-pulse" />
                                                {intern.type}
                                            </div>
                                            <h3 className="text-3xl lg:text-4xl font-black text-[var(--text-primary)] tracking-tighter leading-tight group-hover:text-indigo-500 transition-colors">
                                                {intern.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="px-6 py-3 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[10px] font-black text-[var(--text-secondary)] uppercase tracking-widest text-center shadow-md">
                                        {intern.duration}
                                    </div>
                                </div>

                                <div className="mb-12">
                                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-indigo-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6 shadow-inner">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_indigo]"></div>
                                        {intern.company}
                                    </div>
                                    <p className="text-[var(--text-secondary)] text-lg lg:text-xl leading-relaxed font-bold tracking-tight">
                                        {intern.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3 mb-16">
                                    {intern.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-5 py-2.5 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[10px] font-black text-[var(--text-tertiary)] uppercase tracking-[0.2em] group-hover:text-indigo-500 group-hover:border-indigo-500/30 transition-all duration-300 shadow-sm"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-8 pt-10 border-t border-[var(--border-color)]">
                                    <div className="flex items-center gap-10">
                                        <motion.a
                                            href={intern.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-[10px] font-black text-[var(--text-tertiary)] hover:text-indigo-500 transition-colors uppercase tracking-[0.3em] group/link"
                                        >
                                            <Github size={18} />
                                            GitHub
                                        </motion.a>
                                        <motion.a
                                            href={intern.sourceCode}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-[10px] font-black text-[var(--text-tertiary)] hover:text-indigo-500 transition-colors uppercase tracking-[0.3em] group/link"
                                        >
                                            <ExternalLink size={18} />
                                            Source
                                        </motion.a>
                                    </div>

                                    <button
                                        onClick={() => openMediaModal('pdf', intern.certificate, `${intern.company} - Certificate`)}
                                        className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[10px] font-black uppercase tracking-widest text-indigo-500 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all shadow-md group/btn"
                                    >
                                        <Eye size={18} className="group-hover/btn:scale-110 transition-transform" />
                                        View Certificate
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Internships;
