import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import {
  Code,
  Layers,
  Globe,
  Database,
  Settings,
  Award,
  Brain,
  Filter } from
"lucide-react";
import SkillCard from "@/components/SkillCard";
import { Button } from "@/components/ui/button";

import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiPhp,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiGit,
  SiPostman,
  SiKubernetes,
  SiOpenai,
  SiTensorflow,
  SiGraphql,
  SiNextdotjs,
  SiRedis,
  SiJenkins,
  SiGrafana,
  SiBitbucket,
  SiShopify,
  SiSymfony,
  SiAmazonsqs,
  SiJira,
  SiConfluence,
  SiScrumalliance,
  SiFigma,
  SiLens,
  SiDbeaver,
} from "react-icons/si";

import { FaBrain, FaBook, FaCogs } from "react-icons/fa";

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const skillsData = [
  {
    title: "Frontend Development",
    icon: Globe,
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    category: "Frontend",
    skills: [
    { name: "React", icon: SiReact, color: "#61DAFB", projects: 5, description: "Expert in hooks, context, and performance optimization" },
    { name: "Shopify Liquid", icon: SiShopify, color: "#96bf48", projects: 2, description: "Shopify theme development and customization using Liquid templating" },    
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", projects: 3, description: "Rapid UI development and custom design systems" },
    { name: "JavaScript", icon: () => <img src="/icons/javascript.svg" alt="javascript" className="w-8 h-8" />, projects: 3, description: "ES6+, async programming, and DOM manipulation" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", projects: 4, description: "Strong typing across React components and full-stack apps" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", projects: 2, description: "Server-side rendering and full-stack React framework" },    
    { name: "HTML5", icon: SiHtml5, color: "#E34F26", projects: 3, description: "Semantic markup and accessibility best practices" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6", projects: 3, description: "Flexbox, Grid, animations, and responsive design" },
    { name: "Redux", icon: () => <img src="/icons/redux.svg" alt="redux" className="w-6 h-6" />, projects: 0, description: "Handled global state in React apps for predictable data flow" },
  ]

  },
  {
    title: "Backend Development",
    icon: Code,
    color: "bg-gradient-to-br from-green-500 to-green-600",
    category: "Backend",
    skills: [
    { name: "Python", icon: () => <img src="/icons/python.svg" alt="python" className="w-7 h-7" />, color: "#3776AB", projects: 2, description: "Data processing, ML pipelines, and backend automation" },
    { name: "Node.js", icon: SiNodedotjs, color: "#83bf26", projects: 1, description: "RESTful APIs, microservices, and backend service architecture" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", projects: 4, description: "Used with Bun for backend services and eligibility-based checkout logic" },
    { name: "PHP", icon: SiPhp, color: "#7b7fb5", projects: 1, description: "Backend services and middleware for Shopify-based platforms" },
    { name: "Express.js", icon: SiExpress, color: "#002233", projects: 1, description: "Middleware, routing, and API development" },
    { name: "Symfony", icon: SiSymfony, color: "#000000", projects: 1, description: "PHP framework for building structured backend applications" },
    { name: "FrankenPHP", icon: SiPhp, color: "#7b7fb5", projects: 1, description: "Modern PHP application server for high-performance backend services" },
  ]

  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
    category: "AI",
    skills: [
    { name: "NLP", icon: FaBrain, projects: 1, description: "Text processing and sentiment analysis" },
    { name: "n8n", icon: FaCogs, projects: 1, description: "Used for workflow automation, API integrations, and low-code backend logic" },
    { name: "Kaggle Notebook", icon: () => <img src="/icons/kaggle.svg" alt="kaggle" className="w-7 h-7" />, projects: 2, description: "Utilized to train, test, and validate ML models in real-world datasets" },
    { name: "TensorFlow", icon: SiTensorflow, color: "#fe8724", projects: 1, description: "Deep learning and neural network training" },
    // { name: "PyTorch", level: 75, projects: 2, description: "Research-oriented ML model development" },
    // { name: "Scikit-learn", level: 40, projects: 0, description: "Classical ML algorithms and data preprocessing" },
    // { name: "NumPy", level: 83, projects: 5, description: "Numerical computing and array operations" },
    ]

  },
  {
    title: "APIs & Integrations",
    icon: Layers,
    color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    category: ["Backend", "APIs"],
    skills: [
    { name: "REST APIs", icon: FaCogs, projects: 3, description: "Designed and consumed RESTful APIs for service communication and third-party integrations" },
    { name: "GraphQL", icon: SiGraphql, color: "#e63bad", projects: 2, description: "Efficient data querying between backend services and frontend apps" },    
    { name: "Shopify Storefront API", icon: SiShopify, color: "#96bf48", projects: 2, description: "Queried product, cart, and checkout data for custom Shopify storefronts" },
    { name: "Shopify Admin API", icon: SiShopify, color: "#96bf48", projects: 2, description: "Managed products, metafields, shipping profiles, and orders via Shopify Admin API" },
    { name: "Webhooks", icon: FaCogs, projects: 2, description: "Implemented event-driven Webhooks for real-time data sync between systems" }
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: Settings,
    color: "bg-gradient-to-br from-orange-500 to-orange-600",
    category: ["Backend", "DevOps"],
    skills: [
    { name: "Salesforce", icon: () => <img src="/icons/salesforce.svg" alt="Salesforce" className="w-8 h-8" />, projects: 0, description: "Worked with Salesforce CRM platforms; certified as AI Associate and Administrator" },
    { name: "AWS", icon: () => <img src="/icons/aws.svg" alt="AWS" className="w-8 h-8" />, projects: 1, description: "Production infrastructure with S3, EC2, SQS, and load balancing" },
    { name: "Jenkins", icon: SiJenkins, color: "#D24939", projects: 1, description: "CI/CD pipelines and automated deployment builds" },    
    { name: "Docker", icon: SiDocker, color: "#2396ee", projects: 2, description: "Containerization and multi-stage builds" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#3a71e6", projects: 2, description: "Container orchestration and scaling in production environments" },
    { name: "AWS SQS", icon: SiAmazonsqs, color: "#FF9900", projects: 1, description: "Built and maintained asynchronous processing workflows in production" },
    { name: "Cron Jobs", icon: FaCogs, projects: 1, description: "Scheduled recurring background tasks for data sync and processing workflows" },
    { name: "Supervisor", icon: FaCogs, projects: 1, description: "Managed and monitored background worker processes in production environments" },
  ]
  },
  {
    title: "Agile & Collaboration",
    icon: Award,
    color: "bg-gradient-to-br from-violet-500 to-violet-600",
    category: ["Frontend", "Agile"],
    skills: [
    { name: "Jira", icon: SiJira, color: "#0052CC", projects: 1, description: "Sprint planning, backlog grooming, and issue tracking in Agile teams" },
    { name: "Confluence", icon: SiConfluence, color: "#0052CC", projects: 1, description: "Team documentation, project specs, and knowledge sharing" },
    { name: "Scrum", icon: SiScrumalliance, color: "#009FDA", projects: 1, description: "Worked in Scrum-based sprints with daily standups and retrospectives" },
    { name: "Kanban", icon: FaBook, projects: 1, description: "Task management and workflow visualization using Kanban boards" },
  ]
  },
  {
    title: "Tools",
    icon: Layers,
    color: "bg-gradient-to-br from-red-500 to-red-600",
    category: ["Frontend", "Backend", "Tools"],
    skills: [
    { name: "Git", icon: SiGit, color: "#f32b3b", projects: 10, description: "Version control and collaborative workflows" },
    { name: "Lens", icon: SiLens, color: "#3D90CE", projects: 1, description: "Kubernetes IDE used for managing and monitoring cluster resources in production" },    
    { name: "Postman", icon: SiPostman, color: "#ff6c37", projects: 4, description: "Used for testing REST APIs, automating requests, and validating backend responses" },
    { name: "Grafana", icon: SiGrafana, color: "#F46800", projects: 1, description: "Designed dashboards for middleware and OMS monitoring; recognized for improving system observability" },
    { name: "Bitbucket", icon: SiBitbucket, color: "#0052CC", projects: 1, description: "Git-based source control and code review in production team workflows" },
    { name: "DBeaver", icon: SiDbeaver, color: "#382923", projects: 1, description: "Database management and SQL querying across MySQL, PostgreSQL, and Redis" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E", projects: 2, description: "Collaborated on UI designs and translated Figma prototypes into code" },
  ]

  },
  {
    title: "Databases & Storage",
    icon: Database,
    color: "bg-gradient-to-br from-yellow-500 to-yellow-600",
    category: "Backend",
    skills: [
    // { name: "Supabase", level: 83, projects: 4, description: "Real-time subscriptions and auth" },
    { name: "MySQL", icon: () => <img src="/icons/mysql.svg" alt="mysql" className="w-9 h-9" />, projects: 4, description: "Relational database design and optimization" },
    { name: "PostgreSQL", icon: () => <img src="/icons/postgresql.svg" alt="postgresql" className="w-7 h-7" />, color:"#3a6c94", projects: 1, description: "Designed and queried relational databases for full-stack applications using SQL" },
    { name: "Redis", icon: SiRedis, color: "#DC382D", projects: 1, description: "Caching and performance optimization in production environments" },
    { name: "Firebase", icon: () => <img src="/icons/firebase.svg" alt="firebase" className="w-8 h-8" />, projects: 5, description: "Real-time database and cloud functions" },
  ]
  }];


  const categories = ['All', 'Frontend', 'Backend', 'APIs', 'AI', 'DevOps', 'Agile', 'Tools'];

  const filteredSkills = activeFilter === 'All' ?
  skillsData :
  skillsData.filter((skill) => Array.isArray(skill.category)? skill.category.includes(activeFilter) : skill.category === activeFilter);


  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            My Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills, tools, and certifications
            that enable me to deliver exceptional digital solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) =>
          <Button
            key={category}
            onClick={() => setActiveFilter(category)}
            variant={activeFilter === category ? "default" : "outline"}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
            activeFilter === category ?
            "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg" :
            "bg-white/20 backdrop-blur-sm hover:bg-white/30 text-gray-700 dark:text-gray-300"}`
            }>

              <Filter className="w-4 h-4 mr-2"/>
              {category}
            </Button>
          )}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredSkills.map((category) =>
            <div key={`${activeFilter}-${category.title}`}>
                <SkillCard
                title={category.title}
                icon={category.icon}
                skills={category.skills}
                color={category.color}
                category={category.category}/>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <div className="text-center mt-16">

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
              Skills Overview
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">
                  {skillsData.reduce((acc, category) => acc + category.skills.length, 0) - 13}+ {/*change this when needed*/}
                </div>
                <p className="text-gray-600 dark:text-gray-300">Technologies</p>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">
                  10+
                </div>
                <p className="text-gray-600 dark:text-gray-300">Projects</p>
              </div>

              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  3+
                </div>
                <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Technology evolves rapidly, and so do I. I'm constantly learning new tools,
              frameworks, and best practices to stay at the forefront of web development
              and deliver cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default Skills;