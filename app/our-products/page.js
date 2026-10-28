import Link from "next/link";
import PageHero from "@/components/PageHero";
import { productCategories } from "@/data/site";

export const metadata = { title: "Our Products" };

export default function OurProductsPage() {
  return (
    <>
      <PageHero
        title="OUR PRODUCTS"
        image="/images/kitchen-2871400_1920.webp"
        gradient="linear-gradient(180deg, #000262 0%, #303030 100%)"
      />
      <section className="px-[15px] py-[60px]">
        <div className="mx-auto grid max-w-[1140px] gap-[20px] px-[10px] sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group border border-brand bg-white p-[30px] text-center transition-shadow hover:shadow-[0px_10px_20px_0px_rgba(0,0,0,0.05)]"
            >
              <h3 className="text-[20px] transition-colors group-hover:text-brand">{c.label}</h3>
              <span className="mt-[10px] inline-block text-[14px] font-medium text-[#0A5786]">View products →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
