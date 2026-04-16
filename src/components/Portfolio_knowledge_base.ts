
export interface PortfolioData {
  personalProfile: {
    name: string;
    title: string;
    summary: string;
  };
  technicalSkills: {
    programmingLanguages: string[];
    frameworksAndLibraries: string[];
    frontend: string[];
    databases: string[];
    Cloud_and_CRM_Platforms: string[];
    toolsAndPlatforms: string[];
  };
  education: {
    degree: string;
    institution: string;
    duration: {
      start: string;
      end: string;
    };
  };
  projects: Array<{
    title: string;
    description: string;
    technologies: string[];
  }>;
  experience: Array<{
    title: string;
    company: string;
    location: string;
    duration: string;
    description: string;
    technologies: string[];
  }>;
  achievements: string[];
  contactInformation: {
    email: string;
    github: string;
    linkedin: string;
  };
}

export const portfolioData: PortfolioData = {
  personalProfile: {
    name: "Prajwal Thite",
    title: "Full Stack Developer",
    summary:
      "Prajwal is a Full Stack Developer with a stronger focus on backend development and around 2.5 years of combined professional experience. He is experienced in building reliable backend systems, solving business logic problems, and developing features that connect different parts of an application. He has worked on backend services and system integrations for Shopify-based platforms, including APIs, queue-based workflows, deployment processes, and monitoring in production environments. He is also interested in AI-driven applications such as RAG systems and backend automation."
  },

  technicalSkills: {
    programmingLanguages: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "Liquid", "PHP"],
    frameworksAndLibraries: ["React", "Next.js", "Laravel", "Node.js", "Express.js", "Redux", "TensorFlow"],
    frontend: ["HTML5", "CSS3", "Tailwind CSS", "Shopify Theme Development"],
    databases: ["MySQL", "PostgreSQL", "Redis", "Firebase", "GraphQL"],
    Cloud_and_CRM_Platforms: ["AWS (S3, EC2, SQS, ELB)", "Salesforce (AI Associate, Administrator)", "Docker", "Kubernetes", "Jenkins"],
    toolsAndPlatforms: ["Git", "Bitbucket", "Postman", "Grafana", "Jira", "Confluence", "Figma", "DBeaver", "Lens"]
  },

  education: {
    degree: "Master of Science in Computer and Information Science",
    institution: "University of Konstanz",
    duration: {
      start: "October 2022",
      end: "June 2025"
    },
    gpa: "2.3 (German scale)"
  },

projects: [
  {
    title: "Parachute Home",
    description:
      "Developed a modern home essentials platform for a lifestyle brand focusing on comfort, quality, and sustainability. Included e-commerce features and eco-conscious practices.",
    technologies: [
      "React", "Node.js", "MySQL", "Express.js", "TypeScript",
      "Tailwind CSS", "REST APIs", "Shopify Payments", "Kubernetes"
    ]
  },
  {
    title: "JUNOCO",
    description:
      "Built a minimalist skincare brand website highlighting high-performance, sustainable products with integrated analytics and storefront APIs.",
    technologies: [
      "React", "Node.js", "Cloudinary", "REST API", "GraphQL",
      "Express.js", "TypeScript", "Stripe", "Google Analytics",
      "Tailwind CSS", "Framer Motion", "Kubernetes", "Shopify Storefront API"
    ]
  },
  {
    title: "RLHF-Blender",
    description:
      "Created a modular toolkit for analyzing and blending human feedback in RLHF pipelines, supporting structured data extraction and LLM fine-tuning.",
    technologies: [
      "Python", "React", "Node.js", "PostgreSQL", "GPT-4o",
      "REST API", "TypeScript", "Javascript", "ML", "TensorFlow", "Transformer"
    ]
  },
  {
    title: "Conflict Analysis Toolkit",
    description:
      "Designed a web app to help users perform structured conflict analysis with interactive visualizations and dataset exploration.",
    technologies: ["React", "JavaScript", "D3", "JSON", "HTML", "CSS"]
  },
  {
    title: "Auto-Shading Smart Glasses",
    description:
      "Engineered wearable sunglasses that automatically darken in sunlight using UV sensors and electrochromic film, offering real-world adaptability through physical computing.",
    technologies: [
      "Arduino", "Electronics", "UV Sensors", "Smart Film",
      "Embedded Systems", "Physical Computing"
    ]
  }
],

experience: [
  {
    title: "Full Stack Developer",
    company: "Rebike Mobility GmbH",
    location: "Germany",
    duration: "Nov 2025 – Apr 2026",
    description:
      "Worked in an Agile environment contributing to production-grade backend systems and middleware architecture for a Shopify-based e-mobility platform. Designed middleware services, asynchronous workflows with AWS SQS, Grafana monitoring dashboards, and prototyped a RAG-based AI chatbot.",
    technologies: [
      "TypeScript", "Node.js", "Bun", "PHP", "PostgreSQL", "Redis",
      "AWS SQS", "AWS S3", "AWS EC2", "GraphQL", "Docker", "Kubernetes",
      "Jenkins", "Bitbucket", "Grafana", "Shopify Admin API", "Shopify Storefront API",
      "Jira", "Confluence"
    ]
  },
  {
    title: "Full Stack Developer Intern",
    company: "Code Cyper",
    location: "Delhi, India",
    duration: "Jan 2024 – Feb 2025",
    description:
      "Worked on end-to-end development and optimization of large-scale e-commerce platforms as part of a cross-functional development team.",
    technologies: [
      "React", "TypeScript", "Node.js", "Kubernetes", "MySQL", "Express.js",
      "Tailwind CSS", "REST APIs", "Shopify Payments", "Cloudinary", "GraphQL",
      "Google Analytics", "Stripe", "Framer Motion"
    ]
  },
  {
    title: "Flutter Developer Intern",
    company: "Satiate Techonologies Pvt. Ltd.",
    location: "Pune, India",
    duration: "Feb 2021 – Jul 2021",
    description:
      "Worked on building and maintaining cross-platform mobile applications using Flutter and Firebase for clients in the health and sustainability domains.",
    technologies: [
      "Flutter", "Dart", "Firebase", "Firestore", "Cloud Functions",
      "Firebase Auth", "REST API", "Git", "Figma"
    ]
  },
  {
    title: "Data Science Intern",
    company: "Argus System",
    location: "Pune, India",
    duration: "May 2020 – Jan 2021",
    description:
      "Contributed to the development and evaluation of machine learning models for real-world data-driven applications using Python and key ML libraries.",
    technologies: [
      "Python", "TensorFlow", "Keras", "scikit-learn", "Pandas",
      "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"
    ]
  }
],

  achievements: [
    "Worked on production-grade backend systems and middleware architecture at Rebike Mobility GmbH",
    "Received recognition for designing Grafana dashboards that improved system observability for middleware and OMS systems",
    "Prototyped an AI-powered RAG chatbot to improve product information accessibility for customers",
    "Contributed to custom checkout application using TypeScript and Bun with eligibility-based logic",
    "Earned the Salesforce Certified Administrator and AI Associate credentials in 2025",
    "Achieved AWS Data Analytics certification, demonstrating proficiency in cloud-based data solutions",
    "Contributed to open-source projects on GitHub",
  ],

  contactInformation: {
    email: "prajwalthite.sde@gmail.com",
    github: "https://github.com/Prajwal-Thite",
    linkedin: "https://www.linkedin.com/in/prajwal-thite/"
  }
};