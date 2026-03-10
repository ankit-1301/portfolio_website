import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { About } from './About';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Certifications } from './Certifications';
import { BeyondWork } from './BeyondWork';
import { Footer } from './Footer';
import { ChatbotWidget } from './ChatbotWidget';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <BeyondWork />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}