import React, { useEffect, useRef } from 'react';
import { Github, Star, GitCommit, GitPullRequest } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const GitHubStats = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.github-card',
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Placeholder data - normally fetched from API
    const stats = [
        { label: 'Repositories', value: '45+', icon: Github },
        { label: 'Contributions', value: '1,200+', icon: GitCommit },
        { label: 'Pull Requests', value: '300+', icon: GitPullRequest },
        { label: 'Stars Earned', value: '120+', icon: Star },
    ];

    return (
        <section ref={sectionRef} className="py-20 px-6 max-w-7xl mx-auto">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Open Source <span className="text-blue-500">Activity</span></h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Active contributor to the developer community. Building public tools and libraries.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="github-card glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-slate-800/50 transition-colors"
                    >
                        <div className="mb-4 p-3 bg-blue-500/10 rounded-full text-blue-400 group-hover:scale-110 transition-transform">
                            <stat.icon size={24} />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                        <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <a
                    href="#"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors border-b border-blue-500/30 hover:border-blue-500 pb-0.5"
                >
                    <Github size={16} />
                    <span>View full profile on GitHub</span>
                </a>
            </div>
        </section>
    );
};

export default GitHubStats;
