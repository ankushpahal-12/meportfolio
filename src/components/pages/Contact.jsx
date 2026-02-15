import React, { useRef, useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, Github, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

// --- Animated Starfield Background ---
const StarField = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        let stars = [];

        for (let i = 0; i < 100; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.5,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                alpha: Math.random()
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                ctx.fill();
                star.x += star.vx;
                star.y += star.vy;
                if (star.x < 0) star.x = width;
                if (star.x > width) star.x = 0;
                if (star.y < 0) star.y = height;
                if (star.y > height) star.y = 0;
                star.alpha += (Math.random() - 0.5) * 0.05;
                if (star.alpha < 0.1) star.alpha = 0.1;
                if (star.alpha > 1) star.alpha = 1;
            });
            requestAnimationFrame(animate);
        };
        animate();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen" />;
};

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        const ADMIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;
        const AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;

        if (!SERVICE_ID || !PUBLIC_KEY || !ADMIN_TEMPLATE_ID || !AUTOREPLY_TEMPLATE_ID) {
            console.error("Missing EmailJS Config");
            setIsSubmitting(false);
            setStatus({ type: 'error', message: "Configuration Error." });
            return;
        }

        Promise.all([
            emailjs.sendForm(SERVICE_ID, ADMIN_TEMPLATE_ID, form.current, PUBLIC_KEY),
            emailjs.sendForm(SERVICE_ID, AUTOREPLY_TEMPLATE_ID, form.current, PUBLIC_KEY)
        ])
            .then(() => {
                setIsSubmitting(false);
                setStatus({ type: 'success', message: "Your message has been sent successfully." });
                e.target.reset();
                setTimeout(() => setStatus({ type: '', message: '' }), 5000);
            })
            .catch(() => {
                setIsSubmitting(false);
                setStatus({ type: 'error', message: "Failed to send message. Please try again." });
            });
    };

    return (
        <section id="contact" className="min-h-screen py-20 px-6 relative overflow-hidden bg-slate-950 flex items-center justify-center">

            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#020617] via-[#0f172a] to-[#1e1b4b]"></div>
            <StarField />

            {/* Glowing Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-float"></div>

            <motion.div
                className="relative z-10 w-full max-w-5xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Floating Animation Wrapper */}
                <div className="animate-float">
                    <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row hover:shadow-[0_0_60px_-10px_rgba(59,130,246,0.3)] transition-shadow duration-500">
                        {/* Glass Surface Shine */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>

                        {/* Left Panel: Info */}
                        <div className="w-full md:w-2/5 p-10 md:p-12 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border-b md:border-b-0 md:border-r border-white/5 relative group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
                                Ready to <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Hire Me?</span>
                            </h2>

                            <p className="text-slate-300 mb-10 text-sm leading-relaxed">
                                I am currently available for full-time roles in AI/ML and Software Engineering. I'm ready to bring my skills to your team.
                            </p>

                            <div className="space-y-8 font-medium">
                                <a href="mailto:ankushpayal58@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group/item">
                                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover/item:border-blue-500/50 group-hover/item:bg-blue-500/10 transition-colors">
                                        <Mail size={18} className="text-blue-400" />
                                    </div>
                                    <span>ankushpayal58@gmail.com</span>
                                </a>
                                <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group/item cursor-pointer">
                                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover/item:border-purple-500/50 group-hover/item:bg-purple-500/10 transition-colors">
                                        <MapPin size={18} className="text-purple-400" />
                                    </div>
                                    <span>India (Open to Relocate)</span>
                                </div>
                            </div>

                            <div className="mt-12 md:mt-auto pt-10">
                                <div className="flex gap-4">
                                    {[Github, Linkedin, Instagram].map((Icon, idx) => (
                                        <div key={idx} className="p-3 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/30 hover:scale-110 transition-transform cursor-pointer">
                                            <Icon size={18} className="text-slate-300" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Panel: Form */}
                        <div className="flex-1 p-10 md:p-12 bg-slate-900/20">
                            <form ref={form} onSubmit={handleSubmit} className="space-y-8">

                                <div className="relative group">
                                    <input
                                        type="text"
                                        name="user_name"
                                        className="peer w-full bg-transparent border-b-2 border-slate-700 py-3 text-slate-200 focus:outline-none focus:border-blue-500 transition-colors placeholder-transparent"
                                        placeholder="Name"
                                        required
                                    />
                                    <label className="absolute left-0 -top-3.5 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-blue-400 peer-focus:text-sm">
                                        Recruiter / Company Name
                                    </label>
                                </div>

                                <div className="relative group">
                                    <input
                                        type="email"
                                        name="user_email"
                                        className="peer w-full bg-transparent border-b-2 border-slate-700 py-3 text-slate-200 focus:outline-none focus:border-blue-500 transition-colors placeholder-transparent"
                                        placeholder="Email"
                                        required
                                    />
                                    <label className="absolute left-0 -top-3.5 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-blue-400 peer-focus:text-sm">
                                        Email Address
                                    </label>
                                </div>

                                <div className="relative group">
                                    <textarea
                                        name="message"
                                        rows="4"
                                        className="peer w-full bg-transparent border-b-2 border-slate-700 py-3 text-slate-200 focus:outline-none focus:border-blue-500 transition-colors placeholder-transparent resize-none"
                                        placeholder="Message"
                                        required
                                    ></textarea>
                                    <label className="absolute left-0 -top-3.5 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-blue-400 peer-focus:text-sm">
                                        Job Details / Message
                                    </label>
                                </div>

                                <AnimatePresence>
                                    {status.message && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className={`text-sm font-medium ${status.type === 'error' ? 'text-red-400' : 'text-green-400'}`}
                                        >
                                            {status.message}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 animate-gradient-x text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] transform transition-all duration-300 flex items-center justify-center gap-2 group"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
