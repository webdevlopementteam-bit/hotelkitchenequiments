"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import useMounted from "@/components/useMounted";
import "swiper/css";

const images = [
  "bartender-making-delicious-refreshing-cocktail.webp",
  "close-up-pastry-chef-preparing-food.webp",
  "delicious-assortment-nutritious-roti.webp",
  "kitchen-2871400_1920.webp",
  "life-style.webp",
].map((f) => `/images/${f}`);

const bubbleMask = {
  WebkitMaskImage: "url(/images/shape-15.svg)",
  maskImage: "url(/images/shape-15.svg)",
  WebkitMaskPosition: "bottom center",
  maskPosition: "bottom center",
  WebkitMaskSize: "contain",
  maskSize: "contain",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
};

function MaskedImage({ src }) {
  return (
    <a href={src} target="_blank" rel="noopener noreferrer" className="block h-full" style={bubbleMask}>
      <div className="h-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${src})` }} />
    </a>
  );
}

export default function AboutSection() {
  const mounted = useMounted();
  const [swiper, setSwiper] = useState(null);
  const [active, setActive] = useState(0);

  return (
    <section
      className="bg-cover bg-center bg-no-repeat px-[15px] pt-[50px] md:px-[30px] md:pt-[80px] lg:pt-0"
      style={{ backgroundImage: "url(/images/bg-01.svg)" }}
    >
      <div className="mx-auto flex max-w-[1300px] flex-col lg:flex-row lg:items-center">
        {/* Text column */}
        <div className="flex w-full flex-col justify-center px-0 pb-[40px] md:pr-[150px] md:pb-[50px] lg:-mt-[50px] lg:w-[45%] lg:pr-[80px] lg:pb-0">
          <h2 className="mb-0 font-lato text-[30px] leading-[1.6em] font-semibold text-black md:mb-[20px] md:text-[50px] md:leading-[1.5]">
            ABOUT US
          </h2>
          <p className="mb-[20px] text-left font-open-sans text-[14px] leading-[2.2em] text-[#737373] md:text-[16px]">
            Established in the year 2001 ,{" "}
            <a href="https://www.royalequipments.in" target="_blank" rel="noopener noreferrer" className="text-palette-1 hover:text-palette-2">
              <strong>Royal Equipments</strong>
            </a>{" "}
            is a trusted <strong>Hotel Kitchen Equipment Manufacturer</strong> known for delivering high-quality
            commercial kitchen solutions across India. We are an <strong>ISO 9001:2008 certified company</strong>{" "}
            engaged in manufacturing, importing, supplying, and trading a wide range of kitchen equipment including{" "}
            <strong>Bakery Equipment, Cooking Ranges, and Food Processing Machines</strong>. Our products are highly
            appreciated for their <strong>rugged construction, long working life, low maintenance, easy operation, and premium finish</strong>,
            making them ideal for <strong>hotels, restaurants, cafes, bakeries, and commercial kitchens</strong>.
          </p>
          <div>
            <a
              href="/about"
              className="group relative inline-flex overflow-hidden rounded-full bg-[#009F10] px-[30px] py-[12px] font-open-sans text-[14px] font-medium text-white capitalize md:px-[40px] md:py-[13px] md:text-[18px]"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-[#00690B] transition-transform duration-300 group-hover:scale-x-100" />
              <span className="relative">Read More</span>
            </a>
          </div>
        </div>

        {/* Image carousel column */}
        <div className="relative w-full lg:-mt-[50px] lg:w-[55%]">
          {mounted ? (
            <Swiper
              modules={[Autoplay]}
              loop
              speed={300}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              onSwiper={setSwiper}
              onSlideChange={(s) => setActive(s.realIndex)}
            >
              {images.map((src) => (
                <SwiperSlide key={src} className="h-[400px]! lg:h-[800px]!">
                  <MaskedImage src={src} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="h-[400px] lg:h-[800px]">
              <MaskedImage src={images[0]} />
            </div>
          )}

          {/* Remote thumbnails pill */}
          <div className="absolute top-[333px] left-[-2px] z-[11] rounded-full border border-[#07810C03] bg-white p-[5px] shadow-[0px_10px_30px_0px_rgba(7,129,12,0.15)] md:top-[664px] md:left-[369px] lg:top-[600px] lg:left-[200px]">
            <div className="flex gap-[3px]">
              {images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  aria-label={`Show image ${i + 1}`}
                  onClick={() => swiper?.slideToLoop(i)}
                  className={`h-[60px] w-[60px] overflow-hidden rounded-full border bg-cover bg-center transition-all ${
                    active === i ? "border-[#61CE70] shadow-[0px_10px_20px_0px_rgba(216,211,191,0.23)]" : "border-white"
                  }`}
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
