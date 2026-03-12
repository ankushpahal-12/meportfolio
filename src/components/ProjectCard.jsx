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
            className="glass-card overflow-hidden group/card hover:!opacity-100 group-hover/list:opacity-40 transition-all duration-500 flex flex-col h-full"
        >
            {/* Project Image Section */}
            <div className="relative h-48 overflow-hidden">
                <img 
                    src={project.image || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent opacity-60"></div>
                
                {/* Overlay Links */}
                <div className="absolute top-4 right-4 flex gap-2 translate-y-[-10px] opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-500">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-indigo-500 transition-colors shadow-xl"
                    >
                        <Github size={18} />
                    </a>
                    <a
                        href="#"
                        className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-indigo-500 transition-colors shadow-xl"
                    >
                        <ExternalLink size={18} />
                    </a>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
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
