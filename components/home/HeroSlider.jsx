"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/Icons";
import useMounted from "@/components/useMounted";
import "swiper/css";
import "swiper/css/pagination";

// The first slide has no image of its own; the section background shows through it.
const slides = [
  null,
  "/images/various-cakes-supermarket-shelves-sale.webp",
  "/images/professional-stainless-steel-kitchen-design-photo-was-made-restouraunt.webp",
  "/images/1-1.webp",
];

function Slide({ src }) {
  return (
    <>
      {src && (
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} role="img" aria-label="Hotel Kitchen Equipments" />
      )}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-[10px] text-center">
        <h1 className="mb-[20px] inline-block bg-white px-[18px] py-[3px] text-[24px] leading-[1.5] font-bold text-black sm:text-[30px] md:text-[45px]">
          Hotel Kitchen Equipments
        </h1>
        <Link href="/our-products" className="inline-block rounded-[4px] bg-white px-[15px] py-[10px] text-[14px] leading-none font-medium text-black uppercase">
          SEE PRODUCT
        </Link>
      </div>
    </>
  );
}

export default function HeroSlider() {
  const mounted = useMounted();

  return (
    <section
      className="hero-slider relative min-h-[400px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/life-style.webp)" }}
    >
      {mounted ? (
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          loop
          speed={500}
          autoplay={{ delay: 3000 }}
          navigation={{ prevEl: ".hero-prev", nextEl: ".hero-next" }}
          pagination={{ el: ".hero-dots", clickable: true }}
          className="h-[600px]"
        >
          {slides.map((src, i) => (
            <SwiperSlide key={i} className="relative">
              <Slide src={src} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="relative h-[600px]">
          <Slide src={slides[0]} />
        </div>
      )}

      <button type="button" aria-label="Previous slide" className="hero-prev absolute top-1/2 left-[35px] z-20 hidden -translate-y-1/2 text-white md:block">
        <ArrowLeftIcon className="h-[36px] w-[36px]" />
      </button>
      <button type="button" aria-label="Next slide" className="hero-next absolute top-1/2 right-[35px] z-20 hidden -translate-y-1/2 text-white md:block">
        <ArrowRightIcon className="h-[36px] w-[36px]" />
      </button>
      <div className="hero-dots absolute! bottom-[55px]! left-0! z-20 flex w-full justify-center gap-[6px]" />
    </section>
  );
}
