import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, Cpu, Code, Image as LucideImage, FileDown } from 'lucide-react';
import cert1 from '../assets/cert1.png';
import cert2 from '../assets/cert2.png';
import cert3 from '../assets/cert3.png';
import cert4 from '../assets/cert4.png';
import cert5 from '../assets/cert5.png';
// import cert6 from '../assets/cert6.png';
const DriveIcon = ({ size = 20, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M7.714 3h8.572l7.714 13.333H15.43L7.714 3z" fill="#0066DA" />
        <path d="M15.429 16.333H0L3.857 23h23.143L23.143 16.333h-7.714z" fill="#FFC107" />
        <path d="M3.857 23L0 16.333 7.714 3l3.857 6.667L3.857 23z" fill="#00AC47" />
    </svg>
);
const Certifications = ({ openMediaModal }) => {
    const certifications = [
        {
            title: "Essentials Automation Certification - 2024",
            issuer: "Automation Anywhere 360",
            date: "2025",
            unit: "Essentials",
            icon: <Cpu className="w-6 h-6" />,
            image: cert2,
            driveLink: "https://drive.google.com/file/d/1ZP_wWVW6Kz3Pfs96WMarI0MyGqPmdZbE/view?usp=sharing",
            verificationLink: "https://drive.google.com/file/d/1ZP_wWVW6Kz3Pfs96WMarI0MyGqPmdZbE/view?usp=sharing",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Python for Data Science",
            issuer: "IBM",
            date: "2025",
            unit: "Foundations",
            icon: <ShieldCheck className="w-6 h-6" />,
            image: cert3,
            driveLink: "https://drive.google.com/file/d/16XiIxJeDbM16OYEJat65dJLjqN9bqTwQ/view?usp=sharing",
            verificationLink: "https://drive.google.com/file/d/16XiIxJeDbM16OYEJat65dJLjqN9bqTwQ/view?usp=sharing",
            color: "from-indigo-500 to-purple-500"
        },
        {
            title: "Foundations: Programming Refresher",
            issuer: "Simplilearn",
            date: "2026",
            icon: <Code className="w-6 h-6" />,
            image: cert4,
            driveLink: "https://drive.google.com/file/d/10U7o5hcUNqGnTkB-9PZd6EsiNjX9-eXw/view?usp=sharing",
            verificationLink: "https://drive.google.com/file/d/10U7o5hcUNqGnTkB-9PZd6EsiNjX9-eXw/view?usp=sharing",
            color: "from-orange-500 to-yellow-500"
        },
        {
            title: "The Bits and Bytes of Computer Networking",
            issuer: "Coursera",
            date: "2024",
            icon: <Award className="w-6 h-6" />,
            image: cert1,
            driveLink: "https://drive.google.com/file/d/1SVjdIuDcWsBxBfxXTSZ9YuPJZtkYVY7j/view?usp=sharing",
            verificationLink: "https://drive.google.com/file/d/1SVjdIuDcWsBxBfxXTSZ9YuPJZtkYVY7j/view?usp=sharing",
            color: "from-teal-500 to-emerald-500"
        },
        // {
        //     title: "MongoDB & Python Certified Developer",
        //     issuer: "MongoDB University",
        //     date: "2025",
        //     unit: "Professional",
        //     badge: "MongoDB Certified",
        //     icon: <ShieldCheck className="w-6 h-6" />,
        //     image: cert2,
        //     driveLink: "https://drive.google.com/file/d/1ZP_wWVW6Kz3Pfs96WMarI0MyGqPmdZbE/view?usp=sharing",
        //     verificationLink: "https://drive.google.com/file/d/1ZP_wWVW6Kz3Pfs96WMarI0MyGqPmdZbE/view?usp=sharing",
        //     color: "from-green-500 to-emerald-500",
        //     tags: ["MongoDB", "Python", "NoSQL"]
        // },
        {
            title: "IBM RAG and AGENTIC AI",
            issuer: "Coursera",
            date: "2026",
            unit: "Advanced",
            badge: "Agentic AI Certified",
            icon: <Cpu className="w-6 h-6" />,
            image: cert5,
            driveLink: "https://drive.google.com/file/d/1x5rJwdDURXfiUILKKJC233DJn1p-uzYc/view?usp=sharing",
            verificationLink: "https://drive.google.com/file/d/1x5rJwdDURXfiUILKKJC233DJn1p-uzYc/view?usp=sharing",
            color: "from-violet-500 to-fuchsia-500",
            tags: ["Agentic Ai", "RAG", "LangChain"]
        }
    ];

    return (
        <section id="certifications" className="py-24 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 group/list">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            className="group/card rounded-[2.5rem] bg-[var(--bg-tertiary)] border border-[var(--border-color)] hover:border-indigo-500/30 transition-all relative overflow-hidden h-full hover:!opacity-100 group-hover/list:opacity-40 duration-500 cursor-pointer"
                            onClick={() => cert.image && openMediaModal('image', cert.image, cert.title)}
                        >
                            {/* Certificate Image/Placeholder */}
                            <div className="relative h-48 overflow-hidden bg-[var(--bg-secondary)]">
                                {cert.image ? (
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center opacity-20">
                                        <LucideImage size={64} />
                                    </div>
                                )}
                                <div className={`absolute inset-0 bg-gradient-to-t from-[var(--bg-tertiary)] via-transparent to-transparent opacity-60`}></div>
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.color}`}></div>
                            </div>

                            <div className="p-8 pt-6 flex flex-col h-full">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-500/10 group-hover/card:scale-110 transition-transform`}>
                                    {cert.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover/card:text-indigo-500 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-[var(--text-tertiary)] text-xs font-bold uppercase tracking-widest mb-2">
                                    {cert.issuer} • {cert.date}
                                </p>
                                {cert.tags && (
                                    <div className="flex flex-wrap gap-1.5 mb-3">
                                        {cert.tags.map((tag, ti) => (
                                            <span key={ti} className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-gradient-to-r ${cert.color} text-white opacity-90`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                <div className="mt-auto pt-6 border-t border-[var(--border-color)] flex items-center justify-between">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            cert.image && openMediaModal('image', cert.image, cert.title);
                                        }}
                                        className="flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                                    >
                                        View Certificate
                                        <LucideImage size={14} />
                                    </button>
                                    <div className="flex gap-3">
                                        {cert.driveLink && (
                                            <a
                                                href={cert.driveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="text-[var(--text-tertiary)] hover:text-indigo-400 transition-colors flex items-center justify-center p-1 rounded-lg hover:bg-white/5"
                                                title="View on Google Drive"
                                            >
                                                <DriveIcon size={20} />
                                            </a>
                                        )}
                                        {cert.verificationLink && (
                                            <a
                                                href={cert.verificationLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="text-[var(--text-tertiary)] hover:text-indigo-400 transition-colors"
                                                title="Verify Certification"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
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
