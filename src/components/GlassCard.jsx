import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "", delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
            className={`relative overflow-hidden bg-slate-900/70 backdrop-blur-3xl border border-white/10 rounded-[40px] shadow-2xl ${className}`}
        >
            {/* Subtle Gradient Glow at top-left */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-10 p-8 sm:p-10">
                {children}
            </div>
        </motion.div>
    );
};

export default GlassCard;
