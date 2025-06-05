import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Play, ChevronDown, ChevronUp } from 'lucide-react';
import TechBadge from '@/components/TechBadge';

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

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI':return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Web':return 'bg-green-100 text-green-800 border-green-200';
      case 'Mobile':return 'bg-orange-100 text-orange-800 border-orange-200';
      default:return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)} data-id="94l26czo6" data-path="src/components/ProjectCard.tsx">

      <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm" data-id="d2lpae0st" data-path="src/components/ProjectCard.tsx">
        {/* Image Container with Demo Video Overlay */}
        <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-100 to-gray-200" data-id="ilgran55q" data-path="src/components/ProjectCard.tsx">
          <motion.img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }} data-id="g8mxbbfls" data-path="src/components/ProjectCard.tsx" />

          
          {/* Hover Overlay */}
          <AnimatePresence data-id="ee4ua9otp" data-path="src/components/ProjectCard.tsx">
            {isHovered &&
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 flex items-center justify-center" data-id="s1odu6ifu" data-path="src/components/ProjectCard.tsx">

                <div className="flex gap-3" data-id="6cix5gnwa" data-path="src/components/ProjectCard.tsx">
                  {project.demoVideoUrl &&
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowDemo(!showDemo)}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white p-3 rounded-full hover:bg-white/30 transition-colors" data-id="a9vosift2" data-path="src/components/ProjectCard.tsx">

                      <Play size={20} data-id="g8dkf2dpt" data-path="src/components/ProjectCard.tsx" />
                    </motion.button>
                }
                  <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white p-3 rounded-full hover:bg-white/30 transition-colors" data-id="cwh47oih5" data-path="src/components/ProjectCard.tsx">

                    <Github size={20} data-id="qipunk3fy" data-path="src/components/ProjectCard.tsx" />
                  </motion.a>
                  {project.liveUrl &&
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white p-3 rounded-full hover:bg-white/30 transition-colors" data-id="8xk7sz8lh" data-path="src/components/ProjectCard.tsx">

                      <ExternalLink size={20} data-id="tkm4uabzb" data-path="src/components/ProjectCard.tsx" />
                    </motion.a>
                }
                </div>
              </motion.div>
            }
          </AnimatePresence>

          {/* Featured Badge */}
          {project.featured &&
          <div className="absolute top-3 left-3" data-id="dhuxqetj9" data-path="src/components/ProjectCard.tsx">
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-lg" data-id="nnzp7k9ux" data-path="src/components/ProjectCard.tsx">
                ⭐ Featured
              </Badge>
            </div>
          }

          {/* Category Badge */}
          <div className="absolute top-3 right-3" data-id="0012u55v5" data-path="src/components/ProjectCard.tsx">
            <Badge className={getCategoryColor(project.category)} data-id="cajkoergo" data-path="src/components/ProjectCard.tsx">
              {project.category}
            </Badge>
          </div>
        </div>

        <CardHeader className="pb-4" data-id="3tjyq66uw" data-path="src/components/ProjectCard.tsx">
          <CardTitle className="text-xl font-bold text-gray-900 leading-tight" data-id="uenq7kka7" data-path="src/components/ProjectCard.tsx">
            {project.title}
          </CardTitle>
          <CardDescription className="text-gray-600 line-clamp-2" data-id="f3weyse0e" data-path="src/components/ProjectCard.tsx">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4" data-id="oxv2flq67" data-path="src/components/ProjectCard.tsx">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2" data-id="8j7zusnko" data-path="src/components/ProjectCard.tsx">
            {project.techStack.slice(0, 4).map((tech) =>
            <TechBadge key={tech} tech={tech} data-id="kqps4bl18" data-path="src/components/ProjectCard.tsx" />
            )}
            {project.techStack.length > 4 &&
            <Badge variant="outline" className="text-xs" data-id="lv5wnszk7" data-path="src/components/ProjectCard.tsx">
                +{project.techStack.length - 4} more
              </Badge>
            }
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2" data-id="4n842ivrv" data-path="src/components/ProjectCard.tsx">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex-1 hover:bg-blue-50 hover:border-blue-300" data-id="yk7ryupzj" data-path="src/components/ProjectCard.tsx">

              Details {isExpanded ? <ChevronUp className="ml-1 h-4 w-4" data-id="v9jd8lwkw" data-path="src/components/ProjectCard.tsx" /> : <ChevronDown className="ml-1 h-4 w-4" data-id="7f0pxnvx2" data-path="src/components/ProjectCard.tsx" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hover:bg-gray-50" data-id="i035m0qku" data-path="src/components/ProjectCard.tsx">

              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" data-id="ocbmrla45" data-path="src/components/ProjectCard.tsx">
                <Github className="h-4 w-4" data-id="vd1exrkv5" data-path="src/components/ProjectCard.tsx" />
              </a>
            </Button>
            {project.liveUrl &&
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hover:bg-green-50 hover:border-green-300" data-id="01rz34l30" data-path="src/components/ProjectCard.tsx">

                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" data-id="ap67bys3s" data-path="src/components/ProjectCard.tsx">
                  <ExternalLink className="h-4 w-4" data-id="6c9k4z7fc" data-path="src/components/ProjectCard.tsx" />
                </a>
              </Button>
            }
          </div>

          {/* Expandable Details */}
          <AnimatePresence data-id="tdexsizpq" data-path="src/components/ProjectCard.tsx">
            {isExpanded &&
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden" data-id="yhnrryrwa" data-path="src/components/ProjectCard.tsx">

                <div className="pt-4 border-t border-gray-100 space-y-4" data-id="lqjlteqgq" data-path="src/components/ProjectCard.tsx">
                  <p className="text-sm text-gray-700 leading-relaxed" data-id="jbcvlr3j2" data-path="src/components/ProjectCard.tsx">
                    {project.longDescription}
                  </p>
                  
                  {/* Complete Tech Stack */}
                  <div data-id="mnnteydu6" data-path="src/components/ProjectCard.tsx">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2" data-id="5iklvcwe4" data-path="src/components/ProjectCard.tsx">Complete Tech Stack:</h4>
                    <div className="flex flex-wrap gap-1" data-id="ios7mnd7k" data-path="src/components/ProjectCard.tsx">
                      {project.techStack.map((tech) =>
                    <TechBadge key={tech} tech={tech} size="sm" data-id="jgu7o3asc" data-path="src/components/ProjectCard.tsx" />
                    )}
                    </div>
                  </div>

                  {/* Demo Video */}
                  {showDemo && project.demoVideoUrl &&
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-lg overflow-hidden bg-gray-100 aspect-video" data-id="rvdl0sg13" data-path="src/components/ProjectCard.tsx">

                      <div className="w-full h-full flex items-center justify-center text-gray-500" data-id="f73uqwbpb" data-path="src/components/ProjectCard.tsx">
                        <Play size={48} data-id="xotzvxvch" data-path="src/components/ProjectCard.tsx" />
                        <span className="ml-2" data-id="2xxk5uiuh" data-path="src/components/ProjectCard.tsx">Demo Video Placeholder</span>
                      </div>
                    </motion.div>
                }

                  {/* Action Links */}
                  <div className="flex gap-2 pt-2" data-id="hhwknl9gi" data-path="src/components/ProjectCard.tsx">
                    <Button
                    asChild
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800" data-id="d17ew4k4o" data-path="src/components/ProjectCard.tsx">

                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" data-id="0qlyixims" data-path="src/components/ProjectCard.tsx">
                        <Github className="mr-2 h-4 w-4" data-id="wk4f2npmq" data-path="src/components/ProjectCard.tsx" />
                        View Code
                      </a>
                    </Button>
                    {project.liveUrl &&
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="hover:bg-green-50 hover:border-green-300" data-id="2ate0o7qj" data-path="src/components/ProjectCard.tsx">

                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" data-id="j9ikguqhv" data-path="src/components/ProjectCard.tsx">
                          <ExternalLink className="mr-2 h-4 w-4" data-id="sww5rpupb" data-path="src/components/ProjectCard.tsx" />
                          Live Demo
                        </a>
                      </Button>
                  }
                  </div>
                </div>
              </motion.div>
            }
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>);

};

export default ProjectCard;