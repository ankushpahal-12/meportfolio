import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SkillModal = ({ isOpen, onClose, skill }) => {
    if (!skill) return null;

    // Use skill color or fallback
    const skillColor = skill.color || '#3b82f6';

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-lg bg-slate-900 border rounded-2xl overflow-hidden"
                        style={{
                            borderColor: `${skillColor}50`, // 50 opacity
                            boxShadow: `0 0 50px ${skillColor}20`,
                        }}
                    >
                        {/* Background Effects */}
                        <div
                            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"
                            style={{ backgroundColor: `${skillColor}15` }}
                        ></div>
                        <div
                            className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"
                            style={{ backgroundColor: `${skillColor}15` }}
                        ></div>

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors z-20"
                        >
                            <X size={20} />
                        </button>

                        <div className="relative z-10 p-8 flex flex-col items-center text-center">
                            {/* Icon with Shine */}
                            <div className="relative w-24 h-24 mb-6 group">
                                <div
                                    className="absolute inset-0 rounded-2xl blur-xl transition-all duration-500"
                                    style={{ backgroundColor: `${skillColor}30` }}
                                ></div>
                                <div
                                    className="relative w-full h-full bg-slate-800/80 rounded-2xl border flex items-center justify-center shadow-lg backdrop-blur-md overflow-hidden"
                                    style={{ borderColor: `${skillColor}40` }}
                                >
                                    {/* Shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-150%] animate-[shine_3s_infinite]"></div>
                                    <i
                                        className={`${skill.icon} text-6xl drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]`}
                                        style={{ color: skillColor, filter: `drop-shadow(0 0 10px ${skillColor}50)` }}
                                    ></i>
                                </div>
                            </div>

                            <h3
                                className="text-3xl font-bold mb-2 bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: `linear-gradient(to right, #fff, ${skillColor})`
                                }}
                            >
                                {skill.name}
                            </h3>

                            <div
                                className="w-16 h-1 rounded-full mb-6"
                                style={{
                                    background: `linear-gradient(to right, ${skillColor}, ${skillColor}50)`
                                }}
                            ></div>

                            <p className="text-slate-300 leading-relaxed text-lg">
                                {skill.description}
                            </p>
                        </div>

                        {/* Footer decorative line */}
                        <div
                            className="h-1 w-full"
                            style={{
                                background: `linear-gradient(to right, transparent, ${skillColor}50, transparent)`
                            }}
                        ></div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default SkillModal;
