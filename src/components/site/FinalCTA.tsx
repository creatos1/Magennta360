export function FinalCTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto glass-strong rounded-[3rem] p-12 md:p-20 text-center border-electric/20 overflow-hidden relative">
        <div className="absolute -top-24 -right-24 size-80 bg-electric/15 blur-[120px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 size-80 bg-magennta/15 blur-[120px] rounded-full" />
        <h2 className="relative font-display text-4xl md:text-6xl font-extrabold mb-10 tracking-tight leading-[1.1]">
          Tu marca necesita más que publicaciones… necesita{" "}
          <span className="gradient-brand-text italic">estrategia e inteligencia</span>.
        </h2>
        <a
          href="#contacto"
          className="relative inline-block px-10 py-5 bg-white text-background rounded-full font-extrabold text-base md:text-lg hover:bg-electric hover:text-white transition-all hover:scale-105 active:scale-95"
        >
          Trabajemos juntos
        </a>
      </div>
    </section>
  );
}
