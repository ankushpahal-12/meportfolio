import React, { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink, X, Eye } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MediaModal from './MediaModal';

// Import Certificate PDFs & Images
import CognitiveClassCert from '../assets/IBM CB0101EN Certificate _ Cognitive Class.pdf';
import IBMSkillsBuildCert from '../assets/IBM PY0101EN Certificate _ IBM SkillsBuild.pdf';
import SimplilearnCert from '../assets/simplilearn python certiifcate.pdf';
import OtherCert from '../assets/12320100.pdf';
import allsoft from '../assets/certificate.jpg';

const Certification = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certs = [
        {
            name: "Cognitive Class",
            issuer: "IBM",
            date: "2024",
            link: CognitiveClassCert
        },
        {
            name: "Python for Data Science",
            issuer: "IBM SkillsBuild",
            date: "2024",
            link: IBMSkillsBuildCert
        },
        {
            name: "Python Certification",
            issuer: "Simplilearn",
            date: "2024",
            link: SimplilearnCert
        },
        {
            name: "Machine Learning",
            issuer: "AllsoftSolutions",
            date: "2024",
            link: allsoft,
        },
        {
            name: "Automation Certification",
            issuer: "UiPath", // Assumed issuer based on file type/context, can be updated
            date: "2024",
            link: OtherCert,
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

            // Intro Text Animation
            gsap.fromTo('.cert-intro',
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.cert-intro',
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
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.cert-list',
                        start: "top 85%"
                    }
                }
            );

            // Outro Text Animation
            gsap.fromTo('.cert-outro',
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.4,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.cert-list',
                        start: "bottom 90%"
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
        <section ref={sectionRef} className="py-24 px-6 bg-slate-950/30 relative">
            <div className="max-w-7xl mx-auto">
                <div className="cert-header flex items-center gap-4 mb-6 opacity-0">
                    <div className="p-3 bg-purple-600/10 rounded-xl text-purple-500">
                        <Award size={24} />
                    </div>
                    <h2 className="text-3xl font-bold text-white">Certifications</h2>
                </div>

                {/* Intro Text */}
                <p className="cert-intro text-slate-400 text-lg max-w-2xl mb-12 opacity-0 leading-relaxed">
                    Continuous learning is the key to mastering AI. Here are the milestones of my journey, validating my expertise in data science and machine learning.
                </p>

                <div className="cert-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {certs.map((cert, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedCert(cert)}
                            className="cert-card cursor-pointer bg-zinc-900 border border-zinc-800 p-6 rounded-2xl transition-all group flex flex-col justify-between h-full opacity-0 hover:border-purple-500/30"
                        >
                            <div className="mb-4">
                                <h3 className="font-bold text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">{cert.name}</h3>
                                <p className="text-zinc-500 text-sm mb-2">{cert.issuer}</p>
                                <span className="text-xs font-mono text-zinc-600 bg-zinc-950 px-2 py-1 rounded border border-zinc-800 inline-block">
                                    Issued {cert.date}
                                </span>
                            </div>
                            <div className="flex justify-end mt-auto gap-2">
                                <span className="text-xs text-zinc-600 group-hover:text-purple-400 transition-colors flex items-center gap-1">
                                    <Eye size={14} /> View
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Outro Text */}
                <div className="cert-outro text-center pt-8 border-t border-zinc-800/50 opacity-0">
                    <p className="text-slate-500 text-lg font-medium">
                        Ready to apply this knowledge to your project? <span className="text-purple-400">Let's build something amazing.</span>
                    </p>
                </div>
            </div>

            {/* Certificate Preview Modal */}
            <MediaModal
                isOpen={!!selectedCert}
                onClose={() => setSelectedCert(null)}
                title={selectedCert?.name}
                fileName={`${selectedCert?.issuer} • ${selectedCert?.date}`}
                fileSrc={selectedCert?.link}
            />
        </section>
    );
};

export default Certification;
