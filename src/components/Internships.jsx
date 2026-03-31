import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Github, ExternalLink, Code2, Brain, Sparkles, Award, Eye, Terminal } from 'lucide-react';
import cert1 from '../assets/certificate.jpg';

// Premium Flat Spotlight Card (theme-aware)
const SpotlightCard = ({ children, className, glowColor }) => {
    const cardRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.02, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`relative rounded-[2.5rem] overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-xl ${className || ''}`}
        >
            {/* Spotlight Gradient Layer */}
            <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0 rounded-[2.5rem]"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor || 'rgba(99, 102, 241, 0.12)'}, transparent 40%)`
                }}
            />

            {/* Shimmer Border on Hover */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]"
                style={{
                    background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor || 'rgba(99, 102, 241, 0.25)'}, transparent 40%)`
                }}
            />

            {/* Inner Content */}
            <div className="relative z-10 w-full h-full p-8 md:p-12">
                {children}
            </div>
        </motion.div>
    );
};

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
            certType: "pdf",
            type: "Internship",
            color: "from-indigo-600 to-blue-500",
            iconColor: "text-blue-500",
            glowColor: "rgba(99, 102, 241, 0.18)",
            icon: <Brain size={28} />,
        },
        {
            title: "Model Engineering Trainee",
            company: "Live Training Phase",
            duration: "2 Months",
            description: "Deep-dive into industrial-grade model engineering. Mastered the lifecycle of high-performance models, from mathematical foundations to distributed training and edge deployment.",
            skills: ["Deep Learning", "Neural Nets", "Model Quantization", "GPU Compute"],
            github: "https://github.com/ankushpahal-12/machine-learning-project",
            sourceCode: "https://github.com/ankushpahal-12/machine-learning-project",
            certificate: cert1,
            certType: "image",
            type: "Live Training",
            color: "from-violet-600 to-purple-500",
            iconColor: "text-purple-500",
            glowColor: "rgba(168, 85, 247, 0.18)",
            icon: <Code2 size={28} />,
        }
    ];

    return (
        <section id="internships" className="py-32 relative bg-[var(--bg-primary)] overflow-hidden">
            {/* Top border accent */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

            {/* Background blobs */}
            <motion.div
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[30%] left-[5%] w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none"
            />
            <motion.div
                animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"
            />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-center mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", bounce: 0.5 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-500 text-xs font-black uppercase tracking-[0.3em] mb-6 shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                    >
                        <Terminal size={16} className="animate-pulse" /> Career Trajectory
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="text-5xl md:text-7xl font-black text-[var(--text-primary)] tracking-tight uppercase leading-none"
                    >
                        Professional <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500">
                            Expeditions.
                        </span>
                    </motion.h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 relative z-10">
                    {internships.map((intern, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, type: "spring", bounce: 0.4, delay: index * 0.2 }}
                            className="h-full group"
                        >
                            <SpotlightCard glowColor={intern.glowColor} className="h-full">
                                <div className="flex flex-col h-full relative z-10">

                                    {/* Top accent bar */}
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.5 }}
                                        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${intern.color} origin-left opacity-60 group-hover:opacity-100 group-hover:h-1.5 transition-all duration-300`}
                                    />

                                    {/* Header Row */}
                                    <div className="w-full flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10 pt-4">
                                        <div className="flex items-center gap-5">

                                            {/* Icon */}
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-indigo-500/5 rounded-2xl blur-xl group-hover:bg-indigo-500/15 transition-all duration-500" />
                                                <motion.div
                                                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                                    transition={{ duration: 0.5 }}
                                                    className="w-16 h-16 relative z-10 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] flex items-center justify-center shadow-inner group-hover:border-indigo-500/30 transition-colors"
                                                >
                                                    <div className={`${intern.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                                        {intern.icon}
                                                    </div>
                                                </motion.div>
                                            </div>

                                            <div>
                                                <div className="flex items-center gap-2 text-indigo-500 text-[9px] font-black uppercase tracking-[0.3em] mb-1">
                                                    <Award size={10} className="text-emerald-500 animate-pulse" />
                                                    {intern.type}
                                                </div>
                                                <h3 className="text-2xl md:text-3xl font-black text-[var(--text-primary)] tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-500">
                                                    {intern.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Duration badge */}
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="px-5 py-2.5 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[10px] font-black text-indigo-500 uppercase tracking-widest text-center self-start"
                                        >
                                            {intern.duration}
                                        </motion.div>
                                    </div>

                                    {/* Description */}
                                    <div className="flex-grow mb-10">
                                        <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-[var(--text-primary)] text-[10px] font-bold uppercase tracking-widest mb-6 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/40 transition-all duration-300">
                                            <Briefcase size={12} className="text-indigo-500" />
                                            {intern.company}
                                        </div>
                                        <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed font-medium group-hover:text-[var(--text-primary)] transition-colors duration-300">
                                            {intern.description}
                                        </p>
                                    </div>

                                    {/* Skill Tags */}
                                    <div className="w-full mb-10">
                                        <div className="flex flex-wrap gap-2">
                                            {intern.skills.map((skill, i) => (
                                                <motion.span
                                                    key={i}
                                                    whileHover={{ scale: 1.1, y: -2 }}
                                                    className="px-4 py-2 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[9px] font-black text-[var(--text-secondary)] uppercase tracking-[0.15em] hover:text-indigo-500 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all duration-300 cursor-default"
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Footer Links */}
                                    <div className="w-full pt-6 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-6">
                                        <div className="flex items-center gap-6">
                                            <motion.a
                                                whileHover={{ scale: 1.1, x: 2 }}
                                                href={intern.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-[10px] font-black text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors uppercase tracking-[0.2em]"
                                                title="View GitHub"
                                            >
                                                <Github size={16} className="text-indigo-500" /> GitHub
                                            </motion.a>
                                            <motion.a
                                                whileHover={{ scale: 1.1, x: 2 }}
                                                href={intern.sourceCode}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-[10px] font-black text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors uppercase tracking-[0.2em]"
                                                title="View Source"
                                            >
                                                <ExternalLink size={16} className="text-purple-500" /> Source
                                            </motion.a>
                                        </div>

                                        {intern.certificate && (
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => openMediaModal(intern.certType || 'pdf', intern.certificate, `${intern.company} - Certificate`)}
                                                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-[10px] font-black uppercase tracking-widest text-indigo-500 hover:bg-indigo-600 hover:text-white hover:border-transparent shadow-sm hover:shadow-[0_8px_25px_rgba(99,102,241,0.35)] transition-all group/btn"
                                            >
                                                <Eye size={16} className="group-hover/btn:text-white transition-colors" />
                                                Certificate
                                            </motion.button>
                                        )}
                                    </div>

                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Internships;
