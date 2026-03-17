import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Sun, Moon } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            const sections = ['home', 'about', 'education', 'certifications', 'projects', 'skills', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home', id: 'home' },
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Education', href: '#education', id: 'education' },
        { name: 'Certs', href: '#certifications', id: 'certifications' },
        { name: 'Interns', href: '#internships', id: 'internships' },
        { name: 'Projects', href: '#projects', id: 'projects' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 sm:p-6 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`
                    pointer-events-auto flex items-center gap-2 px-3 py-2 rounded-2xl transition-all duration-500
                    ${isScrolled || isMobileMenuOpen
                        ? 'bg-[var(--bg-secondary)]/80 backdrop-blur-2xl border border-[var(--border-color)] shadow-2xl'
                        : 'bg-transparent border border-transparent sm:bg-transparent'}
                    ${!isScrolled && !isMobileMenuOpen ? 'sm:border-transparent' : ''}
                `}
            >
                {/* Logo Section */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-600/10 border border-indigo-500/20 group cursor-default"
                >
                    <Code2 size={18} className="text-indigo-500 group-hover:rotate-12 transition-transform" />
                    <span className="text-sm font-black text-[var(--text-primary)] tracking-tighter uppercase hidden sm:block">
                        Ankush<span className="text-indigo-500">.</span>
                    </span>
                </motion.div>
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            className={`
                                relative px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors
                                ${activeSection === link.id ? 'text-indigo-500' : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'}
                            `}
                        >
                            <span className="relative z-10">{link.name}</span>
                            {activeSection === link.id && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-indigo-500/10 rounded-xl"
                                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                />
                            )}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-2 ml-2 pl-2 border-l border-[var(--border-color)]">
                    {/* Theme Toggle */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleTheme}
                        className="p-2 rounded-xl bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-indigo-500 transition-colors"
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </motion.button>

                    {/* Resume Button */}
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://drive.google.com/file/d/1DjeTpPTlevwMsqQMzmITPDJqiX_Vo2J9/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 transition-all hidden sm:flex items-center justify-center pointer-events-auto"
                    >
                        Resume
                    </motion.a>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 md:hidden text-[var(--text-secondary)] hover:text-indigo-500"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.nav>
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="fixed top-24 left-4 right-4 p-6 bg-[var(--bg-secondary)]/95 backdrop-blur-2xl border border-[var(--border-color)] rounded-3xl shadow-2xl pointer-events-auto md:hidden overflow-hidden"
                    >
                        <div className="grid grid-cols-2 gap-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`
                                        flex items-center justify-center p-4 rounded-2xl border transition-all text-[10px] font-bold uppercase tracking-widest
                                        ${activeSection === link.id
                                            ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-500'
                                            : 'bg-[var(--bg-tertiary)] border-[var(--border-color)] text-[var(--text-secondary)] hover:border-indigo-500/20'}
                                    `}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <a 
                            href="https://drive.google.com/file/d/1DjeTpPTlevwMsqQMzmITPDJqiX_Vo2J9/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full mt-6 py-4 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-indigo-600/20 flex items-center justify-center transition-all hover:bg-indigo-500"
                        >
                            Download Resume
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
