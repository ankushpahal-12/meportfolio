export const projects = [
    {
        title: "EcoLink AI Chatbot",
        description: "Advanced multi-modal conversational agent for customer support and industrial documentation.",
        problem: "Customer support teams were overwhelmed with repetitive technical queries from 500+ page manuals.",
        tech: "Mistral-7B, LangChain, RAG (Retrieval Augmented Generation), Pinecone, OpenAI Whisper",
        solution: "Developed a multi-modal RAG pipeline that processes both text and voice, utilizing semantic search across technical documentation.",
        outcome: "Achieved 95% accuracy in intent recognition and reduced agent workload by 60% within 3 months.",
        github: "https://github.com",
        metrics: { accuracy: "95%", latency: "< 500ms" }
    },
    {
        title: "SecureVision Face Recognition",
        description: "Real-time biometric authentication system for high-security environments.",
        problem: "Legacy badge systems were prone to unauthorized access and manual check-in delays at facility gates.",
        tech: "Python, PyTorch, MTCNN (Face Detection), FaceNet (Embeddings), OpenCV, FastAPI",
        solution: "Engineered a robust face recognition system that handles varied lighting conditions and liveness detection using depth analysis.",
        outcome: "Successfully implemented at 3 high-security sites with 99.8% precision and 0.01% False Acceptance Rate.",
        github: "https://github.com",
        metrics: { precision: "99.8%", speed: "30fps" }
    },
    {
        title: "Quantum Stock Forecaster",
        description: "High-frequency time-series prediction model for fintech volatility analysis.",
        problem: "Financial analysts lacked tools to predict short-term market reversals during high-volatility events.",
        tech: "Python, TensorFlow, LSTMs, Attention Mechanisms, Pandas, Yahoo Finance API",
        solution: "Built a stacked LSTM architecture with an attention layer to prioritize recent market movements and key sentiment indicators.",
        outcome: "Outperformed baseline ARIMA models by 22% in directional accuracy for S&P 500 assets.",
        github: "https://github.com",
        metrics: { improvement: "22%", sharp_ratio: "2.1" }
    },
    {
        title: "NeuroShield Spam Detection",
        description: "Enterprise-grade email filtering system using transformer-based NLP.",
        problem: "Increasing volume of sophisticated spear-phishing emails bypassing traditional rule-based filters.",
        tech: "BERT, Hugging Face Transformers, Scikit-learn, Docker, Kubernetes",
        solution: "Transitioned from TF-IDF to a fine-tuned BERT model for semantic context analysis, deployed as a microservice on K8s.",
        outcome: "Reduced false negatives by 40% and improved spam identification in 12 languages.",
        github: "https://github.com",
        metrics: { reduction: "40%", languages: "12+" }
    },
    {
        title: "IntelliRecommend Engine",
        description: "Hybrid recommendation system for large-scale e-commerce personalization.",
        problem: "Low user engagement due to generic product suggestions that failed to capture long-tail interests.",
        tech: "Collaborative Filtering, Matrix Factorization, LightFM, AWS SageMaker",
        solution: "Implemented a hybrid system combining content-based and collaborative filtering with cold-start mitigation logic.",
        outcome: "Boosted CTR by 18% and increased average order value (AOV) by $12 per user.",
        github: "https://github.com",
        metrics: { ctr_boost: "18%", aov_increase: "$12" }
    }
];
