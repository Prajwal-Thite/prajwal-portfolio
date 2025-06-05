import { useState } from 'react';
import { motion } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  demoVideoUrl?: string;
  category: string;
  featured?: boolean;
}

const projects: Project[] = [

{
  id: '1',
  title: 'Parachute Home',
  description: 'A modern home essentials brand offering premium bedding, bath, and decor with a focus on comfort, quality, and sustainability.',
  longDescription: `Parachute Home is a Los Angeles-based lifestyle brand founded in 2014 by Ariel Kaye. Initially launched as an online-only, direct-to-consumer company specializing in high-quality bedding, Parachute has since expanded its product line to include bath linens, decor, and furniture. The brand emphasizes comfort, quality, and sustainability, sourcing premium materials like European flax and long-staple Turkish cotton. Parachute is committed to environmentally responsible practices, including a linen recycling program and the use of sustainable materials such as organic cotton and recycled polyester. With a growing number of brick-and-mortar stores across the United States, Parachute continues to blend modern design with a commitment to wellness and sustainability.`,
  techStack: ['React', 'Node.js', "MySQL", "Express.js", 'Typescript', "Tailwind CSS", "REST APIs", "Shopify Payments", "Kubernetes"],
  githubUrl: 'https://github.com/Prajwal-Thite', // Not applicable
  liveUrl: 'https://parachutehome.com/',
  imageUrl: 'https://cdn.prod.website-files.com/6778d1207e03199a243db033/6778d1207e03199a243db710_parachute-cover-673d7853dacea.webp', // Add if an image or screenshot is available
  demoVideoUrl: '', // Add if a demo video is available
  category: 'Web',
  featured: false
},

{
  id: '2',
  title: 'JUNOCO',
  description: 'A sustainable skincare brand offering minimalist, high-performance products with a focus on intentional ingredients and eco-friendly practices.',
  longDescription: `JUNOCO is a California-based skincare brand committed to sustainability and minimalism. Founded by Kyle Jiang, the company emphasizes the use of fewer than 20 ingredients in its products to ensure efficacy without unnecessary fillers. JUNOCO's offerings, such as the Clean 10 Cleansing Balm, are designed to deliver high performance while being environmentally conscious. The brand also focuses on reducing waste through initiatives like refillable packaging and FSC-certified materials. JUNOCO's mission extends beyond skincare, aiming to challenge conventional beauty standards and promote inclusivity through campaigns like #ToBeHuman.`,
  techStack: ['React', 'Node.js', 'Cloudinary', 'REST API', "GraphQL", 'Express.js', 'TypeScript ', 'Stripe',  'Google Analytics', 'Tailwind CSS',  'Framer Motion',  'Kubernetes',  "Shopify Storefront API" ],
  githubUrl: 'https://github.com/Prajwal-Thite', // Not applicable
  liveUrl: 'https://www.junoco.com/',
  imageUrl: 'https://laurakatelucas.com/wp-content/uploads/2023/10/PA130122-scaled-1024x768.jpg', // Add if an image or screenshot is available
  demoVideoUrl: '', // Add if a demo video is available
  category: 'Web',
  featured: true
},

{
  id: '3',
  title: 'RLHF-Blender',
  description: 'A Python toolkit for combining and analyzing human feedback in Reinforcement Learning from Human Feedback (RLHF) pipelines.',
  longDescription: `RLHFBlender is a modular and extensible toolkit designed to support the analysis, blending, and refinement of human feedback signals within RLHF pipelines. It facilitates structured extraction of actions and rewards from natural language feedback and offers utilities for feedback classification and improvement. The toolkit is intended for researchers and developers working on training large language models with human feedback.`,
  techStack: ['Python', 'React', 'Node.js', 'PostgreSQL', 'GPT-4o', 'REST API', 'Typescript' , 'Javascript', 'ML', 'Tensor-Flow', 'Transformer'],
  githubUrl: 'https://github.com/Prajwal-Thite/rlhfblender',
  liveUrl: '', // Add if a live demo is available
  imageUrl: 'https://github.com/Prajwal-Thite/rlhfblender/blob/main/Task_Interface%20(1).png?raw=true', // Add if an image or screenshot is available
  demoVideoUrl: '', // Add if a demo video is available
  category: 'AI',
  featured: true
},

{
  id: '4',
  title: 'Conflict Analysis Toolkit',
  description: 'A React-based application designed to facilitate comprehensive conflict analysis using structured datasets.',
  longDescription: `The Conflict Analysis Toolkit is a web application developed with React, aimed at providing users with tools to analyze conflicts through structured data. It includes comprehensive datasets for in-depth analysis and offers an interactive interface for users to explore various aspects of conflicts. The application is bootstrapped with React App, uses D3 library for visualisation and utilizes JSON datasets to present information in an accessible format with insights`,
  techStack: ['React', 'JavaScript', 'D3', 'JSON', 'HTML', 'CSS'],
  githubUrl: 'https://github.com/Prajwal-Thite/Conflict_Analysis_Toolkit',
  liveUrl: 'https://prajwal-thite.github.io/Conflict_Analysis_Toolkit/', // Add if a live demo is available
  imageUrl: 'https://github.com/Prajwal-Thite/Conflict_Analysis_Toolkit/blob/master/Conflict%20analysis%20toolkit.png?raw=true', // Add if an image or screenshot is available
  demoVideoUrl: '', // Add if a demo video is available
  category: 'Web',
  featured: true
},

{
  id: '5',
  title: 'Auto-Shading Smart Glasses',
  description: 'A wearable device that automatically darkens in sunlight using sensors and electrochromic film.',
  longDescription: `Auto-Shading Smart Glasses is a physical computing project that aims to create adaptive sunglasses using two alternative implementations. The first approach uses a mechanical shutter system inspired by motorized window blinds, mounted on ski goggles for stability. The second approach explores a more elegant solution using electrochromic glass—smart film wrapped around conventional glasses that darkens automatically when exposed to sunlight. This system relies on UV sensors and Arduino-based microcontrollers to detect sunlight and trigger shading via a low-voltage electric current. Designed for everyday use, the project highlights comfort, adaptability, and real-world usability in wearable electronics.`,
  techStack: ['Arduino', 'Electronics', 'UV Sensors', 'Smart Film', 'Embedded Systems', 'Physical Computing'],
  githubUrl: 'https://gitlab.inf.uni-konstanz.de/ag-hci/lectures/physical-computing/ss23-physical-computing/phys-comp-ss-23-group-1',
  imageUrl: 'https://gitlab.inf.uni-konstanz.de/ag-hci/lectures/physical-computing/ss23-physical-computing/phys-comp-ss-23-group-1/-/raw/main/Weekly%20Reports/Figures/101.jpg', // Replace with real photo if available
  demoVideoUrl: '', // Add if you have a demo
  category: 'AI', // Can also be 'Web' or 'Mobile' if it's digitally controlled
  featured: true
},

{
  id: '6',
  title: 'Servo Hand – AI-Powered Robotic Control',
  description: 'A smart robotic hand with app, hardware, and AI integration for autonomous and remote control.',
  longDescription: `Servo Hand is an innovative AI-driven robotic hand that supports multiple control mechanisms including potentiometers, an Android app, and autonomous navigation. Designed for precision and adaptability, the system features 3-axis movement adjustment and global control via IoT. The hand intelligently learns its environment over 20–25 hours using reinforcement learning and Thompson sampling to ensure safe, smooth operation. Built with Java-based Android app communication, embedded C for hardware control, and NodeMCU ESP8266 microcontroller, it represents a fusion of machine learning, embedded systems, and mobile development.`,
  techStack: ['Java', 'Android', 'Embedded C', 'NodeMCU ESP8266', 'Reinforcement Learning', 'IoT', 'Thompson Sampling'],
  githubUrl: 'https://github.com/Prajwal-Thite/Servohand',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJNeUO7ApXcu1LbU7KH5FFzhzwj7QlyyjpA&s', // You can replace this with a real image if available
  demoVideoUrl: '', // Optional: Add if you have one
  category: 'AI',
  featured: false
},

{
  id: '7',
  title: 'Dlock – Smart IoT-Powered Door Lock',
  description: 'A smart home lock system with global control, emergency alerts, and real-time environmental sensing.',
  longDescription: `Dlock is a cutting-edge IoT-powered door lock system that redefines smart home security. Designed for global accessibility and real-time safety monitoring, Dlock integrates features like live temperature sensing, fire and gas leak detection, motion sensing, and emergency alerts. If triggered, it automatically notifies you and emergency services for immediate action. Built on the NodeMCU ESP8266 with components like SG90 servos, MQ2 gas sensors, LM35 temperature sensors, PIR and ultrasonic sensors, and piezo plates, the system is both robust and responsive. The backend leverages Firebase for seamless real-time communication with the control app. Dlock delivers peace of mind with intelligent automation and remote access from anywhere in the world.`,
  techStack: ['Embedded C', 'NodeMCU ESP8266', 'Firebase', 'MQ2', 'LM35', 'PIR Sensor', 'Servo Motor', 'LDR', 'IoT'],
  githubUrl: 'https://github.com/Prajwal-Thite/Dlock',
  imageUrl: 'https://media.licdn.com/dms/image/sync/v2/D4E27AQF4wO_mG4Q_GA/articleshare-shrink_160/articleshare-shrink_160/0/1711815755000?e=1749700800&v=beta&t=203j-IKoaFbl6W-n98bxDPAwG1k_hzlNOHrq2To6Uns', // Replace with actual image if available
  demoVideoUrl: '', // Add if available
  category: 'AI', // or 'Mobile' / 'Web' depending on app integration
  featured: false
},

{
  id: '8',
  title: 'Planet – Save our earth!',
  description: 'A mobile app that empowers users to plant trees, report environmental issues, and access green knowledge.',
  longDescription: `Planet is a cross-platform mobile application designed to promote environmental awareness and action. Users can plant a tree under their name, report harmful environmental activities to authorities, and explore the latest environmental news through a built-in web scraper. At nurseries, users can scan QR codes on plants to learn care instructions, pricing, and other useful data. The app is built with Flutter and Firebase, and leverages Python APIs for backend services. Planet is a powerful tool for individuals who want to make a meaningful environmental impact.`,
  techStack: ['Flutter', 'Dart', 'Firebase', 'Python', 'REST APIs', 'Web Scraper'],
  githubUrl: 'https://github.com/Prajwal-Thite/Planet',
  liveUrl: 'https://play.google.com/store/apps/details?id=com.dotdevelopingteam.planet&hl=en', // Replace with actual Play Store link if available
  imageUrl: 'https://play-lh.googleusercontent.com/5QpbfWvNOQgAaFi0pCjBi2_xYbQt70MEAh59CfE_ZHjxuHy4OE0x9tYba4ERj9AOEL8=w240-h480-rw',
  demoVideoUrl: '', // Add a link if you have a video demo
  category: 'Mobile',
  featured: false
},
{
  id: '9',
  title: 'Chantix – Quit Smoking Intelligently',
  description: 'An anti-smoking mobile app that uses machine learning and health data tracking to guide users toward a smoke-free life.',
  longDescription: `Chantix is a powerful health-focused mobile application designed to help users quit smoking through data-driven insights. It uses Support Vector Regression (SVR) on smoking datasets to estimate life lost due to smoking. The app also tracks user spending and real-time health indicators such as nicotine, tar, and COHb levels. In emergency situations, Chantix leverages sentiment analysis on hospital reviews to connect users with the best oncologists, cardiologists, and ENT specialists nearby, automatically sending alerts while maintaining user privacy. Built with Flutter, Firebase, and GCP, it’s a complete wellness assistant focused on impact.`,
  techStack: ['Flutter', 'Dart', 'Firebase', 'Google Cloud Platform', 'Python', 'ML'],
  githubUrl: 'https://github.com/Prajwal-Thite/Chantix',
  liveUrl: 'https://play.google.com/store/apps/details?id=com.dotdevelopingteam.chantix&hl=en', // Use actual URL if available
  imageUrl: 'https://play-lh.googleusercontent.com/OzxkC-rcqtbEfsWWfjZJt98GCClUYjdtYnLw5TOclbJj9FMl3h6O_1wsXTx0aaIGqg=w240-h480-rw', // Placeholder image
  demoVideoUrl: '', // Add if you have one
  category: 'Mobile',
  featured: true
},

];


const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = selectedCategory.toLowerCase() === 'all' ?
  projects :
  projects.filter((project) => project.category.toLowerCase() === selectedCategory.toLowerCase());

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" data-id="ojgbgdqt3" data-path="src/components/ProjectsSection.tsx">
      <div className="container mx-auto px-4" data-id="l9scl1e89" data-path="src/components/ProjectsSection.tsx">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16" data-id="anklyue0y" data-path="src/components/ProjectsSection.tsx">

          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6" data-id="d3x7u78li" data-path="src/components/ProjectsSection.tsx">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-id="xmnph174r" data-path="src/components/ProjectsSection.tsx">
            Showcasing innovative solutions across AI, web development, and mobile applications. 
            Each project represents a unique challenge solved with cutting-edge technology.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12" data-id="ma2t96m3i" data-path="src/components/ProjectsSection.tsx">

          <Tabs defaultValue="All" className="w-full" data-id="7wl71rdgf" data-path="src/components/ProjectsSection.tsx">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg" data-id="8hbp80j4j" data-path="src/components/ProjectsSection.tsx">
              <TabsTrigger
                value="All"
                onClick={() => setSelectedCategory('All')}
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white" data-id="hmxylxpmu" data-path="src/components/ProjectsSection.tsx">

                All
              </TabsTrigger>
              <TabsTrigger
                value="AI"
                onClick={() => setSelectedCategory('AI')}
                className="data-[state=active]:bg-purple-500 data-[state=active]:text-white" data-id="cet1qaagp" data-path="src/components/ProjectsSection.tsx">

                AI/ML
              </TabsTrigger>
              <TabsTrigger
                value="Web"
                onClick={() => setSelectedCategory('Web')}
                className="data-[state=active]:bg-green-500 data-[state=active]:text-white" data-id="624w2e6ql" data-path="src/components/ProjectsSection.tsx">

                Web
              </TabsTrigger>
              <TabsTrigger
                value="Mobile"
                onClick={() => setSelectedCategory('Mobile')}
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white" data-id="4lakohg1q" data-path="src/components/ProjectsSection.tsx">

                Mobile
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Projects Grid */}
        {/* <motion.div

          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" data-id="lx3vz2ugs" data-path="src/components/ProjectsSection.tsx">

          {filteredProjects.map((project, index) =>
          <ProjectCard
            key={project.id}
            project={project}
            index={index} data-id="88xyr2tof" data-path="src/components/ProjectsSection.tsx" />
            
          )}
        </motion.div> */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                project={project}
                index={index}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16" data-id="jltey1oz5" data-path="src/components/ProjectsSection.tsx">

          <p className="text-lg text-gray-600 mb-6" data-id="z9s0q9qu9" data-path="src/components/ProjectsSection.tsx">
            Interested in collaborating or learning more about my work?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://github.com/Prajwal-Thite?tab=repositories', '_blank')} 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300" data-id="wazba042o" data-path="src/components/ProjectsSection.tsx">             
            View All Projects on GitHub
          </motion.button>
        </motion.div>
      </div>
    </section>);

};

export default ProjectsSection;