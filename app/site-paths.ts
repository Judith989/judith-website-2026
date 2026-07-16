export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.judithnjoku.me";

export function sitePath(path: string) {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
