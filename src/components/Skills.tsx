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

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const skillsData = [
  {
    title: "Frontend Development",
    icon: Globe,
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    category: "Frontend",
    skills: [
    { name: "React", level: 95, projects: 5, description: "Expert in hooks, context, and performance optimization" },
    { name: "TypeScript", level: 90, projects: 4, description: "Strong typing and advanced type manipulation" },
    // { name: "Next.js", level: 88, projects: 5, description: "SSR, SSG, and full-stack development" },
    { name: "Tailwind CSS", level: 80, projects: 3, description: "Rapid UI development and custom design systems" },
    { name: "JavaScript", level: 98, projects: 3, description: "ES6+, async programming, and DOM manipulation" },
    { name: "HTML5", level: 90, projects: 3, description: "Semantic markup and accessibility best practices" },
    { name: "CSS3", level: 90, projects: 3, description: "Flexbox, Grid, animations, and responsive design" },
    { name: "Redux", level: 30, projects: 0, description: "Handled global state in React apps for predictable data flow" },
    // { name: "Vue.js", level: 75, projects: 3, description: "Component-based architecture and state management" }
  ]

  },
  {
    title: "Backend Development",
    icon: Code,
    color: "bg-gradient-to-br from-green-500 to-green-600",
    category: "Backend",
    skills: [
    { name: "PHP", level: 95, projects: 1, description: "Backend development using Laravel and full-stack integrations" },
    { name: "Python", level: 90, projects: 2, description: "Django, Flask, and data processing" },
    { name: "Laravel", level: 90, projects: 1, description: "Developed RESTful APIs, admin panels, and full-stack features using Laravel" },
    { name: "Node.js", level: 75, projects: 1, description: "RESTful APIs and microservices architecture" },
    { name: "Express.js", level: 80, projects: 1, description: "Middleware, routing, and API development" },
    // { name: "PostgreSQL", level: 83, projects: 6, description: "Complex queries and database optimization" },
    // { name: "MongoDB", level: 78, projects: 4, description: "NoSQL design and aggregation pipelines" },
    // { name: "GraphQL", level: 75, projects: 3, description: "Schema design and query optimization" },
    // { name: "Redis", level: 70, projects: 3, description: "Caching strategies and session management" }
  ]

  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
    category: "AI",
    skills: [
    { name: "NLP", level: 88, projects: 1, description: "Text processing and sentiment analysis" },
    { name: "n8n", level: 75, projects: 1, description: "Used for workflow automation, API integrations, and low-code backend logic" },
    { name: "Kaggle Notebook", level: 60, projects: 2, description: "Utilized to train, test, and validate ML models in real-world datasets" },
    { name: "TensorFlow", level: 50, projects: 1, description: "Deep learning and neural network training" },
    // { name: "PyTorch", level: 75, projects: 2, description: "Research-oriented ML model development" },
    // { name: "Scikit-learn", level: 40, projects: 0, description: "Classical ML algorithms and data preprocessing" },
    { name: "OpenAI API", level: 70, projects: 1, description: "GPT integration and prompt engineering" },    
    // { name: "NumPy", level: 83, projects: 5, description: "Numerical computing and array operations" },    
    ]

  },
  {
    title: "DevOps & Tools",
    icon: Settings,
    color: "bg-gradient-to-br from-orange-500 to-orange-600",
    category: "Tools",
    skills: [
    { name: "Salesforce", level: 90, projects: 0, description: "Worked with Salesforce CRM platforms; certified as AI Associate and Administrator" },
    { name: "Git", level: 95, projects: 10, description: "Version control and collaborative workflows" },
    { name: "Postman", level: 72, projects: 4, description: "Used for testing REST APIs, automating requests, and validating backend responses" },
    { name: "Docker", level: 50, projects: 1, description: "Containerization and multi-stage builds" },
    // { name: "AWS", level: 82, projects: 5, description: "EC2, S3, Lambda, and cloud architecture" }, 
    // { name: "GitHub Actions", level: 78, projects: 4, description: "CI/CD pipelines and automated testing" },
    { name: "Kubernetes", level: 50, projects: 2, description: "Container orchestration and scaling" },
    // { name: "Jenkins", level: 68, projects: 2, description: "Build automation and deployment pipelines" }
  ]

  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    color: "bg-gradient-to-br from-red-500 to-red-600",
    category: ["Frontend", "Backend"],
    skills: [
    { name: "React.js", level: 95, projects: 4, description: "Built dynamic UIs for research and production apps" },
    { name: "Express.js", level: 80, projects: 1, description: "Developed backend APIs and middleware for Node.js services" },
    { name: "Laravel", level: 90, projects: 1, description: "Created backend features and APIs for full-stack apps" },
    { name: "Redux", level: 30, projects: 0, description: "Handled global state in React apps for predictable data flow" },
    { name: "Node.js", level: 75, projects: 1, description: "Backend development, server logic, and integration with databases" },
    { name: "Tailwind CSS", level: 80, projects: 3, description: "Rapid UI development and custom design systems" },
    // { name: "Ant Design", level: 75, projects: 2, description: "Enterprise-class UI components" },
    // { name: "React Hook Form", level: 87, projects: 7, description: "Form validation and performance optimization" },
    // { name: "React Router", level: 90, projects: 8, description: "Client-side routing and navigation" }
  ]

  },
  {
    title: "Databases & Storage",
    icon: Database,
    color: "bg-gradient-to-br from-yellow-500 to-yellow-600",
    category: "Backend",
    skills: [
    // { name: "Supabase", level: 83, projects: 4, description: "Real-time subscriptions and auth" },
    { name: "MySQL", level: 98, projects: 4, description: "Relational database design and optimization" },
    { name: "PostgreSQL", level: 95, projects: 1, description: "Designed and queried relational databases for full-stack applications using SQL" },
    { name: "Firebase", level: 50, projects: 5, description: "Real-time database and cloud functions" },
    // { name: "Prisma", level: 78, projects: 3, description: "Type-safe database access and migrations" },
    { name: "SQLite", level: 85, projects: 0, description: "Embedded database solutions" },
    // { name: "DynamoDB", level: 72, projects: 2, description: "NoSQL scaling and performance" },
    // { name: "InfluxDB", level: 65, projects: 1, description: "Time-series data management" }
  ]

  }];


  const categories = ['All', 'Frontend', 'Backend', 'AI', 'Tools'];

  const filteredSkills = activeFilter === 'All' ?
  skillsData :
  skillsData.filter((skill) => Array.isArray(skill.category)? skill.category.includes(activeFilter) : skill.category === activeFilter);


  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800" data-id="ooi2777t6" data-path="src/components/Skills.tsx">
      <div className="max-w-7xl mx-auto" data-id="4zasj6nah" data-path="src/components/Skills.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16" data-id="156f3fg0z" data-path="src/components/Skills.tsx">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6" data-id="dxxuygpzr" data-path="src/components/Skills.tsx">
            My Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed" data-id="p3c2ef43s" data-path="src/components/Skills.tsx">
            A comprehensive overview of my technical skills, tools, and certifications 
            that enable me to deliver exceptional digital solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12" data-id="j5wzjfmna" data-path="src/components/Skills.tsx">
          {categories.map((category) =>
          <Button
            key={category}
            onClick={() => setActiveFilter(category)}
            variant={activeFilter === category ? "default" : "outline"}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
            activeFilter === category ?
            "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg" :
            "bg-white/20 backdrop-blur-sm hover:bg-white/30 text-gray-700 dark:text-gray-300"}`
            } data-id="98la9604i" data-path="src/components/Skills.tsx">

              <Filter className="w-4 h-4 mr-2" data-id="jxeghzjan" data-path="src/components/Skills.tsx" />
              {category}
            </Button>
          )}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait" data-id="l24vuwr59" data-path="src/components/Skills.tsx">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="nt5ya4kwf" data-path="src/components/Skills.tsx">

            {filteredSkills.map((category, index) =>
            <motion.div
              key={`${activeFilter}-${category.title}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }} data-id="ka4ayyxzc" data-path="src/components/Skills.tsx">

                <SkillCard
                title={category.title}
                icon={category.icon}
                skills={category.skills}
                color={category.color}
                category={category.category} data-id="2yetkvbsy" data-path="src/components/Skills.tsx" />

              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.2 }}
          className="text-center mt-16" data-id="9tgsmf554" data-path="src/components/Skills.tsx">

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-6xl mx-auto" data-id="fxazfxyue" data-path="src/components/Skills.tsx">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8" data-id="hmqj9qth1" data-path="src/components/Skills.tsx">
              Skills Overview
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8" data-id="766puiiwn" data-path="src/components/Skills.tsx">
              <div className="text-center" data-id="z11kg1psq" data-path="src/components/Skills.tsx">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: .5, duration: 0.2 }}
                  className="text-3xl font-bold text-blue-500 mb-2" data-id="91qwgobpt" data-path="src/components/Skills.tsx">

                  {skillsData.reduce((acc, category) => acc + category.skills.length, 0) - 12}+ {/*change this when needed*/}
                </motion.div>
                <p className="text-gray-600 dark:text-gray-300" data-id="vr81cn143" data-path="src/components/Skills.tsx">Technologies</p>
              </div>
              
              <div className="text-center" data-id="v1or1xchq" data-path="src/components/Skills.tsx">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.2 }}
                  className="text-3xl font-bold text-green-500 mb-2" data-id="mzfplzxz0" data-path="src/components/Skills.tsx">

                  {skillsData.reduce((acc, category) =>
                  acc + category.skills.reduce((skillAcc, skill) => skillAcc + (skill.projects || 0), 0), 0
                  )-60}+
                </motion.div>
                <p className="text-gray-600 dark:text-gray-300" data-id="jtlv26gom" data-path="src/components/Skills.tsx">Projects</p>
              </div>
              
              <div className="text-center" data-id="3ma9cbc4i" data-path="src/components/Skills.tsx">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.2 }}
                  className="text-3xl font-bold text-purple-500 mb-2" data-id="3v6qd4nz9" data-path="src/components/Skills.tsx">

                  {Math.round(
                    skillsData.reduce((acc, category) =>
                    acc + category.skills.reduce((skillAcc, skill) => skillAcc + skill.level, 0) / category.skills.length, 0
                    ) / skillsData.length
                  )}%
                </motion.div>
                <p className="text-gray-600 dark:text-gray-300" data-id="17v1bm5rd" data-path="src/components/Skills.tsx">Avg. Proficiency</p>
              </div>
              
              <div className="text-center" data-id="2ptnsiydr" data-path="src/components/Skills.tsx">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.2 }}
                  className="text-3xl font-bold text-orange-500 mb-2" data-id="ix8mws8oj" data-path="src/components/Skills.tsx">

                  1+
                </motion.div>
                <p className="text-gray-600 dark:text-gray-300" data-id="x09w18p62" data-path="src/components/Skills.tsx">Years Experience</p>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg" data-id="s7ndj5nyw" data-path="src/components/Skills.tsx">
              Technology evolves rapidly, and so do I. I'm constantly learning new tools, 
              frameworks, and best practices to stay at the forefront of web development 
              and deliver cutting-edge solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default Skills;