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
    <div className={`perspective-1000 w-full h-[280px] ${className}`} data-id="mv7i66d56" data-path="src/components/FlipCard.tsx">
      <motion.div
        className="relative w-full h-full cursor-pointer"
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
        onClick={() => setIsFlipped(!isFlipped)} data-id="ihgfjwf3k" data-path="src/components/FlipCard.tsx">

        {/* Front of card */}
        <motion.div
          className="absolute inset-0 backface-hidden"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ backfaceVisibility: 'hidden' }} data-id="260uhh8rw" data-path="src/components/FlipCard.tsx">

          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg flex flex-col items-center justify-center text-white p-6" data-id="5s2vvvpz7" data-path="src/components/FlipCard.tsx">
            <div className="text-4xl mb-3" data-id="wek251acl" data-path="src/components/FlipCard.tsx">
              {frontContent.icon}
            </div>
            <h3 className="text-xl font-bold mb-2" data-id="pnnw1for1" data-path="src/components/FlipCard.tsx">{frontContent.title}</h3>
            <p className="text-blue-100 text-center" data-id="fz9nifqmf" data-path="src/components/FlipCard.tsx">{frontContent.subtitle}</p>
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
          }} data-id="61a9spjbz" data-path="src/components/FlipCard.tsx">

          <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl shadow-lg flex flex-col items-center justify-center text-white p-6" data-id="yd4022942" data-path="src/components/FlipCard.tsx">
            <h3 className="text-lg font-bold mb-4" data-id="gkolx8j4i" data-path="src/components/FlipCard.tsx">{backContent.title}</h3>
            <ul className="text-sm space-y-2 text-center" data-id="2wdj32yqu" data-path="src/components/FlipCard.tsx">
              {backContent.items.map((item, index) =>
              <li key={index} className="text-blue-100" data-id="oxyzcpz1p" data-path="src/components/FlipCard.tsx">
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