import HeroSlider from "@/components/home/HeroSlider";
import AboutSection from "@/components/home/AboutSection";
import InfoBoxes from "@/components/home/InfoBoxes";
import ProductAccordion from "@/components/home/ProductAccordion";
import BrandCarousel from "@/components/home/BrandCarousel";
import ClientsGrid from "@/components/home/ClientsGrid";
import SeoContent from "@/components/home/SeoContent";
import SectionHeading from "@/components/SectionHeading";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <InfoBoxes />

      <section className="px-[15px] py-[50px] md:px-[30px] md:py-[80px] lg:px-0 lg:pt-[60px] lg:pb-0">
        <SectionHeading dividerWidth={806}>PRODUCTS OF ROYAL EQUIPMENTS COMPANY</SectionHeading>
        <div className="mt-[20px]">
          <ProductAccordion />
        </div>
        <SectionHeading dividerWidth={770} className="pt-[44px]">
          BRANDS OF ROYAL EQUIPMENTS COMPANY
        </SectionHeading>
      </section>

      <BrandCarousel />
      <ClientsGrid />

      <section className="px-[15px] py-[50px] md:px-[30px] md:py-[80px] lg:px-0 lg:pt-[20px] lg:pb-[100px]">
        <SectionHeading dividerWidth={375} strokeWidth={8} className="mt-[30px] pt-[44px] md:mt-0">
          DEALS IN HSN CODE
        </SectionHeading>
      </section>

      <SeoContent />
    </>
  );
}
