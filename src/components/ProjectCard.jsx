import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [supportsHover] = useState(() => window.matchMedia('(hover: hover) and (pointer: fine)').matches);

    const toggleFlip = () => {
        if (!supportsHover) {
            setIsFlipped(prev => !prev);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => supportsHover && setIsFlipped(true)}
            onMouseLeave={() => supportsHover && setIsFlipped(false)}
            onClick={toggleFlip}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFlip();
                }
            }}
            className="group/card perspective-[1600px] hover:opacity-100! group-hover/list:opacity-40 transition-all duration-500 flex flex-col h-full"
        >
            <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                style={{ transformStyle: 'preserve-3d' }}
                className="relative h-full min-h-135 w-full"
            >
                <motion.div
                    animate={{ opacity: isFlipped ? 0.9 : 0.45, scale: isFlipped ? 1.02 : 1 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-indigo-500/0 via-indigo-500/20 to-cyan-400/0 blur-xl opacity-0 group-hover/card:opacity-100 pointer-events-none"
                />
                <div className="absolute inset-0 rounded-[1.75rem] border border-indigo-500/10 group-hover/card:border-indigo-400/40 transition-colors duration-500 pointer-events-none" />

                <div
                    className="absolute inset-0 glass-card overflow-hidden flex flex-col h-full"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <div className="relative h-52 overflow-hidden">
                        <img
                            src={project.image || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-(--bg-secondary) via-transparent to-transparent opacity-70"></div>

                        <div className="absolute top-4 right-4 flex gap-2 -translate-y-2.5 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-500">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-indigo-500 transition-colors shadow-xl"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href="#projects"
                                className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-indigo-500 transition-colors shadow-xl"
                            >
                                <ExternalLink size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="p-6 flex flex-col grow">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                                <Code2 size={24} />
                            </div>
                            {project.category && (
                                <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest px-2 py-1 rounded bg-indigo-500/5 border border-indigo-500/10">
                                    {project.category}
                                </span>
                            )}
                        </div>

                        <h3 className="text-xl font-bold text-(--text-primary) mb-2 group-hover:text-indigo-400 transition-colors">
                            {project.title}
                        </h3>

                        <p className="text-(--text-secondary) text-sm mb-4 grow line-clamp-3">
                            {project.description}
                        </p>

                        <div className="mt-auto flex items-center justify-between text-xs uppercase tracking-[0.2em] text-(--text-tertiary) font-bold">
                            <span>{supportsHover ? 'Hover to flip' : 'Tap to flip'}</span>
                            <span>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                        </div>
                    </div>
                </div>

                <div
                    className="absolute inset-0 glass-card overflow-hidden flex flex-col h-full bg-(--bg-secondary)"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-indigo-500/5 to-cyan-500/0 opacity-70 pointer-events-none" />
                    <div className="p-6 border-b border-(--border-color) flex items-center justify-between">
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-indigo-400 mb-2">Full Project View</p>
                            <h3 className="text-2xl font-black text-(--text-primary)">{project.title}</h3>
                        </div>
                        <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400">
                            <Code2 size={22} />
                        </div>
                    </div>

                    <div className="p-6 flex flex-col gap-4 overflow-hidden grow">
                        <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar grow">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.25em] text-(--text-tertiary) font-bold mb-2">Description</p>
                                <p className="text-sm leading-relaxed text-(--text-secondary)">{project.description}</p>
                            </div>

                            {project.problem && (
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.25em] text-(--text-tertiary) font-bold mb-2">Problem</p>
                                    <p className="text-sm leading-relaxed text-(--text-secondary)">{project.problem}</p>
                                </div>
                            )}

                            {project.solution && (
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.25em] text-(--text-tertiary) font-bold mb-2">Solution</p>
                                    <p className="text-sm leading-relaxed text-(--text-secondary)">{project.solution}</p>
                                </div>
                            )}

                            {project.outcome && (
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.25em] text-(--text-tertiary) font-bold mb-2">Outcome</p>
                                    <p className="text-sm leading-relaxed text-(--text-secondary)">{project.outcome}</p>
                                </div>
                            )}

                            <div>
                                <p className="text-[10px] uppercase tracking-[0.25em] text-(--text-tertiary) font-bold mb-2">Tech Stack</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.split(',').map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 text-[10px] font-medium bg-(--bg-tertiary) text-(--text-secondary) rounded-md border border-(--border-color)"
                                        >
                                            {tech.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {project.metrics && (
                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-(--border-color)">
                                {Object.entries(project.metrics).map(([key, value]) => (
                                    <div key={key}>
                                        <p className="text-[10px] uppercase tracking-wider text-(--text-tertiary) font-bold">
                                            {key.replace('_', ' ')}
                                        </p>
                                        <p className="text-sm font-semibold text-indigo-400">{value}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
