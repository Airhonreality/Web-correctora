"use server";

import { redirect } from "next/navigation";
import { createSession, verifyPassword } from "@/lib/auth/session";

export async function loginAction(
  _prevState: { error: string | null },
  formData: FormData
) {
  const password = formData.get("password");

  if (typeof password !== "string" || !password) {
    return { error: "Ingresa la contraseña." };
  }

  let valid: boolean;
  try {
    valid = verifyPassword(password);
  } catch {
    return {
      error:
        "El servidor no tiene configurada la contraseña de administrador (ADMIN_PASSWORD_HASH / SESSION_SECRET).",
    };
  }

  if (!valid) {
    return { error: "Contraseña incorrecta." };
  }

  await createSession();
  redirect("/admin");
}
