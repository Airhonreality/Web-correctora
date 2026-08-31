import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Band } from "@/components/container";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { JsonLd } from "@/components/json-ld";
import { getBlogPostBySlug } from "@/lib/db/queries";
import { blogPostingJsonLd, pageMetadata } from "@/lib/seo";

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
          datePublished: post.createdAt,
          dateModified: post.updatedAt,
        })}
      />
      <Band tone="cream" className="py-16">
        <Container>
          <h1 className="font-display text-3xl italic sm:text-4xl">{post.title}</h1>
        </Container>
      </Band>

      <Container className="flex flex-col gap-4 py-16">
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
        <div className="mt-6">
          <WhatsAppButton message="Hola Amparo, quiero información sobre corrección de estilo.">
            Escríbeme por WhatsApp
          </WhatsAppButton>
        </div>
      </Container>
    </>
  );
}
