import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import FlipCard from '@/components/FlipCard';
import { Sparkles, Brain, Award, Zap } from 'lucide-react';

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id='aboutme'
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 flex items-center">

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left side - Text content */}
          <div className="space-y-8" >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8"></div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate developer and technology enthusiast with a deep love for creating 
                innovative solutions that bridge the gap between complex technical challenges and 
                user-friendly experiences. With expertise spanning web development, AI integration, 
                and cloud platforms, I thrive on turning ideas into reality.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                My journey in tech is driven by curiosity and a commitment to continuous learning. 
                Whether I'm building responsive web applications, optimizing user experiences, or 
                exploring the latest in artificial intelligence, I approach every project with 
                creativity and precision.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <span className="px-4 py-2 bg-blue-200 text-blue-700 rounded-full text-sm font-medium">
                  React 
                </span>
                <span className="px-4 py-2 bg-red-200 text-red-900 rounded-full text-sm font-medium">
                  Python
                </span>
                <span className="px-4 py-2 bg-purple-200 text-purple-700 rounded-full text-sm font-medium">
                  Gen AI
                </span>
                <span className="px-4 py-2 bg-green-200 text-green-700 rounded-full text-sm font-medium">
                  Salesforce
                </span>
                <span className="px-4 py-2 bg-pink-200 text-pink-700 rounded-full text-sm font-medium">
                  JS &amp; TypeScript
                </span>
                <span className="px-4 py-2 bg-orange-200 text-orange-700 rounded-full text-sm font-medium">
                  PHP
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right side - Avatar and Fun Facts */}
          <div className="space-y-8">
            <motion.div
              variants={itemVariants}
              className="flex justify-center">

              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <img
                      src="https://media.licdn.com/dms/image/v2/D4D03AQGFVCpTOrNxWA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723562469762?e=1754524800&v=beta&t=zDlIoRAOPOZJ7-yM-DhX7WVx0vMX5LgcrshTioWpz2Y"
                      alt="Professional Avatar"
                      className="w-56 h-56 rounded-full object-cover"/>

                  </div>
                </div>
                <motion.div
                  className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}>

                  <Sparkles className="w-6 h-6 text-white"/>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
                Fun Facts
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FlipCard
                  frontContent={{
                    icon: <Zap/>,
                    title: "Hobbies & Interests",
                    subtitle: "What I love beyond tech"
                  }}
                  backContent={{
                    title: "Beyond the Desk",
                    items: [                    
                    "🌍 Adventurous Traveler",
                    "🤿 Certified Scuba Diver",                    
                    "🏍️ Passionate Motorbiker",
                    "🏀 State Champion - Basketball",
                    "🤺 Fencing Practitioner",
                    "🥋 Judo Athlete",
                    "📸 Photography Lover",                    
                    ]

                  }}/>

                
                <FlipCard
                  frontContent={{
                    icon: <Award/>,
                    title: "Certified & Curious",
                    subtitle: "Always learning & leveling up"
                  }}
                  backContent={{
                    title: "Certifications",
                    items: [
                    "• Salesforce AI Associate & Admin",
                    "• AWS Data Analytics",
                    "• Google Cloud & Data Analytics",
                    "• Microsoft AI Program",
                    "• Languages: English (C1), German (A2)"]

                  }}/>

              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default AboutMe;