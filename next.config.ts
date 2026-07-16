import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    loader: "custom",
    loaderFile: "./app/image-loader.ts",
  },
};

export default nextConfig;
