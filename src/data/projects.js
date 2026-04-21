import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

export const projects = [
    {
        title: "Autonomous Talent Partner - AI-Powered Recruitment Automation System",
        category: "Agentic AI & Automation",
        description: "End-to-end intelligent hiring platform that automates candidate sourcing, resume analysis, interview scheduling, and role-specific matching using a multi-agent AI architecture.",
        problem: "Recruitment teams spend too much time on manual screening, inconsistent role matching, and fragmented coordination between sourcing, evaluation, and scheduling.",
        tech: "Python, FastAPI, LangChain, LangGraph, CrewAI, RAG, MongoDB, Pinecone, ChromaDB, Neo4j, React, WebSockets, n8n, Google Calendar API, Gmail API, MCP",
        solution: "Built a planner, retriever, analyzer, critic, and decision loop with retrieval-augmented reasoning, application-level mapping, skill-gap analysis, explainable scoring, and real-time updates through WebSockets. n8n handles calendar and Gmail workflows for interview automation.",
        outcome: "Improves screening consistency with structured match scores, confidence levels, missing skills, and hiring recommendations while keeping HR in the loop for final review.",
        github: "https://github.com",
        metrics: { match_score: "92%", automation: "End-to-end" }
    },
    {
        title: "Customer Churn Prediction and Retention Analytics System",
        category: "Machine Learning & Data Science",
        description: "End-to-end churn prediction workflow using the Telco Customer Churn dataset with cleaning, feature engineering, model training, and executive reporting.",
        problem: "Businesses lose revenue when they cannot identify at-risk customers early enough or understand the drivers behind churn.",
        tech: "Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, XGBoost, Power BI, Ensemble Learning",
        solution: "Trained Logistic Regression, Random Forest, Gradient Boosting, and XGBoost models, tuned them with GridSearchCV, and visualized churn drivers in a Power BI dashboard.",
        outcome: "Reached 82% accuracy and highlighted the churn signals that matter most, helping stakeholders prioritize retention actions.",
        github: "https://github.com/ankushpahal-12/Customer-Churn-Prediction-Retention-Analytics-System",
        image: project1,
        metrics: { accuracy: "72%", latency: "< 500ms" }
    },
    {
        title: "SecureVision Face Recognition",
        category: "Computer Vision",
        description: "Real-time biometric authentication system for secure access control in high-security environments.",
        problem: "Legacy badge workflows were slow and vulnerable to unauthorized access at entry points.",
        tech: "Python, PyTorch, MTCNN (Face Detection), FaceNet (Embeddings), OpenCV, FastAPI",
        solution: "Engineered a robust face recognition pipeline that handles varied lighting conditions and liveness detection using depth analysis.",
        outcome: "Deployed across 3 high-security sites with 99.8% precision and a 0.01% false acceptance rate.",
        github: "https://github.com",
        image: project2,
        metrics: { precision: "99.8%", speed: "30fps" }
    },
    {
        title: "Shopping Application using Python",
        category: "Python and OOP",
        description: "Backend console-based e-commerce simulation built with object-oriented programming and in-memory data structures.",
        problem: "The challenge was to model e-commerce behavior cleanly without a database or UI while keeping the code reusable and consistent.",
        tech: "Python, OOP",
        solution: "Implemented User, Product, Category, and ShoppingCart classes with encapsulation, inheritance, polymorphism, validation, and total calculation logic.",
        outcome: "Shows how object-oriented design can simulate core e-commerce flows and keep the backend logic maintainable without extra infrastructure.",
        github: "https://github.com/ankushpahal-12/Shopping_Cart_Backend",
        image: project3,
        metrics: { improvement: "22%", sharp_ratio: "2.1" }
    },
    {
        title: "Dynamic Memory Visualization",
        category: "Operating Systems",
        description: "Interactive visualization of dynamic memory allocation, deallocation, and memory management algorithms using Python and SFML.",
        problem: "Memory management concepts are hard to grasp when they stay abstract in textbook diagrams.",
        tech: "Python, SFML, requests, FIFO, Paging",
        solution: "Built a graphical simulator to show allocation and deallocation flows with core algorithm behavior presented visually.",
        outcome: "Makes paging and memory allocation easier to understand by turning OS concepts into an interactive learning tool.",
        github: "https://github.com/ankushpahal-12/Dynamic-Memory-Memory-Visualization",
        metrics: { reduction: "40%", languages: "12+" }
    },
    {
        title: "IntelliRecommend Engine",
        category: "E-Commerce",
        description: "Hybrid recommendation system for large-scale e-commerce personalization and product discovery.",
        problem: "Generic product suggestions were driving low engagement and were not capturing long-tail user interests.",
        tech: "Collaborative Filtering, Matrix Factorization, LightFM, AWS SageMaker",
        solution: "Implemented a hybrid recommender combining collaborative filtering, content-based logic, and cold-start mitigation.",
        outcome: "Improved CTR by 18% and increased average order value by $12 per user.",
        github: "https://github.com",
        metrics: { ctr_boost: "18%", aov_increase: "$12" }
    }
];
