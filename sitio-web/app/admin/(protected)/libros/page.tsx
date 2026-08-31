import Link from "next/link";
import { getAllAuthorBooksAdmin } from "@/lib/db/queries";
import { deleteBookAction } from "./actions";

export default async function BooksAdminPage() {
  const books = await getAllAuthorBooksAdmin();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl italic">Mis Libros (Autora)</h1>
        <Link
          href="/admin/libros/new"
          className="rounded-md bg-ink px-4 py-2 text-sm font-semibold text-paper"
        >
          Añadir libro
        </Link>
      </div>
      
      {books.length === 0 ? (
        <p className="text-muted">No has añadido ningún libro aún.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {books.map((book) => (
            <div
              key={book.id}
              className="flex items-center justify-between rounded-lg border border-ink/10 bg-paper p-4"
            >
              <div className="flex items-center gap-4">
                {book.coverImageUrl ? (
                  <img
                    src={book.coverImageUrl}
                    alt={`Portada de ${book.title}`}
                    className="h-16 w-12 rounded object-cover"
                  />
                ) : (
                  <div className="h-16 w-12 rounded bg-ink/10 flex items-center justify-center text-xs text-muted">
                    Sin foto
                  </div>
                )}
                <div>
                  <div className="font-semibold">{book.title}</div>
                  <div className="text-sm text-muted">
                    {book.published ? "Publicado" : "Oculto"} | Orden: {book.preferenceOrder}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/admin/libros/${book.id}/edit`}
                  className="rounded px-3 py-1 text-sm font-medium hover:bg-ink/5"
                >
                  Editar
                </Link>
                <form action={deleteBookAction.bind(null, book.id)}>
                  <button
                    type="submit"
                    className="rounded px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-50"
                  >
                    Eliminar
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
