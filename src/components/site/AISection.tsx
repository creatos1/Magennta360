import neural from "@/assets/neural-engine.jpg";

const capabilities = [
  { t: "Automatización de procesos", d: "Workflows inteligentes que eliminan tareas repetitivas." },
  { t: "Generación de contenido", d: "Copys y assets visuales a escala con curación humana." },
  { t: "Optimización de campañas", d: "Ajustes en tiempo real basados en señales predictivas." },
  { t: "Atención al cliente", d: "Chatbots conversacionales 24/7 con lenguaje natural." },
  { t: "Análisis de datos", d: "Insights accionables sobre tu audiencia y mercado." },
];

export function AISection() {
  return (
    <section id="ia" className="py-24 px-6 overflow-hidden relative">
      <div className="absolute top-1/2 -translate-y-1/2 -right-32 size-[500px] bg-electric/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-16 relative">
        <div>
          <div className="text-electric font-mono text-xs uppercase tracking-[0.3em] mb-4">
            El cerebro detrás
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            Cómo la <span className="gradient-brand-text">IA</span> escala tu negocio.
          </h2>
          <ul className="space-y-5">
            {capabilities.map((c, i) => (
              <li key={c.t} className="flex items-start gap-4">
                <div
                  className={`mt-1 size-6 rounded-full border flex items-center justify-center shrink-0 ${
                    i % 2 === 0 ? "border-electric" : "border-magennta"
                  }`}
                >
                  <div
                    className={`size-2 rounded-full ${
                      i % 2 === 0 ? "bg-electric" : "bg-magennta"
                    }`}
                  />
                </div>
                <div>
                  <h4 className="font-bold">{c.t}</h4>
                  <p className="text-sm text-white/50">{c.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-square glass-card rounded-full p-8 flex items-center justify-center animate-float-slow">
            <img
              src={neural}
              alt="Motor neuronal de Magennta 360"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute top-4 right-4 glass-strong px-4 py-2 rounded-lg border border-electric/30">
            <span className="text-xs font-mono text-electric">Efficiency +85%</span>
          </div>
          <div className="absolute bottom-8 left-0 glass-strong px-4 py-2 rounded-lg border border-magennta/30">
            <span className="text-xs font-mono text-magennta">ML · Predictive</span>
          </div>
        </div>
      </div>
    </section>
  );
}
