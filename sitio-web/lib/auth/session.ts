import { cookies } from "next/headers";
import { getIronSession, type SessionOptions } from "iron-session";
import { scryptSync, timingSafeEqual, randomBytes } from "node:crypto";

interface AdminSessionData {
  isAdmin?: boolean;
}

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`${name} no está configurada. Ver .env.example.`);
  return value;
}

const sessionOptions: SessionOptions = {
  get password() {
    return requiredEnv("SESSION_SECRET");
  },
  cookieName: "amparo_admin_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 7 días
  },
};

export async function getSession() {
  const store = await cookies();
  return getIronSession<AdminSessionData>(store, sessionOptions);
}

export async function createSession() {
  const session = await getSession();
  session.isAdmin = true;
  await session.save();
}

export async function destroySession() {
  const session = await getSession();
  session.destroy();
}

export async function isAuthenticated() {
  const session = await getSession();
  return session.isAdmin === true;
}

/** Hash de contraseña con scrypt (nativo de Node, con sal). Usar una sola vez para generar ADMIN_PASSWORD_HASH. */
export function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const derived = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${derived}`;
}

export function verifyPassword(password: string) {
  const stored = requiredEnv("ADMIN_PASSWORD_HASH");
  const [salt, storedDerived] = stored.split(":");
  if (!salt || !storedDerived) return false;
  const derived = scryptSync(password, salt, 64);
  const storedBuf = Buffer.from(storedDerived, "hex");
  if (storedBuf.length !== derived.length) return false;
  return timingSafeEqual(storedBuf, derived);
}
