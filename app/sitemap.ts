import type { MetadataRoute } from "next";
import { siteUrl } from "./site-paths";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/research", "/research/omnirestore", "/research/batterymetrix", "/research/panda", "/research/bridgesync", "/research/smartparking", "/publications", "/news", "/gallery", "/cv", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/news" || path === "/publications" ? "monthly" : "yearly",
    priority: path === "" ? 1 : 0.8,
  }));
}
