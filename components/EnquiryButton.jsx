import Link from "next/link";

// Outlined "enquiry now" button with the Element Pack fill-on-hover effect.
export default function EnquiryButton({ color = "#0A5786", textColor, className = "" }) {
  return (
    <div className={`mt-[20px] text-center ${className}`}>
      <Link
        href="/contact-us"
        style={{ "--btn": color, "--btn-text": textColor ?? color }}
        className="group relative inline-flex overflow-hidden rounded-[3px] border border-(--btn) bg-white px-[25px] py-[10px] text-[14px] font-medium text-(--btn-text) shadow-[2px_2px_4px_0px_rgba(0,4,183,0.21)] transition-all duration-300 hover:text-white hover:shadow-[0px_6px_20px_0px_rgba(241,33,132,0.15)]"
      >
        <span className="absolute inset-0 origin-left scale-x-0 bg-(--btn) transition-transform duration-300 group-hover:scale-x-100" />
        <span className="relative">enquiry now</span>
      </Link>
    </div>
  );
}
