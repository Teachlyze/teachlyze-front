import React, { useEffect, useRef, useState } from "react";

interface OpnionItem {
  id: string | number;
  name: string;
  opnion: string;
  stars: string | number;
}

interface CarouselProps {
  opnions: OpnionItem[];
  style: string 
}

export const Carousel = ({ opnions, style }: CarouselProps) => {
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
      className="overflow-hidden"
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex gap-8 p-4 w-max">
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className={style}
          >
            <div className="flex flex-col items-start text-start justify-center">
              <span className="text-lg">⭐⭐⭐⭐</span>
              <p className="text-start w-full h-fit 
              max-sm:text-base text-wrap line-clamp-2 text-lg 2xl:text-lg min-h-[50%]">{item.opnion}</p>
            </div>
            <div>
              <p className="text-start w-24 font-bold">{item.name}</p>
              <p className="uppercase text-start w-24">{item.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
