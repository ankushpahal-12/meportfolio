import React, { useRef, useState, useEffect } from "react";
import { Award, ExternalLink, Eye, Sparkles, Box, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MediaModal from "../MediaModal";

// Import Certificate PDFs & Images
import CognitiveClassCert from "../../assets/IBM CB0101EN Certificate _ Cognitive Class.pdf";
import IBMSkillsBuildCert from "../../assets/IBM PY0101EN Certificate _ IBM SkillsBuild.pdf";
import SimplilearnCert from "../../assets/simplilearn python certiifcate.pdf";
import OtherCert from "../../assets/12320100.pdf";
import allsoft from "../../assets/certificate.jpg";

const certs = [
    {
        name: "Cognitive Class",
        issuer: "IBM",
        date: "2024",
        link: CognitiveClassCert,
        skills: ["AI", "Cloud", "Data Analysis"],
    },
    {
        name: "Python for Data Science",
        issuer: "IBM SkillsBuild",
        date: "2024",
        link: IBMSkillsBuildCert,
        skills: ["Python", "Data Structure", "Algorithms"],
    },
    {
        name: "Python Certification",
        issuer: "Simplilearn",
        date: "2024",
        link: SimplilearnCert,
        skills: ["Python", "OOP", "Concurrency"],
    },
    {
        name: "Machine Learning",
        issuer: "AllsoftSolutions",
        date: "2024",
        link: allsoft,
        skills: ["ML", "Scikit", "Pandas"],
    },
    {
        name: "Automation Certification",
        issuer: "UiPath",
        date: "2024",
        link: OtherCert,
        skills: ["RPA", "UiPath Studio", "Orchestrator"],
    },
];

const Certification = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Auto-cycle if not interacting
    useEffect(() => {
        const interval = setInterval(() => {
            // Optional: auto-rotate logic if desired, can be disabled for static view
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="certifications" className="py-24 px-6 bg-slate-950 relative overflow-hidden min-h-screen flex items-center">
            {/* Background Decorations - Cyberspace Grid */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse-slow"></div>
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                {/* Left Column: Data Stream List */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 border border-blue-500/20">
                                <Box size={24} />
                            </div>
                            <h2 className="text-3xl font-bold text-white tracking-tight">Credentials<span className="text-blue-500">.Log</span></h2>
                        </div>
                        <p className="text-slate-400 text-sm font-mono border-l-2 border-blue-500/30 pl-4 py-1">
                        // SECURE_ACCESS_GRANTED <br />
                        // EXECUTING_VERIFICATION_PROTOCOL...
                        </p>
                    </motion.div>

                    <div className="space-y-4 relative">
                        {/* Vertical Line Connector */}
                        <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent"></div>

                        {certs.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setActiveIndex(index)}
                                className={`relative pl-12 pr-6 py-4 rounded-xl cursor-pointer border transition-all duration-300 group ${activeIndex === index
                                        ? "bg-blue-500/10 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                                        : "bg-slate-900/40 border-slate-800 hover:border-slate-600 hover:bg-slate-900/60"
                                    }`}
                            >
                                {/* Activation Node/Dot */}
                                <div className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 z-10 ${activeIndex === index ? "bg-blue-500 border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.6)] scale-110" : "bg-slate-900 border-slate-600 group-hover:border-slate-400"
                                    }`}></div>

                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className={`font-bold transition-colors ${activeIndex === index ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                                            {cert.name}
                                        </h3>
                                        <p className="text-xs font-mono text-slate-500 mt-1">
                                            {cert.issuer} • {cert.date}
                                        </p>
                                    </div>
                                    {activeIndex === index && (
                                        <motion.div
                                            layoutId="active-arrow"
                                            className="text-blue-400"
                                        >
                                            <CheckCircle size={18} />
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Holographic Projector */}
                <div className="lg:col-span-7 relative h-[500px] lg:h-[600px] flex items-center justify-center perspective-1000">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, rotateX: -10, scale: 0.9 }}
                            animate={{ opacity: 1, rotateX: 0, scale: 1 }}
                            exit={{ opacity: 0, rotateX: 10, scale: 0.9, position: "absolute" }}
                            transition={{ duration: 0.4, ease: "backOut" }}
                            className="relative w-full max-w-md aspect-[3/4] bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-blue-500/30 p-1 flex flex-col transform-style-3d group"
                        >
                            {/* Projector Beam Effect */}
                            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-32 h-64 bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl rounded-full pointer-events-none"></div>

                            {/* Holographic Scanline Overlay */}
                            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-20">
                                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(59,130,246,0.05)_50%)] bg-[size:100%_4px]"></div>
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-[scan_3s_linear_infinite]"></div>
                            </div>

                            {/* Inner Content Card */}
                            <div className="relative h-full w-full bg-slate-950/50 rounded-xl p-8 flex flex-col items-center text-center border border-white/5 overflow-hidden">
                                {/* Background Circuit */}
                                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#4f46e5 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

                                {/* Issuer Icon / Badge */}
                                <div className="relative w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-slate-900 border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)] group-hover:scale-110 transition-transform duration-500">
                                    <Award size={40} className="text-blue-400" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 relative z-10">{certs[activeIndex].name}</h3>
                                <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6 relative z-10">
                                    Verified Credential
                                </div>

                                <p className="text-slate-400 text-sm mb-8 leading-relaxed relative z-10">
                                    Validated expertise in {certs[activeIndex].issuer} technologies.
                                    Recognized for proficiency in rigorous technical assessments.
                                </p>

                                {/* Skills Tags */}
                                <div className="flex flex-wrap justify-center gap-2 mb-8 relative z-10">
                                    {certs[activeIndex].skills.map((skill, i) => (
                                        <span key={i} className="px-3 py-1 text-xs bg-slate-800 text-slate-300 rounded border border-slate-700">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Button */}
                                <div className="mt-auto w-full relative z-10">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 group-hover:translate-y-[-2px]"
                                    >
                                        <Eye size={18} />
                                        View Certificate
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Certificate Preview Modal */}
            <MediaModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={certs[activeIndex].name}
                fileName={`${certs[activeIndex].issuer} • ${certs[activeIndex].date}`}
                fileSrc={certs[activeIndex].link}
            />
        </section>
    );
};

export default Certification;
