import React, { useEffect, useState, useRef } from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import gsap from 'gsap';

const Footer = () => {
    const [time, setTime] = useState("");
    const footerRef = useRef(null);

    // Clock Logic
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
                timeZone: 'Asia/Kolkata' // display user's local time or IST if preferred
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Scroll to Top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Magnetic Hover Base Logic (Simplified for Footer)
    const handleMagnetic = (e) => {
        const btn = e.currentTarget;
        const { width, height, left, top } = btn.getBoundingClientRect();
        const x = e.clientX - (left + width / 2);
        const y = e.clientY - (top + height / 2);

        gsap.to(btn, { x: x * 0.5, y: y * 0.5, duration: 0.3, ease: "power2.out" });
    };

    const resetMagnetic = (e) => {
        gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
    };

    return (
        <footer ref={footerRef} className="relative pt-24 pb-12 px-6 bg-slate-950 border-t border-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Upper Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
                    <div>
                        <p className="text-blue-500 font-mono text-sm mb-4 tracking-wider">HAVE AN IDEA?</p>
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight hover:text-slate-200 transition-colors cursor-pointer">
                            Let's build <br /> the future.
                        </h2>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-6">
                        {/* Back to Top Button - Magnetic */}
                        <button
                            onClick={scrollToTop}
                            onMouseMove={handleMagnetic}
                            onMouseLeave={resetMagnetic}
                            className="group relative w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 transition-all duration-300"
                        >
                            <ArrowUp size={24} className="text-slate-400 group-hover:text-white transition-colors" />
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-slate-900 mb-12 w-full"></div>

                {/* Middle Section - Links & Info */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold mb-6">
                            AI
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Crafting intelligent solutions with code and creativity.
                        </p>
                    </div>

                    {/* Socials - Magnetic List */}
                    <div className="md:col-span-2 flex flex-wrap gap-x-12 gap-y-4">
                        {[
                            { name: "GitHub", href: "#", icon: Github },
                            { name: "LinkedIn", href: "#", icon: Linkedin },
                            { name: "Twitter", href: "#", icon: Twitter },
                            { name: "Email", href: "mailto:hello@example.com", icon: Mail }
                        ].map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
                            >
                                <span className="p-2 bg-slate-900 rounded-full group-hover:bg-blue-600/20 group-hover:text-blue-500 transition-all">
                                    <social.icon size={16} />
                                </span>
                                {social.name}
                            </a>
                        ))}
                    </div>

                    {/* Status & Time */}
                    <div className="md:col-span-1 flex flex-col items-start md:items-end gap-2">
                        <div className="flex items-center gap-2 px-3 py-1 bg-green-900/20 border border-green-900/30 rounded-full">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-bold text-green-500 uppercase tracking-wide">Open to Work</span>
                        </div>
                        <p className="text-slate-500 text-xs font-mono mt-2">
                            LOCAL TIME: <span className="text-slate-300">{time}</span>
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-900/50">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <p className="text-xs text-slate-600">
                            &copy; {new Date().getFullYear()} Ankush.Eng. All Rights Reserved.
                        </p>
                        <span className="hidden md:block text-slate-800">|</span>
                        <p className="text-xs text-slate-500">
                            Designed & Built with <span className="text-blue-500">💙</span> by <span className="text-white">Ankush</span>
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] -z-0 pointer-events-none"></div>
        </footer>
    );
};

export default Footer;
