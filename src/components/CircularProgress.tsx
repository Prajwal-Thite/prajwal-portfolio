import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  label?: string;
  delay?: number;
}

const CircularProgress = ({
  percentage,
  size = 80,
  strokeWidth = 8,
  color = "#3b82f6",
  label,
  delay = 0
}: CircularProgressProps) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, delay);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - animatedPercentage / 100 * circumference;

  return (
    <div className="flex flex-col items-center" data-id="e6aprsi02" data-path="src/components/CircularProgress.tsx">
      <div className="relative" data-id="eogi0kj69" data-path="src/components/CircularProgress.tsx">
        <svg
          width={size}
          height={size}
          className="transform -rotate-90" data-id="xax9od66c" data-path="src/components/CircularProgress.tsx">

          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            className="text-gray-200 dark:text-gray-700" data-id="nltffh9nj" data-path="src/components/CircularProgress.tsx" />

          
          {/* Progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              delay: delay / 1000
            }} data-id="yuqr1hb41" data-path="src/components/CircularProgress.tsx" />

        </svg>
        
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center" data-id="s0zn6r94v" data-path="src/components/CircularProgress.tsx">
          <motion.span
            className="text-sm font-bold text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay / 1000 + 0.5 }} data-id="0mecdqurs" data-path="src/components/CircularProgress.tsx">

            {animatedPercentage}%
          </motion.span>
        </div>
      </div>
      
      {label &&
      <motion.p
        className="text-xs text-gray-600 dark:text-gray-400 mt-2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay / 1000 + 0.7 }} data-id="6rezsramw" data-path="src/components/CircularProgress.tsx">

          {label}
        </motion.p>
      }
    </div>);

};

export default CircularProgress;