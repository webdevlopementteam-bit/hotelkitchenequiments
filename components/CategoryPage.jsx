import Link from "next/link";
import PageHero from "@/components/PageHero";
import { productCategories } from "@/data/site";

// These category pages have no published content on the original site yet;
// they share the bakery banner style and point visitors to the enquiry form.
export default function CategoryPage({ title }) {
  return (
    <>
      <PageHero
        title={title.toUpperCase()}
        image="/images/professional-stainless-steel-kitchen-design-photo-was-made-restouraunt.webp"
        gradient="linear-gradient(180deg, #000262 0%, #303030 100%)"
      />
      <section className="px-[15px] py-[60px]">
        <div className="mx-auto max-w-[1140px] px-[10px] text-center">
          <h2 className="font-semibold text-black">{title}</h2>
          <p className="mt-[20px]">
            For product details, specifications and pricing in this range, please get in touch with our team.
          </p>
          <Link
            href="/contact-us"
            className="mt-[30px] inline-flex rounded-[3px] border border-[#0A5786] px-[25px] py-[10px] text-[14px] font-medium text-[#0A5786] transition-colors hover:bg-[#0A5786] hover:text-white"
          >
            enquiry now
          </Link>
          <div className="mt-[50px] flex flex-wrap justify-center gap-[10px]">
            {productCategories
              .filter((c) => c.label !== title)
              .map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="rounded-[3px] bg-palette-4 px-[15px] py-[8px] text-[13px] font-medium text-white hover:bg-brand"
                >
                  {c.label}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
