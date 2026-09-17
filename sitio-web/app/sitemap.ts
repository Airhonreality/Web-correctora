import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { getPublishedBlogPosts } from "@/lib/db/queries";

const staticRoutes = [
  { path: "/correccion-de-estilo", priority: 1, changeFrequency: "weekly" as const },
  { path: "/cuanto-cuesta-corregir-un-libro", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/portafolio", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/perfil", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/escritora", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPublishedBlogPosts();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.updatedAt,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...postEntries];
}
