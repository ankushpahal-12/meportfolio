import React from 'react';
import { motion } from 'framer-motion';

const CyberButton = ({ children, href, onClick, className = "", variant = "primary" }) => {
    const Component = href ? 'a' : 'button';

    // Define colors based on variant
    const primaryColor = variant === "primary" ? "#3b82f6" : "#8b5cf6";
    const secondaryColor = variant === "primary" ? "#2563eb" : "#7c3aed";

    return (
        <Component
            href={href}
            onClick={onClick}
            target={href ? "_blank" : undefined}
            rel={href ? "noreferrer" : undefined}
            className={`relative group px-8 py-4 bg-slate-900 border border-slate-700 text-white font-bold uppercase tracking-wider overflow-hidden transition-all duration-300 hover:border-${variant === 'primary' ? 'blue' : 'purple'}-500 ${className}`}
        >
            {/* Liquid Fill Effect */}
            <div className={`absolute inset-0 bg-gradient-to-r from-${variant === 'primary' ? 'blue' : 'purple'}-600 to-${variant === 'primary' ? 'cyan' : 'pink'}-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0`}></div>

            {/* Glitch Overlay (Hidden by default, visible on hover via CSS) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white z-0 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                {children}
            </span>

            {/* Corner Accents */}
            <div className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-${variant === 'primary' ? 'blue' : 'purple'}-500 opacity-50 group-hover:opacity-100 transition-opacity`}></div>
            <div className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-${variant === 'primary' ? 'blue' : 'purple'}-500 opacity-50 group-hover:opacity-100 transition-opacity`}></div>

            {/* Glow */}
            <div className={`absolute -inset-1 bg-${variant === 'primary' ? 'blue' : 'purple'}-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
        </Component>
    );
};

export default CyberButton;
