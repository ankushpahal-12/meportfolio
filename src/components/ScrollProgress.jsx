import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? scrollTop / docHeight : 0;
            setProgress(pct);
            setVisible(scrollTop > 200);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const strokeDashoffset = CIRCUMFERENCE * (1 - progress);

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    title="Back to top"
                    className="fixed bottom-6 right-6 z-[9000] w-14 h-14 flex items-center justify-center"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                    {/* Background circle */}
                    <div className="absolute inset-0 rounded-full bg-[var(--bg-secondary)]/90 backdrop-blur-md border border-[var(--border-color)] shadow-2xl" />

                    {/* SVG Progress Ring */}
                    <svg
                        className="absolute inset-0 w-full h-full -rotate-90"
                        viewBox="0 0 50 50"
                    >
                        {/* Track */}
                        <circle
                            cx="25" cy="25" r={RADIUS}
                            fill="none"
                            stroke="rgba(99,102,241,0.15)"
                            strokeWidth="2.5"
                        />
                        {/* Progress */}
                        <circle
                            cx="25" cy="25" r={RADIUS}
                            fill="none"
                            stroke="url(#grad)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeDasharray={CIRCUMFERENCE}
                            strokeDashoffset={strokeDashoffset}
                            style={{ transition: 'stroke-dashoffset 0.1s linear' }}
                        />
                        <defs>
                            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#6366f1" />
                                <stop offset="100%" stopColor="#8b5cf6" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Icon */}
                    <ArrowUp size={16} className="relative z-10 text-indigo-400" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollProgress;
