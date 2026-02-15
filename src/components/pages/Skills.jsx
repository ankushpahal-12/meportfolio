import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "../../data/skills";
import SkillModal from "../SkillModal";

// Circular Text Component
const CircularText = ({ text, radius = 50, className = "" }) => {
    const characters = text.split("");
    return (
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full animate-[spin_20s_linear_infinite_reverse] pointer-events-none ${className}`}>
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <path
                    id="curve"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="transparent"
                />
                <text className="text-[11px] md:text-[13px] font-bold uppercase tracking-widest fill-blue-300/80">
                    <textPath href="#curve" startOffset="0%">
                        {text}
                    </textPath>
                </text>
            </svg>
        </div>
    );
};

// Skill Item Component to handle hover state
const SkillItem = ({ skill, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const skillColor = skill.color || '#3b82f6';

    return (
        <div
            onClick={() => onClick(skill)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-slate-800/80 border border-slate-700 flex flex-col items-center justify-center p-2 transition-all duration-300 cursor-pointer backdrop-blur-md overflow-hidden animate-float"
            style={{
                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                borderColor: isHovered ? skillColor : '',
                boxShadow: isHovered ? `0 0 20px ${skillColor}40` : '',
            }}
        >
            {/* Shine Effect */}
            <div className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-150%] ${isHovered ? 'animate-[shine_1s_ease-in-out]' : ''}`}></div>

            {/* Dynamic Glow on Hover */}
            <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
                style={{
                    opacity: isHovered ? 1 : 0,
                    boxShadow: `inset 0 0 20px ${skillColor}40`,
                }}
            ></div>

            <i
                className={`${skill.icon} text-2xl md:text-4xl transition-colors duration-300 drop-shadow-lg`}
                style={{
                    color: isHovered ? skillColor : '#94a3b8', // Slate-400 equivalent
                    filter: isHovered ? `drop-shadow(0 0 8px ${skillColor}60)` : '',
                }}
            ></i>

            <span
                className="text-[10px] md:text-xs mt-1 font-medium truncate w-full text-center transition-colors"
                style={{
                    color: isHovered ? 'white' : '#94a3b8',
                }}
            >
                {skill.name}
            </span>
        </div>
    );
};

// Helper for responsive radius
const SkillOrbit = ({ skills, onSkillClick, isPaused }) => {
    return (
        <div
            className="absolute w-full h-full rounded-full animate-[spin_50s_linear_infinite]"
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
            {skills.map((skill, index) => {
                const totalSkills = skills.length;
                const angle = (index / totalSkills) * 360;

                return (
                    <div
                        key={skill.name}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{
                            transform: `rotate(${angle}deg) translate(clamp(130px, 20vw, 250px)) rotate(-${angle}deg)`,
                        }}
                    >
                        {/* Counter-rotation to keep icon upright */}
                        <div
                            className="animate-[spin_50s_linear_infinite_reverse]"
                            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
                        >
                            <SkillItem skill={skill} onClick={onSkillClick} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("AI & ML");
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Find the active category object, default to empty array if not found
    const filteredSkills = skills.find((cat) => cat.category === activeCategory)?.items || [];

    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedSkill(null), 300); // Clear after animation
    };

    return (
        <section id="skills" className="relative min-h-screen py-20 overflow-hidden flex items-center justify-center">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-slate-950 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-6 lg:pl-28 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Left Column: Heading & Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 mb-6 leading-tight">
                            Technical <br /> Proficiency
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Synthesizing advanced AI algorithms with robust full-stack architectures.
                            Explore the technologies that power my innovations.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-4">
                            {skills.map((cat) => (
                                <button
                                    key={cat.category}
                                    onClick={() => setActiveCategory(cat.category)}
                                    className={`px-6 py-3 rounded-xl border text-sm md:text-base font-medium transition-all duration-300 relative overflow-hidden group ${activeCategory === cat.category
                                        ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                                        : "bg-slate-900/50 border-slate-700 text-slate-400 hover:border-blue-500/50 hover:text-blue-400"
                                        }`}
                                >
                                    <span className="relative z-10">{cat.category}</span>
                                    {activeCategory === cat.category && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-100"></div>
                                    )}
                                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                </button>
                            ))}
                        </div>

                        <p className="text-xs text-slate-500 mt-8 italic">
                            * Click on any skill to view details. Rotation pauses when viewing details.
                        </p>
                    </motion.div>

                    {/* Right Column: Orbit System */}
                    <div className="flex-1 flex justify-center lg:justify-end relative">
                        <div
                            className="relative w-[340px] h-[340px] md:w-[550px] md:h-[550px] flex items-center justify-center animate-pulse-slow"
                            style={{ animationPlayState: isModalOpen ? 'paused' : 'running' }}
                        >
                            {/* Center Nucleus */}
                            <motion.div
                                key={activeCategory}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="absolute z-10 w-32 h-32 md:w-44 md:h-44 rounded-full bg-slate-900/90 border border-blue-500/50 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(37,99,235,0.5),inset_0_0_20px_rgba(37,99,235,0.2)] backdrop-blur-xl group"
                            >
                                {/* Inner Pulse */}
                                <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse"></div>

                                {/* Rotating Circular Text */}
                                <CircularText
                                    text="• ARTIFICIAL INTELLIGENCE • MACHINE LEARNING • FULL STACK •"
                                    className="w-[140%] h-[140%] opacity-80"
                                />

                                <div className="text-4xl md:text-5xl mb-2 group-hover:scale-110 transition-transform duration-300 relative z-10">
                                    {activeCategory === "AI & ML"
                                        ? "🤖"
                                        : activeCategory === "Languages"
                                            ? "💻"
                                            : "🛠️"}
                                </div>
                                <div className="text-blue-100 text-[10px] md:text-xs font-bold tracking-widest uppercase text-center px-1 relative z-10 drop-shadow-md">
                                    {activeCategory.split(" ")[0]}
                                </div>
                            </motion.div>

                            {/* Orbit Rings - Enhanced Shine */}
                            <div className="absolute inset-0 rounded-full border border-slate-700/60 shadow-[0_0_30px_rgba(37,99,235,0.15)]"></div>
                            <div
                                className="absolute inset-[10%] rounded-full border border-blue-500/20 border-dashed animate-[spin_80s_linear_infinite]"
                                style={{ animationPlayState: isModalOpen ? 'paused' : 'running' }}
                            ></div>
                            <div
                                className="absolute inset-[25%] rounded-full border border-purple-500/20 border-dotted animate-[spin_50s_linear_infinite_reverse]"
                                style={{ animationPlayState: isModalOpen ? 'paused' : 'running' }}
                            ></div>

                            {/* Skills Orbit */}
                            <SkillOrbit
                                skills={filteredSkills}
                                onSkillClick={handleSkillClick}
                                isPaused={isModalOpen}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedSkill && (
                    <SkillModal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        skill={selectedSkill}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Skills;
