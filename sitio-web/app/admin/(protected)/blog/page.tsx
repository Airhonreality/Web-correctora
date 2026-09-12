import Link from "next/link";
import { getAllBlogPostsAdmin } from "@/lib/db/queries";
import { deletePostAction } from "./actions";
import { categoryPillClass } from "@/lib/blog";

export default async function AdminBlogListPage() {
  const posts = await getAllBlogPostsAdmin();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl italic">Blog</h1>
        <Link
          href="/admin/blog/new"
          className="rounded-md bg-coral px-4 py-2 text-sm font-semibold text-[var(--color-coral-ink)]"
        >
          + Nuevo post
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="text-muted">Todavía no hay posts.</p>
      ) : (
        <div className="flex flex-col divide-y divide-ink/10 rounded-lg bg-cream">
          {posts.map((post) => (
            <div key={post.id} className="flex items-center justify-between p-4">
              <div>
                <p className="font-semibold">
                  {post.featured && <span className="mr-1 text-gold" aria-label="Destacado">★</span>}
                  {post.title}{" "}
                  {!post.published && (
                    <span className="text-xs font-normal text-muted">(borrador)</span>
                  )}
                </p>
                <p className="text-sm text-muted">/blog/{post.slug}</p>
                {post.category && (
                  <span
                    className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${categoryPillClass(post.category)}`}
                  >
                    {post.category}
                  </span>
                )}
              </div>
              <div className="flex gap-3">
                <Link
                  href={`/admin/blog/${post.id}/edit`}
                  className="text-sm font-semibold text-teal underline"
                >
                  Editar
                </Link>
                <form
                  action={async () => {
                    "use server";
                    await deletePostAction(post.id);
                  }}
                >
                  <button type="submit" className="text-sm text-magenta underline">
                    Borrar
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
