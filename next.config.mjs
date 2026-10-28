/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export: `next build` writes the whole site to ./out
  output: "export",
  trailingSlash: true,
  // The default image optimizer needs a server; images are already WebP.
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
