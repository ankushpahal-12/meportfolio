import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, Cpu, Code } from 'lucide-react';

const Certifications = () => {
    const certifications = [
        {
            title: "Professional ML Engineer",
            issuer: "Google Cloud",
            date: "2023",
            icon: <Cpu className="w-6 h-6" />,
            link: "#",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "TensorFlow Developer",
            issuer: "DeepLearning.AI",
            date: "2022",
            icon: <Code className="w-6 h-6" />,
            link: "#",
            color: "from-orange-500 to-yellow-500"
        },
        {
            title: "AWS Certified AI Practitioner",
            issuer: "Amazon Web Services",
            date: "2023",
            icon: <ShieldCheck className="w-6 h-6" />,
            link: "#",
            color: "from-indigo-500 to-purple-500"
        },
        {
            title: "Neural Networks & Deep Learning",
            issuer: "Coursera",
            date: "2021",
            icon: <Award className="w-6 h-6" />,
            link: "#",
            color: "from-teal-500 to-emerald-500"
        }
    ];

    return (
        <section id="certifications" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4"
                    >
                        <ShieldCheck size={14} />
                        Professional Validation
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-[var(--text-primary)] tracking-tight"
                    >
                        Certifications <span className="text-indigo-500">& Badges.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 group/list">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                                y: -10,
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                            className="group/card p-8 rounded-[2.5rem] bg-[var(--bg-tertiary)] border border-[var(--border-color)] hover:border-indigo-500/30 transition-all relative overflow-hidden h-full hover:!opacity-100 group-hover/list:opacity-40 duration-500"
                        >
                            {/* Gradient Accent */}
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.color}`}></div>

                            <div className="flex flex-col h-full">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-500/10 group-hover/card:scale-110 transition-transform`}>
                                    {cert.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover/card:text-indigo-500 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-[var(--text-tertiary)] text-xs font-bold uppercase tracking-widest mb-4">
                                    {cert.issuer} • {cert.date}
                                </p>
                                <div className="mt-auto pt-6 border-t border-[var(--border-color)]">
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                                    >
                                        Verify Certificate
                                        <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
