import type { ImageLoaderProps } from "next/image";
import { sitePath } from "./site-paths";

export default function imageLoader({ src }: ImageLoaderProps) {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  return sitePath(src.startsWith("/") ? src : `/${src}`);
}
