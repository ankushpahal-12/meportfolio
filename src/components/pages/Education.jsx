import React, { useRef } from 'react';
import { GraduationCap, BookOpen, School, Calendar, MapPin, Radio, Target, AlertCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

// Decoding Text Component
const DecryptedText = ({ text, delay = 0 }) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
    const [displayText, setDisplayText] = React.useState("");
    const [isComplete, setIsComplete] = React.useState(false);

    React.useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text.split("").map((char, index) => {
                    if (index < iteration) {
                        return text[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
                setIsComplete(true);
            }

            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [text]);

    return (
        <span className={isComplete ? "text-cyan-400" : "text-cyan-600 animate-pulse"}>
            {displayText}
        </span>
    );
};

const EduCard = ({ edu, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative pl-8 md:pl-0 border-l-2 md:border-l-0 ${isInView ? 'border-cyan-500' : 'border-slate-800'} transition-colors duration-500`}
        >
            {/* Connection Line to Center (Desktop) */}
            <div className={`hidden md:block absolute top-1/2 ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} w-8 h-[2px] ${isInView ? 'bg-cyan-500 shadow-[0_0_10px_#06b6d4]' : 'bg-slate-800'} transition-all duration-500`}></div>

            {/* Target Reticle (Mobile) */}
            <div className="md:hidden absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-500 flex items-center justify-center">
                {isInView && <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping"></div>}
            </div>

            <div className={`relative p-6 bg-slate-900/80 backdrop-blur-md border ${isInView ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)]' : 'border-slate-800'} transition-all duration-500 group overflow-hidden`}>

                {/* HUD Corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-500 opacity-50"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-500 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-500 opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-500 opacity-50"></div>

                {/* Scanline Overlay */}
                {isInView && <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent h-[20%] animate-scan-fast pointer-events-none"></div>}

                {/* Header */}
                <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className={`p-2 bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 rounded`}>
                            <edu.icon size={18} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-cyan-600 font-mono uppercase tracking-widest leading-none mb-1">Target ID: ED-{index + 1}0{index + 1}</span>
                            <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                                <Calendar size={10} /> {edu.period}
                            </span>
                        </div>
                    </div>
                    {isInView && (
                        <div className="px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-mono animate-pulse">
                            ACTIVE
                        </div>
                    )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-1 font-mono tracking-tight group-hover:text-cyan-400 transition-colors">
                    {isInView ? <DecryptedText text={edu.degree} /> : edu.degree}
                </h3>

                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-4">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                    {edu.school}
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-4 mt-2">
                    <div>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono block mb-1">Location</span>
                        <span className="text-sm text-slate-300 font-mono flex items-center gap-1">
                            <MapPin size={12} className="text-cyan-600" /> {edu.location}
                        </span>
                    </div>
                    <div>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono block mb-1">Performance</span>
                        <span className="text-sm text-cyan-300 font-bold font-mono border-b border-cyan-500/30 inline-block">
                            {edu.grade}
                        </span>
                    </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-xs text-slate-400/80 font-mono leading-relaxed border-l-2 border-cyan-500/20 pl-3">
                    {edu.description}
                </p>

            </div>
        </motion.div>
    );
};

const Education = () => {
    const educationData = [
        {
            degree: "B.Tech in Artificial Intelligence",
            school: "Lovely Professional University",
            location: "Phagwara, Punjab",
            period: "2023 - 2027",
            grade: "CGPA: 8.5",
            description: "Advanced specialization in Machine Learning algorithms, Neural Networks architecture, and Data Science methodologies.",
            icon: GraduationCap,
        },
        {
            degree: "Senior Secondary (Class 12)",
            school: "Dronacharya Sr. Sec. School",
            location: "Jhajjar, Haryana",
            period: "2022-2023",
            grade: "Score: 8.5%",
            description: "Completed Non-Medical stream (Physics, Chemistry, Math). Developed strong analytical and problem-solving foundation.",
            icon: BookOpen,
        },
        {
            degree: "Secondary School (Class 10)",
            school: "Dronacharya Sr. Sec. School",
            location: "Jhajjar, Haryana",
            period: "2020-2021",
            grade: "CGPA: 8.1",
            description: "Achieved academic excellence with distinction in Mathematics and Science. Early focus on computer literacy.",
            icon: School,
        },
    ];

    return (
        <section id="education" className="min-h-screen py-24 relative overflow-hidden bg-slate-950 flex flex-col items-center">

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#020617_100%)] pointer-events-none"></div>

            {/* Scanning Radar Line */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.5)] animate-scan"></div>
            </div>

            <div className="max-w-6xl w-full px-6 relative z-10">

                {/* HUD Header */}
                <div className="flex justify-between items-end mb-16 border-b border-cyan-500/20 pb-4">
                    <div>
                        <div className="text-cyan-500 text-xs font-mono mb-2 flex items-center gap-2">
                            <Radio size={14} className="animate-pulse" />
                            SYSTEM STATUS: ONLINE
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            ACADEMIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">INTEL</span>
                        </h2>
                    </div>
                    <div className="hidden md:block text-right">
                        <div className="text-xs font-mono text-slate-500">
                            DATA_STREAM_ID: 8492-X<br />
                            ENCRYPTION: NONE
                        </div>
                    </div>
                </div>

                <div className="relative">
                    {/* Center Axis Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[0.5px] bg-cyan-900/50 -translate-x-1/2"></div>
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[0.5px] bg-cyan-500/20 -translate-x-1/2 animate-pulse"></div>

                    <div className="space-y-12 md:space-y-24 relative">
                        {educationData.map((edu, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={index} className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Spacer */}
                                    <div className="flex-1"></div>

                                    {/* Center Node */}
                                    <div className="relative z-20 mx-auto md:mx-0 my-4 md:my-0">
                                        <div className="w-12 h-12 rounded-full bg-slate-950 border border-cyan-500/50 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)] relative">
                                            <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-ping"></div>
                                            <Target size={20} className="text-cyan-400" />

                                            {/* Horizontal Connector */}
                                            <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-12 h-[1px] bg-cyan-500/30 ${isEven ? 'right-full' : 'left-full'}`}></div>
                                        </div>
                                    </div>

                                    {/* Card Container */}
                                    <div className={`flex-1 w-full md:w-auto ${isEven ? 'md:mr-12' : 'md:ml-12'}`}>
                                        <EduCard edu={edu} index={index} />
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* HUD Footer */}
                <div className="mt-16 flex justify-between items-center text-[10px] font-mono text-cyan-900/50 border-t border-cyan-900/20 pt-4">
                    <span>SYS_VER_4.2.0</span>
                    <span>END_OF_STREAM</span>
                </div>
            </div>
        </section>
    );
};

export default Education;
