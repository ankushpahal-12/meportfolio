import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, Maximize2 } from 'lucide-react';

const MediaModal = ({ isOpen, onClose, type, url, title }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 lg:p-10 text-[var(--text-primary)]">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content - Sharp & Premium */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 30 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative w-full max-w-6xl h-[85vh] md:h-auto md:aspect-video bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(79,70,221,0.2)] flex flex-col"
                    >
                        {/* Custom Header */}
                        <div className="p-4 md:p-6 border-b border-[var(--border-color)] flex items-center justify-between bg-[var(--bg-tertiary)]">
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="hidden sm:block w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                                <h3 className="text-[var(--text-primary)] text-xs sm:text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] truncate max-w-[200px] sm:max-w-md">{title || 'Media Viewer'}</h3>
                            </div>
                            <div className="flex items-center gap-3 text-[var(--text-secondary)]">
                                {url && (
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-xl bg-[var(--bg-secondary)] hover:text-[var(--text-primary)] hover:border-indigo-500/50 transition-all border border-[var(--border-color)]"
                                        title="Open Original"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                )}
                                <button
                                    onClick={onClose}
                                    className="p-3 rounded-xl bg-[var(--bg-secondary)] hover:text-[var(--text-primary)] hover:border-indigo-500/50 transition-all border border-[var(--border-color)]"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Media Container */}
                        <div className="flex-grow bg-black relative">
                            {type === 'video' ? (
                                <video
                                    src={url}
                                    controls
                                    autoPlay
                                    className="w-full h-full object-contain"
                                />
                            ) : type === 'pdf' ? (
                                <iframe
                                    src={`${url}#toolbar=0`}
                                    className="w-full h-full border-none bg-white"
                                    title={title}
                                />
                            ) : (
                                <img
                                    src={url}
                                    alt={title}
                                    className="w-full h-full object-contain"
                                />
                            )}
                        </div>

                        {/* Minimal Footer */}
                        <div className="p-4 bg-[var(--bg-tertiary)] border-t border-[var(--border-color)] flex justify-center">
                            <div className="flex gap-2">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-[var(--border-color)]"></div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default MediaModal;
