import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Band } from "@/components/container";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { getPublishedBlogPosts } from "@/lib/db/queries";
import {
  BLOG_CATEGORIES,
  categoryBySlug,
  categoryPillClass,
  formatBlogDate,
  readingTimeLabel,
} from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

type Post = Awaited<ReturnType<typeof getPublishedBlogPosts>>[number];

function Wide({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto max-w-6xl px-6 ${className}`}>{children}</div>;
}

function Cover({
  post,
  layout = "card",
}: {
  post: Post;
  layout?: "card" | "hero";
}) {
  if (!post.coverImageUrl) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center overflow-hidden bg-[linear-gradient(135deg,var(--color-nude),var(--color-cream-soft))]`}
      >
        <span className="select-none font-display text-[7rem] italic leading-none text-ink/10 sm:text-[9rem]">
          &ldquo;
        </span>
      </div>
    );
  }
  return (
    <Image
      src={post.coverImageUrl}
      alt={`Portada del artículo: ${post.title}`}
      fill
      sizes={
        layout === "hero"
          ? "(min-width: 1024px) 40vw, 100vw"
          : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      }
      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
    />
  );
}

function FeaturedPost({ post }: { post: Post }) {
  const href = `/blog/${post.slug}`;
  return (
    <article className="group grid overflow-hidden rounded-2xl border border-[#E5E0D8] bg-white shadow-[0_10px_30px_-12px_rgba(43,36,32,0.15)] lg:grid-cols-5">
      <div className="flex flex-col justify-center gap-5 p-8 lg:col-span-3 lg:p-12">
        <span
          className={`inline-block w-fit rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${categoryPillClass(post.category)}`}
        >
          {post.category ?? "Letras y corrección"}
        </span>
        <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          <Link href={href} className="transition-colors group-hover:text-terracotta">
            {post.title}
          </Link>
        </h2>
        <p className="leading-relaxed text-muted">{post.excerpt}</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-xs text-muted">
          <time dateTime={post.createdAt.toISOString()}>{formatBlogDate(post.createdAt)}</time>
          <span aria-hidden="true" className="text-ink/20">
            ·
          </span>
          <span>{readingTimeLabel(post.body)}</span>
        </div>
        <Link
          href={href}
          className="group/link mt-2 inline-flex w-fit items-center gap-2 border-b border-ink/25 pb-0.5 font-display text-lg italic transition-colors hover:border-ink"
        >
          Leer artículo
          <span className="text-terracotta transition-transform group-hover/link:translate-x-1">
            →
          </span>
        </Link>
      </div>
      <div className="relative min-h-[16rem] overflow-hidden lg:col-span-2 lg:min-h-full">
        <Cover post={post} layout="hero" />
      </div>
    </article>
  );
}

function PostCard({ post }: { post: Post }) {
  const href = `/blog/${post.slug}`;
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-xl border border-[#E5E0D8] bg-white shadow-[0_2px_10px_rgba(43,36,32,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-16px_rgba(43,36,32,0.28)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-soft">
        <Cover post={post} />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        {post.category ? (
          <span
            className={`inline-block w-fit rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] ${categoryPillClass(post.category)}`}
          >
            {post.category}
          </span>
        ) : null}
        <h3 className="text-xl font-bold leading-snug tracking-tight transition-colors group-hover:text-terracotta">
          {post.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted line-clamp-3">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-4 text-[11px] text-muted">
          <time dateTime={(post.publishedAt ?? post.createdAt).toISOString()}>
            {formatBlogDate(post.publishedAt ?? post.createdAt)}
          </time>
          <span>{readingTimeLabel(post.body)}</span>
        </div>
        <span className="inline-flex items-center gap-1.5 pt-1 text-xs font-bold uppercase tracking-wider text-terracotta">
          Leer más{" "}
          <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

function ConversionBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-blue-pastel p-8 sm:col-span-2 sm:py-12 lg:col-span-3">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 left-4 select-none font-display text-[120px] italic leading-none text-ink/10"
      >
        &
      </span>
      <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <p className="font-display text-2xl italic leading-snug sm:text-3xl">
            ¿Tienes dudas con la corrección de tu propio manuscrito?
          </p>
          <p className="mt-3 leading-relaxed text-ink/80">
            Envía las primeras 2 páginas de tu obra y recibe un diagnóstico de
            estilo gratuito, hecho a mano por Amparo Rozo.
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
  );
}

function FilterPills({ active }: { active: string | null }) {
  const base =
    "rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors";
  return (
    <nav aria-label="Filtrar por categoría" className="flex flex-wrap items-center gap-2">
      <Link
        href="/blog"
        className={`${base} ${
          !active
            ? "border-ink bg-ink text-cream"
            : "border-[#E5E0D8] bg-white text-muted hover:border-ink/30 hover:text-ink"
        }`}
      >
        Todos
      </Link>
      {BLOG_CATEGORIES.map((category) => {
        const isActive = active === category.slug;
        return (
          <Link
            key={category.slug}
            href={`/blog?categoria=${category.slug}`}
            className={`${base} ${
              isActive
                ? "border-ink bg-ink text-cream"
                : "border-[#E5E0D8] bg-white text-muted hover:border-ink/30 hover:text-ink"
            }`}
          >
            {category.label}
          </Link>
        );
      })}
    </nav>
  );
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>;
}): Promise<Metadata> {
  const { categoria } = await searchParams;
  const category = categoryBySlug(categoria);
  return pageMetadata({
    title: category ? `${category.label} — Blog` : "Blog",
    description: "Tips de redacción y corrección de estilo, por Amparo Rozo.",
    path: "/blog",
  });
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>;
}) {
  const posts = await getPublishedBlogPosts();
  const { categoria } = await searchParams;
  const activeCategory = categoria ? categoryBySlug(categoria) : null;

  const filteredPosts = activeCategory
    ? posts.filter((post) => post.category === activeCategory.label)
    : posts;
  const featured = activeCategory ? null : filteredPosts[0] ?? null;
  const gridPosts = activeCategory ? filteredPosts : filteredPosts.slice(1);

  const banner = <ConversionBanner />;
  const cards = gridPosts.map((post) => <PostCard key={post.slug} post={post} />);
  const gridItems: React.ReactNode[] = [];
  cards.forEach((card, index) => {
    gridItems.push(card);
    if (index === 2 && cards.length > 3) gridItems.push(banner);
  });
  if (cards.length <= 3 && posts.length > 0) gridItems.push(banner);

  return (
    <>
      <Band tone="cream" className="border-b border-[#E5E0D8]">
        <Wide className="py-14">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Blog</h1>
          <p className="mt-2 text-muted">Tips de redacción</p>
        </Wide>
      </Band>

      {posts.length === 0 ? (
        <Wide className="py-16">
          <p className="rounded-lg bg-white p-6 text-center text-muted border border-[#E5E0D8]">
            Blog en construcción — muy pronto vas a ver aquí los artículos.
          </p>
        </Wide>
      ) : (
        <Wide className="flex flex-col gap-10 py-14">
          {featured && <FeaturedPost post={featured} />}

          <FilterPills active={activeCategory?.slug ?? null} />

          {activeCategory ? (
            <p className="-mt-4 text-sm text-muted">
              {gridPosts.length === 0
                ? `Todavía no hay artículos en “${activeCategory.label}”.`
                : `${gridPosts.length} ${gridPosts.length === 1 ? "artículo" : "artículos"} en “${activeCategory.label}”.`}
            </p>
          ) : null}

          {gridPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {gridItems}
            </div>
          ) : (
            banner
          )}
        </Wide>
      )}
    </>
  );
}