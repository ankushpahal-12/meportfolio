import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Award, Calendar } from 'lucide-react';
import GlassCard from './GlassCard';

gsap.registerPlugin(ScrollTrigger);

const trainings = [
    {
        role: "AI/ML Intern",
        company: "Tech Solutions Inc.", // Placeholder
        location: "Remote",
        period: "June 2024 - Aug 2024",
        description: "Worked on optimizing computer vision models for real-time object detection. Reduced inference time by 40% using TensorRT.",
        skills: ["Python", "PyTorch", "OpenCV", "Docker"]
    },
    {
        role: "Machine Learning Trainee",
        company: "AI Research Lab", // Placeholder
        location: "Chandigarh, India",
        period: "Jan 2024 - May 2024",
        description: "Assisted in data preprocessing and feature engineering for large-scale predictive maintenance datasets. Built baseline models using Scikit-learn.",
        skills: ["Scikit-learn", "Pandas", "Data Visualization"]
    },
    {
        role: "Deep Learning Specialization",
        company: "Coursera / DeepLearning.AI",
        period: "2023",
        description: "Comprehensive training on Neural Networks, CNNs, RNNs, and Hyperparameter tuning. Completed capstone projects involving autonomous driving simulation.",
        skills: ["Deep Learning", "Neural Networks", "TensorFlow"]
    }
];

const TrainingCard = ({ item }) => (
    <div className="training-card group relative h-full">
        <div className="relative p-6 h-full rounded-2xl bg-slate-900/60 border border-white/5 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 group-hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col">
            {/* Header */}
            <div className="flex flex-col gap-3 mb-4">
                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                        {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 bg-slate-950/80 px-2.5 py-1 rounded-full border border-slate-800 shrink-0">
                        <Calendar size={10} />
                        {item.period}
                    </div>
                </div>

                <p className="text-slate-400 font-medium text-sm flex items-center gap-2">
                    <Briefcase size={14} className="text-blue-500" />
                    {item.company}
                </p>
            </div>

            {/* Content */}
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {item.description}
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
                {item.skills.map((skill, i) => (
                    <span key={i} className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/10">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

const Training = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.training-card', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="training" className="relative py-20 px-6 max-w-7xl mx-auto">
            <GlassCard className="p-0 sm:p-0 overflow-visible bg-transparent border-0 shadow-none backdrop-blur-none">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider mb-4 shadow-lg shadow-blue-500/10">
                        <Award size={14} />
                        Experience & Learning
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Training & <span className="text-slate-500">Internships</span>
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Professional experience and specialized training that have shaped my technical expertise.
                    </p>
                </div>

                {/* Horizontal Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {trainings.map((item, index) => (
                        <TrainingCard key={index} item={item} />
                    ))}
                </div>
            </GlassCard>
        </section>
    );
};

export default Training;
