import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, Sparkles, ChevronDown } from 'lucide-react';

const KB = [
    {
        patterns: ['who are you', 'about you', 'introduce', 'tell me about ankush', 'who is ankush'],
        answer: "I'm Ankush Pahal — an AI Engineer & Full-Stack Developer specializing in **Agentic AI**, **RAG systems**, **LangChain**, and production-grade machine learning. I build intelligent systems that solve real-world problems at scale."
    },
    {
        patterns: ['skill', 'tech', 'stack', 'know', 'expertise', 'proficient'],
        answer: "My core stack includes **Python, TensorFlow, PyTorch, LangChain, RAG Pipelines, n8n, Automation Anywhere A360, Blue Prism, MongoDB, React, Node.js, Docker**, and cloud AI platforms. I specialize in the Agentic AI frontier! 🤖"
    },
    {
        patterns: ['project', 'built', 'portfolio', 'work', 'showcase'],
        answer: "I've built projects like **AI Transfer IQ** (XGBoost player valuation), **Autonomous Talent Partner** (multi-agent hiring automation), RAG-powered knowledge systems, and more. Check the Projects section above! 🚀"
    },
    {
        patterns: ['certif', 'certified', 'credential', 'badge'],
        answer: "I hold certifications in **IBM RAG & Agentic AI** (Coursera), **Automation Anywhere A360 Essentials**, **Python for Data Science** (IBM), **MongoDB & Python Developer**, and Google Networking. See the Certifications section!"
    },
    {
        patterns: ['contact', 'hire', 'reach', 'email', 'available', 'freelance', 'opportunity'],
        answer: "I'm open to exciting **AI engineering roles, freelance projects, and collaborations**! You can reach me at **ankushpayal58@gmail.com** or via the Contact section below. Let's build something remarkable! 🔥"
    },
    {
        patterns: ['intern', 'experience', 'compan', 'work at'],
        answer: "I've completed internships in AI & automation, applying LLMs, RPA, and data science in real business contexts. Check out the Internships section for the full story!"
    },
    {
        patterns: ['education', 'degree', 'study', 'college', 'university'],
        answer: "I'm pursuing my Computer Science degree with a deep focus on **AI & Machine Learning**. Continuous learning — Coursera, IBM, Udemy — keeps me on the cutting edge!"
    },
    {
        patterns: ['langchain', 'rag', 'agentic', 'n8n', 'agent', 'automation', 'blueprism', 'blue prism', 'automation anywhere'],
        answer: "Agentic AI is my specialty! I work with **LangChain Agents, RAG pipelines, n8n workflow automation, Blue Prism RPA, and Automation Anywhere A360**. I design autonomous AI systems that reason, act, and iterate — just like a digital employee! 🧠"
    },
    {
        patterns: ['hello', 'hi', 'hey', 'sup', 'yo', 'howdy'],
        answer: "Hey there! 👋 I'm Ankush's AI assistant. Ask me anything — my skills, projects, certifications, or how to get in touch with Ankush!"
    },
    {
        patterns: ['resume', 'cv', 'download'],
        answer: "You can view or download Ankush's CV from the sidebar buttons on the left, or grab it directly from the footer. It's packed with his latest projects and skills!"
    },
    {
        patterns: ['location', 'where', 'based', 'city', 'country', 'india'],
        answer: "Ankush is based in **Jhajjar, Haryana, India** 📍 — building next-gen AI systems and always open to remote opportunities worldwide!"
    },
    {
        patterns: ['github', 'linkedin', 'social', 'twitter', 'profile'],
        answer: "Find Ankush online:\n🐙 **GitHub:** github.com/ankushpahal-12\n💼 **LinkedIn:** linkedin.com/in/pahalankush\n🐦 **Twitter/X:** x.com/AnkushPahal5"
    },
];

const SUGGESTIONS = [
    "What skills do you have?",
    "Show me your projects",
    "Are you available for hire?",
    "What certifications do you hold?",
    "Tell me about Agentic AI work",
];

const getReply = (input) => {
    const q = input.toLowerCase();
    for (const entry of KB) {
        if (entry.patterns.some(p => q.includes(p))) return entry.answer;
    }
    return "Great question! I don't have that specific info, but feel free to reach Ankush directly at **ankushpayal58@gmail.com** — he'd love to chat! 🤝";
};

// Format bold **text**
const formatMessage = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) =>
        part.startsWith('**') && part.endsWith('**')
            ? <strong key={i} className="text-white font-black">{part.slice(2, -2)}</strong>
            : part
    );
};
const AskAnkush = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'bot',
            text: "Hi! 👋 I'm Ankush's AI assistant. Ask me anything about his skills, projects, or how to connect!",
            id: 0
        }
    ]);
    const [input, setInput] = useState('');
    const [typing, setTyping] = useState(false);
    const [hasNewMsg, setHasNewMsg] = useState(false);
    const bottomRef = useRef(null);
    const inputRef = useRef(null);
    const msgId = useRef(1);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, typing]);

    useEffect(() => {
        if (open) {
            setHasNewMsg(false);
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [open]);

    const send = (text) => {
        const q = (text || input).trim();
        if (!q) return;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: q, id: msgId.current++ }]);
        setTyping(true);
        setTimeout(() => {
            const reply = getReply(q);
            setMessages(prev => [...prev, { role: 'bot', text: reply, id: msgId.current++ }]);
            setTyping(false);
            if (!open) setHasNewMsg(true);
        }, 900 + Math.random() * 400);
    };

    const handleKey = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
    };

    return (
        <>
            {/* Floating button */}
            <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.93 }}
                onClick={() => setOpen(o => !o)}
                className="fixed bottom-6 left-6 z-[9000] w-14 h-14 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-[0_0_30px_rgba(99,102,241,0.5)] flex items-center justify-center border border-indigo-500/30"
            >
                <AnimatePresence mode="wait">
                    {open ? (
                        <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                            <ChevronDown size={22} />
                        </motion.div>
                    ) : (
                        <motion.div key="bot" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                            <Bot size={22} />
                        </motion.div>
                    )}
                </AnimatePresence>
                {hasNewMsg && !open && (
                    <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#050a18] animate-pulse" />
                )}
            </motion.button>

            {/* Chat Panel */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="panel"
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.95 }}
                        transition={{ type: 'spring', damping: 22, stiffness: 260 }}
                        className="fixed bottom-24 left-6 z-[9000] w-[340px] sm:w-[380px] rounded-[2rem] overflow-hidden bg-[#0a0a1a]/95 backdrop-blur-2xl border border-indigo-500/20 shadow-[0_20px_80px_rgba(0,0,0,0.6)] flex flex-col"
                        style={{ maxHeight: '520px' }}
                    >
                        {/* Header */}
                        <div className="px-5 py-4 border-b border-white/[0.04] flex items-center justify-between bg-gradient-to-r from-indigo-600/10 to-violet-600/5 shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg">
                                    <Bot size={18} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-white text-sm font-black leading-none">Ask Ankush</p>
                                    <p className="text-indigo-400/70 text-[10px] font-bold uppercase tracking-wider mt-0.5 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                                        Agentic AI Assistant
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="px-2 py-1 rounded-lg bg-indigo-600/10 border border-indigo-500/20">
                                    <Sparkles size={12} className="text-indigo-400" />
                                </div>
                                <button onClick={() => setOpen(false)} className="p-1.5 rounded-lg text-white/30 hover:text-white hover:bg-white/10 transition-all">
                                    <X size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar" style={{ minHeight: 0 }}>
                            {messages.map(msg => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    {msg.role === 'bot' && (
                                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shrink-0 mr-2 mt-0.5 shadow-md">
                                            <Bot size={13} className="text-white" />
                                        </div>
                                    )}
                                    <div className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${msg.role === 'user'
                                            ? 'bg-indigo-600 text-white rounded-br-sm'
                                            : 'bg-white/[0.06] text-white/85 border border-white/[0.06] rounded-bl-sm'
                                        }`}>
                                        {formatMessage(msg.text)}
                                    </div>
                                </motion.div>
                            ))}

                            {typing && (
                                <motion.div
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-end gap-2"
                                >
                                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shrink-0 shadow-md">
                                        <Bot size={13} className="text-white" />
                                    </div>
                                    <div className="bg-white/[0.06] border border-white/[0.06] px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5">
                                        {[0, 1, 2].map(i => (
                                            <motion.span
                                                key={i}
                                                className="w-1.5 h-1.5 rounded-full bg-indigo-400"
                                                animate={{ y: [0, -5, 0] }}
                                                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                            <div ref={bottomRef} />
                        </div>

                        {/* Quick Suggestions */}
                        {messages.length <= 1 && (
                            <div className="px-4 pb-2 flex gap-2 flex-wrap shrink-0">
                                {SUGGESTIONS.slice(0, 3).map(s => (
                                    <button
                                        key={s}
                                        onClick={() => send(s)}
                                        className="text-[10px] px-3 py-1.5 rounded-full bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 hover:bg-indigo-600/20 transition-all font-bold uppercase tracking-wider whitespace-nowrap"
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input */}
                        <div className="px-4 pb-4 pt-2 shrink-0 border-t border-white/[0.04]">
                            <div className="flex gap-2 items-center">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    onKeyDown={handleKey}
                                    placeholder="Ask anything about Ankush..."
                                    className="flex-1 bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-white/20 rounded-xl px-4 py-2.5 focus:outline-none focus:border-indigo-500/50 transition-all"
                                />
                                <motion.button
                                    whileTap={{ scale: 0.85 }}
                                    onClick={() => send()}
                                    disabled={!input.trim() || typing}
                                    className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg disabled:opacity-30 transition-all hover:bg-indigo-500 shrink-0"
                                >
                                    <Send size={15} />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AskAnkush;
