export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="size-8 rounded-lg bg-[image:var(--gradient-brand)] flex items-center justify-center">
            <div className="size-2.5 bg-white rounded-full glow-dot" />
          </div>
          <span className="font-display font-extrabold text-xl tracking-tighter">
            MAGENNTA<span className="text-electric">360</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
          <a href="#ia" className="hover:text-white transition-colors">Estrategia IA</a>
          <a href="#casos" className="hover:text-white transition-colors">Casos</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a
            href="#contacto"
            className="px-5 py-2.5 bg-white text-background rounded-full hover:bg-electric hover:text-white transition-all duration-300 font-semibold"
          >
            Agendar Consultoría
          </a>
        </div>
      </div>
    </nav>
  );
}
