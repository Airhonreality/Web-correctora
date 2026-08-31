import { redirect } from "next/navigation";
import Link from "next/link";
import { isAuthenticated, destroySession } from "@/lib/auth/session";

export const dynamic = "force-dynamic";

async function logoutAction() {
  "use server";
  await destroySession();
  redirect("/admin/login");
}

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let authed: boolean;
  try {
    authed = await isAuthenticated();
  } catch {
    authed = false;
  }

  if (!authed) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-bg-alt">
      <div className="border-b border-ink/10 bg-cream">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <nav className="flex gap-5 font-display italic">
            <Link href="/admin">Panel</Link>
            <Link href="/admin/libros">Libros</Link>
            <Link href="/admin/blog">Blog</Link>
            <Link href="/admin/portafolio">Portafolio</Link>
            <Link href="/admin/testimonios">Testimonios</Link>
          </nav>
          <form action={logoutAction}>
            <button type="submit" className="text-sm text-muted underline">
              Cerrar sesión
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-6 py-10">{children}</div>
    </div>
  );
}
