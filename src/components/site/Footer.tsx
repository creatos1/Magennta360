import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, Linkedin, Instagram, Twitter, Send } from "lucide-react";

export function Footer() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <footer id="contacto" className="pt-24 pb-12 px-6 border-t border-white/5 bg-surface/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="text-electric font-mono text-xs uppercase tracking-[0.3em] mb-4">
              Contacto
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Hagamos crecer tu marca.
            </h2>
            <p className="text-white/55 mb-10 max-w-md leading-relaxed">
              Cuéntanos sobre tu proyecto y recibe una propuesta estratégica personalizada en menos de 48 horas.
            </p>
            <div className="space-y-4 text-white/80">
              <a href="mailto:hola@magennta360.com" className="flex items-center gap-3 hover:text-electric transition-colors">
                <Mail className="size-4 text-electric" />
                hola@magennta360.com
              </a>
              <a href="https://wa.me/000000000000" className="flex items-center gap-3 hover:text-electric transition-colors">
                <MessageCircle className="size-4 text-electric" />
                WhatsApp directo
              </a>
            </div>
            <div className="flex gap-3 mt-8">
              {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Red social"
                  className="size-10 glass-card rounded-full flex items-center justify-center hover:border-electric/40 hover:text-electric transition-colors"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit} className="glass-strong p-8 rounded-3xl flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                required
                type="text"
                placeholder="Nombre"
                className="bg-background/50 border border-white/10 rounded-xl p-3 text-sm focus:outline-none focus:border-electric transition-colors"
              />
              <input
                required
                type="email"
                placeholder="Email"
                className="bg-background/50 border border-white/10 rounded-xl p-3 text-sm focus:outline-none focus:border-electric transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Empresa (opcional)"
              className="bg-background/50 border border-white/10 rounded-xl p-3 text-sm focus:outline-none focus:border-electric transition-colors"
            />
            <textarea
              required
              placeholder="Cuéntanos sobre tu proyecto"
              rows={5}
              className="bg-background/50 border border-white/10 rounded-xl p-3 text-sm focus:outline-none focus:border-electric transition-colors resize-none"
            />
            <button
              type="submit"
              className="bg-electric text-white py-3.5 rounded-xl font-semibold hover:bg-white hover:text-background transition-colors inline-flex items-center justify-center gap-2"
            >
              {sent ? "¡Mensaje enviado!" : (<>Enviar mensaje <Send className="size-4" /></>)}
            </button>
          </form>
        </div>

        <div className="grid md:grid-cols-4 gap-10 pt-12 border-t border-white/5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="size-7 rounded-md bg-[image:var(--gradient-brand)]" />
              <span className="font-display font-extrabold tracking-tighter">
                MAGENNTA<span className="text-electric">360</span>
              </span>
            </div>
            <p className="text-xs text-white/40 leading-relaxed max-w-sm">
              Agencia boutique de marketing digital e inteligencia artificial.
              Crecimiento exponencial con creatividad y tecnología.
            </p>
          </div>
          <div>
            <h5 className="text-xs font-bold mb-4 uppercase tracking-widest text-white/70">Enlaces</h5>
            <ul className="space-y-2.5 text-sm text-white/45">
              <li><a href="#servicios" className="hover:text-white">Servicios</a></li>
              <li><a href="#ia" className="hover:text-white">Estrategia IA</a></li>
              <li><a href="#casos" className="hover:text-white">Casos</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs font-bold mb-4 uppercase tracking-widest text-white/70">Legal</h5>
            <ul className="space-y-2.5 text-sm text-white/45">
              <li><a href="#" className="hover:text-white">Privacidad</a></li>
              <li><a href="#" className="hover:text-white">Términos</a></li>
              <li><a href="#" className="hover:text-white">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/30 uppercase tracking-widest">
          <div>© 2026 Magennta 360 · Built for the future</div>
          <div>Hecho con estrategia + IA</div>
        </div>
      </div>
    </footer>
  );
}
