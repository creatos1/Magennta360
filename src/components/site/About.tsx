export function About() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="text-electric font-mono text-xs uppercase tracking-[0.3em] mb-6">
          Sobre Nosotros
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
          Una agencia donde la <span className="gradient-brand-text">creatividad</span> se encuentra con la <span className="text-electric">inteligencia</span>.
        </h2>
        <p className="text-lg text-white/55 leading-relaxed max-w-3xl mx-auto">
          Somos especialistas en branding, contenido, campañas digitales y automatización con IA. Combinamos enfoque estratégico, ejecución creativa y tecnología avanzada para posicionar marcas que quieren liderar su categoría.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { t: "Estrategia", d: "Datos, mercado y propósito convertidos en planes accionables." },
            { t: "Creatividad", d: "Narrativas visuales que cortan el ruido digital." },
            { t: "Tecnología", d: "IA y automatización integradas a cada flujo de trabajo." },
          ].map((c) => (
            <div key={c.t} className="glass-card p-8 rounded-2xl text-left">
              <div className="font-display font-bold text-xl mb-2">{c.t}</div>
              <p className="text-sm text-white/55 leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
