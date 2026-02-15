import React from 'react';
import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
    { name: "Github", icon: Github, href: "https://github.com/ankushpahal-12" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/pahalankush/" },
    { name: "Email", icon: Mail, href: "mailto:ankushpayal58@gmail.com" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/ankush_pahal_759/" },
    // { name: "Twitter", icon: Twitter, href: "#" }, // Add if needed
];

const SocialDock = ({ orientation = "vertical", className = "" }) => {
    const isVertical = orientation === "vertical";

    return (
        <div className={`flex ${isVertical ? 'flex-col' : 'flex-row'} gap-4 items-center ${className}`}>
            {socialLinks.map((link, index) => (
                <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, x: isVertical ? -20 : 0, y: isVertical ? 0 : 20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="p-3 bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-full text-slate-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-all shadow-lg group relative"
                >
                    <link.icon size={20} />

                    {/* Tooltip for desktop only */}
                    <span className="absolute left-full ml-3 px-2 py-1 bg-slate-800 text-xs text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
                        {link.name}
                    </span>
                </motion.a>
            ))}

            {/* Visual Line Connector if vertical */}
            {isVertical && (
                <div className="w-px h-24 bg-gradient-to-b from-slate-700 to-transparent mt-4 hidden md:block"></div>
            )}
        </div>
    );
};

export default SocialDock;
