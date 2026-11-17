"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type TestimonialSliderItem = {
  id: string | number;
  quote: string;
  clientName: string;
  bookTitle?: string | null;
};

export function TestimonialSlider({
  testimonials,
}: {
  testimonials: TestimonialSliderItem[];
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (testimonials.length <= 1 || paused) return;
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const timer = setInterval(
      () => setIndex((current) => (current + 1) % testimonials.length),
          10000,
    );
    return () => clearInterval(timer);
  }, [index, paused, testimonials.length]);

  if (testimonials.length === 0) return null;

  const t = testimonials[index % testimonials.length];
  const canNav = testimonials.length > 1;
  const prev = () =>
    setIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setIndex((current) => (current + 1) % testimonials.length);

  return (
    <section
      className="relative overflow-hidden bg-testimonial-bg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-4xl mx-auto py-12 sm:py-16 lg:py-20 px-6 sm:px-10 relative z-10">
        <figure className="text-center transition-opacity duration-500">
          <div
            className="pointer-events-none font-display text-[90px] leading-none text-ink/10 aria-hidden"
            aria-hidden="true"
          >
            &ldquo;
          </div>
          <blockquote className="mt-4 font-display text-2xl italic leading-relaxed text-ink sm:text-3xl">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-8 text-sm font-bold uppercase tracking-widest text-ink/80">
            — {t.clientName}
          </figcaption>
          {t.bookTitle && (
            <p className="mt-2 text-xs uppercase tracking-wider text-ink/60">
              Autor de {t.bookTitle}
            </p>
          )}
        </figure>

        {canNav && (
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={prev}
              aria-label="Testimonio anterior"
              className="rounded-full p-2 text-ink/70 hover:text-ink transition-colors hover:bg-ink/10"
            >
              <ChevronLeft size={20} strokeWidth={2} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-current={i === index}
                  className={`h-1.5 w-1.5 rounded-full transition-all ${
                    i === index
                      ? "w-5 bg-ink"
                      : "w-1.5 bg-ink/20 hover:bg-ink/40"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Siguiente testimonio"
              className="rounded-full p-2 text-ink/70 hover:text-ink transition-colors hover:bg-ink/10"
            >
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
