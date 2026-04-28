import { useEffect, useRef, useState } from "react";

type Props = {
  url: string;
  title: string;
  /** Largura virtual de desktop em px (default 1440) */
  desktopWidth?: number;
};

/**
 * Renderiza o site dentro de um iframe usando viewport desktop (largura 1440px)
 * e aplica um scale CSS para caber proporcionalmente no card.
 * A altura do iframe é calculada para preencher exatamente o container,
 * evitando espaço em branco no preview.
 */
export function DesktopPreview({
  url,
  title,
  desktopWidth = 1440,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ scale: 0.4, height: 900 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const { width, height } = el.getBoundingClientRect();
      if (width > 0 && height > 0) {
        const scale = width / desktopWidth;
        // altura virtual do iframe necessária para preencher o container
        setSize({ scale, height: height / scale });
      }
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
    >
      <iframe
        src={url}
        title={title}
        loading="lazy"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
        referrerPolicy="no-referrer"
        scrolling="no"
        className="block border-0 bg-surface origin-top-left"
        style={{
          width: `${desktopWidth}px`,
          height: `${size.height}px`,
          transform: `scale(${size.scale})`,
        }}
      />
    </div>
  );
}
