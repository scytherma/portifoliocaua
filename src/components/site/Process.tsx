const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    body: "Entendo o seu negócio, seu cliente e a ação que o site precisa provocar. Sem briefing genérico — uma conversa de verdade.",
    duration: "Dia 1",
  },
  {
    n: "02",
    title: "Estratégia & Copy",
    body: "Defino arquitetura, hierarquia e cada palavra. A copy é escrita antes do design — porque design serve à mensagem, não o contrário.",
    duration: "Dia 1",
  },
  {
    n: "03",
    title: "Design",
    body: "Layout sob medida, com revisões inclusas. Você aprova cada seção antes de irmos para o desenvolvimento.",
    duration: "Dia 1-2",
  },
  {
    n: "04",
    title: "Desenvolvimento",
    body: "Código performático, SEO técnico, integrações com WhatsApp e analytics. Tudo testado em múltiplos dispositivos.",
    duration: "Dia 2-3",
  },
  {
    n: "05",
    title: "Lançamento",
    body: "Subimos no ar, monitoramos a primeira semana e ajustamos o que for necessário. Suporte de 30 dias incluso.",
    duration: "Dia 3",
  },
];

export function Process() {
  return (
    <section id="processo" className="py-24 sm:py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-32">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-6">
              Processo
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-ink text-balance leading-[1.05] mb-6">
              Do briefing ao ar em <span className="italic text-muted-foreground/70">1 a 3 dias</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Sem etapas misteriosas, sem prazos elásticos. Você sabe exatamente onde estamos e o que vem
              depois — sempre.
            </p>
          </div>
        </div>

        <ol className="md:col-span-8 flex flex-col">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`grid grid-cols-[auto_1fr_auto] gap-6 sm:gap-8 py-8 sm:py-10 ${
                i !== steps.length - 1 ? "border-b border-aluminum/60" : ""
              }`}
            >
              <span className="font-serif text-xl sm:text-2xl text-muted-foreground tabular-nums pt-1">
                {s.n}
              </span>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl tracking-tight text-ink mb-3">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty max-w-prose">{s.body}</p>
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground tracking-wide pt-2 whitespace-nowrap">
                {s.duration}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
