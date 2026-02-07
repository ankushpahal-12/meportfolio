import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background Decorative Elem */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
                {/* Animated Title/Header - Slides from Left */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:col-span-2"
                >
                    <span className="text-blue-500 font-mono text-sm tracking-wider uppercase mb-4 block flex items-center gap-2">
                        <span className="w-8 h-px bg-blue-500"></span>
                        About Me
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                        From <br />
                        <span className="text-slate-400">Concept</span> to <br />
                        <span className="text-blue-500">Deployment</span>.
                    </h2>

                    {/* Location Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-full text-slate-300 text-sm">
                        <MapPin size={16} className="text-blue-400" />
                        Based in <span className="font-semibold text-white">Jhajjar, Haryana</span>
                    </div>
                </motion.div>

                {/* Content - Slides from Right */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:col-span-3 text-slate-400 leading-relaxed font-light text-lg space-y-6"
                >
                    <p>
                        <strong className="text-white block mb-2 font-semibold">Bio</strong>
                        I am an <strong className="text-slate-200 font-medium">AI & ML Engineer</strong> with a passion for designing intelligent systems that solve complex, real-world problems. My expertise lies in building production-ready models and scalable data pipelines that bridge the gap between theoretical research and practical deployment.
                    </p>
                    <p>
                        Growing up in <strong className="text-slate-200 font-medium">Jhajjar, Haryana</strong>, I developed a strong technical foundation that drives my work today. I thrive in challenging environments where I can leverage deep learning and data engineering to create impactful solutions.
                    </p>
                    <p>
                        Beyond the code, I am constantly exploring new advancements in AI, optimizing algorithms for performance, and contributing to the developer community.
                    </p>

                    <div className="pt-6 border-t border-slate-800/50">
                        <strong className="text-white block mb-4 font-semibold">My Journey</strong>
                        <div className="space-y-4">
                            <p>
                                My academic path began in <span className="text-slate-200">Jhajjar, Haryana</span>, where I completed my secondary and senior secondary education (Class 10 & 12) with a focus on science and mathematics. This formative period sparked my analytical thinking and problem-solving skills.
                            </p>
                            <p>
                                Currently, I am pursuing my <span className="text-slate-200">B.Tech in Information Technology</span> at <span className="text-slate-200">Lovely Professional University</span> in Punjab. Here, I have dived deep into computer science fundamentals, specializing in Artificial Intelligence and Machine Learning, and applying my knowledge to build innovative projects.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;