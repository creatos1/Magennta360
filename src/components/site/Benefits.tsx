const stats = [
  { v: "+250%", l: "Incremento de ventas" },
  { v: "10M+", l: "Alcance generado" },
  { v: "+12k", l: "Leads calificados" },
  { v: "40h", l: "Ahorro semanal" },
  { v: "98%", l: "Satisfacción" },
];

export function Benefits() {
  return (
    <section className="py-20 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-extrabold gradient-text mb-2">
                {s.v}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
