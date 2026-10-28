import { productCategories, siteUrl } from "@/data/site";

const routes = [
  "/",
  "/about",
  "/our-products",
  ...productCategories.map((c) => c.href),
  "/our-clients",
  "/brand",
  "/download",
  "/contact-us",
];

export const dynamic = "force-static";

export default function sitemap() {
  return routes.map((route) => ({
    url: `${siteUrl}${route === "/" ? "/" : `${route}/`}`,
    changeFrequency: "daily",
    priority: route === "/" ? 1 : 0.8,
  }));
}
