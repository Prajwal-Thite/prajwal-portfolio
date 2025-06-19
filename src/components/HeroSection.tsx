import { motion } from 'motion/react';
import { useTypewriter } from '@/hooks/use-typewriter';
import { useMouseParallax } from '@/hooks/use-mouse-parallax';
import FloatingTechLogos from '@/components/FloatingTechLogos';
import HireMeButton from '@/components/HireMeButton';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Download, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  const { displayedText, isComplete } = useTypewriter({
    text: "Full Stack Developer & AI Enthusiast | Building the Future with Web & AI",
    speed: 50,
    delay: 1000
  });

  const mouseParallax = useMouseParallax(0.02);

  const handleDownloadCV = () => {    

    // sharing link to download link
    const fileId = '1kConc17LaqU6VI7ojVKGCStlCw33krHb';
    const cvUrl = `https://drive.google.com/file/d/${fileId}/view`;
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Open PDF in new tab
    window.open(cvUrl, '_blank');
    
    // Trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Prajwal-Thite-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background parallax effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-indigo-600/5"
        style={{
          transform: `translate(${mouseParallax.x}px, ${mouseParallax.y}px)`
        }}/>


      {/* Floating tech logos */}
      <FloatingTechLogos/>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Name with entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6">

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Prajwal Thite
          </h1>
        </motion.div>

        {/* Typewriter effect for one-liner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-12 h-16 flex items-center justify-center">

          <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-medium">
            {displayedText}
            {!isComplete &&
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-1 text-blue-600">

                |
              </motion.span>
            }
          </h2>
        </motion.div>

        {/* Social links and CV download */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12">

          <Button
            variant="outline"
            size="lg"
            className="group hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
            onClick={() => window.open('https://github.com/Prajwal-Thite', '_blank')}>

            <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"/>
            GitHub
            <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity"/>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
            onClick={() => window.open('https://www.linkedin.com/in/prajwal-thite/', '_blank')}>

            <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"/>
            LinkedIn
            <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity"/>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300"
            onClick={handleDownloadCV}>

            <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"/>
            Download CV
          </Button>
        </motion.div>

        {/* Hire Me button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8, type: "spring", stiffness: 100 }}>

          <HireMeButton/>
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;