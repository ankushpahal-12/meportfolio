import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = ({ theme }) => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const isDark = theme === 'dark';
    const particleColor = isDark ? "#ffffff" : "#4f46e5";
    const lineColor = isDark ? "#ffffff" : "#6366f1";

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            links: {
                                opacity: 0.5,
                            },
                        },
                    },
                },
                particles: {
                    color: {
                        value: particleColor,
                    },
                    links: {
                        color: lineColor,
                        distance: 150,
                        enable: true,
                        opacity: isDark ? 0.2 : 0.4,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 60,
                    },
                    opacity: {
                        value: isDark ? 0.3 : 0.6,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 2 },
                    },
                },
                detectRetina: true,
            }}
            className="absolute inset-0 -z-20 pointer-events-none"
        />
    );
};

export default ParticleBackground;
