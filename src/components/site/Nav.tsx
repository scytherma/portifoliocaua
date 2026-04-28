import { whatsappLink } from "@/lib/whatsapp";

export function Nav() {
  return (
    <nav className="fixed top-4 sm:top-6 inset-x-0 mx-auto max-w-fit px-2 py-2 bg-surface/85 backdrop-blur-xl border border-aluminum/70 rounded-full flex items-center justify-between gap-4 sm:gap-12 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.06)] z-50">
      <a href="#top" className="pl-3 sm:pl-4 font-semibold tracking-tight text-sm uppercase flex items-center gap-2 text-ink">
        <span className="size-1.5 bg-ink rounded-full" />
        Vértice
      </a>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
        <a href="#portfolio" className="hover:text-ink transition-colors">Portfólio</a>
        <a href="#servicos" className="hover:text-ink transition-colors">Serviços</a>
        <a href="#processo" className="hover:text-ink transition-colors">Processo</a>
        <a href="#faq" className="hover:text-ink transition-colors">FAQ</a>
      </div>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 sm:px-5 py-2 sm:py-2.5 bg-ink text-primary-foreground rounded-full text-sm font-medium hover:bg-ink/85 transition-colors inline-flex items-center gap-2"
      >
        Falar agora
      </a>
    </nav>
  );
}
