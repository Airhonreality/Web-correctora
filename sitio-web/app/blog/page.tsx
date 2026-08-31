import Link from "next/link";
import { Container, Band } from "@/components/container";
import { getPublishedBlogPosts } from "@/lib/db/queries";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog",
  description: "Tips de redacción y corrección de estilo, por Amparo Rozo.",
  path: "/blog",
});

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts();

  return (
    <>
      <Band tone="cream" className="py-16">
        <Container>
          <h1 className="font-display text-4xl italic">Blog</h1>
          <p className="mt-2 text-muted">Tips de redacción</p>
        </Container>
      </Band>

      <Container className="py-16">
        {posts.length === 0 ? (
          <p className="rounded-lg bg-bg-alt p-6 text-center text-muted">
            Blog en construcción — muy pronto vas a ver aquí los artículos.
          </p>
        ) : (
          <div className="flex flex-col divide-y divide-ink/10">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex flex-col gap-2 py-6 hover:bg-bg-alt"
              >
                <h2 className="font-display text-xl italic">{post.title}</h2>
                <p className="text-sm text-muted">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
