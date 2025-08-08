"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function InverseScrollGallery() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const colRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    let rafId: number;

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;
    const targets = [0, 0, 0, 0];
    const currents = [0, 0, 0, 0];

    const tick = () => {
      if (!containerRef.current) {
        rafId = requestAnimationFrame(tick);
        return;
      }
      const rect = containerRef.current.getBoundingClientRect();
      const viewport = window.innerHeight;
      const total = rect.height + viewport;
      const progress = Math.min(1, Math.max(0, (viewport - rect.top) / total));

      const baseAmplitude = window.innerWidth < 768 ? 120 : 220; // px
      // Alternate directions: up, down, up, down
      targets[0] = -progress * baseAmplitude;
      targets[1] = progress * baseAmplitude;
      targets[2] = -progress * baseAmplitude;
      targets[3] = progress * baseAmplitude;

      for (let i = 0; i < colRefs.current.length; i += 1) {
        currents[i] = lerp(currents[i], targets[i], 0.12);
        const col = colRefs.current[i];
        if (col) col.style.transform = `translateY(${currents[i]}px)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const setColRef = (el: HTMLDivElement | null, idx: number) => {
    colRefs.current[idx] = el;
  };

  const renderColumn = (idx: number) => (
    <div key={idx} className="overflow-hidden">
      <div ref={(el) => setColRef(el, idx)} className="flex flex-col gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="w-full">
            <Image
              src="/placeholder.png"
              alt={`Placeholder ${i + 1}`}
              width={800}
              height={1000}
              className="w-full h-auto rounded"
              priority={idx === 0 && i < 2}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section ref={containerRef} className="my-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {Array.from({ length: 4 }).map((_, idx) => renderColumn(idx))}
      </div>
    </section>
  );
}

