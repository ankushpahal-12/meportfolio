import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';

const KONAMI = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

// Mini canvas confetti
const launchConfetti = () => {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:99999';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 180 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 8 + 3,
        d: Math.random() * 180 + 1,
        color: ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#06b6d4'][Math.floor(Math.random() * 6)],
        tilt: Math.floor(Math.random() * 10) - 10,
        tiltAngle: 0,
        tiltAngleIncrement: Math.random() * 0.07 + 0.05,
    }));

    let angle = 0;
    let raf;
    const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        angle += 0.01;
        particles.forEach((p, i) => {
            p.tiltAngle += p.tiltAngleIncrement;
            p.y += (Math.cos(angle + p.d) + 2 + p.r / 2) * 1.2;
            p.x += Math.sin(angle);
            p.tilt = Math.sin(p.tiltAngle) * 12;
            ctx.beginPath();
            ctx.lineWidth = p.r / 2;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
            ctx.stroke();
        });
        if (particles[0].y < canvas.height + 20) {
            raf = requestAnimationFrame(draw);
        } else {
            canvas.remove();
        }
    };
    draw();
    setTimeout(() => { cancelAnimationFrame(raf); canvas.remove(); }, 5000);
};

const KonamiEaster = () => {
    const [keys, setKeys] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handler = (e) => {
            setKeys(prev => {
                const next = [...prev, e.key].slice(-KONAMI.length);
                if (next.join(',') === KONAMI.join(',')) {
                    launchConfetti();
                    setShow(true);
                }
                return next;
            });
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.7, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ type: 'spring', damping: 16, stiffness: 200 }}
                    className="fixed inset-0 z-[99998] flex items-center justify-center p-6"
                    onClick={() => setShow(false)}
                >
                    <div
                        className="relative max-w-md w-full p-10 rounded-[3rem] bg-[#0a0a1a]/95 border border-indigo-500/40 shadow-[0_0_80px_rgba(99,102,241,0.4)] text-center"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Glow ring */}
                        <div className="absolute inset-0 rounded-[3rem] bg-indigo-600/5 blur-2xl -z-10" />

                        <button
                            onClick={() => setShow(false)}
                            className="absolute top-5 right-5 p-2 rounded-xl text-white/30 hover:text-white hover:bg-white/10 transition-all"
                        >
                            <X size={18} />
                        </button>

                        <div className="text-6xl mb-4">🎮</div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            <Sparkles size={12} />
                            Easter Egg Unlocked
                        </div>
                        <h2 className="text-3xl font-black text-white mb-3 tracking-tight">
                            You found it! 🕹️
                        </h2>
                        <p className="text-indigo-300/80 text-sm leading-relaxed mb-6">
                            ↑↑↓↓←→←→BA — The Konami Code.<br />
                            Hidden in plain sight for the curious ones. You clearly have great taste. 🤌
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center mb-8">
                            {['Builder', 'AI Engineer', 'Curious Mind', 'Secret Finder'].map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-wider">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <button
                            onClick={() => setShow(false)}
                            className="w-full py-4 bg-indigo-600 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/30"
                        >
                            Back to the Portfolio
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default KonamiEaster;
