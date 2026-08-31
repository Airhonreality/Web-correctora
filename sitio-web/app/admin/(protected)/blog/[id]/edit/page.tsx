import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { blogPosts } from "@/lib/db/schema";
import { PostForm } from "../../post-form";
import { updatePostAction } from "../../actions";

export default async function EditBlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postId = Number(id);
  const [post] = await db
    .select()
    .from(blogPosts)
    .where(eq(blogPosts.id, postId))
    .limit(1);

  if (!post) notFound();

  const updateWithId = updatePostAction.bind(null, postId);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-display text-2xl italic">Editar post</h1>
      <PostForm action={updateWithId} initialValues={post} />
    </div>
  );
}
