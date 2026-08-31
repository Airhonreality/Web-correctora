"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Script from "next/script";

type Testimonial = {
  id: number;
  clientName: string;
  bookTitle: string | null;
  quote: string;
};

export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  if (!testimonials || testimonials.length === 0) return null;

  const jsonLd = testimonials.map(t => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Person",
      "name": "Amparo Rozo"
    },
    "author": {
      "@type": "Person",
      "name": t.clientName
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": t.quote
  }));

  return (
    <div className="relative w-full max-w-4xl mx-auto group">
      <Script
        id="testimonials-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="w-full flex-none snap-center px-4 sm:px-6">
            <blockquote className="relative mx-auto w-full max-w-4xl rounded-2xl bg-blue-pastel px-8 py-12 text-center shadow-sm md:px-16 md:py-16">
              <div 
                className="absolute left-1/2 top-4 -translate-x-1/2 font-display text-[120px] leading-none text-teal-dark opacity-15 pointer-events-none" 
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <p className="relative z-10 font-display text-lg leading-relaxed italic text-ink md:text-2xl mt-8">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="relative z-10 mt-8 flex flex-col items-center justify-center gap-1 not-italic font-sans text-sm">
                <span className="font-bold uppercase tracking-wider text-ink/80">
                  {testimonial.clientName}
                </span>
                {testimonial.bookTitle && (
                  <span className="text-muted">
                    Autor de <em className="font-semibold text-teal-dark">{testimonial.bookTitle}</em>
                  </span>
                )}
              </footer>
            </blockquote>
          </div>
        ))}
      </div>

      {testimonials.length > 1 && (
        <>
          <button 
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 z-10 p-2 md:p-3 rounded-full bg-white/90 backdrop-blur shadow-sm text-ink hover:bg-white transition-colors md:opacity-0 md:group-hover:opacity-100 focus:opacity-100"
            aria-label="Anterior testimonio"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 z-10 p-2 md:p-3 rounded-full bg-white/90 backdrop-blur shadow-sm text-ink hover:bg-white transition-colors md:opacity-0 md:group-hover:opacity-100 focus:opacity-100"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
}
