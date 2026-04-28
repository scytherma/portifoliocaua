import { useEffect, useRef, useState } from "react";

type Props = {
  url: string;
  title: string;
  /** Largura virtual de desktop em px (default 1440) */
  desktopWidth?: number;
  /** Altura virtual de desktop em px (default 900) */
  desktopHeight?: number;
};

/**
 * Renderiza o site dentro de um iframe usando viewport desktop (1440x900)
 * e aplica um scale CSS para caber proporcionalmente no card.
 * Resultado: o site aparece como aparece no desktop, não em modo tablet/mobile.
 */
export function DesktopPreview({
  url,
  title,
  desktopWidth = 1440,
  desktopHeight = 900,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.4);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const { width } = el.getBoundingClientRect();
      if (width > 0) setScale(width / desktopWidth);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [desktopWidth]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden bg-surface"
      style={{ height: "100%" }}
    >
      <iframe
        src={url}
        title={title}
        loading="lazy"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
        referrerPolicy="no-referrer"
        scrolling="yes"
        className="block border-0 bg-surface origin-top-left"
        style={{
          width: `${desktopWidth}px`,
          height: `${desktopHeight / scale}px`,
          transform: `scale(${scale})`,
        }}
      />
    </div>
  );
}
