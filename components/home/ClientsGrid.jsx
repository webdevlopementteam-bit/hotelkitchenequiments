import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { homeClientLogos } from "@/data/clients";

export default function ClientsGrid() {
  return (
    <section
      className="relative bg-cover bg-center px-[15px] py-[50px] md:px-[30px] md:py-[80px] lg:bg-fixed lg:px-0 lg:pt-0 lg:pb-[120px]"
      style={{ backgroundImage: "url(/images/360_F_267959978_mg8IbiXMiL636E8GgZP2RC7zaCrMOLF1.webp)" }}
    >
      <div className="absolute inset-0 bg-black opacity-40" />
      <div className="relative mx-auto max-w-[1140px]">
        <SectionHeading light dividerWidth={250} strokeWidth={10} className="lg:pt-[60px]">
          OUR CLIENTS
        </SectionHeading>
        <div className="mt-[30px] grid grid-cols-2 overflow-hidden rounded-[10px] lg:grid-cols-5">
          {homeClientLogos.map((src) => (
            <figure key={src} className="flex h-[230px] items-center justify-center bg-[#FFFFFFC7] p-[40px]">
              <Image src={src} alt="" width={150} height={150} className="h-full w-full object-cover" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
