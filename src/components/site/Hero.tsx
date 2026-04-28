import { whatsappLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section id="top" className="relative pt-40 sm:pt-48 pb-24 sm:pb-32 px-6 flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.96_0_0)_0%,transparent_60%)]"
      />

      <div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-aluminum bg-surface text-xs font-medium text-muted-foreground mb-10 sm:mb-12 tracking-wide uppercase shadow-sm">
        <span className="relative flex size-1.5">
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
          <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
        </span>
        3 vagas abertas neste mês
      </div>

      <h1 className="reveal reveal-delay-1 font-serif text-[3.25rem] sm:text-[5rem] md:text-[6.5rem] leading-[0.95] tracking-[-0.02em] text-ink text-balance mb-6 sm:mb-8">
        Sites que <span className="italic text-muted-foreground/70">vendem</span> enquanto você dorme.
      </h1>

      <p className="reveal reveal-delay-2 text-base sm:text-lg md:text-xl text-muted-foreground max-w-[52ch] text-pretty mb-10 sm:mb-12">
        Construo presenças digitais de alta performance para profissionais e marcas que entenderam:
        um site comum custa caro em oportunidades perdidas. O seu não vai ser comum.
      </p>

      <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="h-12 px-8 bg-ink text-primary-foreground rounded-full text-base font-medium hover:bg-ink/85 transition-colors inline-flex items-center justify-center gap-2 min-w-[220px]"
        >
          Quero meu orçamento
          <span aria-hidden>→</span>
        </a>
        <a
          href="#portfolio"
          className="h-12 px-8 bg-surface border border-aluminum text-ink rounded-full text-base font-medium hover:bg-mist transition-colors inline-flex items-center justify-center min-w-[220px]"
        >
          Ver portfólio
        </a>
      </div>

      <p className="reveal reveal-delay-4 mt-8 text-xs text-muted-foreground tracking-wide">
        Resposta em até 2 horas úteis · Sem compromisso
      </p>
    </section>
  );
}
