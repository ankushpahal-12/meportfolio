import React from 'react';
import { X, ExternalLink } from 'lucide-react';

const MediaModal = ({ isOpen, onClose, title, fileSrc, fileName }) => {
    if (!isOpen) return null;

    const isPdf = typeof fileSrc === 'string' && fileSrc.toLowerCase().endsWith('.pdf');

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-5xl h-[85vh] bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col animate-in zoom-in-95 duration-200"
                onClick={e => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900 z-10">
                    <div>
                        <h3 className="text-xl font-bold text-white">{title}</h3>
                        {fileName && <p className="text-sm text-slate-400">{fileName}</p>}
                    </div>
                    <div className="flex items-center gap-3">
                        <a
                            href={fileSrc}
                            download
                            className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-sm font-medium flex items-center gap-2"
                        >
                            <ExternalLink size={16} /> <span className="hidden sm:inline">Download</span>
                        </a>
                        <button
                            onClick={onClose}
                            className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* Modal Content */}
                <div className="flex-1 bg-slate-950 relative overflow-hidden flex items-center justify-center p-4">
                    {isPdf ? (
                        <iframe
                            src={fileSrc}
                            className="w-full h-full rounded-lg bg-white"
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
