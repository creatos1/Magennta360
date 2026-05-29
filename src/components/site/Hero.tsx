import heroImg from "@/assets/hero-dashboard.jpg";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[600px] bg-electric/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-electric/20 bg-electric/5 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-magennta opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-magennta" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-electric">
            Powered by Artificial Intelligence
          </span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight mb-8 leading-[1.05] text-balance">
          Transformamos marcas con{" "}
          <span className="gradient-text">Marketing Digital e IA</span>
        </h1>
        <p className="text-lg md:text-xl text-white/55 max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
          Creamos estrategias, automatizaciones y contenido inteligente para hacer crecer tu negocio en la era digital.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="group w-full sm:w-auto px-8 py-4 bg-electric rounded-xl font-semibold text-white hover:bg-white hover:text-electric transition-all inline-flex items-center justify-center gap-2"
          >
            Agenda una asesoría
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#servicios"
            className="w-full sm:w-auto px-8 py-4 glass-card rounded-xl font-semibold hover:bg-white/10 transition-colors text-center"
          >
            Ver servicios
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20 relative animate-fade-up [animation-delay:200ms]">
        <div className="glass-strong rounded-2xl p-3 md:p-4 relative z-20 overflow-hidden shadow-[var(--shadow-card)]">
          <img
            src={heroImg}
            alt="Dashboard de marketing potenciado por IA"
            width={1600}
            height={900}
            className="w-full aspect-video object-cover rounded-xl"
          />
        </div>
        <div className="absolute -bottom-10 -left-10 size-64 bg-magennta/15 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -top-10 -right-10 size-64 bg-electric/15 blur-[100px] rounded-full pointer-events-none" />
      </div>
    </section>
  );
}
