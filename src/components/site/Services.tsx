const services = [
  {
    tag: "Mais procurado",
    title: "Site institucional",
    desc: "Para profissionais e marcas que precisam transmitir autoridade desde o primeiro segundo. Estrutura completa, copy estratégica e design sob medida.",
    items: ["Até 6 seções", "Design 100% sob medida", "Copy persuasiva inclusa", "SEO técnico avançado", "Integração WhatsApp"],
  },
  {
    tag: null,
    title: "Landing page de conversão",
    desc: "Página única, cirúrgica, focada em uma única ação. Para campanhas pagas, lançamentos ou captação qualificada de leads.",
    items: ["Estrutura focada em CRO", "A/B test ready", "Heatmap & analytics", "Carregamento ultra rápido", "Pixel & tags configurados"],
  },
  {
    tag: null,
    title: "E-commerce premium",
    desc: "Loja digital com identidade. Para marcas que entenderam que catálogo bonito não basta — experiência é o que faz vender.",
    items: ["Checkout otimizado", "Catálogo escalável", "Integração com gateways", "Painel administrativo", "Treinamento incluso"],
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 sm:py-32 px-6 bg-surface border-y border-aluminum/60">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-6">
              Serviços
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-ink text-balance leading-[1.05]">
              Três formatos. Um padrão de execução.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="relative flex flex-col p-8 bg-canvas border border-aluminum rounded-2xl hover:border-ink/30 hover:-translate-y-1 transition-all duration-300"
            >
              {s.tag && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-ink text-primary-foreground text-[10px] font-semibold tracking-widest uppercase rounded-full">
                  {s.tag}
                </span>
              )}
              <h3 className="font-serif text-2xl sm:text-3xl tracking-tight text-ink mb-4">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">{s.desc}</p>
              <ul className="flex flex-col gap-3 text-sm text-ink/85 mt-auto">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 size-1 rounded-full bg-ink shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
