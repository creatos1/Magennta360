import {
  Megaphone,
  Share2,
  Sparkles,
  Target,
  Clapperboard,
  Bot,
  MessageSquareCode,
  Monitor,
  Compass,
} from "lucide-react";

const services = [
  { icon: Megaphone, title: "Marketing Digital", desc: "Estrategias omnicanal enfocadas en ROI y crecimiento sostenible.", accent: "electric" },
  { icon: Share2, title: "Redes Sociales", desc: "Gestión de comunidades y narrativas visuales de alto impacto.", accent: "magennta" },
  { icon: Sparkles, title: "Branding e Imagen", desc: "Identidades visuales que comunican autoridad y futuro.", accent: "electric" },
  { icon: Target, title: "Meta & Google Ads", desc: "Campañas optimizadas con modelos predictivos para máximo ROAS.", accent: "magennta" },
  { icon: Clapperboard, title: "Creación de Contenido", desc: "Producción audiovisual premium que retiene y convierte.", accent: "electric" },
  { icon: Bot, title: "Automatización con IA", desc: "Agentes y workflows que reducen costos operativos hasta 40%.", accent: "magennta" },
  { icon: MessageSquareCode, title: "Chatbots Inteligentes", desc: "Atención 24/7 con procesamiento de lenguaje natural.", accent: "electric" },
  { icon: Monitor, title: "Diseño Web", desc: "Sitios rápidos, responsive y orientados a conversión.", accent: "magennta" },
  { icon: Compass, title: "Consultoría Estratégica", desc: "Acompañamiento para tu transformación digital integral.", accent: "electric" },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-electric font-mono text-xs uppercase tracking-[0.3em] mb-4">
            Servicios
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
            Soluciones 360°
          </h2>
          <p className="text-white/45 max-w-xl text-lg">
            Estrategias integrales que combinan el toque humano con la precisión algorítmica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, accent }) => (
            <div
              key={title}
              className="glass-card p-8 rounded-3xl hover:border-electric/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div
                className={`size-12 rounded-xl flex items-center justify-center mb-6 ${
                  accent === "electric"
                    ? "bg-electric/10 text-electric"
                    : "bg-magennta/10 text-magennta"
                }`}
              >
                <Icon className="size-5" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 group-hover:text-electric transition-colors">
                {title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
