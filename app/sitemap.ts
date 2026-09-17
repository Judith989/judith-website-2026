import type { MetadataRoute } from "next";
import { siteUrl } from "./site-paths";
import { researchProjects } from "./research/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const researchPaths = researchProjects.map((project) => `/research/${project.slug}`);
  return ["", "/research", "/research-world", ...researchPaths, "/publications", "/talks", "/news", "/gallery", "/cv", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/news" || path === "/publications" ? "monthly" : "yearly",
    priority: path === "" ? 1 : 0.8,
  }));
}
