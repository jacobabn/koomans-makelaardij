"use client";
import { useRef, useState, useEffect } from 'react';

interface CarouselImage { src: string; alt: string; }

export default function ImageCarousel({ images, autoPlay = true, interval = 5000 }: { images: CarouselImage[]; autoPlay?: boolean; interval?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent(prev => {
        const next = (prev + 1) % images.length;
        containerRef.current?.children[next]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        return next;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const scrollTo = (index: number) => {
    setCurrent(index);
    containerRef.current?.children[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative group overflow-hidden rounded-xl">
      <div ref={containerRef} className="flex overflow-x-auto scroll-snap-x snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
        {images.map((img, i) => (
          <div key={i} className="snap-start flex-shrink-0 w-full relative aspect-[16/9]">
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading={i === 0 ? 'eager' : 'lazy'} />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button onClick={() => scrollTo((current - 1 + images.length) % images.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-label="Vorige">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
          </button>
          <button onClick={() => scrollTo((current + 1) % images.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-label="Volgende">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button key={i} onClick={() => scrollTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-white w-6' : 'bg-white/60 hover:bg-white/80'}`} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
