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
            <div key={item.id} className="flex items-center justify-between p-4">
              <div>
                <p className="font-semibold">
                  {item.bookTitle}{" "}
                  {!item.authorized && (
                    <span className="text-xs font-normal text-magenta">
                      (sin autorización — no visible)
                    </span>
                  )}
                </p>
                <p className="text-sm text-muted">
                  {item.authorName} — {item.genre}
                </p>
              </div>
              <div className="flex gap-3">
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
