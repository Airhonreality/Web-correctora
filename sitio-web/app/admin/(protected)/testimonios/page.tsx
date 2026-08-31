import Link from "next/link";
import { getAllTestimonialsAdmin } from "@/lib/db/queries";
import { deleteTestimonialAction } from "./actions";

export default async function AdminTestimonialsListPage() {
  const items = await getAllTestimonialsAdmin();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl italic">Testimonios</h1>
        <Link
          href="/admin/testimonios/new"
          className="rounded-md bg-coral px-4 py-2 text-sm font-semibold text-[var(--color-coral-ink)]"
        >
          + Nuevo testimonio
        </Link>
      </div>

      {items.length === 0 ? (
        <p className="text-muted">Todavía no hay testimonios.</p>
      ) : (
        <div className="flex flex-col divide-y divide-ink/10 rounded-lg bg-cream">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4">
              <div>
                <p className="font-semibold">
                  {item.clientName}{" "}
                  {item.featuredOnHome && (
                    <span className="text-xs font-normal text-teal">
                      (destacado en Inicio)
                    </span>
                  )}
                </p>
                <p className="text-sm text-muted">{item.bookTitle}</p>
              </div>
              <div className="flex gap-3">
                <Link
                  href={`/admin/testimonios/${item.id}/edit`}
                  className="text-sm font-semibold text-teal underline"
                >
                  Editar
                </Link>
                <form
                  action={async () => {
                    "use server";
                    await deleteTestimonialAction(item.id);
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
