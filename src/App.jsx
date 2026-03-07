import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import SkillsModal from './components/SkillsModal';
import Education from './components/Education';
import Certifications from './components/Certifications';
import About from './components/About';
import Internships from './components/Internships';
import MediaModal from './components/MediaModal';
import { projects } from './data/projects';
import { skills } from './data/skills';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

import {
    Github, Linkedin, Mail, ArrowRight, ChevronRight, Code2,
    Cpu, Brain, Sparkles, MessageSquare, Copy, Check,
    Phone, MapPin, Send, Twitter, ExternalLink, Play, FileText, Download
} from 'lucide-react';
import meImage from './assets/profile.jpg';
import cvPdf from './assets/ankushcv.pdf';
import ParticleBackground from './components/ParticleBackground';

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('portfolio-theme') || 'dark';
    });

    // Media modal state
    const [mediaModal, setMediaModal] = useState({
        isOpen: false,
        type: 'image',
        url: '',
        title: ''
    });

    // 3D Card Hover Effect State
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const openMediaModal = (type, url, title) => {
        setMediaModal({ isOpen: true, type, url, title });
    };

    const closeMediaModal = () => {
        setMediaModal(prev => ({ ...prev, isOpen: false }));
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
    }, [theme]);

    const [copiedField, setCopiedField] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleCopy = (text, field) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for email service integration
        console.log('Form submitted:', formData);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    // Get AI & ML skills as primary subset
    const primarySkills = skills.find(cat => cat.category === "AI & ML")?.items || [];

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 relative overflow-hidden">
            {/* Particle Background */}
            <ParticleBackground theme={theme} />

            <Navbar theme={theme} toggleTheme={toggleTheme} />

            {/* Floating Sidebar for CV Links */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex-row md:left-0 md:top-1/2 md:-translate-x-0 md:-translate-y-1/2 z-[60] flex md:flex-col gap-4 p-4 md:p-6 shadow-2xl md:shadow-none bg-[var(--bg-secondary)]/80 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none border border-[var(--border-color)] md:border-transparent rounded-full md:rounded-none">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="relative group"
                >
                    <button
                        onClick={() => openMediaModal('video', 'https://www.w3schools.com/html/mov_bbb.mp4', 'Video CV')}
                        className="flex items-center justify-center w-12 h-12 rounded-full md:rounded-2xl bg-[var(--bg-tertiary)] md:bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-indigo-500/50 hover:text-indigo-500 transition-all shadow-xl hover:scale-110 group-hover:rounded-r-none relative z-10"
                    >
                        <Play size={20} className="text-indigo-500 group-hover:scale-110 transition-transform" />
                    </button>
                    {/* Hover Download Button */}
                    <a
                        href="https://www.w3schools.com/html/mov_bbb.mp4"
                        download
                        className="absolute inset-y-0 -right-10 w-12 flex items-center justify-center bg-indigo-500 text-white rounded-r-2xl opacity-0 -translate-x-full group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 z-0 shadow-xl"
                        title="Download Video CV"
                    >
                        <Download size={16} />
                    </a>
                    <span className="hidden md:block absolute left-28 px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all shadow-xl pointer-events-none z-20">
                        Watch / Download Video CV
                    </span>
                </motion.div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="relative group mt-2 md:mt-0"
                >
                    <button
                        onClick={() => openMediaModal('pdf', cvPdf, 'Specialized CV')}
                        className="flex items-center justify-center w-12 h-12 rounded-full md:rounded-2xl bg-[var(--bg-tertiary)] md:bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-indigo-500/50 hover:text-indigo-500 transition-all shadow-xl hover:scale-110 group-hover:rounded-r-none relative z-10"
                    >
                        <FileText size={20} className="text-indigo-500 group-hover:scale-110 transition-transform" />
                    </button>
                    {/* Hover Download Button */}
                    <a
                        href={cvPdf}
                        download="Ankush_Pahal_CV.pdf"
                        className="absolute inset-y-0 -right-10 w-12 flex items-center justify-center bg-indigo-500 text-white rounded-r-2xl opacity-0 -translate-x-full group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 z-0 shadow-xl"
                        title="Download Specialized CV"
                    >
                        <Download size={16} />
                    </a>
                    <span className="hidden md:block absolute left-28 px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all shadow-xl pointer-events-none z-20">
                        View / Download CV
                    </span>
                </motion.div>
            </div>

            <main>
                {/* Hero Section 2.0 (Extreme Redesign) */}
                <section id="home" className="relative min-h-[90vh] flex items-center pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
                    {/* Dynamic Geometric Background */}
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                        <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] mask-radial-fade"></div>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
                            <div className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
                            <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                            {/* Left Column: Advanced Typography & Socials */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
                                    }
                                }}
                            >
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.8 },
                                        visible: { opacity: 1, scale: 1 }
                                    }}
                                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-inner"
                                >
                                    <Sparkles size={14} className="animate-spin-slow text-indigo-500" />
                                    Next-Gen Intelligence
                                </motion.div>

                                <motion.h1
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    className="text-6xl md:text-8xl lg:text-[7.5rem] font-black text-[var(--text-primary)] mb-6 tracking-tight leading-[0.85] uppercase"
                                >
                                    Ankush <br />
                                    <span className="relative inline-block text-indigo-500">
                                        Pahal.
                                        <div className="absolute -inset-2 bg-indigo-500/20 blur-2xl -z-10 animate-pulse"></div>
                                    </span>
                                </motion.h1>

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, x: -20 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                    className="relative inline-block mb-10 group"
                                >
                                    <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-indigo-400 animate-gradient-scroll py-1">
                                        Architecting AI Systems for the Future.
                                    </h2>
                                    <div className="absolute -bottom-1 left-0 w-24 h-1.5 bg-indigo-600 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.5)]"></div>
                                </motion.div>

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    className="flex items-center gap-6"
                                >
                                    <div className="flex items-center gap-3">
                                        {[
                                            { Icon: Github, href: "https://github.com/ankushpahal-12" },
                                            { Icon: Linkedin, href: "https://linkedin.com/in/pahalankush" },
                                            { Icon: Mail, href: "#contact" }
                                        ].map(({ Icon, href }, i) => (
                                            <motion.a
                                                key={i}
                                                href={href}
                                                whileHover={{ scale: 1.15, y: -4, rotate: 5 }}
                                                className="w-12 h-12 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-indigo-500 hover:border-indigo-500/50 shadow-xl transition-all backdrop-blur-md"
                                            >
                                                <Icon size={20} />
                                            </motion.a>
                                        ))}
                                    </div>
                                    <button className="px-8 py-4 bg-indigo-600 text-white text-xs font-black uppercase tracking-widest rounded-xl shadow-2xl shadow-indigo-600/30 hover:bg-indigo-500 hover:-translate-y-1 transition-all flex items-center gap-3 group">
                                        Explore Projects
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </motion.div>
                            </motion.div>

                            {/* Right Column: Profile with Floating Badges & 3D Element */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative flex justify-center lg:justify-end perspective-[1000px]"
                            >
                                {/* Advanced Framer Motion Background Elements */}
                                <motion.div
                                    animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square rounded-full border border-indigo-500/20 border-dashed z-0 pointer-events-none"
                                />
                                <motion.div
                                    animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] aspect-square rounded-full border border-blue-500/10 z-0 pointer-events-none"
                                />
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square bg-indigo-500/10 rounded-full blur-[80px] z-0 pointer-events-none"
                                />

                                {/* 3D Interactive Card Container */}
                                <motion.div
                                    ref={cardRef}
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                    style={{
                                        rotateX,
                                        rotateY,
                                        transformStyle: "preserve-3d",
                                    }}
                                    className="relative z-10 w-full max-w-sm"
                                >
                                    <div
                                        style={{ transform: "translateZ(50px)" }}
                                        className="w-full aspect-[4/5] rounded-[4rem] overflow-hidden border-2 border-[var(--border-color)] shadow-[0_0_50px_rgba(79,70,229,0.15)] group relative bg-[var(--bg-secondary)]"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80"></div>
                                        <img
                                            src={meImage}
                                            alt="Ankush Pahal"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                        />

                                        {/* Glassmorphic Overlay (Popped out in 3D) */}
                                        <div
                                            style={{ transform: "translateZ(80px)" }}
                                            className="absolute bottom-6 left-6 right-6 p-5 rounded-3xl bg-indigo-900/40 backdrop-blur-2xl border border-white/20 z-20 shadow-2xl transition-all duration-300 group-hover:bg-indigo-600/50"
                                        >
                                            <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1.5 drop-shadow-md">Availability</p>
                                            <p className="text-white text-sm font-bold leading-tight drop-shadow-md">Accepting high-impact engineering challenges.</p>
                                        </div>
                                    </div>

                                    {/* Floating Glass Badges (Popped further out) */}
                                    <motion.div
                                        animate={{ y: [0, -15, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        style={{ transform: "translateZ(100px)" }}
                                        className="absolute -top-6 -left-6 z-30 px-4 py-2 rounded-2xl bg-indigo-900/60 backdrop-blur-xl border border-white/20 shadow-[-10px_-10px_30px_rgba(79,70,229,0.3)] flex items-center gap-2"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
                                        <span className="text-[10px] font-black text-white uppercase tracking-widest drop-shadow-sm">AI Architect</span>
                                    </motion.div>

                                    <motion.div
                                        animate={{ y: [0, 15, 0] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                        style={{ transform: "translateZ(120px)" }}
                                        className="absolute top-1/2 -right-10 z-30 px-4 py-2 rounded-2xl bg-indigo-900/60 backdrop-blur-xl border border-white/20 shadow-[10px_10px_30px_rgba(79,70,229,0.3)] flex items-center gap-2"
                                    >
                                        <Brain size={14} className="text-indigo-400" />
                                        <span className="text-[10px] font-black text-white uppercase tracking-widest drop-shadow-sm">LLM Scientist</span>
                                    </motion.div>

                                    <motion.div
                                        animate={{ x: [0, 10, 0] }}
                                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                        style={{ transform: "translateZ(90px)" }}
                                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-2xl bg-indigo-600/40 backdrop-blur-xl border border-indigo-400/50 shadow-[0_10px_30px_rgba(79,70,229,0.4)] flex items-center gap-2"
                                    >
                                        <Cpu size={14} className="text-white" />
                                        <span className="text-[10px] font-black text-white uppercase tracking-widest drop-shadow-sm">Open Source</span>
                                    </motion.div>
                                </motion.div>

                                {/* Decorative Background Elements */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 bg-indigo-500/5 rounded-full blur-[100px] animate-pulse"></div>
                            </motion.div>
                        </div>

                        {/* Premium Scroll Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="hidden lg:flex flex-col items-center gap-3 absolute bottom-10 left-1/2 -translate-x-1/2"
                        >
                            <span className="text-[10px] font-black text-[var(--text-tertiary)] uppercase tracking-[0.3em] vertical-text">Scroll</span>
                            <div className="w-px h-20 bg-gradient-to-b from-indigo-500 to-transparent relative overflow-hidden">
                                <motion.div
                                    animate={{ y: [0, 80] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-transparent via-white to-transparent"
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Professional Bio Section (Replaced by About Component) */}
                <About />

                {/* Professional History Sections */}
                <div className="relative">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent"></div>
                    <Education />
                    <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent"></div>
                </div>
                <Certifications />
                <Internships openMediaModal={openMediaModal} />

                {/* Projects Section */}
                <section id="projects" className="py-24 relative">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent"></div>
                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                            <div className="max-w-xl text-center md:text-left">
                                <h2 className="text-4xl font-black text-[var(--text-primary)] mb-6">Innovative Work</h2>
                                <p className="text-[var(--text-secondary)] text-lg">
                                    Building robust solutions with cutting-edge technologies.
                                </p>
                            </div>
                            <button className="text-indigo-400 font-bold flex items-center gap-2 hover:gap-3 transition-all group px-6 py-3 rounded-xl bg-[var(--bg-tertiary)] hover:bg-[var(--bg-tertiary)]/80">
                                View Full Portfolio <ChevronRight size={20} className="text-indigo-500" />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 group/list">
                            {projects.map((project, index) => (
                                <ProjectCard key={index} project={project} index={index} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Skills Section - Extraordinary Redesign */}
                <section id="skills" className="py-24 lg:py-40 bg-[var(--bg-secondary)] relative overflow-hidden">
                    {/* Background Decorative Elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] animate-pulse-slow"></div>
                        <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] mask-radial-fade"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-12 text-center md:text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-5xl md:text-6xl font-black text-[var(--text-primary)] mb-6 tracking-tight uppercase">
                                    Technical <br />
                                    <span className="text-indigo-500">Expertise.</span>
                                </h2>
                                <div className="w-24 h-2 bg-indigo-600 rounded-full mx-auto md:mx-0 shadow-[0_0_20px_rgba(79,70,229,0.4)]"></div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="px-10 py-5 bg-indigo-600/10 border border-indigo-500/30 text-indigo-400 font-black uppercase tracking-widest rounded-2xl hover:bg-indigo-600 hover:text-white transition-all flex items-center gap-4 shadow-2xl group"
                                >
                                    <Code2 size={24} className="group-hover:rotate-12 transition-transform" />
                                    Detailed Catalog
                                </button>
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {primarySkills.map((skill, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        type: "spring",
                                        damping: 20,
                                        stiffness: 100,
                                        delay: i * 0.08
                                    }}
                                    whileHover={{
                                        y: -12,
                                        scale: 1.05,
                                        transition: { type: "spring", damping: 10, stiffness: 200 }
                                    }}
                                    className="relative p-8 rounded-[2.5rem] bg-[var(--bg-tertiary)] border border-[var(--border-color)] group hover:border-indigo-500/50 hover:bg-indigo-500/[0.08] transition-colors overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10"
                                >
                                    {/* Inner Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-indigo-600/0 group-hover:from-indigo-600/10 group-hover:to-transparent transition-all pointer-events-none duration-500"></div>

                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        <div className="w-20 h-20 rounded-3xl bg-[var(--bg-primary)] flex items-center justify-center mb-6 shadow-xl group-hover:shadow-indigo-500/30 group-hover:scale-110 transition-all duration-500 border border-[var(--border-color)] group-hover:border-indigo-500/40">
                                            <i className={`${skill.icon} text-4xl text-indigo-500 group-hover:rotate-6 transition-transform duration-500`}></i>
                                        </div>
                                        <h4 className="text-xl font-black text-[var(--text-primary)] mb-2 uppercase tracking-tighter group-hover:text-indigo-400 transition-colors">{skill.name}</h4>
                                        <div className="w-10 h-1 bg-[var(--border-color)] group-hover:bg-indigo-500 group-hover:w-20 transition-all duration-500 rounded-full mb-4"></div>
                                        <p className="text-[var(--text-tertiary)] text-[10px] font-black uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-2">Core Proficiency</p>
                                    </div>

                                    {/* Corner Decoration */}
                                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-indigo-600/5 rounded-full group-hover:scale-[4] group-hover:bg-indigo-600/10 transition-all duration-1000"></div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.4 }}
                            className="mt-24 relative"
                        >
                            <div className="absolute inset-0 bg-indigo-600/10 rounded-[4rem] blur-[100px] -z-10 animate-pulse-slow"></div>
                            <div className="p-10 lg:p-20 rounded-[4rem] bg-gradient-to-br from-[var(--bg-tertiary)] to-[var(--bg-primary)] border border-indigo-500/30 relative overflow-hidden group/card shadow-2xl">
                                {/* Animated Background Pulse */}
                                <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-1000">
                                    <Brain size={300} className="text-indigo-500 animate-pulse-slow" />
                                </div>

                                <div className="relative z-10 max-w-3xl">
                                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-indigo-600 text-white mb-8 font-black uppercase tracking-[0.2em] text-[10px] shadow-xl shadow-indigo-600/30">
                                        <Sparkles size={16} />
                                        Advanced Strategy
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] mb-8 tracking-tight leading-none uppercase">
                                        Mastering the <br />
                                        <span className="text-indigo-500">AI Frontier.</span>
                                    </h3>
                                    <p className="text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed font-medium mb-10 opacity-80">
                                        Specializing in Deep Learning architectures, custom LLM fine-tuning, and production-grade RAG systems. I build intelligent solutions that scale with integrity and performance.
                                    </p>

                                    <div className="flex flex-wrap gap-4">
                                        {['Neural Nets', 'Transformers', 'DevOps', 'Cloud AI'].map((tag, idx) => (
                                            <span key={idx} className="px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl text-[10px] font-black text-indigo-400 uppercase tracking-widest">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-24 lg:py-40 relative">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--border-color)] to-transparent"></div>

                    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                            {/* Left: Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl font-black text-[var(--text-primary)] mb-8 tracking-tight">
                                    Let's build something <span className="text-indigo-500">remarkable.</span>
                                </h2>
                                <p className="text-[var(--text-secondary)] text-lg mb-12 max-w-lg leading-relaxed">
                                    I'm currently available for freelance projects and full-time opportunities.
                                    If you have a project that needs a touch of intelligence and precision, reach out!
                                </p>

                                <div className="space-y-6">
                                    {/* Email Card */}
                                    <div className="group p-6 rounded-3xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] hover:border-indigo-500/30 transition-all">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-400">
                                                    <Mail size={24} />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-widest mb-1">Email Me</p>
                                                    <p className="text-[var(--text-primary)] font-semibold">ankushpayal58@gmail.com</p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => handleCopy('ankushpayal58@gmail.com', 'email')}
                                                className="p-2 rounded-xl bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-indigo-400 transition-colors"
                                            >
                                                {copiedField === 'email' ? <Check size={18} /> : <Copy size={18} />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Phone Card */}
                                    <div className="group p-6 rounded-3xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] hover:border-indigo-500/30 transition-all">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-400">
                                                    <Phone size={24} />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-widest mb-1">Call Me</p>
                                                    <p className="text-[var(--text-primary)] font-semibold">+91 85710 64140</p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => handleCopy('+91 85710 64140', 'phone')}
                                                className="p-2 rounded-xl bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-indigo-400 transition-colors"
                                            >
                                                {copiedField === 'phone' ? <Check size={18} /> : <Copy size={18} />}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Location Card */}
                                    <div className="group p-6 rounded-3xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] hover:border-indigo-500/30 transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-400">
                                                <MapPin size={24} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-widest mb-1">Location</p>
                                                <p className="text-[var(--text-primary)] font-semibold">Bengaluru, KA, India</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 flex items-center gap-6">
                                    <p className="text-sm font-bold text-[var(--text-tertiary)] uppercase tracking-widest">Connect:</p>
                                    <div className="flex gap-4">
                                        {[Github, Linkedin, Twitter].map((Icon, i) => (
                                            <motion.a
                                                key={i}
                                                href="#"
                                                whileHover={{ y: -3 }}
                                                className="w-10 h-10 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-indigo-400 hover:border-indigo-500/50 transition-all"
                                            >
                                                <Icon size={20} />
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right: Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <form
                                    onSubmit={handleSubmit}
                                    className="p-8 lg:p-10 rounded-[2.5rem] bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-2xl relative z-10 space-y-6"
                                >
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-widest ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="John Doe"
                                                required
                                                className="w-full px-5 py-4 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:border-indigo-600 transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-widest ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="john@example.com"
                                                required
                                                className="w-full px-5 py-4 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:border-indigo-600 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-widest ml-1">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            placeholder="Project Inquiry"
                                            required
                                            className="w-full px-5 py-4 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:border-indigo-600 transition-colors"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-widest ml-1">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows="5"
                                            placeholder="Tell me about your project..."
                                            required
                                            className="w-full px-5 py-4 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:border-indigo-600 transition-colors resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-5 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-indigo-600/30 hover:bg-indigo-500 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
                                    >
                                        Send Message
                                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </form>

                                {/* Decorative glow */}
                                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px] -z-10"></div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Extraordinary Footer Section */}
            <footer className="relative pt-20 pb-10 overflow-hidden border-t border-[var(--border-color)]">
                {/* Background decorative elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
                    <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]"></div>
                </div>

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                    {/* Pre-footer CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20 p-8 lg:p-12 rounded-[3.5rem] bg-gradient-to-br from-indigo-600 to-blue-700 text-white relative overflow-hidden shadow-2xl shadow-indigo-600/20"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="text-center lg:text-left">
                                <h3 className="text-3xl lg:text-5xl font-black mb-4 tracking-tighter">Ready to build the future?</h3>
                                <p className="text-indigo-100 text-lg font-medium opacity-90">Let's collaborate on your next high-impact AI project.</p>
                            </div>
                            <button
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                className="px-10 py-5 bg-white text-indigo-600 font-black rounded-2xl hover:scale-105 transition-transform shadow-xl"
                            >
                                Start a Conversation
                            </button>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                        {/* Column 1: Brand & Mission */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-600/30">
                                    <Code2 size={28} />
                                </div>
                                <span className="text-3xl font-black text-[var(--text-primary)] tracking-tighter uppercase">
                                    Ankush<span className="text-indigo-500">.</span>
                                </span>
                            </div>
                            <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-md font-medium">
                                Architecting the next generation of intelligent systems. Specialized in production-grade AI and scalable neural architectures.
                            </p>
                            <div className="flex items-center gap-4">
                                {[
                                    { Icon: Github, href: "https://github.com/ankushpahal-12" },
                                    { Icon: Linkedin, href: "https://linkedin.com/in/pahalankush" },
                                    { Icon: Twitter, href: "" },
                                    { Icon: Mail, href: "mailto:ankushpayal58@gmail.com" }
                                ].map(({ Icon, href }, i) => (
                                    <motion.a
                                        key={i}
                                        href={href}
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        className="w-12 h-12 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-indigo-500 hover:border-indigo-500/30 transition-all shadow-lg"
                                    >
                                        <Icon size={20} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em]">Navigation</h4>
                            <ul className="space-y-4">
                                {[
                                    { name: 'Home', id: 'home' },
                                    { name: 'Education', id: 'education' },
                                    { name: 'Projects', id: 'projects' },
                                    { name: 'Skills', id: 'skills' },
                                    { name: 'Contact', id: 'contact' }
                                ].map((link) => (
                                    <li key={link.id}>
                                        <button
                                            onClick={() => document.getElementById(link.id).scrollIntoView({ behavior: 'smooth' })}
                                            className="text-[var(--text-secondary)] hover:text-indigo-500 font-bold text-sm transition-colors flex items-center gap-2 group"
                                        >
                                            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Contact Info */}
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em]">Contact</h4>
                            <ul className="space-y-4">
                                <li>
                                    <a href="mailto:ankushpayal58@gmail.com" className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-indigo-500 transition-colors font-bold group">
                                        <div className="w-10 h-10 rounded-xl bg-[var(--bg-tertiary)] flex items-center justify-center border border-[var(--border-color)] group-hover:border-indigo-500/30">
                                            <Mail size={18} />
                                        </div>
                                        <span className="text-sm">Email Me</span>
                                    </a>
                                </li>
                                <li>
                                    <div className="flex items-center gap-3 text-[var(--text-secondary)] font-bold group">
                                        <div className="w-10 h-10 rounded-xl bg-[var(--bg-tertiary)] flex items-center justify-center border border-[var(--border-color)]">
                                            <Phone size={18} />
                                        </div>
                                        <span className="text-sm">+91 987 654 3210</span>
                                    </div>
                                </li>
                                <li className="pt-4">
                                    <button className="w-full py-4 bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs font-black uppercase tracking-widest rounded-2xl hover:border-indigo-500/50 transition-all flex items-center justify-center gap-2 group">
                                        Download Resume
                                        <ExternalLink size={14} className="group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-10 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center gap-6 text-[var(--text-tertiary)] text-xs font-bold uppercase tracking-widest">
                        <p>© {new Date().getFullYear()} Ankush Pahal. Built for the Intelligence Age.</p>
                        <div className="flex items-center gap-8">
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="flex items-center gap-2 hover:text-indigo-500 transition-colors"
                            >
                                Back to Top
                                <div className="w-8 h-8 rounded-lg bg-[var(--bg-tertiary)] flex items-center justify-center border border-[var(--border-color)]">
                                    <ArrowRight size={14} className="-rotate-90" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </footer>

            <SkillsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                skills={skills}
                theme={theme}
            />

            <MediaModal
                isOpen={mediaModal.isOpen}
                onClose={closeMediaModal}
                type={mediaModal.type}
                url={mediaModal.url}
                title={mediaModal.title}
            />
        </div >
    );
};

export default App;
