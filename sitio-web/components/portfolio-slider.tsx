"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Container } from "@/components/container";
import { WhatsAppButton } from "@/components/whatsapp-button";

export type PortfolioSliderItem = {
  id: number;
  bookTitle: string;
  authorName: string;
  genre: string;
  correctionSummary: string;
  coverImageUrl: string | null;
};

export type SliderTestimonial = {
  id: number;
  clientName: string;
  bookTitle: string;
  quote: string;
};

function normalizeTitle(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function summaryLines(summary: string) {
  return summary
    .split(/\s*,\s*/)
    .map((s) => s.trim().replace(/[.,;:]+$/, ""))
    .filter(Boolean);
}

function Card({
  item,
  onOpen,
}: {
  item: PortfolioSliderItem;
  onOpen: (item: PortfolioSliderItem) => void;
}) {
  const genre = item.genre.replace(/[.,;:]+$/, "");

  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      aria-label={`Ver detalle de ${item.bookTitle}`}
      className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-lg border border-ink/5 bg-cream text-left shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
    >
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-cream-soft">
        {item.coverImageUrl ? (
          <Image
            src={item.coverImageUrl}
            alt={`Portada de ${item.bookTitle}`}
            fill
            sizes="19rem"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-cream-soft p-4 text-center text-xs text-muted">
            Portada próximamente
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted/70">
          {genre}
        </p>
        <p className="font-display text-xl leading-snug text-ink">
          {item.bookTitle}
        </p>
        <p className="text-sm font-semibold text-muted">{item.authorName}</p>
        <p className="line-clamp-1 text-xs text-muted/80">
          {summaryLines(item.correctionSummary).slice(0, 2).join(" · ")}
        </p>
      </div>
    </button>
  );
}

function PortfolioModal({
  item,
  testimonial,
  onClose,
}: {
  item: PortfolioSliderItem;
  testimonial?: SliderTestimonial;
  onClose: () => void;
}) {
  const genre = item.genre.replace(/[.,;:]+$/, "");
  const details = summaryLines(item.correctionSummary);
  const message = `Hola Amparo, vi tu trabajo en "${item.bookTitle}" (${genre}). Quiero una corrección así para mi manuscrito.`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Detalle de ${item.bookTitle}`}
    >
      <div
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
      />

      <div className="relative grid w-full max-w-3xl gap-0 overflow-hidden rounded-lg bg-cream shadow-2xl md:grid-cols-[minmax(0,14rem)_1fr]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar detalle"
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink shadow-sm transition-colors hover:bg-bg-alt"
          autoFocus
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="bg-cream-soft p-6 md:p-8">
          <div className="relative mx-auto aspect-[2/3] w-full max-w-[13rem] overflow-hidden rounded bg-cream-soft shadow-lg">
            {item.coverImageUrl ? (
              <Image
                src={item.coverImageUrl}
                alt={`Portada de ${item.bookTitle}`}
                fill
                sizes="13rem"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center p-4 text-center text-xs text-muted">
                Portada próximamente
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4 p-6 md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-dark">
            {genre}
          </p>
          <div>
            <h3 className="font-display text-2xl italic leading-snug text-ink">
              {item.bookTitle}
            </h3>
            <p className="mt-1 text-sm font-semibold text-muted">
              {item.authorName}
            </p>
          </div>

          {details.length > 0 && (
            <ul className="flex flex-col gap-1.5 text-sm text-ink/80">
              {details.map((detail) => (
                <li key={detail} className="flex items-start gap-2">
                  <span
                    className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-teal-dark"
                    aria-hidden="true"
                  />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}

          {testimonial && (
            <blockquote className="rounded-lg border-l-4 border-teal bg-bg-alt p-4">
              <p className="text-sm italic leading-relaxed text-ink/85">
                {`"${testimonial.quote}"`}
              </p>
              <footer className="mt-2 text-xs font-bold uppercase tracking-wider text-teal-dark">
                — {testimonial.clientName}
              </footer>
            </blockquote>
          )}

          <div className="mt-auto pt-2">
            <WhatsAppButton message={message}>
              Quiero una corrección así
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PortfolioSlider({
  items,
  testimonials = [],
}: {
  items: PortfolioSliderItem[];
  testimonials?: SliderTestimonial[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<PortfolioSliderItem | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const testimonialByTitle = useMemo(() => {
    const map = new Map<string, SliderTestimonial>();
    for (const t of testimonials) map.set(normalizeTitle(t.bookTitle), t);
    return map;
  }, [testimonials]);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  useEffect(() => {
    if (!activeItem) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveItem(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeItem]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const distance = card?.offsetWidth ?? el.clientWidth * 0.75;
    el.scrollBy({ left: distance * direction, behavior: "smooth" });
  };

  if (items.length === 0) return null;

  const arrowClass =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-transparent text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream disabled:pointer-events-none disabled:opacity-30";
  const activeTestimonial = activeItem
    ? (testimonialByTitle.get(normalizeTitle(activeItem.bookTitle)) ?? undefined)
    : undefined;

  return (
    <div>
      <Container className="max-w-6xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-xl flex-col gap-3">
            <h2 className="font-display text-3xl italic text-ink sm:text-4xl">
              Libros que he corregido
            </h2>
            <p className="text-lg text-muted">
              Una muestra de manuscritos — de distintos géneros, todos con el
              mismo cuidado palabra por palabra.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/portafolio"
              className="text-xs font-bold uppercase tracking-widest text-teal-dark underline decoration-teal/40 underline-offset-4 transition-colors hover:text-teal"
            >
              Ver todos los libros corregidos
            </Link>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                disabled={!canPrev}
                aria-label="Libros anteriores"
                className={arrowClass}
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                disabled={!canNext}
                aria-label="Libros siguientes"
                className={arrowClass}
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative mt-8">
        {canPrev && (
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-sand to-transparent md:w-16"
            aria-hidden="true"
          />
        )}
        {canNext && (
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-sand to-transparent md:w-16"
            aria-hidden="true"
          />
        )}

        <div
          ref={trackRef}
          className="hide-scrollbar overflow-x-auto scroll-smooth px-6 snap-x snap-mandatory"
        >
          <div className="mx-auto flex w-max gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                data-card
                className="w-[min(78vw,19rem)] flex-none snap-start sm:w-72 lg:w-80"
              >
                <Card item={item} onOpen={setActiveItem} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeItem && (
        <PortfolioModal
          item={activeItem}
          testimonial={activeTestimonial}
          onClose={() => setActiveItem(null)}
        />
      )}
    </div>
  );
}