import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github, BarChart2, Layers } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassCard from './GlassCard';

const ProjectCard = ({ project }) => {
    const cardRef = useRef(null);

    return (
        <div
            ref={cardRef}
            className="project-card group relative bg-slate-900/60 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 h-full flex flex-col hover:shadow-2xl hover:shadow-blue-500/10 opacity-0 translate-y-10"
        >
            <div className="h-48 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] to-transparent z-10"></div>
                {/* Placeholder gradient for project image */}
                <div className={`absolute inset-0 opacity-40 bg-gradient-to-br ${project.gradient} group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-110 transform transition-transform duration-700`}></div>
                <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 bg-slate-950/80 backdrop-blur border border-slate-700/50 rounded-lg text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                        {project.category}
                    </span>
                </div>
            </div>

            <div className="p-6 flex-1 flex flex-col relative z-20">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                </p>

                {/* Metrics/Details */}
                <div className="space-y-3 mb-6 bg-slate-950/40 p-4 rounded-xl border border-white/5 group-hover:border-white/10 transition-colors">
                    <div className="flex items-start gap-3">
                        <Layers size={16} className="text-blue-500 mt-0.5 shrink-0" />
                        <div>
                            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Approach</p>
                            <p className="text-xs text-slate-300 font-medium">{project.approach}</p>
                        </div>
                    </div>
                    {project.metrics && (
                        <div className="flex items-start gap-3">
                            <BarChart2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                            <div>
                                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Results</p>
                                <p className="text-xs text-slate-300 font-medium">{project.metrics}</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-900/40 border border-slate-700/30 text-slate-400 text-[10px] font-mono rounded-md">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto pt-4 border-t border-white/5">
                    <a href={project.github} className="btn-secondary flex px-4 py-2 text-sm items-center gap-2 transition-all flex-1 justify-center rounded-lg hover:bg-white/5">
                        <Github size={16} /> Code
                    </a>
                    {project.demo && (
                        <a href={project.demo} className="btn-secondary flex px-4 py-2 text-sm items-center gap-2 transition-all flex-1 justify-center rounded-lg hover:bg-white/5">
                            <ExternalLink size={16} /> Demo
                        </a>
                    )}
                </div>
            </div>
        </div >
    );
};

const projects = [
    {
        title: "Fake News Detection System",
        category: "NLP",
        description: "A robust deep learning pipeline to classify news articles as real or fake with high accuracy, utilizing advanced transformer models.",
        approach: "Fine-tuned BERT model on a dataset of 50k+ articles. Implemented text preprocessing and tokenization pipelines.",
        metrics: "96.5% Accuracy, 0.95 F1-Score on test set.",
        tags: ["Python", "PyTorch", "Hugging Face", "BERT", "FastAPI"],
        gradient: "from-orange-500 to-red-600",
        github: "#",
        demo: "#"
    },
    {
        title: "E-Commerce Recommendation Engine",
        category: "Recommender Systems",
        description: "Personalized product recommendation system boosting user engagement and sales conversion for a mock retail platform.",
        approach: "Hybrid filtering (Collaborative + Content-based). Used Matrix Factorization and Neural Collaborative Filtering.",
        metrics: "15% increase in CTR, 20% lift in estimated revenue.",
        tags: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "Redis"],
        gradient: "from-blue-500 to-cyan-400",
        github: "#",
        demo: null
    },
    {
        title: "Autonomous Vehicle Vision",
        category: "Computer Vision",
        description: "Real-time object detection and lane segmentation system for self-driving car simulation.",
        approach: "YOLOv8 for object detection + U-Net for semantic segmentation.",
        metrics: "45 FPS inference on modest GPU, mAP@0.5: 0.89.",
        tags: ["Python", "OpenCV", "YOLO", "PyTorch", "Docker"],
        gradient: "from-green-500 to-emerald-400",
        github: "#",
        demo: "#"
    },
    {
        title: "Predictive Maintenance Dashboard",
        category: "Time Series",
        description: "IoT sensor data analysis tool to predict equipment failures before they happen.",
        approach: "LSTM autoencoders for anomaly detection in multi-variate time series data.",
        metrics: "Detected 85% of anomalies with <1% false positive rate.",
        tags: ["Python", "Keras", "Plotly", "Streamlit", "InfluxDB"],
        gradient: "from-purple-500 to-pink-500",
        github: "#",
        demo: null
    },
    {
        title: "Customer Support Chatbot",
        category: "GenAI / LLM",
        description: "Intelligent Q&A bot capable of handling complex customer queries using RAG (Retrieval Augmented Generation).",
        approach: "RAG pipeline with LangChain, Pinecone vector DB, and OpenAI GPT-4 API.",
        metrics: "Reduced human support ticket volume by 40%.",
        tags: ["Python", "LangChain", "OpenAI", "Pinecone", "React"],
        gradient: "from-indigo-500 to-violet-500",
        github: "#",
        demo: "#"
    }
];

const ProjectGrid = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.fromTo(headerRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 85%",
                    }
                }
            );

            // Projects Animation
            const cards = gsap.utils.toArray('.project-card');
            cards.forEach((card, i) => {
                const isOdd = i % 2 !== 0;
                const isMobile = window.innerWidth < 768;

                const startX = isMobile ? 0 : (isOdd ? -100 : 100);
                const startY = isMobile ? 60 : 0;

                gsap.fromTo(card,
                    { opacity: 0, x: startX, y: startY },
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="projects" className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
            <GlassCard className="p-0 sm:p-0 overflow-visible bg-transparent border-0 shadow-none backdrop-blur-none">
                <div ref={headerRef} className="mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="h-px w-8 bg-blue-500"></span>
                        <span className="text-blue-400 text-sm uppercase tracking-[0.2em] font-bold">Portfolio</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </GlassCard>
        </section>
    );
};

export default ProjectGrid;
