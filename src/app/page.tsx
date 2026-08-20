import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FlagshipSection } from '@/components/FlagshipSection';
import { AskAITwin } from '@/components/AskAITwin';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { TechnicalArsenal } from '@/components/TechnicalArsenal';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { AmbientBackground } from '@/components/ui/VisualEffects';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 antialiased selection:bg-indigo-500 selection:text-white">
      {/* Ambient Visual Background Layer */}
      <AmbientBackground />

      {/* Main Interactive Site Layers */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <FlagshipSection />
          <AskAITwin />
          <ProjectsGrid />
          <TechnicalArsenal />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}