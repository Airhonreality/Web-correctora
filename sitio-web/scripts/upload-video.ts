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
    console.log("Subiendo video de Canal UNO (GPS)...");
    await uploadFile(
      resolve("../Assets/GPS Face.mp4"),
      "web/amparo-rozo-canal-uno-gps.mp4",
      "video/mp4"
    );
    console.log("¡Video subido correctamente a R2!");
  } catch (error) {
    console.error("Error subiendo video:", error);
  }
}

main();
