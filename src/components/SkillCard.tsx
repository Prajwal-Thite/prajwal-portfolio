import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { LucideIcon } from "lucide-react";
import CircularProgress from "@/components/CircularProgress";
import { type ElementType } from "react";

interface Skill {
  name: string;
  // level: number;
  icon : ElementType;
  color?: string;
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
          
          <div className="grid grid-cols-2 gap-4 mb-6" data-id="n5hhjj1or" data-path="src/components/SkillCard.tsx">
            {skills.slice(0, 4).map((skill) => {
              const SkillIcon = skill.icon;
              return (
                <div key={skill.name} className="flex flex-col items-center justify-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/30 shadow-inner mb-2">
                    <SkillIcon className="w-7 h-7 text-gray-800 dark:text-white" style={{ color: skill.color ?? "#000" }} />
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{skill.name}</p>
                </div>
              );
            })}
          </div>
            
            {skills.length > 4 &&
            <div className="flex flex-wrap gap-2 justify-center" data-id="sm9l00mtk" data-path="src/components/SkillCard.tsx">
                {skills.slice(4).map((skill, index) =>          
            
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
                  
              )}
              </div>
            }
          
        </CardContent>
      </Card>
    </motion.div>);

};

export default SkillCard;