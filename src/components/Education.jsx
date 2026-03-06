import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Star } from 'lucide-react';

const CircularProgress = ({ percentage, color = "indigo" }) => {
    const radius = 36;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * percentage) / 100;

    return (
        <div className="relative w-20 h-20 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90">
                <circle
                    cx="40"
                    cy="40"
                    r={radius}
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-[var(--bg-secondary)]"
                />
                <motion.circle
                    cx="40"
                    cy="40"
                    r={radius}
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeDasharray={dashArray}
                    initial={{ strokeDashoffset: dashArray }}
                    whileInView={{ strokeDashoffset: dashOffset }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={`text-${color}-500`}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-sm font-black text-[var(--text-primary)] leading-none">{percentage}%</span>
                <span className="text-[8px] font-black text-indigo-500 uppercase tracking-tighter mt-0.5">Score</span>
            </div>
        </div>
    );
};

const Education = () => {
    const educationData = [
        {
            degree: "Secondary Education (10th)",
            institution: "Dronacharya Senior Secondary School",
            duration: "2020-2021",
            location: "Jhajjar Haryana",
            description: "Foundation in science and mathematics with exemplary academic standing.",
            percentage: 81,
            achievements: ["Aggregate: 81%"],
            icon: <BookOpen size={20} />
        },
        {
            degree: "Higher Secondary (12th)",
            institution: "Dronacharya Senior Secondary School",
            duration: "2022-2023",
            location: "Jhajjar Haryana",
            description: "Specialized in Physics, Chemistry, and Mathematics (PCM).",
            percentage: 84.4,
            achievements: ["Aggregate: 84.4%"],
            icon: <Star size={20} />
        },
        {
            degree: "B.Tech in Computer Science",
            institution: "Lovely Professional University",
            duration: "2023-2027",
            location: "Jalandhar, Punjab",
            description: "Core CS fundamentals with a focus on Artificial Intelligence and Systems.",
            percentage: 62,
            achievements: ["GPA: 6.22/10.0", "AI Research lead"],
            icon: <Award size={20} />
        }
    ];

    return (
        <section id="education" className="py-24 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4"
                    >
                        <GraduationCap size={14} />
                        Academic Path
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-[var(--text-primary)] tracking-tight"
                    >
                        Education <span className="text-indigo-500">Timeline.</span>
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Horizontal Connector Line (Desktop) */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent -translate-y-1/2 hidden lg:block"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10 group/list">
                        {educationData.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="relative group/card hover:!opacity-100 group-hover/list:opacity-40 transition-all duration-500"
                            >
                                {/* Center Node (Desktop) */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[var(--bg-primary)] border-4 border-indigo-600 shadow-lg shadow-indigo-500/20 z-20 hidden lg:block group-hover/card:scale-150 transition-transform duration-300"></div>

                                {/* Content Card */}
                                <div className="p-8 rounded-[2.5rem] bg-[var(--bg-tertiary)]/10 backdrop-blur-md border border-[var(--border-color)] group-hover/card:border-indigo-500/30 transition-all shadow-xl hover:shadow-indigo-500/5 relative overflow-hidden h-full flex flex-col">
                                    {/* Abstract Decoration */}
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover/card:bg-indigo-500/10 transition-colors"></div>

                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-500 shadow-sm border border-indigo-500/10">
                                                {edu.icon}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">
                                                    <Calendar size={12} />
                                                    {edu.duration}
                                                </div>
                                                <h3 className="text-xl font-bold text-[var(--text-primary)] leading-tight">
                                                    {edu.degree}
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="relative group-hover:scale-110 transition-transform duration-500">
                                            <CircularProgress percentage={edu.percentage} />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-[var(--text-tertiary)] text-xs mb-4 font-bold uppercase tracking-wider">
                                        <MapPin size={12} />
                                        <span>{edu.institution}</span>
                                        <span>•</span>
                                        <span>{edu.location}</span>
                                    </div>

                                    <p className="text-[var(--text-secondary)] text-sm mb-6 leading-relaxed flex-grow">
                                        {edu.description}
                                    </p>

                                    <div className="pt-6 border-t border-[var(--border-color)]">
                                        <div className="space-y-2">
                                            {edu.achievements.map((ach, i) => (
                                                <div key={i} className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-semibold">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 group-hover/card:bg-indigo-500 transition-colors"></div>
                                                    {ach}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
