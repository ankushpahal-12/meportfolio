import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    User, MapPin, School, GraduationCap,
    Code2, Brain, Sparkles, Heart,
    Milestone, Rocket, Terminal, ChevronRight,
    FolderGit2
} from 'lucide-react';

// BentoCard wrapper with performant mouse radial-glow tracking
const BentoCard = ({ 
    children, 
    className = '', 
    delay = 0, 
    initial = {}, 
    whileInView = {}, 
    viewport = { once: true }, 
    transition = {}, 
    onMouseEnter, 
    onMouseLeave, 
    animate 
}) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        cardRef.current.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        cardRef.current.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
            transition={{ ...transition, delay }}
            onMouseMove={handleMouseMove}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            animate={animate}
            className={`relative overflow-hidden group rounded-[2.5rem] bg-[var(--bg-tertiary)]/20 backdrop-blur-sm border border-[var(--border-color)] shadow-xl transition-all duration-500 hover:bg-[var(--bg-tertiary)]/40 hover:border-indigo-500/30 ${className}`}
        >
            {/* Cursor Glow Overlay */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(350px circle at var(--mx, 0px) var(--my, 0px), rgba(99, 102, 241, 0.15), transparent 80%)`
                }}
            />
            {children}
        </motion.div>
    );
};

// Interactive Visual Studio Code Mock IDE component
const AnkushTerm = () => {
    const [activeTab, setActiveTab] = useState('python');

    const renderPython = () => (
        <div className="font-mono text-[11px] sm:text-xs text-[#cbd5e1] space-y-1 overflow-x-auto select-none py-1">
            <div><span className="text-[#f43f5e] font-bold">class</span> <span className="text-[#38bdf8] font-bold">AIEngineer</span>:</div>
            <div className="pl-4"><span className="text-[#f43f5e] font-bold">def</span> <span className="text-[#38bdf8] font-bold">__init__</span>(<span className="text-[#fb923c]">self</span>):</div>
            <div className="pl-8"><span className="text-[#fb923c]">self</span>.name = <span className="text-[#a7f3d0]">"Ankush Pahal"</span></div>
            <div className="pl-8"><span className="text-[#fb923c]">self</span>.role = <span className="text-[#a7f3d0]">"Agentic AI Engineer"</span></div>
            <div className="pl-8"><span className="text-[#fb923c]">self</span>.location = <span className="text-[#a7f3d0]">"Jhajjar, Haryana, India"</span></div>
            <div className="pl-8"><span className="text-[#fb923c]">self</span>.specialty = <span className="text-[#a7f3d0]">"Autonomous Systems & RAG"</span></div>
            <br />
            <div className="pl-4"><span className="text-[#f43f5e] font-bold">def</span> <span className="text-[#38bdf8] font-bold">build_solutions</span>(<span className="text-[#fb923c]">self</span>):</div>
            <div className="pl-8"><span className="text-[#f43f5e] font-bold">return</span> [</div>
            <div className="pl-12"><span className="text-[#a7f3d0]">"Multi-Agent Orchestrations (CrewAI)"</span>,</div>
            <div className="pl-12"><span className="text-[#a7f3d0]">"LangChain / LangGraph Agents"</span>,</div>
            <div className="pl-12"><span className="text-[#a7f3d0]">"Vector DBs (Pinecone, Chroma)"</span>,</div>
            <div className="pl-12"><span className="text-[#a7f3d0]">"Computer Vision Biometrics"</span></div>
            <div className="pl-8">]</div>
        </div>
    );

    const renderJson = () => (
        <div className="font-mono text-[11px] sm:text-xs text-[#cbd5e1] space-y-1 overflow-x-auto select-none py-1">
            <div><span className="text-[#f472b6]">{"{"}</span></div>
            <div className="pl-4"><span className="text-[#38bdf8] font-bold">"name"</span>: <span className="text-[#a7f3d0]">"Ankush Pahal"</span>,</div>
            <div className="pl-4"><span className="text-[#38bdf8] font-bold">"credentials"</span>: <span className="text-[#f472b6]">{"["}</span></div>
            <div className="pl-8"><span className="text-[#a7f3d0]">"Microsoft SQL AI Developer Associate"</span>,</div>
            <div className="pl-8"><span className="text-[#a7f3d0]">"IBM RAG and Agentic AI Certified"</span>,</div>
            <div className="pl-8"><span className="text-[#a7f3d0]">"Automation Anywhere A360 Essentials"</span></div>
            <div className="pl-4"><span className="text-[#f472b6]">{"]"}</span>,</div>
            <div className="pl-4"><span className="text-[#38bdf8] font-bold">"core_stack"</span>: <span className="text-[#f472b6]">{"{"}</span></div>
            <div className="pl-8"><span className="text-[#38bdf8] font-bold">"backend"</span>: <span className="text-[#a7f3d0]">"Python, FastAPI, Node.js"</span>,</div>
            <div className="pl-8"><span className="text-[#38bdf8] font-bold">"ai_ml"</span>: <span className="text-[#a7f3d0]">"TensorFlow, PyTorch, Scikit-Learn"</span>,</div>
            <div className="pl-8"><span className="text-[#38bdf8] font-bold">"agentic"</span>: <span className="text-[#a7f3d0]">"LangChain, LangGraph, CrewAI, RAG"</span></div>
            <div className="pl-4"><span className="text-[#f472b6]">{"}"}</span></div>
            <div><span className="text-[#f472b6]">{"}"}</span></div>
        </div>
    );

    const renderMarkdown = () => (
        <div className="font-sans text-[11px] sm:text-xs text-[#cbd5e1] space-y-3 overflow-y-auto max-h-[190px] pr-2 py-1 scrollbar-thin select-none">
            <div>
                <h4 className="text-xs font-black text-indigo-400 uppercase tracking-wider border-b border-indigo-500/20 pb-1 mb-2 flex items-center gap-1.5">
                    🎓 LPU B.Tech CSE (2023 - 2027)
                </h4>
                <p className="text-[var(--text-secondary)] text-[10px] mb-2 italic">
                    My detailed year-by-year progression at Lovely Professional University.
                </p>
            </div>
            <div className="space-y-3">
                <div className="relative pl-3.5 border-l-2 border-indigo-500/30">
                    <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-indigo-500"></span>
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block">Year 1 (2023 - 2024)</span>
                    <span className="text-[10px] text-[var(--text-secondary)] leading-relaxed">
                        Built absolute CS foundations: mastered Java and Python logic, networking infrastructure, and linear algebra fundamentals.
                    </span>
                </div>
                <div className="relative pl-3.5 border-l-2 border-indigo-500/30">
                    <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block">Year 2 (2024 - 2025)</span>
                    <span className="text-[10px] text-[var(--text-secondary)] leading-relaxed">
                        Dove deep into advanced Data Structures & Algorithms, database architecture, and earned Automation Anywhere A360 certification.
                    </span>
                </div>
                <div className="relative pl-3.5 border-l-2 border-indigo-500/30">
                    <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-purple-500"></span>
                    <span className="text-[10px] font-bold text-purple-500 uppercase tracking-widest block">Year 3 (2025 - 2026)</span>
                    <span className="text-[10px] text-[var(--text-secondary)] leading-relaxed">
                        Led AI research groups at LPU, built face recognition biometric systems, and earned IBM Agentic AI and Microsoft SQL AI Associate.
                    </span>
                </div>
                <div className="relative pl-3.5 border-l-2 border-indigo-500/30">
                    <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-pink-500"></span>
                    <span className="text-[10px] font-bold text-pink-500 uppercase tracking-widest block">Year 4 (2026 - 2027)</span>
                    <span className="text-[10px] text-[var(--text-secondary)] leading-relaxed">
                        Deepening focus in neural network designs, production-grade micro-agents, and bridging the gap to industry standards as an upcoming freshman.
                    </span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-full rounded-2xl bg-[#070b15]/90 border border-indigo-500/20 overflow-hidden shadow-2xl flex flex-col h-[270px] backdrop-blur-md">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-3 py-2 bg-[#04060c] border-b border-indigo-500/10">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                </div>
                <div className="text-[9px] font-black text-indigo-400/80 uppercase tracking-widest font-mono flex items-center gap-1">
                    <Terminal size={10} />
                    Ankush@Pahal-Dev: ~/portfolio
                </div>
                <div className="w-8" />
            </div>

            {/* Tab Selector */}
            <div className="flex bg-[#04060c] text-[10px] font-mono border-b border-indigo-500/10">
                <button
                    onClick={() => setActiveTab('python')}
                    className={`px-3 py-1.5 border-r border-indigo-500/10 flex items-center gap-1.5 transition-colors ${
                        activeTab === 'python'
                            ? 'bg-[#070b15] text-indigo-400 font-bold border-t-2 border-t-indigo-500'
                            : 'text-[var(--text-tertiary)] hover:bg-[#070b15]/50 hover:text-[var(--text-primary)]'
                    }`}
                >
                    <FolderGit2 size={10} className="text-indigo-400" />
                    ankush.py
                </button>
                <button
                    onClick={() => setActiveTab('json')}
                    className={`px-3 py-1.5 border-r border-indigo-500/10 flex items-center gap-1.5 transition-colors ${
                        activeTab === 'json'
                            ? 'bg-[#070b15] text-indigo-400 font-bold border-t-2 border-t-indigo-500'
                            : 'text-[var(--text-tertiary)] hover:bg-[#070b15]/50 hover:text-[var(--text-primary)]'
                    }`}
                >
                    <FolderGit2 size={10} className="text-cyan-400" />
                    skills.json
                </button>
                <button
                    onClick={() => setActiveTab('markdown')}
                    className={`px-3 py-1.5 border-r border-indigo-500/10 flex items-center gap-1.5 transition-colors ${
                        activeTab === 'markdown'
                            ? 'bg-[#070b15] text-indigo-400 font-bold border-t-2 border-t-indigo-500'
                            : 'text-[var(--text-tertiary)] hover:bg-[#070b15]/50 hover:text-[var(--text-primary)]'
                    }`}
                >
                    <FolderGit2 size={10} className="text-purple-400" />
                    journey.md
                </button>
            </div>

            {/* Code Content Panel */}
            <div className="flex-1 p-4 overflow-y-auto bg-[#070b15] flex gap-3 text-[11px] sm:text-xs">
                {/* Line numbers */}
                <div className="font-mono text-indigo-500/30 select-none text-right space-y-1">
                    {Array.from({ length: activeTab === 'python' ? 14 : activeTab === 'json' ? 13 : 18 }).map((_, i) => (
                        <div key={i}>{i + 1}</div>
                    ))}
                </div>
                {/* Editor content */}
                <div className="flex-1 min-w-0">
                    {activeTab === 'python' && renderPython()}
                    {activeTab === 'json' && renderJson()}
                    {activeTab === 'markdown' && renderMarkdown()}
                </div>
            </div>
        </div>
    );
};

const About = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const journey = [
        {
            year: "Childhood",
            title: "Roots in Jhajjar",
            description: "Born and raised in Jhajjar, Haryana. My curiosity for technology started with simple wonder about how complex computers and programs worked under the hood.",
            icon: <Heart className="text-pink-500" />,
            color: "bg-pink-500/10"
        },
        {
            year: "2020-2023",
            title: "Dronacharya School",
            description: "Completed my 10th and 12th (PCM) with 81% and 84.4% respectively. This math-heavy foundation sharpened my core analytical reasoning and algorithm formulation abilities.",
            icon: <School className="text-blue-500" />,
            color: "bg-blue-500/10"
        },
        {
            year: "2023-Present",
            title: "Lovely Professional Univ.",
            description: "Pursuing a B.Tech in Computer Science and Engineering. Deepening mastery over neural networks, machine learning models, and complex software configurations.",
            icon: <GraduationCap className="text-indigo-500" />,
            color: "bg-indigo-500/10"
        }
    ];

    const stats = [
        { label: "Location", value: "Jhajjar, Haryana", icon: <MapPin size={16} /> },
        { label: "Education", value: "B.Tech CSE Student", icon: <GraduationCap size={16} /> },
        { label: "Focus", value: "AI & ML", icon: <Brain size={16} /> },
        { label: "Status", value: "Upcoming Fresher", icon: <Rocket size={16} /> }
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">
                            <User size={14} />
                            Candidate Profile
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] tracking-tight mb-6 uppercase section-title">
                            The Mind <br />
                            <span className="text-indigo-500">Building the Intelligence.</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Main Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Stat card - top left */}
                    <BentoCard
                        className="md:col-span-4 p-8 relative overflow-hidden group shadow-xl"
                        onMouseEnter={() => setHoveredIndex('snapshot')}
                        onMouseLeave={() => setHoveredIndex(null)}
                        animate={
                            hoveredIndex && hoveredIndex !== 'snapshot' 
                            ? { opacity: 0.4, scale: 0.95, filter: 'blur(2px)' } 
                            : { opacity: 1, scale: hoveredIndex === 'snapshot' ? 1.02 : 1, filter: 'blur(0px)' }
                        }
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-1000">
                            <Sparkles size={120} className="text-indigo-500" />
                        </div>
                        <h3 className="text-xl font-black text-[var(--text-primary)] mb-6 uppercase">Snapshot</h3>
                        <div className="space-y-4">
                            {stats.map((stat, i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-secondary)]/40 border border-[var(--border-color)]">
                                    <div className="flex items-center gap-3">
                                        <div className="text-indigo-500">{stat.icon}</div>
                                        <span className="text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-wider">{stat.label}</span>
                                    </div>
                                    <span className="text-sm font-bold text-[var(--text-primary)]">{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </BentoCard>

                    {/* Bio Content - center top with Visual Studio Mock Editor */}
                    <BentoCard
                        className="md:col-span-8 p-8 relative overflow-hidden group shadow-xl"
                        onMouseEnter={() => setHoveredIndex('bio')}
                        onMouseLeave={() => setHoveredIndex(null)}
                        animate={
                            hoveredIndex && hoveredIndex !== 'bio' 
                            ? { opacity: 0.4, scale: 0.95, filter: 'blur(2px)' } 
                            : { opacity: 1, scale: hoveredIndex === 'bio' ? 1.02 : 1, filter: 'blur(0px)' }
                        }
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/30">
                                        <Code2 size={24} />
                                    </div>
                                    <h3 className="text-2xl font-black text-[var(--text-primary)] uppercase">Academic Quest</h3>
                                </div>
                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 font-medium">
                                    I am <span className="text-indigo-500 font-bold">Ankush Pahal</span>, an aspiring AI Engineer and Computer Science student. I dedicate my efforts to mastering neural architectures, automation paradigms, and advanced Agentic systems.
                                </p>
                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed font-medium">
                                    Based in <span className="text-[var(--text-primary)] font-bold">Jhajjar, Haryana</span>, and completing my studies at <span className="text-[var(--text-primary)] font-bold">Lovely Professional University</span>, I focus on turning complex logical computations into automated, production-grade applications that solve actual issues.
                                </p>
                            </div>
                            <div>
                                <AnkushTerm />
                            </div>
                        </div>
                        {/* Decorative background pulse */}
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
                    </BentoCard>

                    {/* Journey Timeline - lower sections */}
                    {journey.map((stage, i) => (
                        <BentoCard
                            key={i}
                            delay={i * 0.1}
                            initial={{ 
                                opacity: 0, 
                                x: i === 0 ? -100 : (i === 2 ? 100 : 0), 
                                y: i === 1 ? 100 : 0, 
                                scale: 0.8 
                            }}
                            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                            onMouseEnter={() => setHoveredIndex(`journey-${i}`)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            animate={
                                hoveredIndex && hoveredIndex !== `journey-${i}` 
                                ? { opacity: 0.4, scale: 0.95, filter: 'blur(2px)' } 
                                : { opacity: 1, scale: hoveredIndex === `journey-${i}` ? 1.05 : 1, filter: 'blur(0px)' }
                            }
                            className="md:col-span-4 p-8 relative overflow-hidden group/stage shadow-lg"
                        >
                            <div className={`w-12 h-12 rounded-2xl ${stage.color} flex items-center justify-center mb-6 shadow-inner`}>
                                {stage.icon}
                            </div>
                            <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em] mb-2 block">{stage.year}</span>
                            
                            {stage.year === "2023-Present" ? (
                                <div>
                                    <h4 className="text-lg font-black text-[var(--text-primary)] mb-3 uppercase tracking-tight group-hover/stage:text-indigo-400 transition-colors">
                                        {stage.title}
                                    </h4>
                                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-medium mb-4">
                                        {stage.description}
                                    </p>
                                    
                                    {/* Detailed 4-Year Progression Segment */}
                                    <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-[var(--border-color)]">
                                        <div className="flex gap-1.5 items-start">
                                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1 shrink-0"></span>
                                            <div>
                                                <span className="text-[8px] font-black text-indigo-400 uppercase tracking-widest block leading-none mb-0.5">Y1 basics</span>
                                                <span className="text-[9px] text-[var(--text-secondary)] leading-tight block">Java, Python, Logic</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-1.5 items-start">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1 shrink-0"></span>
                                            <div>
                                                <span className="text-[8px] font-black text-cyan-400 uppercase tracking-widest block leading-none mb-0.5">Y2 systems</span>
                                                <span className="text-[9px] text-[var(--text-secondary)] leading-tight block">DS & Algo, RPA A360</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-1.5 items-start">
                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1 shrink-0"></span>
                                            <div>
                                                <span className="text-[8px] font-black text-purple-500 uppercase tracking-widest block leading-none mb-0.5">Y3 agentic</span>
                                                <span className="text-[9px] text-[var(--text-secondary)] leading-tight block">RAG Lead, SQL AI</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-1.5 items-start">
                                            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-1 shrink-0"></span>
                                            <div>
                                                <span className="text-[8px] font-black text-pink-500 uppercase tracking-widest block leading-none mb-0.5">Y4 future</span>
                                                <span className="text-[9px] text-[var(--text-secondary)] leading-tight block">Neural Nets, Deploy</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <h4 className="text-lg font-black text-[var(--text-primary)] mb-3 uppercase tracking-tight group-hover/stage:text-indigo-400 transition-colors">
                                        {stage.title}
                                    </h4>
                                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-medium">
                                        {stage.description}
                                    </p>
                                </div>
                            )}

                            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-indigo-600/5 rounded-full group-hover/stage:scale-[3] group-hover/stage:bg-indigo-600/10 transition-all duration-700"></div>
                        </BentoCard>
                    ))}

                    {/* experience card - full width bottom */}
                    <BentoCard
                        onMouseEnter={() => setHoveredIndex('horizon')}
                        onMouseLeave={() => setHoveredIndex(null)}
                        animate={
                            hoveredIndex && hoveredIndex !== 'horizon' 
                            ? { opacity: 0.4, scale: 0.98, filter: 'blur(2px)' } 
                            : { opacity: 1, scale: hoveredIndex === 'horizon' ? 1.01 : 1, filter: 'blur(0px)' }
                        }
                        className="md:col-span-12 p-10 lg:p-14 bg-gradient-to-br from-[var(--bg-tertiary)]/20 to-[var(--bg-primary)]/10 border border-indigo-500/20 shadow-2xl relative"
                    >
                        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-indigo-600 text-white mb-8 font-black uppercase tracking-[0.2em] text-[10px] shadow-xl shadow-indigo-600/30">
                                    <Milestone size={16} />
                                    The Next Horizon
                                </div>
                                <h3 className="text-3xl font-black text-[var(--text-primary)] mb-6 uppercase tracking-tight">
                                    Learning, Coding, <br />
                                    <span className="text-indigo-500">and Growing.</span>
                                </h3>
                                <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-medium mb-8">
                                    My current focus is on building a robust portfolio of <span className="text-[var(--text-primary)] font-bold">AI/ML projects</span>.
                                    I am actively seeking opportunities to apply my technical knowledge in a
                                    professional environment, contributing to innovative solutions and
                                    learning from seasoned engineering teams.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {['Python', 'TensorFlow', 'React.js', 'Data Science', 'System Design', 'CrewAI', 'LangChain', 'RAG'].map((tag, idx) => (
                                        <div key={idx} className="px-4 py-2 bg-[var(--bg-secondary)]/50 border border-[var(--border-color)] rounded-xl text-[10px] font-black text-indigo-400 uppercase tracking-widest hover:text-white hover:border-indigo-500/60 transition-all duration-300">
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="hidden lg:block">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-8 rounded-3xl bg-indigo-500/10 border border-indigo-500/20 text-center backdrop-blur-sm hover:border-indigo-500/40 transition-all duration-300">
                                        <div className="text-4xl font-black text-[var(--text-primary)] mb-2 uppercase">Fresh</div>
                                        <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Talent</div>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-[var(--bg-secondary)]/30 border border-[var(--border-color)] text-center backdrop-blur-sm hover:border-indigo-500/40 transition-all duration-300">
                                        <div className="text-4xl font-black text-[var(--text-primary)] mb-2 uppercase">06+</div>
                                        <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Projects</div>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-[var(--bg-secondary)]/30 border border-[var(--border-color)] text-center backdrop-blur-sm hover:border-indigo-500/40 transition-all duration-300">
                                        <div className="text-4xl font-black text-[var(--text-primary)] mb-2 uppercase">300+</div>
                                        <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">LeetCode</div>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-indigo-500/10 border border-indigo-500/20 text-center backdrop-blur-sm hover:border-indigo-500/40 transition-all duration-300">
                                        <div className="text-4xl font-black text-[var(--text-primary)] mb-2 uppercase">Core</div>
                                        <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">CS Funda.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>
                    </BentoCard>
                </div>
            </div>
        </section>
    );
};

export default About;
