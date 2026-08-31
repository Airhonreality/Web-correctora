"use client";

import { useActionState } from "react";
import { Container } from "@/components/container";
import { loginAction } from "./actions";

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState<
    { error: string | null },
    FormData
  >(loginAction, { error: null });

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-6 py-16">
      <h1 className="font-display text-3xl italic">Panel de administración</h1>
      <form action={formAction} className="flex w-full max-w-sm flex-col gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-sm font-semibold">Contraseña</span>
          <input
            type="password"
            name="password"
            required
            autoFocus
            className="rounded-md border border-ink/20 px-4 py-2 focus:border-anchor focus:outline-none"
          />
        </label>
        {state.error && (
          <p className="rounded-md bg-rose-light p-3 text-sm text-ink">
            {state.error}
          </p>
        )}
        <button
          type="submit"
          disabled={pending}
          className="rounded-md bg-coral px-5 py-3 font-semibold text-[var(--color-coral-ink)] disabled:opacity-60"
        >
          {pending ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </Container>
  );
}
