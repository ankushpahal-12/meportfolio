import React from 'react';
import { motion } from 'framer-motion';
import {
    User, MapPin, School, GraduationCap,
    Code2, Brain, Sparkles, Heart,
    Briefcase, Award, Milestone, Rocket
} from 'lucide-react';

const About = () => {
    const journey = [
        {
            year: "Childhood",
            title: "Roots in Jhajjar",
            description: "Born and raised in Jhajjar, Haryana. My curiosity for technology started with simple wonder about how things worked.",
            icon: <Heart className="text-pink-500" />,
            color: "bg-pink-500/10"
        },
        {
            year: "2020-2023",
            title: "Dronacharya Sr. Sec. School",
            description: "Completed my 10th and 12th (PCM) with 81% and 84.4% respectively. This foundation shaped my analytical thinking and problem-solving skills.",
            icon: <School className="text-blue-500" />,
            color: "bg-blue-500/10"
        },
        {
            year: "2023-Present",
            title: "Lovely Professional University",
            description: "Pursuing B.Tech in CSE. Currently diving deep into AI/ML architectures, focusing on neural networks and scalable software systems.",
            icon: <GraduationCap className="text-indigo-500" />,
            color: "bg-indigo-500/10"
        }
    ];

    const stats = [
        { label: "Location", value: "Jhajjar, Haryana", icon: <MapPin size={16} /> },
        { label: "Education", value: "B.Tech CSE Student", icon: <GraduationCap size={16} /> },
        { label: "Focus", value: "AI & ML", icon: <Brain size={16} /> },
        { label: "Status", value: "Upcoming Fresher", icon: <Rocket size={16} /> }
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">
                            <User size={14} />
                            Candidate Profile
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] tracking-tight mb-6 uppercase section-title">
                            The Mind <br />
                            <span className="text-indigo-500">Building the Intelligence.</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Main Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Stat card - top left */}
                    <motion.div
                        initial={{ opacity: 0, x: -100, scale: 0.8 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 15, stiffness: 100, delay: 0.2 }}
                        className="md:col-span-4 p-8 rounded-[2.5rem] bg-[var(--bg-tertiary)]/20 backdrop-blur-sm border border-[var(--border-color)] relative overflow-hidden group shadow-xl hover:bg-[var(--bg-tertiary)]/40 transition-all duration-500"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-1000">
                            <Sparkles size={120} className="text-indigo-500" />
                        </div>
                        <h3 className="text-xl font-black text-[var(--text-primary)] mb-6 uppercase">Snapshot</h3>
                        <div className="space-y-4">
                            {stats.map((stat, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-secondary)]/40 border border-[var(--border-color)]">
                                    <div className="flex items-center gap-3">
                                        <div className="text-indigo-500">{stat.icon}</div>
                                        <span className="text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-wider">{stat.label}</span>
                                    </div>
                                    <span className="text-sm font-bold text-[var(--text-primary)]">{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Bio Content - center top */}
                    <motion.div
                        initial={{ opacity: 0, x: 100, scale: 0.8 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 15, stiffness: 100, delay: 0.3 }}
                        className="md:col-span-8 p-10 rounded-[2.5rem] bg-[var(--bg-tertiary)]/20 backdrop-blur-sm border border-[var(--border-color)] relative overflow-hidden group shadow-xl hover:bg-[var(--bg-tertiary)]/40 transition-all duration-500"
                    >
                        <div className="flex flex-col sm:flex-row items-start gap-8 relative z-10">
                            <div className="w-16 h-16 rounded-3xl bg-indigo-600 flex-shrink-0 items-center justify-center text-white shadow-2xl shadow-indigo-600/30">
                                <Code2 size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-[var(--text-primary)] mb-4 uppercase">Academic Quest</h3>
                                <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6 font-medium">
                                    I am <span className="text-indigo-500 font-bold">Ankush Pahal</span>, an aspiring AI Engineer and Computer Science student.
                                    I am dedicated to mastering the foundations of machine learning, neural architectures, and distributed systems.
                                    My goal is to bridge the gap between complex algorithms and practical, real-world applications.
                                </p>
                                <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-medium">
                                    Currently honing my skills in <span className="text-[var(--text-primary)] font-bold">Jhajjar, Haryana</span>, and at <span className="text-[var(--text-primary)] font-bold">LPU</span>,
                                    I bring a fresh perspective, high energy, and a commitment to engineering excellence to every project I undertake.
                                </p>
                            </div>
                        </div>
                        {/* Decorative background pulse */}
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
                    </motion.div>

                    {/* Journey Timeline - lower sections */}
                    {journey.map((stage, i) => (
                        <motion.div
                            key={i}
                            initial={{ 
                                opacity: 0, 
                                x: i === 0 ? -100 : (i === 2 ? 100 : 0), 
                                y: i === 1 ? 100 : 0, 
                                scale: 0.8 
                            }}
                            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                                type: "spring", 
                                damping: 15, 
                                stiffness: 100, 
                                delay: 0.4 + (i * 0.1) 
                            }}
                            className="md:col-span-4 p-8 rounded-[2.5rem] bg-[var(--bg-tertiary)]/10 backdrop-blur-sm border border-[var(--border-color)] relative overflow-hidden group/stage shadow-lg hover:border-indigo-500/30 transition-all duration-500 hover:bg-[var(--bg-tertiary)]/20"
                        >
                            <div className={`w-12 h-12 rounded-2xl ${stage.color} flex items-center justify-center mb-6 shadow-inner`}>
                                {stage.icon}
                            </div>
                            <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em] mb-2 block">{stage.year}</span>
                            <h4 className="text-lg font-black text-[var(--text-primary)] mb-3 uppercase tracking-tight group-hover/stage:text-indigo-400 transition-colors">{stage.title}</h4>
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-medium">
                                {stage.description}
                            </p>

                            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-indigo-600/5 rounded-full group-hover/stage:scale-[3] group-hover/stage:bg-indigo-600/10 transition-all duration-700"></div>
                        </motion.div>
                    ))}

                    {/* experience card - full width bottom */}
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", damping: 20, stiffness: 80, delay: 0.6 }}
                        className="md:col-span-12 p-10 lg:p-14 rounded-[3.5rem] bg-gradient-to-br from-[var(--bg-tertiary)]/20 to-[var(--bg-primary)]/10 backdrop-blur-md border border-indigo-500/20 relative overflow-hidden group shadow-2xl hover:bg-[var(--bg-tertiary)]/30 transition-all duration-500"
                    >
                        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-indigo-600 text-white mb-8 font-black uppercase tracking-[0.2em] text-[10px] shadow-xl shadow-indigo-600/30">
                                    <Milestone size={16} />
                                    The Next Horizon
                                </div>
                                <h3 className="text-3xl font-black text-[var(--text-primary)] mb-6 uppercase tracking-tight">
                                    Learning, Coding, <br />
                                    <span className="text-indigo-500">and Growing.</span>
                                </h3>
                                <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-medium mb-8">
                                    My current focus is on building a robust portfolio of <span className="text-[var(--text-primary)] font-bold">AI/ML projects</span>.
                                    I am actively seeking opportunities to apply my technical knowledge in a
                                    professional environment, contributing to innovative solutions and
                                    learning from seasoned engineering teams.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {['Python', 'TensorFlow', 'React.js', 'Data Science', 'System Design'].map((tag, idx) => (
                                        <div key={idx} className="px-4 py-2 bg-[var(--bg-secondary)]/50 border border-[var(--border-color)] rounded-xl text-[10px] font-black text-indigo-400 uppercase tracking-widest">
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="hidden lg:block">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-8 rounded-3xl bg-indigo-500/10 border border-indigo-500/20 text-center backdrop-blur-sm">
                                        <div className="text-4xl font-black text-[var(--text-primary)] mb-2 uppercase">Fresh</div>
                                        <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Talent</div>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-[var(--bg-secondary)]/30 border border-[var(--border-color)] text-center backdrop-blur-sm">
                                        <div className="text-4xl font-black text-[var(--text-primary)] mb-2 uppercase">05+</div>
                                        <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Projects</div>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-[var(--bg-secondary)]/30 border border-[var(--border-color)] text-center backdrop-blur-sm">
                                        <div className="text-4xl font-black text-[var(--text-primary)] mb-2 uppercase">300+</div>
                                        <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">LeetCode</div>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-indigo-500/10 border border-indigo-500/20 text-center backdrop-blur-sm">
                                        <div className="text-4xl font-black text-[var(--text-primary)] mb-2 uppercase">Core</div>
                                        <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">CS Funda.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
