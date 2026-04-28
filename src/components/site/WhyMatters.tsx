const points = [
  {
    n: "01",
    title: "Seu site é seu vendedor 24/7",
    body: "Enquanto você dorme, ele recebe, qualifica e converte. Um site mal feito demite esse vendedor todos os dias.",
  },
  {
    n: "02",
    title: "Você cobra o que aparenta cobrar",
    body: "Cliente paga premium para quem comunica premium. Um site amador puxa seu preço para baixo, sem você perceber.",
  },
  {
    n: "03",
    title: "Atenção é a moeda mais cara hoje",
    body: "Você tem 3 segundos para conquistar o lead. Cada detalhe — tipografia, ritmo, hierarquia — define se ele fica ou rola.",
  },
];

export function WhyMatters() {
  return (
    <section className="py-24 sm:py-32 px-6 max-w-7xl mx-auto">
      <div className="max-w-3xl mb-16 sm:mb-20">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-6">
          Por que isso importa
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-ink text-balance leading-[1.05]">
          O custo invisível de ter um site <span className="italic text-muted-foreground/70">qualquer.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-aluminum/60 border border-aluminum/60 rounded-2xl overflow-hidden">
        {points.map((p) => (
          <div key={p.n} className="bg-surface p-8 sm:p-10 flex flex-col gap-6 hover:bg-mist transition-colors">
            <span className="font-serif text-2xl text-muted-foreground tabular-nums">{p.n}</span>
            <h3 className="font-serif text-2xl sm:text-3xl tracking-tight text-ink leading-tight">
              {p.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
