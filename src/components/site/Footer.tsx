import { whatsappLink } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-aluminum/60 bg-canvas">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-2 text-sm font-semibold tracking-tight uppercase text-ink">
          <span className="size-1.5 bg-ink rounded-full" />
          Vértice
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href="#portfolio" className="hover:text-ink transition-colors">Portfólio</a>
          <a href="#servicos" className="hover:text-ink transition-colors">Serviços</a>
          <a href="#processo" className="hover:text-ink transition-colors">Processo</a>
          <a href="#faq" className="hover:text-ink transition-colors">FAQ</a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            WhatsApp
          </a>
        </nav>
        <p className="text-xs text-muted-foreground tabular-nums">© {year} Vértice Studio</p>
      </div>
    </footer>
  );
}
