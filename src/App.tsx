import { Navbar } from './components/site/Navbar';
import { Hero } from './components/site/Hero';
import { About } from './components/site/About';
import { Services } from './components/site/Services';
import { Benefits } from './components/site/Benefits';
import { Portfolio } from './components/site/Portfolio';
import { AISection } from './components/site/AISection';
import { Testimonials } from './components/site/Testimonials';
import { FAQ } from './components/site/FAQ';
import { FinalCTA } from './components/site/FinalCTA';
import { Footer } from './components/site/Footer';
import { WhatsAppFloat } from './components/site/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Portfolio />
      <AISection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
