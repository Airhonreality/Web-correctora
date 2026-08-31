import { PostForm } from "../post-form";
import { createPostAction } from "../actions";

export default function NewBlogPostPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-display text-2xl italic">Nuevo post</h1>
      <PostForm action={createPostAction} />
    </div>
  );
}
