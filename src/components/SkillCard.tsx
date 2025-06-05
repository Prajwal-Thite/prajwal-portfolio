import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { LucideIcon } from "lucide-react";
import CircularProgress from "@/components/CircularProgress";

interface Skill {
  name: string;
  level: number;
  projects?: number;
  description?: string;
}

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
  color: string;
  category: string | string[];
}

const SkillCard = ({ title, icon: Icon, skills, color, category }: SkillCardProps) => {
  const getColorFromGradient = (gradientClass: string) => {
    if (gradientClass.includes('blue')) return '#3b82f6';
    if (gradientClass.includes('purple')) return '#a855f7';
    if (gradientClass.includes('green')) return '#22c55e';
    if (gradientClass.includes('orange')) return '#f97316';
    if (gradientClass.includes('red')) return '#ef4444';
    if (gradientClass.includes('yellow')) return '#eab308';
    return '#3b82f6';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="h-full" data-id="361o68hb1" data-path="src/components/SkillCard.tsx">

      <Card className="h-full border-0 shadow-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300" data-id="qlqt37u0n" data-path="src/components/SkillCard.tsx">
        <CardHeader className="text-center pb-4" data-id="pxy0e0766" data-path="src/components/SkillCard.tsx">
          <div className={`w-16 h-16 mx-auto rounded-full ${color} flex items-center justify-center mb-4`} data-id="pk62koowq" data-path="src/components/SkillCard.tsx">
            <Icon className="w-8 h-8 text-white" data-id="klumib5bc" data-path="src/components/SkillCard.tsx" />
          </div>
          <CardTitle className="text-xl font-bold text-gray-800 dark:text-white" data-id="bkha9sx1l" data-path="src/components/SkillCard.tsx">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent data-id="fclvwck8h" data-path="src/components/SkillCard.tsx">
          <TooltipProvider data-id="um3dxxlmn" data-path="src/components/SkillCard.tsx">
            <div className="grid grid-cols-2 gap-4 mb-6" data-id="n5hhjj1or" data-path="src/components/SkillCard.tsx">
              {skills.slice(0, 4).map((skill, index) =>
              <Tooltip key={skill.name} data-id="uupxwguy1" data-path="src/components/SkillCard.tsx">
                  <TooltipTrigger asChild data-id="o7lrexbid" data-path="src/components/SkillCard.tsx">
                    <div className="cursor-pointer" data-id="shw1x67bf" data-path="src/components/SkillCard.tsx">
                      <CircularProgress
                      percentage={skill.level}
                      size={60}
                      strokeWidth={6}
                      color={getColorFromGradient(color)}
                      label={skill.name}
                      delay={index * 200} data-id="y0n6exskh" data-path="src/components/SkillCard.tsx" />

                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="max-w-xs" data-id="59qtkutfw" data-path="src/components/SkillCard.tsx">
                    <div className="text-center" data-id="cd4fcnlyc" data-path="src/components/SkillCard.tsx">
                      <p className="font-semibold" data-id="y8a3k71lr" data-path="src/components/SkillCard.tsx">{skill.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300" data-id="44qkrd4yp" data-path="src/components/SkillCard.tsx">
                        Proficiency: {skill.level}%
                      </p>
                      {skill.projects &&
                    <p className="text-sm text-gray-600 dark:text-gray-300" data-id="37go64dc8" data-path="src/components/SkillCard.tsx">
                          Used in {skill.projects} production projects
                        </p>
                    }
                      {skill.description &&
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1" data-id="z8ofuoqa7" data-path="src/components/SkillCard.tsx">
                          {skill.description}
                        </p>
                    }
                    </div>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
            
            {skills.length > 4 &&
            <div className="flex flex-wrap gap-2 justify-center" data-id="sm9l00mtk" data-path="src/components/SkillCard.tsx">
                {skills.slice(4).map((skill, index) =>
              <Tooltip key={skill.name} data-id="roy7nuzo7" data-path="src/components/SkillCard.tsx">
                    <TooltipTrigger asChild data-id="x6gvyuk4m" data-path="src/components/SkillCard.tsx">
                      <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (index + 4) * 0.1, duration: 0.3 }}
                    className="cursor-pointer" data-id="2qdh8s3kl" data-path="src/components/SkillCard.tsx">

                        <Badge
                      variant="secondary"
                      className="bg-white/80 text-gray-700 hover:bg-white/90 transition-colors" data-id="74d7aobil" data-path="src/components/SkillCard.tsx">

                          {skill.name}
                        </Badge>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="max-w-xs" data-id="f653roiqo" data-path="src/components/SkillCard.tsx">
                      <div className="text-center" data-id="whxuvtm4b" data-path="src/components/SkillCard.tsx">
                        <p className="font-semibold" data-id="mxbfmlhco" data-path="src/components/SkillCard.tsx">{skill.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300" data-id="l2is47441" data-path="src/components/SkillCard.tsx">
                          Proficiency: {skill.level}%
                        </p>
                        {skill.projects &&
                    <p className="text-sm text-gray-600 dark:text-gray-300" data-id="chiyz074a" data-path="src/components/SkillCard.tsx">
                            Used in {skill.projects} production projects
                          </p>
                    }
                        {skill.description &&
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1" data-id="pgqhb8mhx" data-path="src/components/SkillCard.tsx">
                            {skill.description}
                          </p>
                    }
                      </div>
                    </TooltipContent>
                  </Tooltip>
              )}
              </div>
            }
          </TooltipProvider>
        </CardContent>
      </Card>
    </motion.div>);

};

export default SkillCard;