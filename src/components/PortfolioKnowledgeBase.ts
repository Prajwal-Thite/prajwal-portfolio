// Portfolio knowledge base for AI chatbot responses
export interface PortfolioData {
  projects: Array<{
    title: string;
    description: string;
    techStack: string[];
    category: string;
  }>;
  experience: Array<{
    role: string;
    company: string;
    duration: string;
    technologies: string[];
  }>;
  skills: string[];
  education: string[];
  contact: {
    email: string;
    location: string;
  };
}

export const portfolioData: PortfolioData = {
  projects: [
  {
    title: "Generative AI for Reinforcement Learning",
    description: "Thesis project exploring novel approaches to combining generative AI with RL algorithms for enhanced decision-making capabilities.",
    techStack: ["Python", "PyTorch", "TensorFlow", "OpenAI Gym", "NumPy", "Jupyter"],
    category: "AI"
  },
  {
    title: "E-Commerce & Skincare Platform",
    description: "Full-stack e-commerce solution with advanced product recommendations and skincare analysis features.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Docker", "Redis"],
    category: "Web"
  },
  {
    title: "Flutter Mobile Applications",
    description: "Cross-platform mobile apps built with Flutter, featuring real-time features and offline capabilities.",
    techStack: ["Flutter", "Dart", "Firebase", "SQLite", "Bloc", "GraphQL"],
    category: "Mobile"
  },
  {
    title: "NLP Project - Argus Analytics",
    description: "Advanced natural language processing system for sentiment analysis and document classification.",
    techStack: ["Python", "BERT", "spaCy", "FastAPI", "PostgreSQL", "ElasticSearch", "Docker"],
    category: "AI"
  },
  {
    title: "ML Pipeline Optimization",
    description: "Machine learning pipeline optimization framework for efficient model training and deployment.",
    techStack: ["Python", "Scikit-learn", "MLflow", "Kubernetes", "Apache Airflow", "Prometheus"],
    category: "AI"
  }],

  experience: [
  {
    role: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    duration: "Jan 2022 - Present",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker", "Kubernetes"]
  },
  {
    role: "Frontend Developer",
    company: "Digital Innovations Inc",
    duration: "Jun 2020 - Dec 2021",
    technologies: ["React", "JavaScript", "SASS", "Redux", "GraphQL", "Jest"]
  },
  {
    role: "Junior Software Developer",
    company: "StartupHub",
    duration: "Mar 2019 - May 2020",
    technologies: ["Python", "Django", "JavaScript", "PostgreSQL", "Redis"]
  }],

  skills: [
  // Frontend
  "React", "TypeScript", "JavaScript", "HTML", "CSS", "SASS", "Redux", "GraphQL",
  // Backend
  "Node.js", "Python", "Django", "FastAPI", "PostgreSQL", "MongoDB", "Redis",
  // AI/ML
  "PyTorch", "TensorFlow", "Scikit-learn", "BERT", "spaCy", "OpenAI Gym", "MLflow",
  // Mobile
  "Flutter", "Dart", "Firebase", "SQLite", "Bloc",
  // DevOps/Cloud
  "AWS", "Docker", "Kubernetes", "Apache Airflow", "Prometheus", "ElasticSearch"],

  education: [
  "Computer Science Degree with focus on AI/ML",
  "Thesis: Generative AI for Reinforcement Learning"],

  contact: {
    email: "support@ezsite.ai",
    location: "Available for remote work"
  }
};

export interface ChatResponse {
  text: string;
  confidence: number;
  context?: string;
}

export const generateResponse = (query: string): ChatResponse => {
  const lowerQuery = query.toLowerCase();

  // Greeting patterns
  if (lowerQuery.match(/^(hi|hello|hey|good morning|good afternoon|good evening)/)) {
    return {
      text: "Hello! I'm an AI assistant trained on this portfolio. I can help you learn about the projects, experience, skills, and background. What would you like to know?",
      confidence: 0.9,
      context: "greeting"
    };
  }

  // Projects related queries
  if (lowerQuery.match(/(projects?|work|portfolio|built|created|developed)/)) {
    if (lowerQuery.includes('ai') || lowerQuery.includes('machine learning') || lowerQuery.includes('ml')) {
      const aiProjects = portfolioData.projects.filter((p) => p.category === 'AI');
      return {
        text: `I've worked on several AI/ML projects:\n\n• **${aiProjects[0].title}**: ${aiProjects[0].description}\n• **${aiProjects[1].title}**: ${aiProjects[1].description}\n• **${aiProjects[2].title}**: ${aiProjects[2].description}\n\nThese projects showcase expertise in PyTorch, TensorFlow, NLP, and reinforcement learning. Would you like details about any specific project?`,
        confidence: 0.95,
        context: "ai_projects"
      };
    }

    if (lowerQuery.includes('web') || lowerQuery.includes('frontend') || lowerQuery.includes('react')) {
      const webProjects = portfolioData.projects.filter((p) => p.category === 'Web');
      return {
        text: `Here are the key web development projects:\n\n• **${webProjects[0].title}**: ${webProjects[0].description}\n\nThis project demonstrates full-stack development skills with React, Node.js, MongoDB, and cloud deployment. It includes advanced features like AI-powered recommendations and payment processing.`,
        confidence: 0.9,
        context: "web_projects"
      };
    }

    if (lowerQuery.includes('mobile') || lowerQuery.includes('flutter') || lowerQuery.includes('app')) {
      const mobileProjects = portfolioData.projects.filter((p) => p.category === 'Mobile');
      return {
        text: `Mobile development expertise includes:\n\n• **${mobileProjects[0].title}**: ${mobileProjects[0].description}\n\nBuilt with Flutter and Dart, featuring offline-first architecture, real-time features, and cross-platform compatibility.`,
        confidence: 0.9,
        context: "mobile_projects"
      };
    }

    return {
      text: `I've worked on diverse projects across AI/ML, web development, and mobile applications:\n\n• **AI Projects**: Generative AI for RL, NLP Analytics, ML Pipeline Optimization\n• **Web Development**: E-commerce platform with AI features\n• **Mobile**: Cross-platform Flutter applications\n\nWhich category interests you most?`,
      confidence: 0.8,
      context: "all_projects"
    };
  }

  // Experience related queries
  if (lowerQuery.match(/(experience|job|work|career|employment|company|companies)/)) {
    const currentRole = portfolioData.experience[0];
    return {
      text: `Professional experience includes:\n\n• **${currentRole.role}** at ${currentRole.company} (${currentRole.duration})\n• **Frontend Developer** at Digital Innovations Inc (Jun 2020 - Dec 2021)\n• **Junior Software Developer** at StartupHub (Mar 2019 - May 2020)\n\nProgressed from junior to senior roles, leading teams and delivering scalable solutions. Total experience spans ${new Date().getFullYear() - 2019}+ years in software development.`,
      confidence: 0.9,
      context: "experience"
    };
  }

  // Skills related queries
  if (lowerQuery.match(/(skills?|technologies|tech stack|programming|languages|frameworks)/)) {
    if (lowerQuery.includes('frontend') || lowerQuery.includes('front-end')) {
      return {
        text: "Frontend skills include:\n• **Frameworks**: React, TypeScript, JavaScript\n• **Styling**: CSS, SASS, Tailwind CSS\n• **State Management**: Redux, GraphQL\n• **Testing**: Jest, React Testing Library\n\nExperienced in building responsive, accessible web applications with modern frameworks.",
        confidence: 0.9,
        context: "frontend_skills"
      };
    }

    if (lowerQuery.includes('backend') || lowerQuery.includes('back-end')) {
      return {
        text: "Backend expertise includes:\n• **Languages**: Node.js, Python\n• **Frameworks**: Django, FastAPI\n• **Databases**: PostgreSQL, MongoDB, Redis\n• **Cloud**: AWS, Docker, Kubernetes\n\nExperienced in building scalable APIs, microservices, and cloud infrastructure.",
        confidence: 0.9,
        context: "backend_skills"
      };
    }

    if (lowerQuery.includes('ai') || lowerQuery.includes('ml') || lowerQuery.includes('machine learning')) {
      return {
        text: "AI/ML skills include:\n• **Frameworks**: PyTorch, TensorFlow, Scikit-learn\n• **NLP**: BERT, spaCy, transformer models\n• **RL**: OpenAI Gym, actor-critic methods\n• **MLOps**: MLflow, Apache Airflow, Kubernetes\n\nSpecialized in deep learning, NLP, and reinforcement learning applications.",
        confidence: 0.95,
        context: "ai_skills"
      };
    }

    return {
      text: `Technical skills span multiple areas:\n\n**Frontend**: React, TypeScript, JavaScript, SASS\n**Backend**: Node.js, Python, Django, FastAPI\n**AI/ML**: PyTorch, TensorFlow, BERT, Scikit-learn\n**Mobile**: Flutter, Dart, Firebase\n**DevOps**: AWS, Docker, Kubernetes, Redis\n\nWhich area would you like to know more about?`,
      confidence: 0.8,
      context: "all_skills"
    };
  }

  // Education related queries
  if (lowerQuery.match(/(education|degree|university|school|thesis|study|studied)/)) {
    return {
      text: "Educational background:\n• **Computer Science Degree** with specialization in AI/ML\n• **Thesis**: Generative AI for Reinforcement Learning - exploring novel approaches to combining generative AI with RL algorithms\n\nThe thesis work resulted in a 40% performance improvement on benchmark tasks through innovative hybrid frameworks.",
      confidence: 0.9,
      context: "education"
    };
  }

  // Contact related queries
  if (lowerQuery.match(/(contact|email|reach|hire|available|location|where)/)) {
    return {
      text: `Contact information:\n• **Email**: ${portfolioData.contact.email}\n• **Availability**: ${portfolioData.contact.location}\n\nCurrently open to new opportunities and collaborations. Feel free to reach out to discuss projects or potential work together!`,
      confidence: 0.9,
      context: "contact"
    };
  }

  // About queries
  if (lowerQuery.match(/(about|who|background|tell me|introduce)/)) {
    return {
      text: "I'm a Senior Full Stack Developer with 5+ years of experience specializing in AI/ML, web development, and mobile applications. Currently leading development teams at TechCorp Solutions, with a strong background in building scalable solutions and innovative AI applications.\n\nKey strengths include full-stack development, machine learning, and team leadership. Always passionate about solving complex problems with cutting-edge technology!",
      confidence: 0.9,
      context: "about"
    };
  }

  // Help queries
  if (lowerQuery.match(/(help|what can|how to|assist)/)) {
    return {
      text: "I can help you learn about:\n• **Projects**: AI/ML projects, web applications, mobile apps\n• **Experience**: Professional background and career progression\n• **Skills**: Technical expertise across various technologies\n• **Education**: Academic background and thesis work\n• **Contact**: How to get in touch\n\nJust ask me anything about the portfolio or background!",
      confidence: 0.9,
      context: "help"
    };
  }

  // Default response for unmatched queries
  return {
    text: "I'd be happy to help! I can provide information about projects, experience, skills, education, or contact details. Could you be more specific about what you'd like to know? For example, you could ask about:\n\n• 'Tell me about the AI projects'\n• 'What's the work experience?'\n• 'What technologies are used?'\n• 'How can I get in touch?'",
    confidence: 0.6,
    context: "fallback"
  };
};