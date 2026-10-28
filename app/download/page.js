import PageHero from "@/components/PageHero";
import { FilePdfIcon } from "@/components/Icons";
import { brochureUrl } from "@/data/site";

export const metadata = { title: "Download" };

export default function DownloadPage() {
  return (
    <>
      <PageHero title="DOWNLOAD" image="/images/life-style.webp" />
      <section className="px-[15px] py-[60px]">
        <div className="mx-auto max-w-[1140px] px-[10px] text-center">
          <h2 className="font-semibold text-black">Brochure</h2>
          <p className="mt-[20px]">Download the Royal Equipment Co. product brochure (PDF).</p>
          <a
            href={brochureUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[30px] inline-flex items-center gap-[10px] rounded-[3px] bg-[#0004B7] px-[25px] py-[12px] font-medium text-white transition-colors hover:bg-[#020350]"
          >
            <FilePdfIcon className="h-[18px] w-[18px]" />
            Download Brochure
          </a>
        </div>
      </section>
    </>
  );
}
