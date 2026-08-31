import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getR2Client, getR2BucketName, getR2PublicUrl } from "./client";

export async function uploadImageToR2(file: File, folder: "portafolio" | "blog") {
  const arrayBuffer = await file.arrayBuffer();
  const extension = file.name.split(".").pop() ?? "jpg";
  const key = `${folder}/${crypto.randomUUID()}.${extension}`;

  await getR2Client().send(
    new PutObjectCommand({
      Bucket: getR2BucketName(),
      Key: key,
      Body: Buffer.from(arrayBuffer),
      ContentType: file.type || "image/jpeg",
    })
  );

  return `${getR2PublicUrl()}/${key}`;
}
