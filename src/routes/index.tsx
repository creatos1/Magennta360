import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Benefits } from "@/components/site/Benefits";
import { Portfolio } from "@/components/site/Portfolio";
import { AISection } from "@/components/site/AISection";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Magennta 360 — Marketing Digital e Inteligencia Artificial" },
      {
        name: "description",
        content:
          "Agencia de marketing digital e IA. Estrategias, automatización, branding, ads y contenido inteligente para escalar tu marca.",
      },
      { property: "og:title", content: "Magennta 360 — Marketing Digital e IA" },
      {
        property: "og:description",
        content:
          "Transformamos marcas con estrategias digitales, automatización con IA y contenido inteligente.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Magennta 360",
          description:
            "Agencia de marketing digital e inteligencia artificial.",
          url: "/",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans antialiased">
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin=""
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
      />
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
    </main>
  );
}
