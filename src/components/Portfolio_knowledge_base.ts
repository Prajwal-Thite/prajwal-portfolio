
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
    title: "Full Stack Developer & AI Enthusiast",
    summary:
      "Prajwal is a passionate and driven software developer with a strong focus on full-stack development and artificial intelligence. He enjoys crafting applications that leverage modern web technologies and AI to solve complex real-world problems efficiently and elegantly."
  },

  technicalSkills: {
    programmingLanguages: ["PHP", "JavaScript", "Python", "SQL"],
    frameworksAndLibraries: ["React", "Laravel", "Node.js", "Express.js", "Redux" , "Tensor Flow"],
    frontend:["HTML5", "CSS3", "Trailwind CSS", "REST APIs"],
    databases: ["MySQL", "GraphQl"],
    Cloud_and_CRM_Platforms: ["Salesforce", "n8n"],
    toolsAndPlatforms: ["Git & GitHub", "Kubernetes", "Docker", "Postman"]
  },

  education: {
    degree: "Master of Science in Computer and Information Science",
    institution: "University of Konstanz",
    duration: {
      start: "October 2022",
      end: "June 2025"
    }
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
    "Successfully deployed full-stack applications with integrated AI capabilities",
    "Contributed to open-source projects on GitHub",
    "Participated in coding competitions and hackathons",
    "Earned the Salesforce Certified Administrator and AI Associate credentials in 2025",
    "Achieved AWS Data Analytics certification, demonstrating proficiency in cloud-based data solutions",
  ],

  contactInformation: {
    email: "prajwalthite.sde@gmail.com",
    github: "https://github.com/Prajwal-Thite",
    linkedin: "https://www.linkedin.com/in/prajwal-thite/"
  }
};