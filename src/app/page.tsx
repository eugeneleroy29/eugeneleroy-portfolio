import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FlagshipSection } from '@/components/FlagshipSection';
import { AskAITwin } from '@/components/AskAITwin';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { TechnicalArsenal } from '@/components/TechnicalArsenal';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased selection:bg-indigo-500 selection:text-white">
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
  );
}