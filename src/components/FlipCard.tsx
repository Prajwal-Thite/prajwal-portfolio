import { motion } from 'motion/react';
import { useState } from 'react';

interface FlipCardProps {
  frontContent: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
  };
  backContent: {
    title: string;
    items: string[];
  };
  className?: string;
}

const FlipCard = ({ frontContent, backContent, className = '' }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`perspective-1000 w-full h-[280px] ${className}`}>
      <motion.div
        className="relative w-full h-full cursor-pointer"
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
        onClick={() => setIsFlipped(!isFlipped)}>

        {/* Front of card */}
        <motion.div
          className="absolute inset-0 backface-hidden"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ backfaceVisibility: 'hidden' }}>

          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg flex flex-col items-center justify-center text-white p-6">
            <div className="text-4xl mb-3">
              {frontContent.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{frontContent.title}</h3>
            <p className="text-blue-100 text-center">{frontContent.subtitle}</p>
          </div>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="absolute inset-0 backface-hidden"
          animate={{ rotateY: isFlipped ? 0 : -180 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}>

          <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl shadow-lg flex flex-col items-center justify-center text-white p-6" >
            <h3 className="text-lg font-bold mb-4">{backContent.title}</h3>
            <ul className="text-sm space-y-2 ">
              {backContent.items.map((item, index) =>
              <li key={index} className="text-blue-100">
                  {item}
                </li>
              )}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>);

};

export default FlipCard;