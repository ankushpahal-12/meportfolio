import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ArrowUp } from 'lucide-react';

const TimeWidget = () => {
    const [time, setTime] = useState(new Date());
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    // Update Time
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Track Scroll
    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(Math.min(100, Math.max(0, progress)));

            // Show only after scrolling a bit
            setIsVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3 pointer-events-none"
                >
                    {/* Time Display */}
                    <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-lg px-4 py-2 shadow-xl flex items-center gap-3 pointer-events-auto">
                        <Clock size={16} className="text-blue-400 animate-pulse" />
                        <span className="text-sm font-mono text-slate-300 font-bold tracking-widest">
                            {time.toLocaleTimeString([], { hour12: false })}
                        </span>

                        {/* Scroll Progress Ring */}
                        <div className="relative w-8 h-8 flex items-center justify-center">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle
                                    cx="16"
                                    cy="16"
                                    r="12"
                                    fill="transparent"
                                    stroke="#1e293b"
                                    strokeWidth="3"
                                />
                                <circle
                                    cx="16"
                                    cy="16"
                                    r="12"
                                    fill="transparent"
                                    stroke="#3b82f6"
                                    strokeWidth="3"
                                    strokeDasharray={`${2 * Math.PI * 12}`}
                                    strokeDashoffset={`${2 * Math.PI * 12 * (1 - scrollProgress / 100)}`}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <span onClick={scrollToTop} className="absolute inset-0 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform text-[8px] font-bold text-white">
                                {Math.round(scrollProgress)}%
                            </span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TimeWidget;
