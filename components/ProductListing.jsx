import Image from "next/image";
import EnquiryButton from "@/components/EnquiryButton";
import { CheckCircleIcon } from "@/components/Icons";

function SpecTable({ specs }) {
  return (
    <div>
      <div className="bg-[#131575] py-[10px]">
        <h4 className="text-center font-semibold text-white">Product Specification</h4>
      </div>
      <table className="mt-[20px] w-full border-collapse text-black">
        <tbody>
          {specs.map(([label, value]) => (
            <tr key={label}>
              <td className="border border-palette-5 px-[1em] py-[0.7em]">{label}</td>
              <td className="border border-palette-5 px-[1em] py-[0.7em]">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ProductBlock({ product, first }) {
  const { title, paragraphs, list, image, specs, align } = product;
  return (
    <section className={`px-[15px] pb-[20px] ${first ? "pt-[30px]" : ""}`}>
      <div className="mx-auto max-w-[1140px] px-[10px]">
        <h3 className="text-center font-semibold text-black">{title}</h3>
        <div className={`mt-[20px] space-y-[1.5em] ${align === "left" ? "text-left" : "text-center"}`}>
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {list.length > 0 && (
          <ul className="mt-[10px] space-y-[5px]">
            {list.map((item) => (
              <li key={item} className="flex items-start">
                <CheckCircleIcon className="mt-[5px] mr-[8px] h-[17px] w-[17px] shrink-0 fill-[#01B800]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-[20px] flex flex-col gap-[20px] md:flex-row">
          {image && (
            <div className="md:mt-[23px] md:w-1/2">
              <Image src={image.src} alt={image.alt} width={1000} height={1000} className="mx-auto h-auto w-full max-w-[500px]" />
            </div>
          )}
          <div className={`${image ? "md:w-1/2" : "w-full"} ${image ? "" : "md:pt-[30px]"}`}>
            <SpecTable specs={specs} />
          </div>
        </div>
        <EnquiryButton />
        <div className="py-[15px]">
          <hr className="border-t border-black" />
        </div>
      </div>
    </section>
  );
}

export default function ProductListing({ heading, intro, products }) {
  return (
    <>
      <section className="px-[15px] pt-[40px]">
        <div className="mx-auto max-w-[1140px] px-[10px] text-center">
          <h2 className="font-semibold text-black">{heading}</h2>
          <p className="mt-[20px]">{intro}</p>
        </div>
      </section>
      {products.map((product, i) => (
        <ProductBlock key={`${product.title}-${i}`} product={product} first={i === 0} />
      ))}
    </>
  );
}
