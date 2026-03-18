"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface CarouselProps {
  images: string[];
  alt: string;
  /** Fixed width in px, default 420 */
  width?: number;
  /** Height in px, e.g. 320 for project cards */
  height?: number;
  className?: string;
}

/**
 * Image slider with << / >> arrows (semi-transparent dark bg, green border),
 * dot indicators (active green 8px, inactive tertiary 6px).
 */
export function Carousel({
  images,
  alt,
  width = 420,
  height = 320,
  className,
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const goPrev = useCallback(() => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);
  const goNext = useCallback(() => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded border border-border",
        className,
      )}
      style={{ width, height }}
    >
      <Image
        src={images[index]!}
        alt={`${alt} ${index + 1}`}
        width={width}
        height={height}
        className="h-full w-full object-contain"
        unoptimized
      />
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded border border-accent-green bg-[#0a0a0acc] font-mono text-[12px] text-accent-green transition-opacity hover:opacity-90"
            aria-label="Previous image"
          >
            &lt;&lt;
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded border border-accent-green bg-[#0a0a0acc] font-mono text-[12px] text-accent-green transition-opacity hover:opacity-90"
            aria-label="Next image"
          >
            &gt;&gt;
          </button>
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={cn(
                  "rounded-full transition-colors",
                  i === index
                    ? "h-2 w-2 bg-accent-green"
                    : "h-1.5 w-1.5 bg-foreground-tertiary",
                )}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
