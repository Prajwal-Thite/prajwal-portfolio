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
    <div className="min-h-screen bg-white" data-id="3imvs030g" data-path="src/pages/HomePage.tsx">
            <header className="py-6 px-8 border-b bg-white/30 backdrop-blur-md shadow-sm text-gray-800 hover:text-indigo-600" data-id="8wqum0bc8" data-path="src/pages/HomePage.tsx"> {/*shadow-md sticky top-0 z-50*/}
                <div className="container mx-auto flex justify-center  items-center" data-id="ysrlyv3p8" data-path="src/pages/HomePage.tsx">
                    {/* <h1 className="text-xl font-bold" data-id="8wc91ksah" data-path="src/pages/HomePage.tsx">Portfolio & Projects</h1> */}
                    <nav className="space-x-4" data-id="fgrodh382" data-path="src/pages/HomePage.tsx">
                        <Button variant="link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} data-id="uuw0xcta8" data-path="src/pages/HomePage.tsx">Home</Button>
                        <Button variant="link" onClick={() => document.getElementById('aboutme')?.scrollIntoView({ behavior: 'smooth' })} data-id="vxhii53ln" data-path="src/pages/HomePage.tsx">About Me</Button>
                        <Button variant="link" onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} data-id="vxhii53ln" data-path="src/pages/HomePage.tsx">Skills</Button>
                        <Button variant="link" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} data-id="vxhii53ln" data-path="src/pages/HomePage.tsx">Projects</Button>
                        <Button variant="link" onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })} data-id="qby0jgk8h" data-path="src/pages/HomePage.tsx">Experience</Button>
                        <Button variant="link" onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })} data-id="8fe0cmc4d" data-path="src/pages/HomePage.tsx">Education</Button>
                        <Button variant="link" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} data-id="gdocc5hgc" data-path="src/pages/HomePage.tsx">Contact</Button>
                    </nav>
                </div>
            </header>

            <main data-id="b1haeq36i" data-path="src/pages/HomePage.tsx">
                {/* <section className="container mx-auto py-12 px-4 text-center max-w-3xl" data-id="adxagsf2f" data-path="src/pages/HomePage.tsx">
                    <h2 className="text-4xl font-bold mb-4" data-id="q4i3wpw3d" data-path="src/pages/HomePage.tsx">Featured Portfolio</h2>
                    <p className="text-lg text-gray-600 mb-8" data-id="4z9klpt2j" data-path="src/pages/HomePage.tsx">
                        Showcasing innovative solutions in AI, web development, and mobile applications.
                    </p>
                </section> */}

                <HeroSection data-id="2ill4of7p" data-path="src/pages/HomePage.tsx" />

                <AboutMe data-id="z9mg6lxco" data-path="src/pages/HomePage.tsx" />

                <Skills data-id="r5jsy1oe3" data-path="src/pages/HomePage.tsx" />
                
                <ProjectsSection data-id="dcynzp6ih" data-path="src/pages/HomePage.tsx" />
                
                <ExperienceSection data-id="4wg06rpjf" data-path="src/pages/HomePage.tsx" />
                
                <EducationSection data-id="98i49yo6k" data-path="src/pages/HomePage.tsx" />
                
                <ContactSection data-id="h4emu8c9c" data-path="src/pages/HomePage.tsx" />
            </main>

            <footer className="border-t py-8 mt-auto" data-id="ubotjgwow" data-path="src/pages/HomePage.tsx">
                <div className="container mx-auto px-4 text-center text-gray-500" data-id="76ok1np8o" data-path="src/pages/HomePage.tsx">
                    <p data-id="dhd7f5gqw" data-path="src/pages/HomePage.tsx">© {new Date().getFullYear()} Prajwal Thite | Full Stack Developer & AI Enthusiast. All rights reserved.</p>
                </div>
            </footer>

            {/* AI Chatbot */}
            <PortfolioChatBot data-id="uj59e869r" data-path="src/pages/HomePage.tsx" />
        </div>);

};

export default HomePage;