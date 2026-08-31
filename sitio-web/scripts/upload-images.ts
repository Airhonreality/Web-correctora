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
    console.log("Subiendo foto de Amparo...");
    await uploadFile(
      resolve("../Assets/amparo rozo perfil.jpg"),
      "web/amparo-rozo-correctora-estilo.jpg",
      "image/jpeg"
    );

    console.log("Subiendo imagen de ambientación...");
    await uploadFile(
      resolve("../Assets/Person_holding_teacup_with_tea_202608172123.jpeg"),
      "web/maquina-escribir-edicion-textos.jpeg",
      "image/jpeg"
    );
    
    console.log("¡Imágenes subidas correctamente a R2!");
  } catch (error) {
    console.error("Error subiendo imágenes:", error);
  }
}

main();
