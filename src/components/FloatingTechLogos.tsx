import { motion } from 'motion/react';
import { useMouseParallax } from '@/hooks/use-mouse-parallax';
import { FaPhp } from "react-icons/fa6";
import { LiaSalesforce } from "react-icons/lia";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

interface TechLogo {
  name: string;
  icon: string | JSX.Element;
  x: number;
  y: number;
  scale: number;
  duration: number;
}

const techLogos: TechLogo[] = [
{ name: 'React', icon: '⚛️', x: 10, y: 20, scale: 1.2, duration: 8 },
{ name: 'Python', icon: '🐍', x: 85, y: 16, scale: 1.2, duration: 10 },
{ name: 'GPT-4o', icon: '🤖', x: 15, y: 65, scale: 1.1, duration: 12 },
{ name: 'TypeScript', icon: <LiaSalesforce size={150} color='#000087'/>, x: 80, y: 75, scale: 0.9, duration: 9 },
{ name: 'PHP', icon: <FaPhp size={150}/>, x: 50, y: 10, scale: 0.8, duration: 11 },
{ name: 'MySQL', icon: <SiMysql size={150}/>, x: 37, y: 75, scale: 0.8, duration: 11 },
{ name: 'AI', icon: <FaLaravel size={80}/>, x: 70, y: 50, scale: 1, duration: 7 }];



const FloatingTechLogos = () => {
  const mouseParallax = useMouseParallax(0.05);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {techLogos.map((logo, index) =>
      <motion.div
        key={logo.name}
        className="absolute text-4xl md:text-5xl lg:text-6xl opacity-10 hover:opacity-20 transition-opacity duration-300"
        style={{
          left: `${logo.x}%`,
          top: `${logo.y}%`,
          transform: `translate(${mouseParallax.x * (index % 2 === 0 ? 1 : -1)}px, ${mouseParallax.y * (index % 2 === 0 ? 1 : -1)}px)`
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
          scale: [logo.scale, logo.scale * 1.1, logo.scale]
        }}
        transition={{
          duration: logo.duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.5
        }}>

          <motion.div
          whileHover={{ scale: 1.2, opacity: 0.4 }}
          className="cursor-pointer">

            {logo.icon}
          </motion.div>
        </motion.div>
      )}
    </div>);

};

export default FloatingTechLogos;