import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { authorBooks } from "@/lib/db/schema";
import { BookForm } from "../../book-form";
import { updateBookAction } from "../../actions";

export default async function EditBookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const bookId = Number(id);
  const [book] = await db
    .select()
    .from(authorBooks)
    .where(eq(authorBooks.id, bookId))
    .limit(1);

  if (!book) notFound();

  const updateWithId = updateBookAction.bind(null, bookId);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-display text-2xl italic">Editar Libro</h1>
      <BookForm action={updateWithId} initialValues={book} />
    </div>
  );
}
