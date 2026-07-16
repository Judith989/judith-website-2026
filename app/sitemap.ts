import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.judithnjoku.me";
  return ["", "/about", "/research", "/research/omnirestore", "/research/batterymetrix", "/research/panda", "/research/bridgesync", "/research/smartparking", "/publications", "/news", "/gallery", "/cv", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/news" || path === "/publications" ? "monthly" : "yearly",
    priority: path === "" ? 1 : 0.8,
  }));
}
