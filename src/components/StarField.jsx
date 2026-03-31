import React, { useEffect, useRef } from 'react';
const rand = (min, max) => Math.random() * (max - min) + min;
const randInt = (min, max) => Math.floor(rand(min, max + 1));


const LAYERS = [
    { count: 260, speedFactor: 0.008, minR: 0.3, maxR: 0.8, minOpacity: 0.25, maxOpacity: 0.55 }, // distant
    { count: 120, speedFactor: 0.018, minR: 0.6, maxR: 1.4, minOpacity: 0.45, maxOpacity: 0.80 }, // mid
    { count: 55, speedFactor: 0.030, minR: 1.0, maxR: 2.2, minOpacity: 0.65, maxOpacity: 1.00 }, // close
];

const STAR_COLORS = [
    '#ffffff', '#ffffff', '#ffffff',           // mostly white
    '#c8d8ff', '#b8c8ff',                      // blue-white
    '#ffd8b8', '#ffe8c8',                      // warm orange
    '#aef0ff', '#d4f0ff',                      // cyan
    '#e0d0ff',                                  // lavender
];

const SHOOTING_STAR_INTERVAL_MS = 3500;

const StarField = ({ theme }) => {
    const canvasRef = useRef(null);
    const stateRef = useRef(null); // holds mutable runtime state

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // ─── resize handler ───────────────────────────────────────────
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            buildStars();
        };

        // ─── build star pools ─────────────────────────────────────────
        const buildStars = () => {
            const W = canvas.width;
            const H = canvas.height;

            stateRef.current = {
                layers: LAYERS.map(layer =>
                    Array.from({ length: layer.count }, () => createStar(W, H, layer))
                ),
                shooting: [],
                nebula: buildNebula(W, H),
                lastShootingTime: 0,
            };
        };

        // ─── star factory ─────────────────────────────────────────────
        const createStar = (W, H, layer, initialX = null, initialY = null) => ({
            x: initialX ?? rand(0, W),
            y: initialY ?? rand(0, H),
            r: rand(layer.minR, layer.maxR),
            color: STAR_COLORS[randInt(0, STAR_COLORS.length - 1)],
            baseOpacity: rand(layer.minOpacity, layer.maxOpacity),
            opacity: rand(layer.minOpacity, layer.maxOpacity),
            twinkleSpeed: rand(0.005, 0.025),
            twinkleDir: Math.random() < 0.5 ? 1 : -1,
            speedFactor: layer.speedFactor,
            driftX: rand(-0.04, 0.04),
            driftY: rand(0.01, 0.06),
        });

        // ─── nebula blobs (soft glow) ─────────────────────────────────
        const buildNebula = (W, H) => [
            { x: W * 0.15, y: H * 0.25, rx: W * 0.28, ry: H * 0.22, color: 'rgba(79,70,229,0.04)' },
            { x: W * 0.82, y: H * 0.65, rx: W * 0.22, ry: H * 0.20, color: 'rgba(139,92,246,0.04)' },
            { x: W * 0.50, y: H * 0.90, rx: W * 0.35, ry: H * 0.16, color: 'rgba(56,189,248,0.03)' },
            { x: W * 0.70, y: H * 0.10, rx: W * 0.20, ry: H * 0.18, color: 'rgba(244,114,182,0.025)' },
        ];

        // ─── create a shooting star ───────────────────────────────────
        const spawnShootingStar = (W, H) => {
            const angle = rand(-0.6, -0.2); // slight downward diagonal
            const speed = rand(8, 18);
            const len = rand(80, 200);
            return {
                x: rand(W * 0.1, W * 0.9),
                y: rand(0, H * 0.4),
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                len,
                opacity: 1,
                tail: [],
            };
        };

        // ─── parallax scroll offset ───────────────────────────────────
        let scrollY = 0;
        const handleScroll = () => { scrollY = window.scrollY; };
        window.addEventListener('scroll', handleScroll, { passive: true });

        // ─── main animation loop ──────────────────────────────────────
        let raf;
        let lastTime = 0;

        const draw = (timestamp) => {
            raf = requestAnimationFrame(draw);
            const dt = Math.min(timestamp - lastTime, 40); // cap at 40ms
            lastTime = timestamp;

            const W = canvas.width;
            const H = canvas.height;
            const state = stateRef.current;
            if (!state) return;

            // ── clear ──────────────────────────────────────────────────
            ctx.clearRect(0, 0, W, H);

            // ── nebula glow ────────────────────────────────────────────
            state.nebula.forEach(n => {
                const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, Math.max(n.rx, n.ry));
                grad.addColorStop(0, n.color);
                grad.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.save();
                ctx.scale(1, n.ry / n.rx);
                ctx.beginPath();
                ctx.arc(n.x, n.y * (n.rx / n.ry), n.rx, 0, Math.PI * 2);
                ctx.fillStyle = grad;
                ctx.fill();
                ctx.restore();
            });

            // ── stars (multi-layer with parallax) ─────────────────────
            state.layers.forEach((stars, li) => {
                const parallaxOffset = scrollY * LAYERS[li].speedFactor * 0.5;
                stars.forEach(s => {
                    // twinkle
                    s.opacity += s.twinkleSpeed * s.twinkleDir;
                    if (s.opacity >= s.baseOpacity || s.opacity <= s.baseOpacity * 0.25) {
                        s.twinkleDir *= -1;
                    }

                    // slow drift
                    s.x += s.driftX * (dt / 16);
                    s.y += s.driftY * (dt / 16) * s.speedFactor * 15;

                    // wrap
                    if (s.x < 0) s.x = W;
                    if (s.x > W) s.x = 0;
                    if (s.y > H) { s.x = rand(0, W); s.y = -2; }

                    const drawY = (s.y - parallaxOffset % H + H) % H;

                    // draw glow halo for close stars
                    if (s.r > 1.3) {
                        ctx.save();
                        ctx.globalAlpha = s.opacity * 0.3;
                        ctx.shadowColor = s.color;
                        ctx.shadowBlur = s.r * 6;
                        ctx.beginPath();
                        ctx.arc(s.x, drawY, s.r * 2, 0, Math.PI * 2);
                        ctx.fillStyle = s.color;
                        ctx.fill();
                        ctx.restore();
                    }

                    // draw star core
                    ctx.save();
                    ctx.globalAlpha = s.opacity;
                    ctx.beginPath();
                    ctx.arc(s.x, drawY, s.r, 0, Math.PI * 2);
                    ctx.fillStyle = s.color;
                    ctx.fill();
                    ctx.restore();
                });
            });

            // ── shooting stars ─────────────────────────────────────────
            if (timestamp - state.lastShootingTime > SHOOTING_STAR_INTERVAL_MS + rand(-800, 800)) {
                state.shooting.push(spawnShootingStar(W, H));
                state.lastShootingTime = timestamp;
            }

            state.shooting = state.shooting.filter(s => s.opacity > 0);
            state.shooting.forEach(s => {
                s.tail.unshift({ x: s.x, y: s.y });
                if (s.tail.length > 18) s.tail.pop();

                s.x += s.vx * (dt / 16);
                s.y += s.vy * (dt / 16);
                s.opacity -= 0.022;

                // draw tail gradient
                const tailLen = s.tail.length;
                s.tail.forEach((pt, i) => {
                    const prog = 1 - i / tailLen;
                    ctx.save();
                    ctx.globalAlpha = s.opacity * prog * 0.9;
                    ctx.strokeStyle = `rgba(220,230,255,${prog})`;
                    ctx.lineWidth = prog * 1.8;
                    ctx.shadowColor = '#c8d8ff';
                    ctx.shadowBlur = 4;
                    ctx.beginPath();
                    if (i < tailLen - 1) {
                        ctx.moveTo(pt.x, pt.y);
                        ctx.lineTo(s.tail[i + 1].x, s.tail[i + 1].y);
                        ctx.stroke();
                    }
                    ctx.restore();
                });

                // draw head
                ctx.save();
                ctx.globalAlpha = s.opacity;
                ctx.beginPath();
                ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2);
                ctx.fillStyle = '#ffffff';
                ctx.shadowColor = '#ffffff';
                ctx.shadowBlur = 8;
                ctx.fill();
                ctx.restore();
            });
        };

        // ─── init ─────────────────────────────────────────────────────
        window.addEventListener('resize', resize);
        resize();
        raf = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', resize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: -10 }}
        />
    );
};

export default StarField;
