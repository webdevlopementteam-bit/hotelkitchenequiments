"use client";

import { useState } from "react";
import { contact } from "@/data/site";

const fieldClass =
  "block h-[40px] w-full rounded-[3px] border border-palette-5 bg-white px-[12px] text-[16px] text-palette-3 outline-none transition-colors focus:border-palette-1";
const labelClass = "mb-[8px] block text-[16px] font-bold text-palette-4";
const subLabelClass = "mt-[5px] block text-[13px] text-palette-3";

// The original WPForms form posts to WordPress; with no backend here it hands off to the visitor's mail client.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = `${data.get("first")} ${data.get("last")}`.trim();
    const body = [`Name: ${name}`, `Email: ${data.get("email")}`, `Mobile: ${data.get("mobile")}`, "", data.get("message")].join("\n");
    window.location.href = `mailto:${contact.emails[0]}?subject=${encodeURIComponent(`Enquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-[20px]">
      <div>
        <span className={labelClass}>
          Name <span className="text-[#d63637]">*</span>
        </span>
        <div className="flex gap-[15px]">
          <label className="flex-1">
            <input name="first" required placeholder="First Name" className={fieldClass} />
            <span className={subLabelClass}>First</span>
          </label>
          <label className="flex-1">
            <input name="last" required placeholder="Last Name" className={fieldClass} />
            <span className={subLabelClass}>Last</span>
          </label>
        </div>
      </div>
      <label className="block">
        <span className={labelClass}>
          Email <span className="text-[#d63637]">*</span>
        </span>
        <input name="email" type="email" required placeholder="Email" className={fieldClass} />
      </label>
      <label className="block">
        <span className={labelClass}>Numbers</span>
        <input name="mobile" type="tel" inputMode="numeric" placeholder="Mobile" className={fieldClass} />
      </label>
      <label className="block">
        <span className={labelClass}>Paragraph Text</span>
        <textarea
          name="message"
          rows={6}
          placeholder="Message"
          className={`${fieldClass} h-auto py-[10px]`}
        />
      </label>
      <button
        type="submit"
        className="min-h-[40px] rounded-[3px] bg-palette-1 px-[20px] py-[5px] text-[15px] font-medium text-white transition-colors hover:bg-palette-2"
      >
        Submit
      </button>
      {sent && <p className="text-[14px] text-[#008a20]">Thanks! Your email app should open with the enquiry ready to send.</p>}
    </form>
  );
}
