import React, { useEffect, useRef } from 'react';
import { Code2, Database, Brain, Cloud, Terminal, Cpu } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Skills = () => {
    const skills = [
        {
            category: "Languages & Core",
            icon: Code2,
            items: ["Python", "C++", "Java", "SQL", "JavaScript"]
        },
        {
            category: "Machine Learning",
            icon: Brain,
            items: ["Scikit-learn", "XGBoost", "TensorFlow", "Keras", "PyTorch"]
        },
        {
            category: "Deep Learning & NLP",
            icon: Cpu,
            items: ["Transformers", "Hugging Face", "BERT/GPT", "OpenCV", "LangChain"]
        },
        {
            category: "Data Engineering",
            icon: Database,
            items: ["Pandas", "NumPy", "Apache Spark", "Airflow", "MongoDB"]
        },
        {
            category: "MLOps & Cloud",
            icon: Cloud,
            items: ["AWS (SageMaker, S3)", "Docker", "Kubernetes", "MLflow", "Git/CI/CD"]
        },
        {
            category: "Tools & Frameworks",
            icon: Terminal,
            items: ["Jupyter", "VS Code", "FastAPI", "React", "Linux"]
        }
    ];

    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.fromTo('.skills-header',
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.skills-header',
                        start: "top 85%"
                    }
                }
            );

            // Skill Cards Animation
            const cards = gsap.utils.toArray('.skill-card');
            cards.forEach((card, i) => {
                const isMobile = window.innerWidth < 768;
                // Direction: Odd (index 0, 2..) -> Left, Even (index 1, 3..) -> Right
                const startX = isMobile ? 0 : (i % 2 === 0 ? -60 : 60);

                gsap.fromTo(card,
                    { opacity: 0, x: startX },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%"
                        }
                    }
                );

                // Hover Effect (Mouse Enter/Leave) using GSAP events manually attached or via css.
                // Since react re-renders might lose event listeners if not careful, CSS hover is safer for simple scale, 
                // but for GSAP feel we can adding listeners. For now, let's keep CSS transitions for hover as requested ("GSAP on hover" preferred but CSS is robust).
                // Actually user requested "GSAP Hover". 
                // Let's add listeners in the loop.
                card.addEventListener('mouseenter', () => gsap.to(card, { scale: 1.05, duration: 0.3, ease: 'power2.out' }));
                card.addEventListener('mouseleave', () => gsap.to(card, { scale: 1, duration: 0.3, ease: 'power2.out' }));
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="skills" className="py-24 relative px-6">
            {/* Background Gradients */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto">
                <div className="skills-header mb-16 text-center md:text-left opacity-0">
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
                                className="skill-card glass-card p-6 rounded-2xl group cursor-default opacity-0"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-slate-800/50 rounded-lg text-blue-400 group-hover:text-blue-300 transition-colors border border-slate-700/50">
                                        <skill.icon size={24} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{skill.category}</h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {skill.items.map((item, i) => (
                                        <span key={i} className="px-3 py-1 bg-slate-950/40 border border-slate-800/50 text-slate-400 text-xs rounded-full hover:border-blue-500/30 hover:text-blue-200 transition-colors">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;