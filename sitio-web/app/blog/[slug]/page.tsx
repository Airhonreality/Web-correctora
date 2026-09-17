import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Band } from "@/components/container";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { JsonLd } from "@/components/json-ld";
import { getBlogPostBySlug } from "@/lib/db/queries";
import { blogPostingJsonLd, pageMetadata } from "@/lib/seo";
import { categoryPillClass, formatBlogDate, readingTimeLabel } from "@/lib/blog";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Artículo no encontrado" };
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) notFound();

  const paragraphs = post.body.split(/\n\s*\n/).filter(Boolean);

  return (
    <>
      <JsonLd
        data={blogPostingJsonLd({
          title: post.title,
          excerpt: post.excerpt,
          slug: post.slug,
          datePublished: post.publishedAt ?? post.createdAt,
          dateModified: post.updatedAt,
        })}
      />
      <Band tone="cream" className="border-b border-[#E5E0D8]">
        <div className="mx-auto max-w-3xl px-6 py-14 sm:py-16">
          {post.category ? (
            <span
              className={`inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${categoryPillClass(post.category)}`}
            >
              {post.category}
            </span>
          ) : null}
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted">
            <time dateTime={(post.publishedAt ?? post.createdAt).toISOString()}>
              {formatBlogDate(post.publishedAt ?? post.createdAt)}
            </time>
            <span aria-hidden="true" className="text-ink/20">
              ·
            </span>
            <span>{readingTimeLabel(post.body)}</span>
          </div>
        </div>
      </Band>

      <div className="mx-auto max-w-3xl px-6 py-14">
        {post.coverImageUrl ? (
          <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl border border-[#E5E0D8] bg-cream-soft shadow-[0_14px_40px_-18px_rgba(43,36,32,0.25)]">
            <Image
              src={post.coverImageUrl}
              alt={`Portada del artículo: ${post.title}`}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>
        ) : null}

        <div className="flex flex-col gap-4">
          {paragraphs.map((paragraph, i) => (
            <p key={i} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="relative mt-12 overflow-hidden rounded-2xl bg-blue-pastel p-8 sm:p-10">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-6 left-4 select-none font-display text-[110px] italic leading-none text-ink/10"
          >
            &
          </span>
          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <p className="font-display text-xl italic leading-snug sm:text-2xl">
                ¿Este artículo te ayudó con tu manuscrito?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">
                Envía las primeras 2 páginas de tu obra y recibe un diagnóstico
                de estilo gratuito, hecho a mano por Amparo Rozo.
              </p>
            </div>
            <WhatsAppButton
              variant="terracotta"
              className="shrink-0 whitespace-nowrap"
              message="Hola Amparo, quiero enviar las primeras 2 páginas de mi obra para recibir un diagnóstico de estilo gratuito."
            >
              Enviar mi borrador →
            </WhatsAppButton>
          </div>
        </div>

        <Link
          href="/blog"
          className="mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted transition-colors hover:text-ink"
        >
          <span aria-hidden="true">←</span> Volver al blog
        </Link>
      </div>
    </>
  );
}