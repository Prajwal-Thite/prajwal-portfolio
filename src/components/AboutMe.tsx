import { motion } from 'motion/react';
import FlipCard from '@/components/FlipCard';
import { Sparkles, Award, Zap } from 'lucide-react';

const AboutMe = () => {
  return (
    <section id='aboutme'
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 flex items-center">

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left side - Text content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a Full Stack Developer with a stronger focus on backend systems, building reliable
                APIs, queue-based workflows, and production integrations. I have around 2.5 years of
                combined professional experience working on Shopify-based platforms and enterprise
                e-commerce solutions.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                I've worked in production environments with AWS (SQS, S3, EC2), PostgreSQL, Redis,
                Docker, Kubernetes, and Jenkins. I'm also interested in AI-driven applications —
                including RAG systems and backend automation — and continue to grow as a
                backend-focused full stack developer with TypeScript and Python.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <span className="px-4 py-2 bg-blue-200 text-blue-700 rounded-full text-sm font-medium">
                  React
                </span>
                <span className="px-4 py-2 bg-sky-200 text-sky-700 rounded-full text-sm font-medium">
                  TypeScript
                </span>
                <span className="px-4 py-2 bg-red-200 text-red-900 rounded-full text-sm font-medium">
                  Python
                </span>
                <span className="px-4 py-2 bg-purple-200 text-purple-700 rounded-full text-sm font-medium">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-green-200 text-green-700 rounded-full text-sm font-medium">
                  Salesforce
                </span>
                <span className="px-4 py-2 bg-teal-200 text-teal-700 rounded-full text-sm font-medium">
                  Shopify
                </span>
                <span className="px-4 py-2 bg-pink-200 text-pink-700 rounded-full text-sm font-medium">
                  AWS
                </span>
                <span className="px-4 py-2 bg-orange-200 text-orange-700 rounded-full text-sm font-medium">
                  PHP
                </span>
                <span className="px-4 py-2 bg-indigo-200 text-indigo-700 rounded-full text-sm font-medium">
                  RAG / AI
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Avatar and Fun Facts */}
          <div className="space-y-8">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/dw3jpiwlo/image/upload/v1776297501/photo_gv4jrv.png"
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
            </div>

            <div>
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
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default AboutMe;
