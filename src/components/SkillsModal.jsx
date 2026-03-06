import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code2, Cpu, Globe, Database, Terminal, Sparkles } from 'lucide-react';

const SkillsModal = ({ isOpen, onClose, skills, theme }) => {
    const [hoveredSkill, setHoveredSkill] = React.useState(null);
    if (!isOpen) return null;

    const isDark = theme === 'dark';

    const getCategoryStyles = (category) => {
        const cat = category.toLowerCase();
        if (cat.includes('ai') || cat.includes('machine')) return 'bg-amber-600 text-white';
        if (cat.includes('front')) return 'bg-indigo-600 text-white';
        if (cat.includes('back')) return 'bg-emerald-600 text-white';
        if (cat.includes('cloud') || cat.includes('devops')) return 'bg-sky-600 text-white';
        return 'bg-violet-600 text-white';
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className={`absolute inset-0 ${isDark ? 'bg-black/95' : 'bg-gray-900/40 opacity-100'}`}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: 20 }}
                        transition={{ type: "spring", damping: 30, stiffness: 200 }}
                        className={`relative w-full max-w-7xl max-h-[92vh] ${isDark ? 'bg-[#0a0a0a] border-white/5 shadow-[0_0_120px_rgba(0,0,0,0.5)]' : 'bg-white border-gray-100 shadow-[0_40px_100px_rgba(0,0,0,0.1)]'} border rounded-[4rem] overflow-hidden flex flex-col`}
                    >
                        {/* Header */}
                        <div className={`p-6 md:p-8 border-b ${isDark ? 'border-white/[0.03]' : 'border-gray-100'} flex items-center justify-end sticky top-0 z-20 ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={onClose}
                                className={`p-3 rounded-2xl ${isDark ? 'bg-white/[0.03] text-white/40 hover:text-white hover:bg-white/10' : 'bg-gray-100 text-gray-400 hover:text-gray-900 hover:bg-gray-200'} transition-all border ${isDark ? 'border-white/[0.05]' : 'border-transparent'}`}
                            >
                                <X size={20} />
                            </motion.button>
                        </div>

                        {/* Scrollable Body */}
                        <div className="flex-grow overflow-y-auto p-6 md:p-8 custom-scrollbar">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
                                {skills.map((category, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + idx * 0.1 }}
                                        className="space-y-10"
                                    >
                                        <div className="flex items-center gap-6">
                                            <div className={`font-black text-[12px] tracking-[0.4em] uppercase px-4 py-2 border rounded-full ${isDark ? 'text-indigo-500/80 border-indigo-500/20 bg-indigo-500/5' : 'text-indigo-600 border-indigo-100 bg-indigo-50'}`}>
                                                0{idx + 1}
                                            </div>
                                            <h3 className={`text-2xl font-black ${isDark ? 'text-white/90' : 'text-gray-800'} uppercase tracking-tight`}>
                                                {category.category}
                                            </h3>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {category.items.map((skill, i) => {
                                                const skillId = `${idx}-${i}`;
                                                const isDimmed = hoveredSkill && hoveredSkill !== skillId;
                                                const isActive = hoveredSkill === skillId;
                                                const catStyles = getCategoryStyles(category.category);

                                                return (
                                                    <motion.div
                                                        key={i}
                                                        onMouseEnter={() => setHoveredSkill(skillId)}
                                                        onMouseLeave={() => setHoveredSkill(null)}
                                                        animate={{
                                                            opacity: isDimmed ? 0.15 : 1,
                                                            scale: isActive ? 1.02 : 1,
                                                            filter: isDimmed ? 'grayscale(100%) blur(1px)' : 'grayscale(0%) blur(0px)',
                                                        }}
                                                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                                        className={`p-6 rounded-[2rem] ${isActive ? catStyles + ' shadow-2xl scale-[1.05] z-10' : (isDark ? 'bg-white/[0.02] border-white/[0.05]' : 'bg-gray-50 border-gray-100')} border transition-all group flex gap-5 items-center cursor-default min-h-[80px]`}
                                                    >
                                                        <div className={`w-12 h-12 rounded-xl ${isActive ? 'bg-white/20 text-white' : (isDark ? 'bg-white/[0.04] text-indigo-400' : 'bg-white text-indigo-600 shadow-sm')} flex items-center justify-center shrink-0 border border-white/5 transition-all duration-500`}>
                                                            <i className={`${skill.icon} text-2xl`}></i>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <span className={`font-black uppercase tracking-widest text-sm ${isActive ? 'text-white' : (isDark ? 'text-white/80' : 'text-gray-900')}`}>{skill.name}</span>
                                                            {isActive && (
                                                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className={`w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_white]`}></motion.div>
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Footer Decoration */}
                        <div className={`p-8 border-t ${isDark ? 'border-white/[0.03] bg-white/[0.01]' : 'border-gray-100 bg-gray-50/30'} flex justify-between items-center px-12`}>
                            <div className={`text-[10px] font-bold ${isDark ? 'text-white/20' : 'text-gray-400'} uppercase tracking-[0.4em]`}>
                                Intelligence Stack • v8.0
                            </div>
                            <div className="flex gap-4">
                                <div className="w-2 h-2 rounded-full bg-indigo-500/40"></div>
                                <div className="w-2 h-2 rounded-full bg-indigo-500/20"></div>
                                <div className="w-2 h-2 rounded-full bg-indigo-500/10"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default SkillsModal;
