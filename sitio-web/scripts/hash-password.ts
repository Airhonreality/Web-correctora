import { hashPassword } from "../lib/auth/session";

const password = process.argv[2];

if (!password) {
  console.error("Uso: npm run hash-password -- \"tu-contraseña\"");
  process.exit(1);
}

console.log(hashPassword(password));
