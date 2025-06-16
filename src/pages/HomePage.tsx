import { Button } from "@/components/ui/button";
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import PortfolioChatBot from '@/components/PortfolioChatBot';
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
            <header className="py-6 px-8 border-b bg-white/30 backdrop-blur-md shadow-sm text-gray-800 hover:text-indigo-600"> {/*shadow-md sticky top-0 z-50*/}
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 px-4 text-center">                    
                    <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
                        <Button variant="link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Button>
                        <Button variant="link" onClick={() => document.getElementById('aboutme')?.scrollIntoView({ behavior: 'smooth' })}>About Me</Button>
                        <Button variant="link" onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>Skills</Button>
                        <Button variant="link" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</Button>
                        <Button variant="link" onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>Experience</Button>
                        <Button variant="link" onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}>Education</Button>
                        <Button variant="link" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</Button>
                    </nav>
                </div>
            </header>

            <main>

                <HeroSection />

                <AboutMe />

                <Skills />
                
                <ProjectsSection />
                
                <ExperienceSection />
                
                <EducationSection />
                
                <ContactSection />
            </main>

            <footer className="border-t py-8 mt-auto">
                <div className="container mx-auto px-4 text-center text-gray-500">
                    <p>© {new Date().getFullYear()} Prajwal Thite | Full Stack Developer & AI Enthusiast. All rights reserved.</p>
                </div>
            </footer>

            {/* AI Chatbot */}
            <PortfolioChatBot />
        </div>);

};

export default HomePage;