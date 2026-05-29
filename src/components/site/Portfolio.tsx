const projects = [
  { tag: "Branding", title: "Rebrand para fintech LATAM", color: "from-electric/30 to-magennta/20" },
  { tag: "Ads", title: "Campaña Meta +320% ROAS", color: "from-magennta/30 to-electric/20" },
  { tag: "Automatización", title: "Workflow IA para e-commerce", color: "from-electric/40 to-transparent" },
  { tag: "Social Media", title: "Gestión integral lifestyle brand", color: "from-magennta/40 to-transparent" },
  { tag: "Dashboard", title: "Panel de métricas en tiempo real", color: "from-electric/30 to-magennta/30" },
  { tag: "Chatbot", title: "Asistente IA atención al cliente", color: "from-magennta/20 to-electric/40" },
];

export function Portfolio() {
  return (
    <section id="casos" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-electric font-mono text-xs uppercase tracking-[0.3em] mb-4">
            Portafolio
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold">
            Casos de Éxito
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="glass-card rounded-3xl overflow-hidden group hover:-translate-y-1 transition-transform"
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${p.color} relative`}>
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/60 backdrop-blur text-[10px] uppercase tracking-widest font-bold text-white/80">
                  {p.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg group-hover:text-electric transition-colors">
                  {p.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
