import Image from "next/image";
import PageHero from "@/components/PageHero";
import { clientLogos } from "@/data/clients";

export const metadata = { title: "Our Clients" };

export default function OurClientsPage() {
  return (
    <>
      <PageHero
        title="OUR CLIENTS"
        image="/images/depositphotos_180029906-stock-photo-effective-negotiation-with-client-business.webp"
        gradient="linear-gradient(180deg, #000000 0%, #080808 100%)"
      />
      <section className="bg-white px-[15px] pt-[70px] pb-[80px]">
        <div className="mx-auto max-w-[1140px]">
          {/* Element Pack logo grid, "border" style: 2px inner grid lines */}
          <div className="grid grid-cols-2 border-t-2 border-l-2 border-[#E0E0E0] md:grid-cols-3 lg:grid-cols-6">
            {clientLogos.map((src) => (
              <figure
                key={src}
                className="flex h-[188px] items-center justify-center border-r-2 border-b-2 border-[#E0E0E0] p-[20px]"
              >
                <Image src={src} alt="" width={183} height={150} className="max-h-full w-auto object-contain" />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
