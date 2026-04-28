import { whatsappLink } from "@/lib/whatsapp";

export function CTA() {
  return (
    <section className="py-24 sm:py-40 px-6 border-t border-aluminum/60 bg-surface">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <div className="size-16 rounded-2xl bg-mist border border-aluminum flex items-center justify-center mb-8 shadow-sm">
          <div className="size-4 bg-ink rounded-full" />
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-ink text-balance leading-[1.02] mb-6">
          Pronto para um site à <span className="italic text-muted-foreground/70">altura</span> do que você entrega?
        </h2>

        <p className="text-muted-foreground text-lg max-w-xl mb-10 text-pretty">
          Me conta sobre o seu projeto pelo WhatsApp. Em até 2 horas úteis você recebe minha resposta
          com próximos passos — sem formulário, sem robô, sem enrolação.
        </p>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="h-14 px-10 bg-ink text-primary-foreground rounded-full text-base font-medium hover:bg-ink/85 transition-all hover:scale-[1.02] inline-flex items-center justify-center gap-3 w-full sm:w-auto shadow-[0_10px_30px_-12px_oklch(0.145_0_0_/_0.4)]"
        >
          Iniciar conversa no WhatsApp
          <span className="text-primary-foreground/60" aria-hidden>→</span>
        </a>

        <p className="mt-6 text-xs text-muted-foreground tracking-wide">
          3 vagas abertas neste mês · Resposta em até 2h úteis
        </p>
      </div>
    </section>
  );
}
