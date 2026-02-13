import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassCard from './GlassCard';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formState);
        alert("Thanks for reaching out! I'll get back to you soon.");
        setFormState({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-7xl mx-auto">
                <GlassCard className="p-0 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Left Side: Contact Info */}
                        <div className="p-10 bg-slate-900/40 md:border-r border-white/5 flex flex-col justify-between">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
                                <p className="text-slate-400 mb-12 leading-relaxed">
                                    I'm actively seeking new opportunities to contribute to innovative AI/ML projects. Whether you have a question or just want to say hi, my inbox is open!
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 group">
                                        <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Email Me</p>
                                            <a href="mailto:ankus@example.com" className="text-slate-200 hover:text-blue-400 transition-colors">ankush@example.com</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Call Me</p>
                                            <a href="tel:+911234567890" className="text-slate-200 hover:text-purple-400 transition-colors">+91 999 999 9999</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="p-3 bg-green-500/10 rounded-lg text-green-400 border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Location</p>
                                            <p className="text-slate-200">Jhajjar, Haryana, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-4">Follow Me</p>
                                <div className="flex gap-4">
                                    <a href="#" className="p-3 bg-slate-800/50 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-all border border-slate-700/50 hover:border-slate-600">
                                        <Github size={20} />
                                    </a>
                                    <a href="#" className="p-3 bg-slate-800/50 rounded-lg text-slate-400 hover:bg-blue-600/20 hover:text-blue-400 transition-all border border-slate-700/50 hover:border-blue-500/30">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href="#" className="p-3 bg-slate-800/50 rounded-lg text-slate-400 hover:bg-sky-500/20 hover:text-sky-400 transition-all border border-slate-700/50 hover:border-sky-500/30">
                                        <Twitter size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="p-10 relative">
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600 resize-none"
                                        placeholder="Enter your message"
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-blue-600/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </section>
    );
};

export default Contact;