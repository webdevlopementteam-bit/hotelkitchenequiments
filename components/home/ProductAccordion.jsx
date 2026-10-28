"use client";

import { useState } from "react";

const items = [
  {
    title: "Refrigeration Equipment",
    image: "/images/3-1-1.webp",
    text: "We offer a wide range of Referigation Equipments that is extensively used for cooling to keep food cold. Cold temperatures help food stay fresh longer",
  },
  {
    title: "Cooking Equipment",
    image: "/images/2-1-1.webp",
    text: "We have marked a distinct position in the domain by manufacturing and supplying the finest quality Cooking Equipment",
  },
  {
    title: "Preparation Equipments",
    image: "/images/1-2.webp",
    text: "We offer a wide range of Referigation Equipments that is extensively used for cooling to keep food cold. Cold temperatures help food stay fresh longer",
  },
  {
    title: "Water Cooler & Dispensers",
    image: "/images/4-2.webp",
    text: "We offer a wide range of Water Cooler & Dispensers that is used to provide easy access to drinking water. Water dispensers have become a necessary part of society.",
  },
  {
    title: "Bar Equipments",
    image: "/images/5-1-1.webp",
    text: "We offer a wide range of Water Cooler & Dispensers that is used to provide easy access to drinking water. Water dispensers have become a necessary part of society",
  },
];

// Element Pack "image accordion": hovered panel expands and reveals its caption.
export default function ProductAccordion() {
  const [active, setActive] = useState(null);

  return (
    <div className="flex h-[700px] flex-col md:h-[400px] md:flex-row lg:h-[550px]" onMouseLeave={() => setActive(null)}>
      {items.map((item, i) => {
        const isActive = active === i;
        return (
          <div
            key={item.title}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`relative flex cursor-pointer items-center overflow-hidden bg-cover bg-center transition-[flex-grow] duration-700 ease-in-out before:absolute before:inset-0 before:bg-[#00000073] after:absolute after:top-0 after:right-[-0.5px] after:h-full after:w-px after:bg-white/10 ${
              isActive ? "grow-[5]" : "grow"
            } basis-0`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div
              className={`relative z-10 w-full px-[25px] text-white transition-all duration-500 md:px-[25px] lg:px-[120px] ${
                isActive ? "translate-y-0 opacity-100 delay-300" : "translate-y-[20px] opacity-0"
              }`}
            >
              <h2 className="pb-[30px] text-[20px] leading-[1.2] text-white md:pb-[10px] md:text-[28px] lg:text-[52px]">
                {item.title}
              </h2>
              <p className="pb-[20px] text-[15px] md:text-base lg:pb-[60px]">{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
