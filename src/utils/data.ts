import type { NavLink, Stat, TechCategory, Experience, Project } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const HERO_STATS: Stat[] = [
  { value: '4+', label: 'Years Experience' },
  { value: '99.2%', label: 'Model Accuracy' },
  { value: '10M+', label: 'Records Processed' },
]

export const ABOUT_STATS: Stat[] = [
  { value: '10M+', label: 'Records Processed' },
  { value: '25%', label: 'Risk Model Improvement' },
  { value: '<500ms', label: 'AI Retrieval' },
]

export const TECH_STACK: TechCategory[] = [
  {
    id: 'programming',
    number: '01',
    icon: 'code',
    title: 'Programming & Development',
    tags: ['Python', 'SQL', 'PySpark', 'Pandas', 'NumPy', 'JupyterLab', 'FastAPI', 'Streamlit', 'H2O.ai', 'PyTorch', 'TensorFlow', 'ONNX', 'Bash/shell scripting', 'Java'],
    variant: 'primary',
  },
  {
    id: 'ml',
    number: '02',
    icon: 'psychology',
    title: 'Machine Learning & Predictive Modeling',
    tags: ['Supervised & Unsupervised Learning', 'Ensemble Methods', 'Random Forest', 'Gradient Boosting (XGBoost, LightGBM, CatBoost)', 'Time Series Forecasting', 'Feature Engineering', 'Model Evaluation & Validation', 'CrossValidation', 'Model Interpretability (SHAP, LIME)'],
    variant: 'primary',
  },
  {
    id: 'visualization',
    number: '03',
    icon: 'bar_chart',
    title: 'Data Visualization & Reporting',
    tags: ['Tableau', 'Power BI', 'Plotly', 'Matplotlib', 'Seaborn', 'Advanced Excel', 'SSRS'],
    variant: 'primary',
  },
  {
    id: 'genai',
    number: '04',
    icon: 'memory',
    title: 'Artificial Intelligence & Generative AI',
    description: 'Engineering state-of-the-art Generative AI systems.',
    tags: ['Large Language Models (GPT-4, LLaMA, Falcon)', 'Retrieval-Augmented Generation (RAG)', 'LangChain', 'Hugging Face Transformers', 'Prompt Engineering', 'Embeddings & Vector Search (FAISS, Pinecone, Weaviate)'],
    variant: 'secondary',
    specializations: ['Financial NLP Modeling', 'Real-time MLOps Pipelines'],
  },
  {
    id: 'mlops',
    number: '05',
    icon: 'account_tree',
    title: 'Data Engineering & MLOps',
    tags: ['End-to-End ML Pipelines', 'ETL/ELT Workflow Automation', 'Model Deployment', 'CI/CD for ML', 'A/B Testing', 'Databricks', 'ADF', 'IBM Data Stage', 'Apache Kafka', 'API Integration'],
    variant: 'primary',
  },
  {
    id: 'cloud',
    number: '06',
    icon: 'cloud_queue',
    title: 'Cloud Platforms',
    tags: ['AWS (SageMaker, EC2, S3, Lambda)', 'GCP (Vertex AI, Google Big Query, GCS)', 'Azure (ADF, Azure ML, Azure SQL)', 'Docker', 'Kubernetes'],
    variant: 'primary',
  },
  {
    id: 'data-management',
    number: '07',
    icon: 'database',
    title: 'Data Management',
    tags: ['Relational Databases (PostgreSQL, MySQL)', 'NoSQL Stores (MongoDB, DynamoDB)', 'Data Lake & Warehouse Concepts', 'Snowflake', 'SAP HANA', 'SSMS', 'SQL developer'],
    variant: 'primary',
  },
]

export const EXPERIENCES: Experience[] = [
  {
    id: 'jpmorgan',
    period: '2023 — Present',
    company: 'JPMorgan Chase & Co.',
    role: 'Data Scientist',
    achievements: [
      'Optimized credit risk ML pipelines on 10M+ records.',
      'Engineered NLP-based RAG systems with vector databases.',
      'Fraud detection models reaching 0.91 ROC-AUC.',
    ],
    icon: 'account_balance',
    nodeColor: 'primary',
  },
  {
    id: 'hexaware',
    period: '2021 — 2023',
    company: 'Hexaware Technologies',
    role: 'Associate Data Scientist',
    achievements: [
      'Developed fraud detection models and time-series forecasting.',
      'Built end-to-end NLP pipelines for real-time anomaly detection.',
    ],
    icon: 'database',
    nodeColor: 'secondary',
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'fraud-detection',
    category: 'FinTech / Security',
    title: 'Fraud Detection System',
    challenge: 'Facing critical revenue leakage due to high false positive rates in legacy systems.',
    methodology: 'Implementation of XGBoost ensemble with SHAP interpretability layers for real-time risk scoring.',
    tags: ['Python', 'AWS SageMaker', 'XGBoost'],
    metrics: [
      { value: '25%', label: 'Loss Reduction' },
      { value: '99.8%', label: 'Accuracy' },
    ],
    size: 'large',
  },
  {
    id: 'credit-risk',
    category: 'Risk Analytics',
    title: 'Credit Risk Modeling',
    description: 'Modernizing outdated scoring engines with ensemble learning to predict default probabilities with high granularity.',
    tags: ['PyTorch', 'SQL'],
    metrics: [{ value: '+15%', label: 'Prediction Gain' }],
    size: 'small',
  },
  {
    id: 'rag-assistant',
    category: 'Generative AI',
    title: 'RAG-based AI Assistant',
    quote: '"Solving knowledge fragmentation through vector-embedding architecture."',
    highlights: [
      'LangChain + ChromaDB pipeline',
      'GPT-4 / OpenAI API Integration',
      '40% Faster retrieval impact',
    ],
    tags: ['LangChain', 'ChromaDB', 'GPT-4'],
    size: 'small',
    variant: 'accent',
  },
  {
    id: 'forecasting',
    category: 'Logistics & Supply',
    title: 'Forecasting Engine',
    description: 'Hybrid Prophet + LSTM architecture designed to eliminate inventory stockouts and optimize warehouse turnover.',
    tags: ['Prophet', 'LSTM', 'Python'],
    metrics: [
      { value: '20%', label: 'Inventory Opt' },
      { value: '94%', label: 'MAPE' },
    ],
    size: 'large',
  },
]

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harika-paamu-530967212/' },
  { label: 'GitHub', href: 'https://github.com/harikapaamu' },
  { label: 'Twitter', href: 'https://twitter.com/harikapaamu' },
]
