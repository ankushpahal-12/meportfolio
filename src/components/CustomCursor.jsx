import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const cursorX = useRef(null);
    const cursorY = useRef(null);
    const followerX = useRef(null);
    const followerY = useRef(null);

    useEffect(() => {
        // Init GSAP quickTo for performance
        if (cursorRef.current && followerRef.current) {
            cursorX.current = gsap.quickTo(cursorRef.current, "x", { duration: 0.1, ease: "power2.out" });
            cursorY.current = gsap.quickTo(cursorRef.current, "y", { duration: 0.1, ease: "power2.out" });
            followerX.current = gsap.quickTo(followerRef.current, "x", { duration: 0.6, ease: "power2.out" });
            followerY.current = gsap.quickTo(followerRef.current, "y", { duration: 0.6, ease: "power2.out" });
        }

        const moveCursor = (e) => {
            if (cursorX.current && cursorY.current && followerX.current && followerY.current) {
                cursorX.current(e.clientX);
                cursorY.current(e.clientY);
                followerX.current(e.clientX);
                followerY.current(e.clientY);
            }
        };

        window.addEventListener('mousemove', moveCursor);

        // Hover Effects
        const handleHover = () => {
            if (cursorRef.current) gsap.to(cursorRef.current, { scale: 0.5, duration: 0.3 });
            if (followerRef.current) {
                gsap.to(followerRef.current, {
                    scale: 2.5,
                    backgroundColor: "rgba(59, 130, 246, 0.1)", // blue-500/10
                    borderColor: "rgba(59, 130, 246, 0.5)",
                    duration: 0.3
                });
            }
        };

        const handleLeave = () => {
            if (cursorRef.current) gsap.to(cursorRef.current, { scale: 1, duration: 0.3 });
            if (followerRef.current) {
                gsap.to(followerRef.current, {
                    scale: 1,
                    backgroundColor: "transparent",
                    borderColor: "rgba(59, 130, 246, 0.3)",
                    duration: 0.3
                });
            }
        };

        const interactiveElements = document.querySelectorAll('a, button, .project-card, input, textarea, .hero-btn');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleHover);
            el.addEventListener('mouseleave', handleLeave);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleHover);
                el.removeEventListener('mouseleave', handleLeave);
            });
        };
    }, []);

    // Check for touch device to optionally hide, but removing 'hidden' class to force visibility on desktop
    // We rely on 'fixed' and high 'z-index'
    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-3 h-3 bg-blue-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
                style={{ position: 'fixed', top: 0, left: 0 }} // Explicit style override
            ></div>
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-8 h-8 border border-blue-500/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-colors"
                style={{ position: 'fixed', top: 0, left: 0 }}
            ></div>
        </>
    );
};

export default CustomCursor;
