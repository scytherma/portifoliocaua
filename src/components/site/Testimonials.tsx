const testimonials = [
  {
    quote:
      "Em 30 dias depois do novo site, dobramos o ticket médio. O que mais me impressionou foi o cuidado com cada palavra — não só com o design.",
    name: "Marina Stein",
    role: "Fundadora · Maison L'Aura",
  },
  {
    quote:
      "Já tinha tido 3 sites antes. Este é o primeiro que parece falar com o cliente certo. Os leads chegam quentes, prontos para fechar.",
    name: "Rafael Toledo",
    role: "Diretor · Lumina Capital",
  },
  {
    quote:
      "Processo absurdamente claro. Em 3 semanas estávamos no ar, e o site sozinho já trouxe 3 projetos premium no primeiro mês.",
    name: "Camila Reis",
    role: "Sócia · Atelier 9",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 px-6 bg-surface border-y border-aluminum/60">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-6 text-center">
          O que dizem
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-ink text-balance leading-[1.05] text-center max-w-3xl mx-auto mb-16">
          Resultado é a única <span className="italic text-muted-foreground/70">prova</span> que importa.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col p-8 bg-canvas border border-aluminum rounded-2xl"
            >
              <span className="font-serif text-5xl text-ink/15 leading-none mb-4" aria-hidden>
                "
              </span>
              <blockquote className="text-ink leading-relaxed text-pretty mb-8 flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="border-t border-aluminum pt-5">
                <p className="font-medium text-ink text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
