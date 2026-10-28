"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon, SearchIcon } from "@/components/Icons";

// Element Pack "custom gallery" (fedara skin) with a slide lightbox.
export default function BrandGallery({ items, cols }) {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft") setOpen((i) => (i - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, items.length]);

  return (
    <>
      <div className={`grid grid-cols-1 gap-[30px] sm:grid-cols-2 ${cols === 3 ? "md:grid-cols-3" : ""}`}>
        {items.map((item, i) => (
          <figure key={`${item.src}-${i}`} className="group">
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Open ${item.title}`}
              className="relative block h-[280px] w-full overflow-hidden"
            >
              <Image src={item.src} alt={item.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              <span className="absolute inset-0 flex items-center justify-center bg-[#BABABA85] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="bg-white p-[10px] text-[#A8A8A8]">
                  <SearchIcon className="h-[16px] w-[16px]" />
                </span>
              </span>
            </button>
            <figcaption className="bg-[#11314B] pt-[6px] pb-[5px] text-center">
              <h4 className="px-[10px] text-[20px] leading-[1.5] text-white">{item.title}</h4>
            </figcaption>
          </figure>
        ))}
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <button type="button" aria-label="Close" className="absolute top-[20px] right-[20px] p-[10px] text-white/80 hover:text-white">
            <CloseIcon className="h-[16px] w-[16px]" />
          </button>
          <button
            type="button"
            aria-label="Previous"
            className="absolute left-[10px] p-[10px] text-white/80 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open - 1 + items.length) % items.length);
            }}
          >
            <ArrowLeftIcon className="h-[36px] w-[36px]" />
          </button>
          <figure className="max-w-[90vw] text-center" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={items[open].src} alt={items[open].title} className="mx-auto max-h-[80vh] w-auto" />
            <figcaption className="mt-[10px] text-white">{items[open].title}</figcaption>
          </figure>
          <button
            type="button"
            aria-label="Next"
            className="absolute right-[10px] p-[10px] text-white/80 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open + 1) % items.length);
            }}
          >
            <ArrowRightIcon className="h-[36px] w-[36px]" />
          </button>
        </div>
      )}
    </>
  );
}
