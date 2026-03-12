import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

export const projects = [
    {
        title: "Customer Churn Prediction & Retention Analytics System",
        category: "Machine Learning & Data Science",
        description: "Developed an end-to-end Customer Churn Prediction system using the Telco Customer Churn dataset. Performed data cleaning, missing value handling, outlier treatment, feature engineering, and categorical encoding. Built classification models to predict customer churn and evaluated performance using precision, recall, F1-score, and ROC-AUC. Additionally, created an interactive Power BI dashboard to analyze churn trends, revenue impact, and customer behavior patterns to provide actionable business insights",
        problem: "Customer churn is a critical challenge for businesses, leading to revenue loss and reduced market share. Identifying at-risk customers and understanding the factors driving churn is essential for developing effective retention strategies.",
        tech: "Python, Pandas, NumPy, Scikit-learn,Matplotlib, Seaborn, XGBoost, Power BI,Ensemble Learning",
        solution: "Implemented machine learning models including Logistic Regression, Random Forest, Gradient Boosting, and XGBoost to predict customer churn. Optimized model hyperparameters using GridSearchCV and evaluated performance using confusion matrix, ROC-AUC curve, and feature importance analysis. Designed and developed an interactive Power BI dashboard to visualize churn patterns, customer segments, and retention campaign effectiveness.",
        outcome: "Achieved 82% accuracy in predicting customer churn and identified key drivers such as contract type, monthly charges, and customer service interactions. The Power BI dashboard enabled stakeholders to monitor churn trends, identify at-risk customer segments, and evaluate the effectiveness of retention strategies.",
        github: "https://github.com/ankushpahal-12/Customer-Churn-Prediction-Retention-Analytics-System",
        image: project1,
        metrics: { accuracy: "72%", latency: "< 500ms" }
    },
    {
        title: "SecureVision Face Recognition",
        category: "Computer Vision",
        description: "Real-time biometric authentication system for high-security environments.",
        problem: "Legacy badge systems were prone to unauthorized access and manual check-in delays at facility gates.",
        tech: "Python, PyTorch, MTCNN (Face Detection), FaceNet (Embeddings), OpenCV, FastAPI",
        solution: "Engineered a robust face recognition system that handles varied lighting conditions and liveness detection using depth analysis.",
        outcome: "Successfully implemented at 3 high-security sites with 99.8% precision and 0.01% False Acceptance Rate.",
        github: "https://github.com",
        image: project2,
        metrics: { precision: "99.8%", speed: "30fps" }
    },
    {
        title: "Shopping Application using Python",
        category: "Python,Oop",
        description: "The Shopping Application using Python is a backend-based console project developed to simulate the fundamental operations of an e-commerce system using Object-Oriented Programming (OOP) principles. The application emphasizes backend business logic without incorporating any graphical user interface or database connectivity. Instead, it uses in-memory data structures such as lists and dictionaries to manage users, products, categories, and cart details.",
        problem: "The primary challenge in developing this application was to accurately model the core functionalities of an e-commerce system using only object-oriented programming concepts and in-memory data structures. This involved designing classes and relationships that could effectively represent users, products, categories, and shopping carts, while ensuring data integrity and consistency without relying on external databases or graphical interfaces.",
        tech: "Python, OOPs",
        solution: "The application was developed by implementing core OOP principles, including encapsulation, inheritance, and polymorphism. Key classes such as User, Product, Category, and ShoppingCart were designed to manage the system's data and operations. The ShoppingCart class, in particular, demonstrated the practical application of OOP by managing multiple Product objects and calculating totals using object methods. Additionally, the project incorporated error handling and validation mechanisms to ensure data integrity and provide a user-friendly experience.",
        outcome: "The Shopping Application successfully simulates core e-commerce functionalities using object-oriented programming and in-memory data structures. The project demonstrates the practical application of OOP principles, including encapsulation, inheritance, and polymorphism, to manage users, products, categories, and shopping carts. The application provides a user-friendly experience with error handling and validation mechanisms, showcasing the importance of backend business logic in e-commerce systems.",
        github: "https://github.com/ankushpahal-12/Shopping_Cart_Backend",
        image: project3,
        metrics: { improvement: "22%", sharp_ratio: "2.1" }
    },
    {
        title: "Dynamic-Memory-Memory-Visualization",
        category: "operating system",
        description: "Dynamic Memory Management Visualization is a python project that provides a visual representation of memory allocation and deallocation using the SFML (Simple and Fast Multimedia Library) graphics library. The application demonstrates various memory management techniques, including dynamic memory allocation, deallocation, and memory management algorithms, through an interactive graphical interface.",
        problem: "The primary challenge in developing this application was to accurately model the core functionalities of memory management using only object-oriented programming concepts and in-memory data structures. This involved designing classes and relationships that could effectively represent memory allocation, deallocation, and memory management algorithms, while ensuring data integrity and consistency without relying on external databases or graphical interfaces.",
        tech: "Python, SFML,requets, fifo , paging",
        solution: "The application was developed by implementing core OOP principles, including encapsulation, inheritance, and polymorphism. Key classes such as User, Product, Category, and ShoppingCart were designed to manage the system's data and operations. The ShoppingCart class, in particular, demonstrated the practical application of OOP by managing multiple Product objects and calculating totals using object methods. Additionally, the project incorporated error handling and validation mechanisms to ensure data integrity and provide a user-friendly experience.",
        outcome: "The Dynamic Memory Management Visualization project successfully demonstrates various memory management techniques, including dynamic memory allocation, deallocation, and memory management algorithms, through an interactive graphical interface. The application provides a visual representation of memory management techniques, including dynamic memory allocation, deallocation, and memory management algorithms, through an interactive graphical interface. The project serves as a solid foundation for understanding memory management techniques and their practical applications.",
        github: "https://github.com/ankushpahal-12/Dynamic-Memory-Memory-Visualization",
        metrics: { reduction: "40%", languages: "12+" }
    },
    {
        title: "IntelliRecommend Engine",
        category: "E-Commerce",
        description: "Hybrid recommendation system for large-scale e-commerce personalization.",
        problem: "Low user engagement due to generic product suggestions that failed to capture long-tail interests.",
        tech: "Collaborative Filtering, Matrix Factorization, LightFM, AWS SageMaker",
        solution: "Implemented a hybrid system combining content-based and collaborative filtering with cold-start mitigation logic.",
        outcome: "Boosted CTR by 18% and increased average order value (AOV) by $12 per user.",
        github: "https://github.com",
        metrics: { ctr_boost: "18%", aov_increase: "$12" }
    }
];
