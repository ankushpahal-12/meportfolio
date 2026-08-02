import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, Settings, Code, Terminal, Sparkles } from 'lucide-react';

const SkillsModal = ({ isOpen, onClose, skills, theme }) => {
    const [activeCategory, setActiveCategory] = useState(skills[0]?.category || "Main Skills");
    const [hoveredSkill, setHoveredSkill] = useState(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    // Get Lucide Icon based on category name
    const getCategoryIcon = (category) => {
        const cat = category.toLowerCase();
        if (cat.includes('main')) return <Sparkles size={16} />;
        if (cat.includes('ai') || cat.includes('ml')) return <Cpu size={16} />;
        if (cat.includes('language')) return <Code size={16} />;
        if (cat.includes('tool') || cat.includes('framework')) return <Settings size={16} />;
        return <Terminal size={16} />;
    };

    // Filter skills by category
    const activeSkillsList = skills.find(cat => cat.category === activeCategory)?.items || [];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 text-[var(--text-primary)]">
                    {/* Backdrop Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
                    />

                    {/* Modal Window Container - Full Screen */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 25 }}
                        transition={{ type: "spring", damping: 28, stiffness: 180 }}
                        className="relative w-full h-full bg-[#070b15] overflow-hidden flex flex-col"
                    >
                        {/* Header Bar */}
                        <div className="px-6 py-4 bg-[#04060c] border-b border-indigo-500/10 flex items-center justify-between z-20">
                            <div className="flex items-center gap-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-indigo-50 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                                <h3 className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-indigo-400 font-mono">
                                    Skills Portfolio
                                </h3>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={onClose}
                                className="p-2 rounded-xl bg-[#070b15] border border-indigo-500/10 text-indigo-400 hover:text-white hover:border-indigo-500/40 transition-all cursor-pointer"
                                aria-label="Close modal"
                            >
                                <X size={18} />
                            </motion.button>
                        </div>

                        {/* Modal Body Grid (Split layout) */}
                        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                            {/* Left Column: Category navigation sidebar */}
                            <div className="w-full md:w-[280px] bg-[#04060c]/50 border-r border-indigo-500/10 p-4 md:p-6 overflow-y-auto flex flex-row md:flex-col gap-2 shrink-0 scrollbar-none">
                                {skills.map((category, idx) => {
                                    const isActive = category.category === activeCategory;
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveCategory(category.category)}
                                            className={`w-full text-left px-4 py-3 rounded-xl border font-black uppercase tracking-wider text-[10px] md:text-xs flex items-center gap-3 transition-all duration-300 cursor-pointer ${
                                                isActive
                                                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20'
                                                    : 'bg-[#070b15]/50 border-indigo-500/5 text-[var(--text-secondary)] hover:text-indigo-400 hover:border-indigo-500/20 hover:bg-[#070b15]'
                                            }`}
                                        >
                                            <span className={isActive ? 'text-white' : 'text-indigo-500'}>
                                                {getCategoryIcon(category.category)}
                                            </span>
                                            <span className="truncate">{category.category}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Right Column: Skills layout items with description */}
                            <div className="flex-grow p-6 md:p-8 overflow-y-auto scrollbar-thin">
                                <div className="mb-6">
                                    <h4 className="text-xl font-black uppercase text-[var(--text-primary)] tracking-wide">
                                        {activeCategory}
                                    </h4>
                                    <div className="w-12 h-[2px] bg-indigo-500 mt-2"></div>
                                </div>

                                <motion.div
                                    layout
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                                >
                                    <AnimatePresence mode="popLayout">
                                        {activeSkillsList.map((skill) => {
                                            const isHovered = hoveredSkill === skill.name;
                                            const brandColor = skill.color || '#6366f1';

                                            return (
                                                <motion.div
                                                    key={skill.name}
                                                    layout
                                                    initial={{ opacity: 0, y: 15 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, scale: 0.95 }}
                                                    transition={{ duration: 0.3 }}
                                                    onMouseEnter={() => setHoveredSkill(skill.name)}
                                                    onMouseLeave={() => setHoveredSkill(null)}
                                                    style={{
                                                        borderColor: isHovered ? brandColor : 'rgba(99, 102, 241, 0.1)',
                                                        boxShadow: isHovered 
                                                            ? `0 10px 30px -10px ${brandColor}40` 
                                                            : 'none',
                                                    }}
                                                    className="p-5 rounded-2xl bg-[#090f1d]/60 border transition-all duration-300 flex flex-col gap-3 group relative cursor-default overflow-hidden"
                                                >
                                                    {/* Corner hover glow */}
                                                    <div 
                                                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                                        style={{
                                                            background: `radial-gradient(150px circle at top right, ${brandColor}, transparent)`
                                                        }}
                                                    />

                                                    <div className="flex items-center gap-4">
                                                        <div 
                                                            style={{
                                                                backgroundColor: `${brandColor}10`,
                                                                borderColor: `${brandColor}20`
                                                            }}
                                                            className="w-11 h-11 rounded-xl border flex items-center justify-center shrink-0"
                                                        >
                                                            <i className={`${skill.icon} text-xl`} style={{ color: brandColor }}></i>
                                                        </div>
                                                        <div className="flex-grow min-w-0">
                                                            <div className="flex items-center justify-between">
                                                                <span className="font-black uppercase tracking-widest text-xs sm:text-sm text-[var(--text-primary)] truncate">
                                                                    {skill.name}
                                                                </span>
                                                                {isHovered && (
                                                                    <div 
                                                                        style={{ 
                                                                            backgroundColor: brandColor,
                                                                            boxShadow: `0 0 10px ${brandColor}` 
                                                                        }} 
                                                                        className="w-1.5 h-1.5 rounded-full"
                                                                    />
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Skill description text content */}
                                                    <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] leading-relaxed font-medium">
                                                        {skill.description || "Core component of software engineering stack."}
                                                    </p>
                                                </motion.div>
                                            );
                                        })}
                                    </AnimatePresence>
                                </motion.div>
                            </div>
                        </div>

                        {/* Footer decorative details */}
                        <div className="px-6 py-4 bg-[#04060c] border-t border-indigo-500/10 flex items-center justify-between text-[8px] sm:text-[9px] font-bold text-[var(--text-tertiary)] uppercase tracking-[0.3em]">
                            <div>
                                Intelligence Stack • v9.0
                            </div>
                            <div className="flex gap-2.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/40"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/20"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/10"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default SkillsModal;
