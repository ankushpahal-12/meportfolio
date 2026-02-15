import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [bootText, setBootText] = useState("INITIALIZING SYSTEM...");

    useEffect(() => {
        const tl = gsap.timeline();

        // 1. Text Typing Sequence
        const bootSequence = [
            "ESTABLISHING SECURE CONNECTION...",
            "LOADING NEURAL MODULES...",
            "CALIBRATING OPTICAL SENSORS...",
            "ACCESSING MAINFRAME...",
            "SYSTEM READY."
        ];

        let textIndex = 0;
        const interval = setInterval(() => {
            if (textIndex < bootSequence.length) {
                setBootText(bootSequence[textIndex]);
                textIndex++;
            } else {
                clearInterval(interval);
            }
        }, 600);


        // 2. Progress Bar Animation
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                const next = prev + Math.random() * 10;
                if (next >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return next;
            });
        }, 150);

        // 3. Exit Animation
        setTimeout(() => {
            tl.to(containerRef.current, {
                yPercent: -100,
                duration: 0.8,
                ease: "power4.inOut",
                onComplete: onComplete
            });
        }, 3500); // Total duration

        return () => {
            clearInterval(interval);
            clearInterval(progressInterval);
        };
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[99999] bg-slate-950 flex flex-col items-center justify-center font-mono text-blue-500 select-none"
        >
            {/* Matrix/Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="relative z-10 w-full max-w-md px-6">
                {/* Boot Text */}
                <div className="h-8 mb-4 text-sm md:text-base text-blue-400 font-bold tracking-widest uppercase flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 animate-pulse rounded-full"></span>
                    {bootText}
                </div>

                {/* Progress Bar Container */}
                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden relative">
                    <div
                        className="h-full bg-blue-500 rounded-full transition-all duration-200 ease-out shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                {/* Percentage */}
                <div className="mt-2 text-right text-xs text-slate-500">
                    {Math.round(progress)}%
                </div>
            </div>

            {/* Decorative Corners */}
            <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-blue-500/20 rounded-tl-xl"></div>
            <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-blue-500/20 rounded-br-xl"></div>

        </div>
    );
};

export default Preloader;
