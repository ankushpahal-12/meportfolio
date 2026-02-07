import React, { useEffect, useRef } from 'react';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Contact = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.contact-content',
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: '.contact-content',
                        start: "top 80%",
                        once: true
                    }
                }
            );

            // Button Hover Animations
            const buttons = document.querySelectorAll('.contact-btn');
            buttons.forEach(btn => {
                btn.addEventListener('mouseenter', () => gsap.to(btn, { scale: 1.05, duration: 0.2 }));
                btn.addEventListener('mouseleave', () => gsap.to(btn, { scale: 1, duration: 0.2 }));
                btn.addEventListener('mousedown', () => gsap.to(btn, { scale: 0.98, duration: 0.1 }));
                btn.addEventListener('mouseup', () => gsap.to(btn, { scale: 1.05, duration: 0.1 }));
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="contact" className="py-32 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <div className="contact-content opacity-0">
                    <span className="text-blue-500 font-mono text-sm tracking-wider uppercase mb-6 block">What's Next?</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                        Ready to build intelligent solutions?
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                        I'm currently available for full-time opportunities and freelance projects.
                        If you have a challenging problem that needs an AI-driven solution, let's connect.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="mailto:hello@example.com"
                            className="contact-btn btn-primary px-8 py-4 flex items-center gap-3 group"
                        >
                            <Mail size={18} />
                            Say Hello
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="#"
                            className="contact-btn btn-secondary px-8 py-4 flex items-center gap-3"
                        >
                            <Linkedin size={18} />
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;