export const portfolioData = {

  personalProfile: {
    name: "Prajwal Thite",
    title: "Full Stack Developer",
    summary:
      "Full Stack Developer with a stronger focus on backend development and around 2.5 years of combined professional experience. Experienced in building reliable backend systems, solving business logic problems, and developing features that connect different parts of an application. Has worked on backend services and system integrations for Shopify-based platforms, including APIs, queue-based workflows, deployment processes, and monitoring in production environments. Interested in AI-driven applications such as RAG systems and backend automation."
  },

  technicalSkills: {
    programmingLanguages: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "Liquid", "PHP"],
    frontend: ["React", "Next.js", "Tailwind CSS", "Shopify Theme Development", "HTML5", "CSS3", "Redux"],
    backend: ["PHP", "Node.js", "Express.js", "TypeScript (Bun)", "Symfony", "FrankenPHP", "Python"],
    apis: ["REST APIs", "GraphQL", "Webhooks", "Shopify Storefront API", "Shopify Admin API"],
    queuesAndJobs: ["AWS SQS", "Cron Jobs", "Supervisor"],
    databases: ["MySQL", "PostgreSQL", "Redis", "Firebase"],
    cloudAndDevOps: ["AWS (S3, EC2, SQS, ELB)", "Docker", "Kubernetes", "Jenkins", "Grafana"],
    agile: ["Scrum", "Kanban", "Jira", "Confluence"],
    tools: ["Git", "Bitbucket", "Postman", "Grafana", "Lens", "DBeaver", "Figma"],
    crm: ["Salesforce (AI Associate, Administrator)"]
  },

  education: [
    {
      degree: "Master of Science in Computer and Information Science",
      institution: "University of Konstanz",
      location: "Konstanz, Germany",
      duration: { start: "October 2022", end: "June 2025" },
      gpa: "2.3 (German scale)"
    },
    {
      degree: "Bachelor of Technology in Computer Science (spec. Intelligent Systems)",
      institution: "MIT ADT University",
      location: "Pune, India",
      duration: { start: "June 2018", end: "May 2022" },
      gpa: "7.92/10.0"
    }
  ],

  experience: [
    {
      title: "Full Stack Developer",
      company: "Rebike Mobility GmbH",
      location: "Germany",
      duration: "Nov 2025 – Apr 2026",
      description:
        "Worked in an Agile environment contributing to production-grade backend systems and middleware architecture for a Shopify-based e-mobility platform.",
      achievements: [
        "Designed and extended middleware services for synchronizing product data with Shopify platforms",
        "Implemented business logic for shipping profiles, product metafields, and payment-provider-based product eligibility",
        "Built and maintained asynchronous processing workflows using AWS SQS, cron jobs, and background workers",
        "Integrated GraphQL APIs for efficient data exchange between backend services and frontend applications",
        "Contributed to deployment workflows using Bitbucket, Jenkins, Docker, and Kubernetes",
        "Worked with AWS-based production infrastructure including S3, EC2, and load balancing",
        "Utilized PostgreSQL for structured data management and Redis for caching and performance optimization",
        "Designed Grafana dashboards for middleware and OMS systems — received recognition for improving system observability",
        "Developed a full-stack feature for store location display with map integration",
        "Contributed to a custom checkout application using TypeScript and Bun",
        "Prototyped an AI-powered RAG chatbot to improve product information accessibility"
      ],
      technologies: ["TypeScript", "Node.js", "Bun", "PHP", "PostgreSQL", "Redis", "AWS SQS", "AWS S3", "AWS EC2", "GraphQL", "Docker", "Kubernetes", "Jenkins", "Bitbucket", "Grafana", "Shopify Admin API", "Shopify Storefront API", "Jira", "Confluence"]
    },
    {
      title: "Full Stack Developer Intern",
      company: "Code Cyper",
      location: "Delhi, India",
      duration: "Jan 2024 – Feb 2025",
      description:
        "Worked on end-to-end development and optimization of large-scale e-commerce platforms including Parachute Home and JUNOCO.",
      technologies: ["React", "TypeScript", "Node.js", "Kubernetes", "MySQL", "Express.js", "Tailwind CSS", "REST APIs", "Shopify Payments", "Cloudinary", "GraphQL", "Google Analytics", "Stripe", "Framer Motion"]
    },
    {
      title: "Flutter Developer Intern",
      company: "Satiate Technologies Pvt. Ltd.",
      location: "Pune, India",
      duration: "Feb 2021 – Jul 2021",
      description:
        "Developed cross-platform mobile apps for health and sustainability clients using Flutter and Firebase.",
      technologies: ["Flutter", "Dart", "Firebase", "Firestore", "Cloud Functions", "Firebase Auth", "REST API", "Git", "Figma"]
    },
    {
      title: "Data Science Intern",
      company: "Argus System",
      location: "Pune, India",
      duration: "May 2020 – Jan 2021",
      description:
        "Contributed to ML model evaluation and performance analysis using Python and key ML libraries.",
      technologies: ["Python", "TensorFlow", "Keras", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"]
    }
  ],

  projects: [
    {
      title: "Parachute Home",
      description: "Enterprise-scale Shopify platform for a home essentials lifestyle brand with e-commerce features.",
      technologies: ["React", "Node.js", "MySQL", "Express.js", "TypeScript", "Tailwind CSS", "REST APIs", "Shopify Payments", "Kubernetes"]
    },
    {
      title: "JUNOCO",
      description: "Minimalist skincare brand Shopify storefront with integrated analytics and storefront APIs.",
      technologies: ["React", "Node.js", "Cloudinary", "REST API", "GraphQL", "Express.js", "TypeScript", "Stripe", "Google Analytics", "Tailwind CSS", "Framer Motion", "Kubernetes", "Shopify Storefront API"]
    },
    {
      title: "RLHF-Blender",
      description: "Modular toolkit for analyzing and blending human feedback in RLHF pipelines, supporting LLM fine-tuning.",
      technologies: ["Python", "React", "Node.js", "PostgreSQL", "GPT-4o", "REST API", "TypeScript", "TensorFlow"]
    },
    {
      title: "Conflict Analysis Toolkit",
      description: "Web app for structured conflict analysis with interactive D3 visualizations and dataset exploration.",
      technologies: ["React", "JavaScript", "D3", "JSON", "HTML", "CSS"]
    },
    {
      title: "Dlock – Smart IoT-Powered Door Lock",
      description: "Smart home lock system with global control, emergency alerts, fire/gas detection, and real-time environmental sensing using Firebase.",
      technologies: ["Embedded C", "NodeMCU ESP8266", "Firebase", "MQ2", "LM35", "PIR Sensor", "Servo Motor", "IoT"]
    },
    {
      title: "Auto-Shading Smart Glasses",
      description: "Wearable sunglasses that automatically darken in sunlight using UV sensors and electrochromic film.",
      technologies: ["Arduino", "Electronics", "UV Sensors", "Smart Film", "Embedded Systems", "Physical Computing"]
    }
  ],

  certifications: [
    { name: "Salesforce Certified Administrator", issuer: "Salesforce", year: "2025" },
    { name: "Salesforce Certified AI Associate", issuer: "Salesforce", year: "2025" },
    { name: "AWS Data Analytics", issuer: "Amazon Web Services", year: "2021" },
    { name: "Google Cloud Digital Transformation", issuer: "Google", year: "2021" },
    { name: "Google Data Analytics: Foundations", issuer: "Google", year: "2021" },
    { name: "Microsoft Professional Program in AI", issuer: "Microsoft", year: "2020" }
  ],

  achievements: [
    "Worked on production-grade backend systems and middleware architecture at Rebike Mobility GmbH",
    "Received recognition for designing Grafana dashboards that improved system observability",
    "Prototyped an AI-powered RAG chatbot for product information accessibility",
    "Earned Salesforce Certified Administrator and AI Associate credentials in 2025",
    "Achieved AWS Data Analytics certification"
  ],

  languages: [
    { language: "English", level: "C1 (Advanced)" },
    { language: "German", level: "A2" }
  ],

  contactInformation: {
    email: "prajwalthite.sde@gmail.com",
    github: "https://github.com/Prajwal-Thite",
    linkedin: "https://www.linkedin.com/in/prajwal-thite/"
  }

};
