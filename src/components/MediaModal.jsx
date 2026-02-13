import React from 'react';
import { X, ExternalLink } from 'lucide-react';

const MediaModal = ({ isOpen, onClose, title, fileSrc, fileName }) => {
    if (!isOpen) return null;

    const isPdf = (typeof fileSrc === 'string' && fileSrc.toLowerCase().endsWith('.pdf')) ||
        (fileName && fileName.toLowerCase().endsWith('.pdf'));

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-5xl h-[85vh] bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10 flex flex-col animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 ease-out"
                onClick={e => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/5 bg-slate-900/50 backdrop-blur-xl z-10">
                    <div>
                        <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
                        {fileName && <p className="text-xs text-blue-400 font-mono mt-1">{fileName}</p>}
                    </div>
                    <div className="flex items-center gap-3">
                        <a
                            href={fileSrc}
                            download
                            className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 rounded-lg transition-all duration-300 text-sm font-medium flex items-center gap-2 group"
                        >
                            <ExternalLink size={16} className="group-hover:scale-110 transition-transform" /> <span className="hidden sm:inline">Download</span>
                        </a>
                        <button
                            onClick={onClose}
                            className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-red-500/20 hover:text-red-400 rounded-full transition-all duration-300 group"
                        >
                            <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                        </button>
                    </div>
                </div>

                {/* Modal Content */}
                <div className="flex-1 bg-slate-950 relative overflow-hidden flex items-center justify-center p-1">
                    {isPdf ? (
                        <iframe
                            src={fileSrc}
                            className="w-full h-full rounded-lg bg-white shadow-inner"
                            title={title}
                        ></iframe>
                    ) : (
                        <img
                            src={fileSrc}
                            alt={title}
                            className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default MediaModal;
