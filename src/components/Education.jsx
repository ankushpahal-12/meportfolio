import React, { useEffect, useRef } from 'react';
import { GraduationCap, BookOpen, School } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Education = () => {
    const educationData = [
        {
            degree: "Secondary School (Class 10)",
            school: "School Name",
            location: "Jhajjar, Haryana",
            period: "2019", // Approximate, user can edit
            icon: School,
            color: "text-green-500",
            bg: "bg-green-500/10"
        },
        {
            degree: "Senior Secondary (Class 12)",
            school: "School Name",
            location: "Jhajjar, Haryana",
            period: "2021", // Approximate
            icon: BookOpen,
            color: "text-purple-500",
            bg: "bg-purple-500/10"
        },
        {
            degree: "B.Tech in Information Technology",
            school: "Lovely Professional University",
            location: "Phagwara, Punjab",
            period: "2024 - 2028",
            icon: GraduationCap,
            color: "text-blue-500",
            bg: "bg-blue-600/10"
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
                const isOdd = i % 2 !== 0; // 0, 2 are Left; 1 is Right in a timeline flow? 
                // Actually for timeline, normally they alternate sides visually if properly staggered.
                // Logic: Odd (index 1) -> Right, Even (0, 2) -> Left?
                // Let's stick to user request: odd cards slide from left, even from right.
                // Index 0 (Even) -> Right? Index 1 (Odd) -> Left?
                // Wait, User said: "Odd cards -> slide from left (index 1, 3...)", "Even cards -> slide from right (index 0, 2...)"?
                // "Odd cards -> slide from left" usually means 1st, 3rd, 5th... which are indices 0, 2, 4. 
                // Let's interpret "Odd Positions" (1st item) as Left.
                // So Index 0 -> Left, Index 1 -> Right.

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
                <div className="edu-header flex items-center gap-4 mb-16 opacity-0">
                    <div className="p-3 bg-blue-600/10 rounded-xl text-blue-500">
                        <GraduationCap size={24} />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Education Timeline</h2>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {educationData.map((edu, index) => {
                            return (
                                <div
                                    key={index}
                                    className="edu-item glass-card p-8 rounded-2xl relative group cursor-default opacity-0"
                                >
                                    {/* Timeline Dot */}
                                    <div className={`hidden md:flex absolute top-1/2 -left-3 md:-top-3 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-slate-950 ${edu.bg} ${edu.color} items-center justify-center z-20`}>
                                        <div className="w-2 h-2 rounded-full bg-current"></div>
                                    </div>

                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${edu.bg} ${edu.color} mb-6`}>
                                        <edu.icon size={24} />
                                    </div>

                                    <span className="text-slate-500 text-sm font-mono block mb-2">{edu.period}</span>
                                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                                    <p className="text-slate-400 text-sm font-medium">{edu.school}</p>
                                    <p className="text-slate-500 text-xs mt-1">{edu.location}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
