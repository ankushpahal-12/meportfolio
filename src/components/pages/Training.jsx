import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Award, Calendar, BookOpen, ShieldCheck } from 'lucide-react';


gsap.registerPlugin(ScrollTrigger);

const trainings = [
    {
        role: "AI/ML Intern",
        company: "Tech Solutions Inc.",
        location: "Remote",
        period: "June 2024 - Aug 2024",
        description: "Optimized computer vision models for real-time object detection. Reduced inference time by 40% using TensorRT.",
        skills: ["Python", "PyTorch", "OpenCV", "Docker"],
        type: "Internship"
    },
    {
        role: "Machine Learning Trainee",
        company: "AI Research Lab",
        location: "Chandigarh, India",
        period: "Jan 2024 - May 2024",
        description: "Assisted in data preprocessing and feature engineering for large-scale predictive maintenance datasets.",
        skills: ["Scikit-learn", "Pandas", "Data Visualization"],
        type: "Training"
    },
    {
        role: "Deep Learning Specialization",
        company: "Coursera / DeepLearning.AI",
        period: "2023",
        description: "Comprehensive training on Neural Networks, CNNs, RNNs, and Hyperparameter tuning.",
        skills: ["Deep Learning", "Neural Networks", "TensorFlow"],
        type: "Certification"
    }
];

const TrainingCard = ({ item }) => (
    <div className="relative group h-full">
        {/* Card Container */}
        <div className="relative p-8 h-full rounded-3xl bg-slate-900/40 border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/10 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.15)] hover:-translate-y-2">

            {/* Glow Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-2xl bg-slate-950 border border-white/10 text-purple-400 group-hover:scale-110 group-hover:border-purple-500/30 transition-all duration-500 shadow-lg">
                        {item.type === 'Internship' ? <Briefcase size={20} /> : item.type === 'Certification' ? <Award size={20} /> : <BookOpen size={20} />}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-wider text-slate-400 group-hover:bg-purple-500/10 group-hover:text-purple-300 group-hover:border-purple-500/20 transition-colors">
                        {item.type}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 transition-all">
                    {item.role}
                </h3>

                <div className="flex flex-col gap-1 mb-6 text-sm text-slate-500 font-mono">
                    <span className="text-purple-400 font-semibold">{item.company}</span>
                    <span className="flex items-center gap-2"><Calendar size={12} /> {item.period}</span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow border-l-2 border-white/5 pl-4 group-hover:border-purple-500/30 transition-colors">
                    {item.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                    {item.skills.map((skill, i) => (
                        <span key={i} className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-purple-500/5 text-purple-300/80 border border-purple-500/10 group-hover:bg-purple-500/10 group-hover:text-purple-300 transition-colors">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const Training = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.training-card-wrapper', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
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
        <section ref={containerRef} id="training" className="relative py-24 px-6 max-w-7xl mx-auto">
            {/* Decorative Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium uppercase tracking-wider mb-6">
                    <ShieldCheck size={14} />
                    Skill Acquisition
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Training & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Certifications</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                    Expanding capabilities through rigorous internships and specialized coursework.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trainings.map((item, index) => (
                    <div key={index} className="training-card-wrapper">
                        <TrainingCard item={item} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Training;
