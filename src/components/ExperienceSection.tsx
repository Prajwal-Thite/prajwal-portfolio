import React, { useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TechBadge from '@/components/TechBadge';

interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
  companyType?: string;
}

const experiences: Experience[] = [
{
  id: '1',
  role: 'Full Stack Developer Intern (Intern)',
  company: 'Code Cyper',
  location: 'Delhi, India',
  duration: 'Jan 2024 - Feb 2025',
  description: 'Worked on end-to-end development and optimization of large-scale e-commerce platforms as part of a cross-functional development team.',
  achievements: [
    'Contributed to the frontend and backend development of enterprise-scale Shopify-based platforms including Parachute Home and JUNOCO',
    'Built and optimized reusable React components for scalable UI across multiple projects',
    'Integrated REST and GraphQL APIs for product listings, filtering, and cart management',
    'Implemented responsive design systems using Tailwind CSS and Framer Motion to ensure high performance and visual polish',
    'Collaborated with senior developers to resolve production issues and improve Lighthouse scores across both web platforms',
    'Assisted in setting up CI/CD workflows and deployment automation using GitHub Actions'
  ],
  technologies: ['React', 'TypeScript', 'Node.js', 'Kubernetes', "MySQL", "Express.js", "Tailwind CSS", "REST APIs", "Shopify Payments", 'Cloudinary', "GraphQL", 'Google Analytics', 'Stripe', 'Framer Motion'],
  companyType: 'IT Services and Consulting'
},
{
  id: '2',
  role: 'Flutter Developer (Intern)',
  company: 'Satiate Technologoes Pvt. Ltd.',
  location: 'Pune, India',
  duration: 'Feb 2021 - Jul 2021',
  description: 'Worked on building and maintaining cross-platform mobile applications using Flutter and Firebase for clients in the health and sustainability domains.',
  achievements: [
    'Developed key features for two production-grade Flutter apps focused on environmental action and healthcare support',
    'Integrated Firebase services including Firestore, Cloud Functions, and Push Notifications for real-time app functionality',
    'Implemented responsive UI designs based on Figma prototypes for both Android and iOS platforms',
    'Collaborated with designers and backend developers to deliver seamless user experiences',
    'Performed bug fixes, performance tuning, and contributed to app releases on the Play Store',
    'Wrote clean, maintainable Dart code and followed Git-based version control practices within a team environment'],

  technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Cloud Functions', 'Firebase Auth', 'REST API', 'Git', 'Figma'],
  companyType: 'Technology Startup'
},
{
  id: '3',
  role: 'Data Science (Intern)',
  company: 'Argus System',
  location: 'Pune, India',
  duration: 'May 2020 - Jan 2021',
  description: 'Contributed to the development and evaluation of machine learning models for real-world data-driven applications using Python and key ML libraries.',
  achievements: [
    'Worked on supervised learning models for classification and regression tasks using scikit-learn',
    'Performed data preprocessing, feature selection, and model evaluation on structured datasets',
    'Implemented training pipelines with cross-validation, hyperparameter tuning, and metrics tracking',    
    'Visualized model performance and feature importance using Matplotlib and Seaborn',
    'Collaborated with data scientists to optimize model accuracy and reduce overfitting'],

  technologies: ['Python', 'TensorFlow', 'Keras', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
  companyType: 'IT Services and Consulting'
}];


interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="relative flex items-center mb-12" data-id="jftv3eymb" data-path="src/components/ExperienceSection.tsx">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-purple-200" data-id="yqkmp0ly6" data-path="src/components/ExperienceSection.tsx"></div>
      
      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10" data-id="1qqf6sd54" data-path="src/components/ExperienceSection.tsx">
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
        className={`ml-16 w-full max-w-2xl ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`} data-id="03u7lwk82" data-path="src/components/ExperienceSection.tsx">

        <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300 bg-white" data-id="l9ahdaphq" data-path="src/components/ExperienceSection.tsx">
          <CardContent className="p-6" data-id="ls5gmkmqw" data-path="src/components/ExperienceSection.tsx">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4" data-id="aqqs5z1cz" data-path="src/components/ExperienceSection.tsx">
              <div data-id="0wjnc3vfo" data-path="src/components/ExperienceSection.tsx">
                <h3 className="text-xl font-bold text-gray-900 mb-1" data-id="fr7bcbo8z" data-path="src/components/ExperienceSection.tsx">{experience.role}</h3>
                <div className="flex items-center text-blue-600 font-semibold mb-2" data-id="6sogpk1bl" data-path="src/components/ExperienceSection.tsx">
                  <span data-id="p09748kbu" data-path="src/components/ExperienceSection.tsx">{experience.company}</span>
                  {experience.companyType &&
                  <span className="ml-2 text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full" data-id="y8izb5m5d" data-path="src/components/ExperienceSection.tsx">
                      {experience.companyType}
                    </span>
                  }
                </div>
              </div>
            </div>

            {/* Duration and Location */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-sm text-gray-600" data-id="7l7o98mzg" data-path="src/components/ExperienceSection.tsx">
              <div className="flex items-center" data-id="9jfcaspzk" data-path="src/components/ExperienceSection.tsx">
                <Calendar className="w-4 h-4 mr-2" data-id="l13cubylr" data-path="src/components/ExperienceSection.tsx" />
                {experience.duration}
              </div>
              <div className="flex items-center" data-id="wkh3a0yd9" data-path="src/components/ExperienceSection.tsx">
                <MapPin className="w-4 h-4 mr-2" data-id="wronwevqv" data-path="src/components/ExperienceSection.tsx" />
                {experience.location}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-4" data-id="5n01rgsad" data-path="src/components/ExperienceSection.tsx">{experience.description}</p>

            {/* Technologies */}
            <div className="mb-4" data-id="nw8d3vzzw" data-path="src/components/ExperienceSection.tsx">
              <h4 className="text-sm font-semibold text-gray-800 mb-2" data-id="sfd0c2xts" data-path="src/components/ExperienceSection.tsx">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2" data-id="kr573ygxo" data-path="src/components/ExperienceSection.tsx">
                {experience.technologies.map((tech) =>
                <TechBadge key={tech} tech={tech} size="sm" data-id="vnkp3cw72" data-path="src/components/ExperienceSection.tsx" />
                )}
              </div>
            </div>

            {/* Expandable Content */}
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? 'auto' : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }} data-id="nl5llnc8q" data-path="src/components/ExperienceSection.tsx">

              <div className="border-t pt-4" data-id="yep2z6kt7" data-path="src/components/ExperienceSection.tsx">
                <h4 className="text-sm font-semibold text-gray-800 mb-3" data-id="byng3lj6g" data-path="src/components/ExperienceSection.tsx">Key Achievements:</h4>
                <ul className="space-y-2" data-id="t9j6v8xgs" data-path="src/components/ExperienceSection.tsx">
                  {experience.achievements.map((achievement, idx) =>
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-start" data-id="6pmebhuiz" data-path="src/components/ExperienceSection.tsx">

                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" data-id="f844pkpy8" data-path="src/components/ExperienceSection.tsx"></span>
                      <span className="text-gray-700 text-sm" data-id="cpxq76alb" data-path="src/components/ExperienceSection.tsx">{achievement}</span>
                    </motion.li>
                  )}
                </ul>
              </div>
            </motion.div>

            {/* Expand/Collapse Button */}
            <Button
              variant="ghost"
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 w-full flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50" data-id="lhnfsyh2h" data-path="src/components/ExperienceSection.tsx">

              {isExpanded ?
              <>
                  <span data-id="dn937eenv" data-path="src/components/ExperienceSection.tsx">Show Less</span>
                  <ChevronUp className="w-4 h-4" data-id="x8nz7u6m4" data-path="src/components/ExperienceSection.tsx" />
                </> :

              <>
                  <span data-id="j3d9ydglk" data-path="src/components/ExperienceSection.tsx">Show Achievements</span>
                  <ChevronDown className="w-4 h-4" data-id="b4fnr7nww" data-path="src/components/ExperienceSection.tsx" />
                </>
              }
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>);

};

const ExperienceSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" ref={ref} className="py-16 bg-gradient-to-br from-gray-50 to-blue-50" data-id="dncvkb58t" data-path="src/components/ExperienceSection.tsx">
      <div className="container mx-auto px-4" data-id="nxxjm36x8" data-path="src/components/ExperienceSection.tsx">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16" data-id="paquk27t9" data-path="src/components/ExperienceSection.tsx">

          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-id="fqjofgwvx" data-path="src/components/ExperienceSection.tsx">Professional Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="oge2zcegf" data-path="src/components/ExperienceSection.tsx">
            A journey through my career milestones, showcasing growth, impact, and technical expertise
            across diverse projects and technologies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto" data-id="6tjnie6cs" data-path="src/components/ExperienceSection.tsx">
          {experiences.map((experience, index) =>
          <ExperienceCard
            key={experience.id}
            experience={experience}
            index={index} data-id="nk58lrczp" data-path="src/components/ExperienceSection.tsx" />

          )}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16" data-id="oqy461pv3" data-path="src/components/ExperienceSection.tsx">

          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3" data-id="rwrj1y2vw" data-path="src/components/ExperienceSection.tsx">
            Download Full Resume
          </Button>
        </motion.div>
      </div>
    </section>);

};

export default ExperienceSection;