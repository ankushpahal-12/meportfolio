import React from 'react';
import { X, ExternalLink } from 'lucide-react';

const MediaModal = ({ isOpen, onClose, title, fileSrc, fileName }) => {
    if (!isOpen) return null;

    const isPdf = (typeof fileSrc === 'string' && fileSrc.toLowerCase().endsWith('.pdf')) ||
        (fileName && fileName.toLowerCase().endsWith('.pdf'));

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300"
            onClick={onClose}
        >
            {/* Modal Container - "Secure Vault" Look */}
            <div
                className="relative w-full max-w-5xl h-[85vh] bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 ease-out group"
                onClick={e => e.stopPropagation()}
            >
                {/* Decorative Corner Flashes */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500 z-20"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-500 z-20"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500 z-20"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500 z-20"></div>

                {/* Scanning Laser Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-30 animate-scan-fast pointer-events-none opacity-20"></div>

                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-slate-900/80 backdrop-blur-xl z-10">
                    <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                            <h3 className="text-xl font-bold text-white tracking-widest uppercase font-mono flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 animate-pulse rounded-full"></span>
                                {title}
                            </h3>
                            {fileName && <p className="text-xs text-blue-400 font-mono tracking-wider">DOC_ID: {fileName}</p>}
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href={fileSrc}
                            download
                            className="px-4 py-2 bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2 rounded-sm"
                        >
                            <ExternalLink size={14} /> Download.enc
                        </a>
                        <button
                            onClick={onClose}
                            className="p-2 text-slate-400 hover:text-red-400 transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* Modal Content Area */}
                <div className="flex-1 bg-slate-950 relative overflow-hidden flex items-center justify-center p-1">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

                    <div className="relative w-full h-full p-2 border border-slate-800 rounded-lg bg-slate-900/50">
                        {isPdf ? (
                            <iframe
                                src={fileSrc}
                                className="w-full h-full rounded bg-white shadow-inner"
                                title={title}
                            ></iframe>
                        ) : (
                            <img
                                src={fileSrc}
                                alt={title}
                                className="max-w-full max-h-full object-contain rounded shadow-lg"
                            />
                        )}
                    </div>
                </div>

                {/* Modal Footer / Status Bar */}
                <div className="h-8 bg-slate-900 border-t border-white/5 flex items-center justify-between px-4 text-[10px] text-slate-500 font-mono uppercase tracking-widest">
                    <span>Secure Connection Established</span>
                    <span>Encryption: AES-256</span>
                </div>
            </div>
        </div>
    );
};

export default MediaModal;
