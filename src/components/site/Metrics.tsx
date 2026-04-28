const metrics = [
  { value: "99", suffix: "/100", label: "Lighthouse médio" },
  { value: "0.8", suffix: "s", label: "Carregamento médio" },
  { value: "+47", suffix: "%", label: "Aumento em conversão" },
  { value: "100", suffix: "%", label: "Sites entregues no prazo" },
];

export function Metrics() {
  return (
    <section className="py-20 sm:py-24 bg-surface border-y border-aluminum/60">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 md:divide-x divide-aluminum/60">
        {metrics.map((m) => (
          <div key={m.label} className="flex flex-col gap-1 md:px-8 first:md:pl-0 last:md:pr-0">
            <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter text-ink tabular-nums leading-none">
              {m.value}
              <span className="text-2xl sm:text-3xl text-muted-foreground/60">{m.suffix}</span>
            </span>
            <span className="text-xs sm:text-sm text-muted-foreground font-medium mt-3">{m.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
