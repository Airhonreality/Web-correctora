"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { genrePillClass } from "@/lib/portfolio";

export type FeaturedBookData = {
  id: number;
  bookTitle: string;
  authorName: string;
  genre: string;
  summary: string;
  coverImageUrl: string | null;
  testimonial: { clientName: string; quote: string } | null;
};

export function FeaturedBookCarousel({ books }: { books: FeaturedBookData[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (books.length <= 1 || paused) return;
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const timer = setInterval(
      () => setIndex((current) => (current + 1) % books.length),
      6000,
    );
    return () => clearInterval(timer);
  }, [index, paused, books.length]);

  if (books.length === 0) return null;

  const book = books[index % books.length];
  const canNav = books.length > 1;
  const prev = () => setIndex((current) => (current - 1 + books.length) % books.length);
  const next = () => setIndex((current) => (current + 1) % books.length);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <style>{`
        @keyframes heroFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>

      <article
        key={book.id}
        className="grid animate-[heroFade_0.5s_ease-out] gap-10 rounded-lg bg-white p-8 shadow-[0_24px_60px_-24px_rgba(43,36,32,0.3)] md:grid-cols-5 md:gap-12 md:p-12"
      >
        <div className="md:col-span-2">
          {book.coverImageUrl ? (
            <Image
              src={book.coverImageUrl}
              alt={`Portada de ${book.bookTitle}`}
              width={280}
              height={420}
              className="aspect-[2/3] w-full max-w-[260px] rounded object-cover shadow-md"
            />
          ) : (
            <div className="flex aspect-[2/3] w-full max-w-[260px] items-center justify-center rounded bg-cream-soft text-center text-xs text-muted">
              Portada próximamente
            </div>
          )}
        </div>
        <div className="flex flex-col md:col-span-3">
          <span
            className={`inline-block w-fit rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] ${genrePillClass(book.genre)}`}
          >
            {book.genre}
          </span>
          <h2 className="mt-3 font-display text-3xl italic leading-tight">
            {book.bookTitle}
          </h2>
          <p className="mt-2 text-sm font-semibold text-muted">{book.authorName}</p>
          <div className="relative mt-8 border-t border-ink/10 pt-8">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-12 left-0 select-none font-display text-[110px] leading-none text-terracotta/15"
            >
              &ldquo;
            </span>
            {book.testimonial ? (
              <>
                <p className="relative font-display text-lg leading-relaxed italic">
                  &ldquo;{book.testimonial.quote}&rdquo;
                </p>
                <p className="relative mt-3 text-sm font-semibold text-muted">
                  — {book.testimonial.clientName}
                </p>
              </>
            ) : (
              <p className="relative font-display text-lg leading-relaxed italic">
                {book.summary}
              </p>
            )}
          </div>
          <div className="mt-auto pt-10">
            <Link
              href="/correccion-de-estilo"
              className="group inline-flex items-center gap-2 border-b border-ink/25 pb-0.5 font-display text-lg italic transition-colors hover:border-ink"
            >
              Solicitar revisión de un manuscrito similar
              <span className="text-terracotta transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </article>

      {canNav && (
        <div className="mt-6 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={prev}
            aria-label="Libro anterior"
            className="rounded-full p-1.5 text-muted transition-colors hover:bg-terracotta/10 hover:text-terracotta"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            {books.map((b, i) => (
              <button
                key={b.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ver ${b.bookTitle}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-terracotta" : "w-2 bg-ink/15 hover:bg-ink/40"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Siguiente libro"
            className="rounded-full p-1.5 text-muted transition-colors hover:bg-terracotta/10 hover:text-terracotta"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
}