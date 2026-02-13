import React, { useEffect, useRef } from 'react';
import { GraduationCap, BookOpen, School } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassCard from './GlassCard';

const Education = () => {
    const educationData = [
        {
            degree: "Secondary School (Class 10)",
            school: "Dronacharya Sr. Sec. School",
            location: "Jhajjar, Haryana",
            period: "2020-2021",
            icon: School,
            color: "text-green-400",
            bg: "bg-green-500/10",
            border: "border-green-500/20"
        },
        {
            degree: "Senior Secondary (Class 12)",
            school: "Dronacharya Sr. Sec. School",
            location: "Jhajjar, Haryana",
            period: "2022-2023",
            icon: BookOpen,
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20"
        },
        {
            degree: "B.Tech in Artificial Intelligence and Machine Learning",
            school: "Lovely Professional University",
            location: "Phagwara, Punjab",
            period: "2023 - 2027",
            icon: GraduationCap,
            color: "text-blue-400",
            bg: "bg-blue-600/10",
            border: "border-blue-500/20"
        },
    ];

    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.fromTo('.edu-header',
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.edu-header',
                        start: "top 85%"
                    }
                }
            );

            // Timeline Items Animation
            const items = gsap.utils.toArray('.edu-item');
            items.forEach((item, i) => {
                const isMobile = window.innerWidth < 768;
                const startX = isMobile ? 0 : (i % 2 === 0 ? -60 : 60);

                gsap.fromTo(item,
                    { opacity: 0, x: startX },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%"
                        }
                    }
                );
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="education" className="py-24 relative px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <GlassCard className="p-0 sm:p-0 overflow-visible bg-transparent border-0 shadow-none backdrop-blur-none">
                    <div className="edu-header flex items-center gap-4 mb-16 opacity-0">
                        <div className="p-3 bg-blue-600/10 rounded-xl text-blue-500 border border-blue-500/20 shadow-lg shadow-blue-500/10">
                            <GraduationCap size={24} />
                        </div>
                        <h2 className="text-3xl font-bold text-white">Education Timeline</h2>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent -translate-y-1/2 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                            {educationData.map((edu, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="edu-item relative group cursor-default opacity-0"
                                    >
                                        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/5 shadow-xl transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:border-white/10"></div>

                                        <div className="relative p-8 flex flex-col items-center text-center h-full">
                                            {/* Timeline Dot */}
                                            <div className={`hidden md:flex absolute top-1/2 -left-3 md:-top-3 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-slate-950 ${edu.bg} ${edu.color} items-center justify-center z-20 shadow-lg shadow-black/50`}>
                                                <div className="w-2 h-2 rounded-full bg-current"></div>
                                            </div>

                                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${edu.bg} ${edu.color} mb-6 border ${edu.border} shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300`}>
                                                <edu.icon size={32} />
                                            </div>

                                            <span className="inline-block px-3 py-1 rounded-full bg-slate-950/50 border border-slate-800 text-slate-400 text-xs font-mono mb-4">
                                                {edu.period}
                                            </span>

                                            <h3 className="text-xl font-bold text-white mb-2 leading-tight">{edu.degree}</h3>
                                            <p className="text-slate-400 text-sm font-medium">{edu.school}</p>
                                            <p className="text-slate-500 text-xs mt-1">{edu.location}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </GlassCard>
            </div>
        </section>
    );
};

export default Education;
