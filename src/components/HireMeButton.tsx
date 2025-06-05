import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface HireMeButtonProps {
  onClick?: () => void;
}

const HireMeButton = ({ onClick }: HireMeButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Smooth scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    onClick?.();
  };

  return (
    <motion.div
      className="relative overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }} data-id="1q9opy7e5" data-path="src/components/HireMeButton.tsx">

      <Button
        onClick={handleClick}
        className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        size="lg" data-id="0ezomo817" data-path="src/components/HireMeButton.tsx">

        Contact Me
      </Button>
      
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-white rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={isHovered ? {
          scale: [0, 2, 2.5],
          opacity: [0, 0.1, 0]
        } : {
          scale: 0,
          opacity: 0
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut"
        }} data-id="daqd8mart" data-path="src/components/HireMeButton.tsx" />

    </motion.div>);

};

export default HireMeButton;