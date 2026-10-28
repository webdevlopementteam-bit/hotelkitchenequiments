import Image from "next/image";
import PageHero from "@/components/PageHero";
import BrandGallery from "@/components/BrandGallery";
import EnquiryButton from "@/components/EnquiryButton";
import { brandSections } from "@/data/brands";

export const metadata = { title: "Brand" };

export default function BrandPage() {
  return (
    <>
      <PageHero
        title="IMPORTED BRANDS"
        image="/images/download-1.webp"
        gradient="linear-gradient(180deg, #000000 0%, #080808 100%)"
      />
      {brandSections.map((section, i) => (
        <section key={i} className="bg-[#FFFFFF36] px-[15px] py-[30px]">
          <div className="mx-auto max-w-[1140px] px-[10px]">
            <div className="mb-[20px] flex flex-wrap items-center justify-center gap-[20px]">
              {section.logos.map((logo) => (
                <Image key={logo} src={logo} alt="" width={299} height={189} className="h-auto w-[299px] max-w-full" />
              ))}
            </div>
            <BrandGallery items={section.items} cols={section.cols} />
            <EnquiryButton color="#0004B7" textColor={i === 0 ? "#0004B7" : "#01049E"} />
          </div>
        </section>
      ))}
    </>
  );
}
