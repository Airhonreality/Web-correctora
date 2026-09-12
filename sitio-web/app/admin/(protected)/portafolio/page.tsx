import Link from "next/link";
import { getAllPortfolioItemsAdmin } from "@/lib/db/queries";
import { deletePortfolioItemAction } from "./actions";

export default async function AdminPortfolioListPage() {
  const items = await getAllPortfolioItemsAdmin();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl italic">Portafolio</h1>
        <Link
          href="/admin/portafolio/new"
          className="rounded-md bg-coral px-4 py-2 text-sm font-semibold text-[var(--color-coral-ink)]"
        >
          + Nuevo libro
        </Link>
      </div>

      {items.length === 0 ? (
        <p className="text-muted">Todavía no hay libros en el portafolio.</p>
      ) : (
        <div className="flex flex-col divide-y divide-ink/10 rounded-lg bg-cream">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-4 p-4">
              <div className="flex items-center gap-4">
                {item.coverImageUrl ? (
                  <img
                    src={item.coverImageUrl}
                    alt={`Portada de ${item.bookTitle}`}
                    className="h-16 w-12 shrink-0 rounded object-cover"
                  />
                ) : (
                  <div className="h-16 w-12 shrink-0 rounded bg-ink/10 flex items-center justify-center text-xs text-muted">
                    Sin foto
                  </div>
                )}
                <div>
                  <p className="font-semibold">{item.bookTitle}</p>
                  <p className="text-sm text-muted">
                    {item.authorName} — {item.genre}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                        item.coverImageUrl ? "bg-teal/10 text-teal" : "bg-ink/5 text-muted"
                      }`}
                    >
                      {item.coverImageUrl ? "Con imagen" : "Sin imagen"}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                        item.authorized ? "bg-teal/10 text-teal" : "bg-magenta/10 text-magenta"
                      }`}
                    >
                      {item.authorized ? "Publicado" : "No publicado"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 gap-3">
                <Link
                  href={`/admin/portafolio/${item.id}/edit`}
                  className="text-sm font-semibold text-teal underline"
                >
                  Editar
                </Link>
                <form
                  action={async () => {
                    "use server";
                    await deletePortfolioItemAction(item.id);
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
