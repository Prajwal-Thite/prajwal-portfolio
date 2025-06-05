import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

interface CertificationBadgeProps {
  name: string;
  provider: string;
  icon: string | React.ReactNode;
  issueDate: string;
  color: string;
  verified?: boolean;
  link?: string;
}

const CertificationBadge = ({ name, provider, icon, issueDate, color, verified = true, link}: CertificationBadgeProps) => {

  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      whileHover={{
        scale: 1.05,
        rotate: 2,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      className="relative group cursor-pointer" data-id="o4y1iibqr" data-path="src/components/CertificationBadge.tsx">

      <motion.div
        className={`p-4 rounded-xl border-2 ${color} bg-white/50 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-${color.split('-')[1]}-200/50`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 }
        }}
        viewport={{ once: true }} data-id="0uuze6pv9" data-path="src/components/CertificationBadge.tsx">

        <div className="flex flex-col items-center space-y-2" data-id="9v15y0o5t" data-path="src/components/CertificationBadge.tsx">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center" data-id="jxmzyce2m" data-path="src/components/CertificationBadge.tsx">
            <span className="text-2xl" data-id="azbzdgl9u" data-path="src/components/CertificationBadge.tsx">{icon}</span>
          </div>
          
          <div className="text-center" data-id="38e33k9xg" data-path="src/components/CertificationBadge.tsx">
            <h4 className="font-semibold text-sm text-gray-900" data-id="o36tl396w" data-path="src/components/CertificationBadge.tsx">{name}</h4>
            <p className="text-xs text-gray-600" data-id="qwys616fr" data-path="src/components/CertificationBadge.tsx">{provider} - {issueDate}</p>
          </div>
          
          {verified &&
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }} data-id="6pffckxk1" data-path="src/components/CertificationBadge.tsx">

              <Badge variant="secondary" className="text-xs bg-green-100 text-green-700 border-green-200" data-id="vh93ki1y2" data-path="src/components/CertificationBadge.tsx">
                ✓ Verified
              </Badge>
            </motion.div>
          }
        </div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, ${color.includes('blue') ? '#3b82f6' :
            color.includes('orange') ? '#f97316' :
            color.includes('red') ? '#ef4444' :
            color.includes('green') ? '#22c55e' : '#6366f1'}, transparent)`
          }} data-id="1jioy70ob" data-path="src/components/CertificationBadge.tsx" />

      </motion.div>
    </motion.div>);

};

export default CertificationBadge;