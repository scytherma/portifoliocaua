import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    q: "Quanto custa um site?",
    a: "Cada projeto é orçado individualmente — depende de escopo, número de páginas e nível de personalização. O investimento começa em uma faixa premium porque o resultado também é. Sites institucionais a partir de R$ 4.500.",
  },
  {
    q: "Em quanto tempo fica pronto?",
    a: "O prazo padrão é de 21 dias úteis, do briefing ao ar. Projetos maiores podem se estender para 30-45 dias, sempre alinhado e cronograma compartilhado.",
  },
  {
    q: "Você faz a copy ou eu preciso entregar pronta?",
    a: "Eu escrevo. A copy é parte do serviço — porque design e palavras precisam nascer juntas para funcionar. Você revisa e aprova antes de seguirmos.",
  },
  {
    q: "E o domínio, hospedagem e manutenção?",
    a: "Te oriento em cada decisão e cuido da configuração inicial. Para manutenção, ofereço planos mensais opcionais — você só contrata se quiser.",
  },
  {
    q: "Posso editar o site depois?",
    a: "Sim. Entrego sites em plataformas onde você consegue editar textos e imagens sozinho, com treinamento incluso. Sem ficar refém.",
  },
  {
    q: "E se eu não gostar do resultado?",
    a: "Por isso o processo tem aprovações em etapas. Você assina cada fase antes de seguirmos — o que evita surpresas no final.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-6">
          Perguntas frequentes
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-ink text-balance leading-[1.05]">
          Antes de você <span className="italic text-muted-foreground/70">perguntar.</span>
        </h2>
      </div>

      <Accordion type="single" collapsible className="border-t border-aluminum/60">
        {items.map((item, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="border-b border-aluminum/60"
          >
            <AccordionTrigger className="text-left text-base sm:text-lg font-medium text-ink py-6 hover:no-underline hover:text-ink/70">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pr-8">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
