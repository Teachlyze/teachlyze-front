import React, { useEffect, useRef, useState } from "react";

interface OpnionItem {
  id: string | number;
  name: string;
  opnion: string;
  stars: string | number;
}

interface CarouselProps {
  opnions: OpnionItem[];
}

export const Carousel = ({ opnions }: CarouselProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplica os itens para criar o efeito de loop
  const duplicatedItems = [...opnions, ...opnions];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    let interval: NodeJS.Timeout;

    const scroll = () => {
      if (container) {
        scrollAmount += scrollStep;
        container.scrollLeft = scrollAmount;

        // Se chegou no meio (final do primeiro conjunto), reinicia o scroll para o início suavemente
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
          container.scrollLeft = 0;
        }
      }
    };

    interval = setInterval(scroll, 16); // 60fps aproximado

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="overflow-x-auto scrollbar-none"
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex space-x-4 p-4 w-max">
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="w-64 h-40 bg-blue-500 gap-2 rounded-lg flex flex-col items-start justify-between p-2 text-white"
          >
            <div className="text-start">
              <span>{item.stars}</span>
              <p className="line-clamp-2 font-bold">{item.opnion}</p>
            </div>
            <div className="text-start">
              <p>{item.name}</p>
              <p>{item.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
