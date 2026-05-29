import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Cómo ayuda la IA a mi negocio?",
    a: "Automatizamos tareas repetitivas, analizamos grandes volúmenes de datos para decisiones informadas y personalizamos la atención al cliente de forma escalable.",
  },
  {
    q: "¿Cuál es el tiempo de entrega de un proyecto?",
    a: "Una campaña estratégica suele estar lista en 2 semanas; un desarrollo de IA personalizado puede tomar entre 4 y 8 semanas.",
  },
  {
    q: "¿Necesito una gran inversión en publicidad?",
    a: "No. Optimizamos presupuestos de todos los tamaños. Lo importante es la estrategia y el mensaje correcto para tu audiencia.",
  },
  {
    q: "¿Trabajan con empresas fuera de mi país?",
    a: "Sí. Operamos de forma remota con marcas en todo LATAM, España y Estados Unidos.",
  },
  {
    q: "¿Qué incluye la asesoría inicial?",
    a: "Diagnóstico digital, propuesta estratégica personalizada y roadmap accionable de los primeros 90 días.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-electric font-mono text-xs uppercase tracking-[0.3em] mb-4">
            FAQ
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold">
            Preguntas Frecuentes
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="glass-card rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full p-6 flex justify-between items-center text-left font-semibold hover:text-electric transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <ChevronDown
                    className={`size-5 shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-electric" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-white/60 leading-relaxed animate-fade-up">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
