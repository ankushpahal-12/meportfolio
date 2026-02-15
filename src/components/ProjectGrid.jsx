import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, BarChart2, Layers, Cpu, Code, Database, Globe, Play, Lock, Zap, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        id: "PROJ-01",
        title: "Fake News Detection System",
        subtitle: "NLP / Transformer Models",
        description: "A robust deep learning pipeline utilizing BERT to classify news articles as real or fake with high accuracy.",
        metrics: { accuracy: "96.5%", f1: "0.95" },
        tags: ["PyTorch", "Hugging Face", "BERT", "FastAPI"],
        color: "from-orange-500 to-red-600",
        icon: Database,
        status: "Operational",
        github: "#",
        demo: "#"
    },
    {
        id: "PROJ-02",
        title: "E-Commerce Recommendation Engine",
        subtitle: "Recommender Systems / ML",
        description: "Personalized product recommendation system boosting user engagement and sales conversion for retail platforms.",
        metrics: { ctr: "+15%", revenue: "+20%" },
        tags: ["Scikit-learn", "TensorFlow", "Pandas", "Redis"],
        color: "from-blue-500 to-cyan-400",
        icon: Globe,
        status: "Deployed",
        github: "#",
        demo: null
    },
    {
        id: "PROJ-03",
        title: "Autonomous Vehicle Vision",
        subtitle: "Computer Vision / YOLO",
        description: "Real-time object detection and lane segmentation system designed for self-driving car simulation environments.",
        metrics: { fps: "45", map: "0.89" },
        tags: ["OpenCV", "YOLO", "PyTorch", "Docker"],
        color: "from-green-500 to-emerald-400",
        icon: Zap,
        status: "Prototype",
        github: "#",
        demo: "#"
    },
    {
        id: "PROJ-04",
        title: "Predictive Maintenance Dashboard",
        subtitle: "IoT / Time Series",
        description: "IoT sensor data analysis tool to predict equipment failures before they happen, visualizing risk in real-time.",
        metrics: { anomaly_detection: "85%", false_positives: "<1%" },
        tags: ["Keras", "Plotly", "Streamlit", "InfluxDB"],
        color: "from-purple-500 to-pink-500",
        icon: BarChart2,
        status: "Beta",
        github: "#",
        demo: null
    },
    {
        id: "PROJ-05",
        title: "Customer Support Chatbot",
        subtitle: "GenAI / RAG",
        description: "Intelligent Q&A bot handling complex customer queries using Retrieval Augmented Generation (RAG).",
        metrics: { automation: "40%", satisfaction: "4.8/5" },
        tags: ["LangChain", "OpenAI", "Pinecone", "React"],
        color: "from-indigo-500 to-violet-500",
        icon: MessageSquare => <Code size={20} />, // Placeholder icon fix
        status: "Live",
        github: "#",
        demo: "#"
    }
];

const ProjectGrid = () => {
    const [activeProject, setActiveProject] = useState(projects[0]);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleProjectChange = (project) => {
        if (project.id === activeProject.id || isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setActiveProject(project);
            setIsAnimating(false);
        }, 300); // Wait for exit animation
    };

    return (
        <section id="projects" className="min-h-screen py-16 md:py-24 px-6 relative overflow-hidden bg-slate-950 flex flex-col items-center">

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.3)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="max-w-7xl w-full relative z-10">

                {/* Header */}
                <div className="flex justify-between items-end mb-12 border-b border-slate-800 pb-6">
                    <div>
                        <div className="flex items-center gap-2 text-cyan-500 font-mono text-xs mb-2 animate-pulse">
                            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                            MISSION CONTROL // PROJECTS
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Command <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Center</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-[600px]">

                    {/* Left Panel: Mission List */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">
                            <span>Available Missions</span>
                            <span>{projects.length} Found</span>
                        </div>

                        <div className="space-y-3">
                            {projects.map((project) => (
                                <button
                                    key={project.id}
                                    onClick={() => handleProjectChange(project)}
                                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 group relative overflow-hidden ${activeProject.id === project.id
                                        ? 'bg-blue-900/20 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)]'
                                        : 'bg-slate-900/40 border-slate-800 hover:border-slate-600 hover:bg-slate-800/50'
                                        }`}
                                >
                                    <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${activeProject.id === project.id ? 'opacity-100' : 'opacity-0'}`}>
                                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent"></div>
                                    </div>

                                    <div className="relative z-10 flex justify-between items-start">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className={`font-mono text-[10px] uppercase px-1.5 py-0.5 rounded border ${activeProject.id === project.id ? 'text-blue-300 border-blue-500/30' : 'text-slate-500 border-slate-700'
                                                    }`}>
                                                    {project.id}
                                                </span>
                                                <span className={`text-[10px] font-bold ${activeProject.id === project.id ? 'text-blue-400' : 'text-slate-500'}`}>
                                                    {project.status.toUpperCase()}
                                                </span>
                                            </div>
                                            <h3 className={`font-bold text-sm ${activeProject.id === project.id ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                                                {project.title}
                                            </h3>
                                        </div>
                                        {activeProject.id === project.id && <Zap size={16} className="text-blue-500 animate-pulse" />}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Panel: Holographic Viewport */}
                    <div className="lg:col-span-8 flex flex-col">
                        <AnimatePresence mode="wait">
                            {!isAnimating && (
                                <motion.div
                                    key={activeProject.id}
                                    initial={{ opacity: 0, x: 20, scale: 0.95 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: -20, scale: 0.95 }}
                                    transition={{ duration: 0.4, ease: "circOut" }}
                                    className="relative h-full bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden flex flex-col group shadow-2xl"
                                >
                                    {/* Top Bar: Holo-Header */}
                                    <div className="h-12 bg-slate-950/80 border-b border-white/5 flex items-center justify-between px-6">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                                        </div>
                                        <div className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-2">
                                            <Lock size={10} /> SECURE CONNECTION // {activeProject.id}
                                        </div>
                                    </div>

                                    {/* Main Content Area */}
                                    <div className="flex-1 flex flex-col relative p-8 md:p-12 overflow-hidden">

                                        {/* Background Pulse */}
                                        <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${activeProject.color} rounded-full blur-[120px] opacity-10 pointer-events-none`}></div>

                                        <div className="relative z-10 flex flex-col h-full justify-between">
                                            <div>
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className={`p-2 rounded-lg bg-gradient-to-br ${activeProject.color} bg-opacity-10 border border-white/10`}>
                                                        {React.createElement(activeProject.icon || Database, { size: 24, className: "text-white" })}
                                                    </div>
                                                    <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">
                                                        {activeProject.subtitle}
                                                    </span>
                                                </div>

                                                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                                    {activeProject.title}
                                                </h1>

                                                <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl border-l-[3px] border-slate-700 pl-6">
                                                    {activeProject.description}
                                                </p>

                                                <div className="grid grid-cols-2 gap-4 mb-8 max-w-lg">
                                                    {Object.entries(activeProject.metrics).map(([key, value]) => (
                                                        <div key={key} className="bg-slate-950/50 p-4 rounded-xl border border-white/5">
                                                            <div className="text-xs text-slate-500 uppercase font-mono mb-1">{key.replace('_', ' ')}</div>
                                                            <div className="text-xl font-bold text-white font-mono">{value}</div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-8">
                                                    {activeProject.tags.map(tag => (
                                                        <span key={tag} className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 text-xs font-mono">
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex gap-4 mt-auto">
                                                <a href={activeProject.github} className="flex-1 md:flex-none px-8 py-4 bg-white text-slate-950 font-bold rounded-lg hover:bg-cyan-50 transition-colors flex items-center justify-center gap-2 group/btn">
                                                    <Github size={20} />
                                                    <span>Source Code</span>
                                                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                                </a>
                                                {activeProject.demo && (
                                                    <a href={activeProject.demo} className="flex-1 md:flex-none px-8 py-4 bg-slate-800 text-white font-bold rounded-lg border border-slate-700 hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
                                                        <ExternalLink size={20} />
                                                        <span>Live Demo</span>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Scanline Overlay */}
                                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[size:100%_2px,3px_100%] opacity-20"></div>

                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProjectGrid;
