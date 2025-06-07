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
    const fileId = '1AAIbkJYCORO_2j0XHRIzWojZYNZsC2uP';
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" data-id="q5hrschjd" data-path="src/components/HeroSection.tsx">
      {/* Background parallax effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-indigo-600/5"
        style={{
          transform: `translate(${mouseParallax.x}px, ${mouseParallax.y}px)`
        }} data-id="swl0hfluq" data-path="src/components/HeroSection.tsx" />


      {/* Floating tech logos */}
      <FloatingTechLogos data-id="42472bl39" data-path="src/components/HeroSection.tsx" />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto" data-id="n7z89iyez" data-path="src/components/HeroSection.tsx">
        {/* Name with entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6" data-id="6hhmm7tik" data-path="src/components/HeroSection.tsx">

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent" data-id="1hwvwoyvc" data-path="src/components/HeroSection.tsx">
            Prajwal Thite
          </h1>
        </motion.div>

        {/* Typewriter effect for one-liner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-12 h-16 flex items-center justify-center" data-id="q5onet2dn" data-path="src/components/HeroSection.tsx">

          <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-medium" data-id="il0hcujhl" data-path="src/components/HeroSection.tsx">
            {displayedText}
            {!isComplete &&
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-1 text-blue-600" data-id="xib5nrqzh" data-path="src/components/HeroSection.tsx">

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
          className="flex flex-wrap items-center justify-center gap-4 mb-12" data-id="omw3y6bie" data-path="src/components/HeroSection.tsx">

          <Button
            variant="outline"
            size="lg"
            className="group hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
            onClick={() => window.open('https://github.com/Prajwal-Thite', '_blank')} data-id="ui7q0eonq" data-path="src/components/HeroSection.tsx">

            <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" data-id="r2ox2tpow" data-path="src/components/HeroSection.tsx" />
            GitHub
            <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" data-id="2fug0htq7" data-path="src/components/HeroSection.tsx" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
            onClick={() => window.open('https://www.linkedin.com/in/prajwal-thite/', '_blank')} data-id="t601u9svy" data-path="src/components/HeroSection.tsx">

            <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" data-id="yblhjfrrb" data-path="src/components/HeroSection.tsx" />
            LinkedIn
            <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" data-id="21excrbdm" data-path="src/components/HeroSection.tsx" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300"
            onClick={handleDownloadCV} data-id="gbzhzjrcy" data-path="src/components/HeroSection.tsx">

            <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" data-id="5dpr154pq" data-path="src/components/HeroSection.tsx" />
            Download CV
          </Button>
        </motion.div>

        {/* Hire Me button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8, type: "spring", stiffness: 100 }} data-id="scc3z5jlo" data-path="src/components/HeroSection.tsx">

          <HireMeButton data-id="gky9autox" data-path="src/components/HeroSection.tsx" />
        </motion.div>

        {/* Scroll indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2" data-id="22jhhyieq" data-path="src/components/HeroSection.tsx">

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-gray-400 text-center" data-id="penc4o7kk" data-path="src/components/HeroSection.tsx">

            <div className="w-6 h-10 border-2 border-gray-300 rounded-full mx-auto mb-2 relative" data-id="gyf27ub8s" data-path="src/components/HeroSection.tsx">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-gray-400 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2" data-id="zw8p59urb" data-path="src/components/HeroSection.tsx" />

            </div>
            <p className="text-sm" data-id="27fkm5k2i" data-path="src/components/HeroSection.tsx">Scroll to explore</p>
          </motion.div>
        </motion.div> */}
      </div>
    </section>);

};

export default HeroSection;