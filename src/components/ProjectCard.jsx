import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
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
            className="glass-card overflow-hidden group/card hover:!opacity-100 group-hover/list:opacity-40 transition-all duration-500"
        >
            <div className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                        <Code2 size={24} />
                    </div>
                    <div className="flex gap-3">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--text-tertiary)] hover:text-indigo-400 transition-colors"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-[var(--text-tertiary)] hover:text-indigo-400 transition-colors"
                        >
                            <ExternalLink size={20} />
                        </a>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                </h3>

                <p className="text-[var(--text-secondary)] text-sm mb-4 flex-grow line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.split(',').map((tech, i) => (
                        <span
                            key={i}
                            className="px-2 py-1 text-[10px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded-md border border-[var(--border-color)]"
                        >
                            {tech.trim()}
                        </span>
                    ))}
                </div>

                {project.metrics && (
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--border-color)]">
                        {Object.entries(project.metrics).map(([key, value]) => (
                            <div key={key}>
                                <p className="text-[10px] uppercase tracking-wider text-[var(--text-tertiary)] font-bold">
                                    {key.replace('_', ' ')}
                                </p>
                                <p className="text-sm font-semibold text-indigo-400">{value}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
