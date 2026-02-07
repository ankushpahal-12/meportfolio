import React, { useEffect, useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Certification = () => {
    const certs = [
        {
            name: "Deep Learning Specialization",
            issuer: "DeepLearning.AI",
            date: "2023",
            link: "#"
        },
        {
            name: "AWS Certified Machine Learning - Specialty",
            issuer: "Amazon Web Services",
            date: "2024",
            link: "#"
        },
        {
            name: "TensorFlow Developer Certificate",
            issuer: "Google",
            date: "2023",
            link: "#"
        }
    ];

    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.fromTo('.cert-header',
                { opacity: 0, x: -20 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.cert-header',
                        start: "top 85%"
                    }
                }
            );

            // Cards Animation
            gsap.fromTo('.cert-card',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.cert-list',
                        start: "top 85%"
                    }
                }
            );

            // Hover effects
            const cards = document.querySelectorAll('.cert-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', () => gsap.to(card, { scale: 1.02, backgroundColor: "rgba(39, 39, 42, 0.8)", duration: 0.3 }));
                card.addEventListener('mouseleave', () => gsap.to(card, { scale: 1, backgroundColor: "rgba(24, 24, 27, 1)", duration: 0.3 }));
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 px-6 bg-slate-950/30">
            <div className="max-w-7xl mx-auto">
                <div className="cert-header flex items-center gap-4 mb-12 opacity-0">
                    <div className="p-3 bg-purple-600/10 rounded-xl text-purple-500">
                        <Award size={24} />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Certifications</h2>
                </div>

                <div className="cert-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certs.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.link}
                            className="cert-card bg-zinc-900 border border-zinc-800 p-6 rounded-2xl transition-all group flex items-start justify-between opacity-0"
                        >
                            <div>
                                <h3 className="font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{cert.name}</h3>
                                <p className="text-zinc-500 text-sm mb-2">{cert.issuer}</p>
                                <span className="text-xs font-mono text-zinc-600 bg-zinc-950 px-2 py-1 rounded border border-zinc-800">
                                    Issued {cert.date}
                                </span>
                            </div>
                            <ExternalLink size={16} className="text-zinc-600 group-hover:text-white transition-colors" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certification;
