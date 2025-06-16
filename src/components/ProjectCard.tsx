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
      onHoverEnd={() => setIsHovered(false)} >

      <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm">
        {/* Image Container with Demo Video Overlay */}
        <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-100 to-gray-200">
          <motion.img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}/>

          
          {/* Hover Overlay */}
          <AnimatePresence>
            {isHovered &&
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 flex items-center justify-center">

                <div className="flex gap-3">
                  {project.demoVideoUrl &&
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowDemo(!showDemo)}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white p-3 rounded-full hover:bg-white/30 transition-colors">

                      <Play size={20}/>
                    </motion.button>
                }
                  <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white p-3 rounded-full hover:bg-white/30 transition-colors">

                    <Github size={20}/>
                  </motion.a>
                  {project.liveUrl &&
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white p-3 rounded-full hover:bg-white/30 transition-colors">

                      <ExternalLink size={20}/>
                    </motion.a>
                }
                </div>
              </motion.div>
            }
          </AnimatePresence>

          {/* Featured Badge
          {project.featured &&
          <div className="absolute top-3 left-3">
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-lg">
                ⭐ Featured
              </Badge>
            </div>
          } */}

          {/* Category Badge */}
          <div className="absolute top-3 right-3">
            <Badge className={getCategoryColor(project.category)}>
              {project.category}
            </Badge>
          </div>
        </div>

        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
            {project.title}
          </CardTitle>
          <CardDescription className="text-gray-600 line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) =>
            <TechBadge key={tech} tech={tech}/>
            )}
            {project.techStack.length > 4 &&
            <Badge variant="outline" className="text-xs">
                +{project.techStack.length - 4} more
              </Badge>
            }
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex-1 hover:bg-blue-50 hover:border-blue-300">

              Details {isExpanded ? <ChevronUp className="ml-1 h-4 w-4"/> : <ChevronDown className="ml-1 h-4 w-4"/>}
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hover:bg-gray-50">

              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4"/>
              </a>
            </Button>
            {project.liveUrl &&
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hover:bg-green-50 hover:border-green-300">

                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4"/>
                </a>
              </Button>
            }
          </div>

          {/* Expandable Details */}
          <AnimatePresence>
            {isExpanded &&
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden">

                <div className="pt-4 border-t border-gray-100 space-y-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {project.longDescription}
                  </p>
                  
                  {/* Complete Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Complete Tech Stack:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech) =>
                    <TechBadge key={tech} tech={tech} size="sm"/>
                    )}
                    </div>
                  </div>

                  {/* Demo Video */}
                  {showDemo && project.demoVideoUrl &&
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-lg overflow-hidden bg-gray-100 aspect-video">

                      <div className="w-full h-full flex items-center justify-center text-gray-500">
                        <Play size={48}/>
                        <span className="ml-2">Demo Video Placeholder</span>
                      </div>
                    </motion.div>
                }

                  {/* Action Links */}
                  <div className="flex gap-2 pt-2">
                    <Button
                    asChild
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">

                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4"/>
                        View Code
                      </a>
                    </Button>
                    {project.liveUrl &&
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="hover:bg-green-50 hover:border-green-300">

                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4"/>
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