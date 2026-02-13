import React, { useRef } from 'react';
import { Code2, Database, Brain, Cloud, Terminal, Cpu } from 'lucide-react';
import GlassCard from './GlassCard';

const Skills = () => {
    const skills = [
        {
            category: "Languages & Core",
            icon: Code2,
            color: "text-blue-400",
            bg: "bg-blue-500/10",
            glow: "shadow-blue-500/20",
            items: ["Python", "C++", "Java", "SQL", "JavaScript"]
        },
        {
            category: "Machine Learning",
            icon: Brain,
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            glow: "shadow-purple-500/20",
            items: ["Scikit-learn", "XGBoost", "TensorFlow", "Keras", "PyTorch"]
        },
        {
            category: "Deep Learning & NLP",
            icon: Cpu,
            color: "text-rose-400",
            bg: "bg-rose-500/10",
            glow: "shadow-rose-500/20",
            items: ["Transformers", "Hugging Face", "BERT/GPT", "OpenCV", "LangChain"]
        },
        {
            category: "Data Engineering",
            icon: Database,
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
            glow: "shadow-emerald-500/20",
            items: ["Pandas", "NumPy", "Apache Spark", "Airflow", "MongoDB"]
        },
        {
            category: "MLOps & Cloud",
            icon: Cloud,
            color: "text-sky-400",
            bg: "bg-sky-500/10",
            glow: "shadow-sky-500/20",
            items: ["AWS (SageMaker, S3)", "Docker", "Kubernetes", "MLflow", "Git/CI/CD"]
        },
        {
            category: "Tools & Frameworks",
            icon: Terminal,
            color: "text-amber-400",
            bg: "bg-amber-500/10",
            glow: "shadow-amber-500/20",
            items: ["Jupyter", "VS Code", "FastAPI", "React", "Linux"]
        }
    ];

    const sectionRef = useRef(null);

    return (
        <section ref={sectionRef} id="skills" className="py-24 relative px-6">
            {/* Background Gradients */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto">
                <GlassCard className="p-0 sm:p-0 overflow-visible bg-transparent border-0 shadow-none backdrop-blur-none">
                    <div className="skills-header mb-16 text-center md:text-left">
                        <span className="text-blue-500 font-mono text-sm tracking-wider uppercase mb-4 block">Technical Arsenal</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white">
                            My <span className="text-slate-400">Tech Stack</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skill, index) => {
                            return (
                                <div
                                    key={index}
                                    className="skill-card relative p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-white/10 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl overflow-hidden"
                                >
                                    {/* Hosting inner glow */}
                                    <div className={`absolute top-0 right-0 w-32 h-32 ${skill.bg} blur-3xl rounded-full -mr-16 -mt-16 transition-opacity opacity-20 group-hover:opacity-40`}></div>

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className={`p-3.5 rounded-xl ${skill.bg} ${skill.color} border border-white/5 shadow-lg ${skill.glow}`}>
                                                <skill.icon size={26} />
                                            </div>
                                            <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">{skill.category}</h3>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {skill.items.map((item, i) => (
                                                <span key={i} className="px-3 py-1.5 bg-slate-950/50 border border-slate-800 text-slate-400 text-xs font-medium rounded-lg hover:border-slate-700 hover:text-slate-200 transition-colors cursor-default">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </GlassCard>
            </div>
        </section>
    );
};

export default Skills;