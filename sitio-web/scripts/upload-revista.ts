import { readFileSync } from "fs";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { resolve } from "path";

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
    console.log("Subiendo imágenes de la Revista DC...");
    await uploadFile(
      resolve("../Assets/portada r.jpg"),
      "web/revista-dc-portada.jpg",
      "image/jpeg"
    );
    await uploadFile(
      resolve("../Assets/art1.jpg"),
      "web/revista-dc-articulo-1.jpg",
      "image/jpeg"
    );
    await uploadFile(
      resolve("../Assets/ar2.jpg"),
      "web/revista-dc-articulo-2.jpg",
      "image/jpeg"
    );
    console.log("¡Todas las imágenes subidas a R2!");
  } catch (error) {
    console.error("Error subiendo imágenes:", error);
  }
}

main();
