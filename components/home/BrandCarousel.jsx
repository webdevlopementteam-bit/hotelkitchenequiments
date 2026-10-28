"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ArrowLeftIcon, ArrowRightIcon, FaArrowRightIcon } from "@/components/Icons";
import { homeBrandLogos } from "@/data/clients";
import useMounted from "@/components/useMounted";
import "swiper/css";

function LogoCard({ src }) {
  return (
    <figure className="flex h-[170px] items-center justify-center rounded-[10px] bg-[#F6F6F6] p-[15px]">
      <Image src={src} alt="" width={240} height={140} className="max-h-full w-auto object-contain" />
    </figure>
  );
}

export default function BrandCarousel() {
  const mounted = useMounted();

  return (
    <section className="px-[15px] py-[50px] md:px-[30px] md:py-[80px] lg:px-0 lg:py-[60px]">
      <div className="relative mx-auto max-w-[1140px]">
        {mounted ? (
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 3 }, 960: { slidesPerView: 4 } }}
            navigation={{ prevEl: ".brand-prev", nextEl: ".brand-next" }}
            pagination={{
              el: ".brand-dots",
              clickable: true,
              bulletClass: "brand-dot",
              bulletActiveClass: "brand-dot-active",
              renderBullet: (_, className) => `<span class="${className}"></span>`,
            }}
          >
            {homeBrandLogos.map((src) => (
              <SwiperSlide key={src}>
                <LogoCard src={src} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 gap-[40px] sm:grid-cols-3 lg:grid-cols-4">
            {homeBrandLogos.slice(0, 4).map((src, i) => (
              <div key={src} className={i === 0 ? "" : i === 3 ? "hidden lg:block" : "hidden sm:block"}>
                <LogoCard src={src} />
              </div>
            ))}
          </div>
        )}

        <button type="button" aria-label="Previous" className="brand-prev absolute top-1/2 -left-[60px] z-10 hidden -translate-y-1/2 rounded-[5px] px-[10px] py-[8px] text-black xl:block">
          <ArrowLeftIcon className="h-[24px] w-[24px]" />
        </button>
        <button type="button" aria-label="Next" className="brand-next absolute top-1/2 -right-[60px] z-10 hidden -translate-y-1/2 rounded-[5px] px-[10px] py-[8px] text-black xl:block">
          <ArrowRightIcon className="h-[24px] w-[24px]" />
        </button>
        <div className="brand-dots mt-[30px] flex justify-center gap-[10px] [&_.brand-dot]:block [&_.brand-dot]:h-[7px] [&_.brand-dot]:w-[7px] [&_.brand-dot]:cursor-pointer [&_.brand-dot]:rounded-full [&_.brand-dot]:bg-black [&_.brand-dot-active]:bg-[#FF0000]!" />

        <div className="mt-[30px] flex justify-center">
          <Link
            href="/brand"
            className="group relative inline-flex items-center overflow-hidden rounded-[3px] bg-[#3C40F8] py-[12px] pr-[12px] pl-[20px] text-[14px] text-white capitalize transition-colors hover:bg-[#070AA8]"
          >
            <span className="relative">View All Brands</span>
            <span className="relative ml-[40px] inline-flex bg-[#FFFFFF29] p-[8px] text-white transition-colors group-hover:bg-white group-hover:text-[#05088F]">
              <FaArrowRightIcon className="h-[14px] w-[14px]" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
