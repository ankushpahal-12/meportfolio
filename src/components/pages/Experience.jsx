import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar, MapPin, Activity, Radio } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const sectionRef = useRef(null);

    const checkPointData = [
        {
            role: "AI Engineer Intern",
            company: "Fiewin",
            location: "Remote",
            period: "2024 - Present",
            description: "Developing advanced AI models for predictive analytics and automating data pipelines.",
            tags: ["Python", "TensorFlow", "AWS"],
            status: "Active"
        },
        {
            role: "Machine Learning Intern",
            company: "NullClass",
            location: "Remote",
            period: "2023",
            description: "Worked on computer vision projects and implemented object detection algorithms.",
            tags: ["OpenCV", "PyTorch", "YOLO"],
            status: "Completed"
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".experience-card", {
                opacity: 0,
                x: -50,
                stagger: 0.2,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            gsap.from(".timeline-line", {
                height: 0,
                duration: 1.5,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="experience" className="py-16 md:py-24 relative bg-slate-950 overflow-hidden">
            {/* Background Grids */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="flex items-center gap-4 mb-16">
                    <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                        <Activity size={24} />
                    </div>
                    <div>
                        <span className="text-blue-400 font-mono text-sm tracking-widest uppercase">
                            Mission Log
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white">
                            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Experience</span>
                        </h2>
                    </div>
                </div>

                <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 timeline-line">
                    {checkPointData.map((job, index) => (
                        <div key={index} className="experience-card mb-12 pl-8 md:pl-12 relative group">
                            {/* Timeline Dot */}
                            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-slate-950 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-colors duration-300 ${job.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-blue-500'}`}></div>

                            {/* Card */}
                            <div className="relative p-8 rounded-2xl bg-slate-900/40 border border-white/5 overflow-hidden transition-all duration-500 group-hover:border-white/10 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] group-hover:-translate-y-1">

                                {/* Glow Effects */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-3">
                                                {job.role}
                                                {job.status === 'Active' && (
                                                    <span className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] uppercase font-mono tracking-wider flex items-center gap-1">
                                                        <Radio size={10} className="animate-pulse" /> Live
                                                    </span>
                                                )}
                                            </h3>
                                            <div className="text-lg text-slate-400 font-medium mt-1">
                                                @ {job.company}
                                            </div>
                                        </div>

                                        <div className="flex flex-col md:items-end gap-1 text-sm font-mono text-slate-500">
                                            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                                                <Calendar size={14} className="text-blue-400" /> {job.period}
                                            </span>
                                            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                                                <MapPin size={14} className="text-purple-400" /> {job.location}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-slate-300 text-base leading-relaxed mb-6 max-w-3xl border-l-2 border-slate-700 pl-4 group-hover:border-blue-500/50 transition-colors">
                                        {job.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {job.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1.5 bg-slate-950 text-slate-400 text-xs font-mono rounded-lg border border-slate-800 group-hover:border-blue-500/30 group-hover:text-blue-300 transition-all">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
