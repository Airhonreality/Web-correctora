import { readFileSync } from "fs";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

async function uploadFile(filePath: string, key: string, contentType: string) {
  const fileContent = readFileSync(filePath);
  
  const command = new PutObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: key,
    Body: fileContent,
    ContentType: contentType,
  });

  await s3Client.send(command);
  const publicUrl = `${process.env.R2_PUBLIC_URL}/${key}`;
  console.log(`Uploaded to: ${publicUrl}`);
  return publicUrl;
}

async function main() {
  try {
    console.log("Subiendo la versión HD generada por IA...");
    await uploadFile(
      "C:\\Users\\javir\\.gemini\\antigravity\\brain\\977391b1-3551-4dc4-8952-09f8fb1e4aa5\\maquina_escribir_escritora_1787019590373.png",
      "web/maquina-escribir-edicion-textos.png", // Changed extension to png
      "image/png"
    );
    console.log("¡Imagen HD subida correctamente a R2!");
  } catch (error) {
    console.error("Error subiendo imágenes:", error);
  }
}

main();
