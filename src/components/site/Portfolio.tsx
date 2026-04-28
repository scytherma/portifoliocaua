import { whatsappLink } from "@/lib/whatsapp";

type Project = {
  title: string;
  category: string;
  year: string;
  tags: string[];
  url: string;
  result: string;
  offset?: boolean;
};

// 👉 Para trocar por sites reais seus, basta editar os campos `url` abaixo.
// O preview carrega o site dentro de um iframe — o visitante pode rolar e interagir.
const projects: Project[] = [
  {
    title: "Lumina Capital",
    category: "Plataforma de investimento institucional",
    year: "2024",
    tags: ["Fintech", "Web App"],
    url: "https://stripe.com",
    result: "+62% em leads qualificados em 90 dias",
  },
  {
    title: "Maison L'Aura",
    category: "E-commerce de alta perfumaria",
    year: "2024",
    tags: ["E-commerce", "Direção de arte"],
    url: "https://www.aesop.com",
    result: "Ticket médio dobrado no primeiro trimestre",
    offset: true,
  },
  {
    title: "Terapeuta Fernanda",
    category: "Massagista · Terapeuta somática",
    year: "2024",
    tags: ["Bem-estar", "Agendamento"],
    url: "https://terapeutafernanda.lovable.app",
    result: "+38% de agendamentos online no mês 1",
  },
  {
    title: "Casa Dom",
    category: "Restaurante autoral",
    year: "2023",
    tags: ["Hospitalidade", "Reservas"],
    url: "https://www.eleven-madison.com",
    result: "Lista de espera permanente em 2 meses",
    offset: true,
  },
  {
    title: "Linear Studio",
    category: "SaaS B2B em fase de tração",
    year: "2024",
    tags: ["SaaS", "Landing"],
    url: "https://linear.app",
    result: "CAC reduzido em 41% após o relançamento",
  },
  {
    title: "Atelier 9",
    category: "Escritório de arquitetura",
    year: "2023",
    tags: ["Portfólio", "Editorial"],
    url: "https://bjarkeingels.com",
    result: "3 projetos premium fechados em 30 dias",
    offset: true,
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 sm:py-32 px-6 max-w-[90rem] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 sm:mb-20">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-6">
            Portfólio selecionado
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-ink text-balance leading-[1.05]">
            Trabalho que <span className="italic text-muted-foreground/70">conversa</span> e converte.
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm text-sm">
          Cada projeto começa por uma pergunta: <em>qual ação esse site precisa provocar?</em> A partir
          daí, tudo é decisão estratégica.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 sm:gap-y-24">
        {projects.map((p) => (
          <article key={p.title} className={`group ${p.offset ? "md:mt-24" : ""}`}>
            <div
              className="relative isolate bg-surface rounded-xl overflow-hidden aspect-[16/11] mb-6 border border-aluminum transition-all duration-500 group-hover:shadow-[0_24px_48px_-20px_rgba(0,0,0,0.18)] group-hover:-translate-y-1"
            >
              {/* Preview real do site em viewport nativa para permitir scroll dentro do card */}
              <iframe
                src={p.url}
                title={`Preview ${p.title}`}
                loading="lazy"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
                referrerPolicy="no-referrer"
                scrolling="yes"
                className="absolute inset-0 block w-full h-full border-0 bg-surface"
              />

              {/* Badge de resultado (não bloqueia o iframe) */}
              <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 pointer-events-none">
                <div className="bg-surface/95 backdrop-blur-md border border-aluminum px-4 py-2.5 rounded-full text-xs font-medium text-ink inline-flex items-center gap-2 shadow-lg">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  {p.result}
                </div>
              </div>

              {/* Botão real "abrir site" — único elemento clicável sobre o iframe */}
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir site ${p.title} em nova aba`}
                className="absolute top-3 right-3 z-20 bg-ink text-canvas text-[10px] uppercase tracking-[0.15em] font-medium px-3 py-1.5 rounded-full opacity-90 hover:opacity-100 shadow-md"
              >
                Abrir site ↗
              </a>
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl tracking-tight text-ink">{p.title}</h3>
                <p className="text-muted-foreground text-sm mt-1.5 mb-4">{p.category}</p>
                <div className="flex gap-2 flex-wrap">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-surface border border-aluminum rounded-md text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-sm font-medium text-muted-foreground/70 tabular-nums">{p.year}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 sm:mt-24 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        <p className="text-muted-foreground text-sm">Quer ver seu projeto entre os próximos?</p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-ink underline underline-offset-4 hover:no-underline"
        >
          Vamos conversar →
        </a>
      </div>
    </section>
  );
}
