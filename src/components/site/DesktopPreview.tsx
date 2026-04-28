import { useEffect, useRef, useState } from "react";

type Props = {
  url: string;
  title: string;
  /** Largura virtual de desktop em px (default 1440) */
  desktopWidth?: number;
  /** Altura virtual usada para permitir scroll visual do preview */
  desktopHeight?: number;
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
  desktopHeight = 2200,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewport, setViewport] = useState({ scale: 0.4, frameHeight: desktopHeight });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const { width, height } = el.getBoundingClientRect();
      if (width > 0 && height > 0) {
        const scale = width / desktopWidth;
        setViewport({
          scale,
          frameHeight: height / scale,
        });
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
        scrolling="yes"
        className="absolute left-0 top-0 block border-0 bg-surface origin-top-left"
        style={{
          width: `${desktopWidth}px`,
          height: `${viewport.frameHeight}px`,
          transform: `scale(${viewport.scale})`,
          pointerEvents: "auto",
          touchAction: "auto",
        }}
      />
    </div>
  );
}
