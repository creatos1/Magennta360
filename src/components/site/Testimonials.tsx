const testimonials = [
  {
    quote:
      "Pasamos de una gestión manual obsoleta a una infraestructura automatizada que nos permitió duplicar el alcance en solo 3 meses. Magennta 360 es el partner que toda startup necesita.",
    name: "Alejandro Vivas",
    role: "CEO — NextGen Logistics",
  },
  {
    quote:
      "La implementación de chatbots con IA en nuestra web redujo el tiempo de respuesta en un 90% y disparó las conversiones de leads frías.",
    name: "Marcos Rial",
    role: "Founder — TechStream",
  },
  {
    quote:
      "Transformaron nuestra identidad visual en 3 semanas. Los resultados en anuncios y posicionamiento orgánico fueron inmediatos.",
    name: "Lucía Sanz",
    role: "Marketing Manager — Elevate",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-electric font-mono text-xs uppercase tracking-[0.3em] mb-4">
            Testimonios
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold">
            Ellos confían en el futuro
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="glass-card p-8 rounded-3xl flex flex-col gap-6"
            >
              <p className="text-white/85 leading-relaxed italic">"{t.quote}"</p>
              <footer className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                <div className="size-10 rounded-full bg-[image:var(--gradient-brand)]" />
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-[11px] text-white/40 uppercase tracking-wider">
                    {t.role}
                  </div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
