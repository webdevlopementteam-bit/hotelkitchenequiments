import Link from "next/link";
import {
  CaretRightIcon,
  EnvelopeOpenIcon,
  MapMarkerAltIcon,
  PhoneSquareAltIcon,
  UserIcon,
} from "@/components/Icons";
import { contact, footerQuickLinks, productCategories } from "@/data/site";

function FooterHeading({ children }) {
  return <h4 className="mb-[20px] text-[25px] leading-[1.5] font-bold text-white">{children}</h4>;
}

function LinkList({ items }) {
  return (
    <ul className="space-y-[10px]">
      {items.map((item) => {
        const Tag = item.external ? "a" : Link;
        const extra = item.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
        return (
          <li key={item.label}>
            <Tag href={item.href} {...extra} className="flex items-center text-[17px] font-semibold text-white">
              <CaretRightIcon className="mr-[4px] h-[17px] w-[17px] shrink-0 fill-white" />
              <span>{item.label}</span>
            </Tag>
          </li>
        );
      })}
    </ul>
  );
}

function ContactRow({ icon: Icon, children }) {
  return (
    <li className="flex items-start border-t border-[#ddd] pt-[7.5px] first:border-t-0 first:pt-0 [&:not(:last-child)]:pb-[7.5px]">
      <Icon className="mt-[3px] mr-[12px] h-[22px] w-[22px] shrink-0 fill-white" />
      <span className="text-[17px] font-semibold text-white">{children}</span>
    </li>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#2B2B2B] px-[10px] py-[10px] md:px-[40px] md:py-[70px]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-y-[30px] p-[10px] md:flex-row md:flex-wrap lg:flex-nowrap">
          <div className="md:w-1/2 md:px-[10px] lg:w-[30%]">
            <FooterHeading>About Us</FooterHeading>
            <p className="leading-[29px] text-white">
              Established in the year 2001, we, Royal Equipment Company, an ISO 9001:2008 certified company, are one
              of the distinguished manufacturers, importers, suppliers and traders of a long list of Kitchen Equipment.
              Our product range consists of Bakery Equipment, Cooking Range and Food Processors
            </p>
          </div>
          <div className="md:w-1/2 md:px-[10px] lg:ml-[40px] lg:w-[20%]">
            <FooterHeading>Quick Links</FooterHeading>
            <LinkList items={footerQuickLinks} />
          </div>
          <div className="md:w-1/2 md:px-[10px] lg:w-[20.753%]">
            <FooterHeading>Our Products</FooterHeading>
            <LinkList items={productCategories.map((c) => ({ label: c.footerLabel, href: c.href }))} />
          </div>
          <div className="md:w-1/2 md:px-[10px] md:pt-[10px] lg:w-[29%]">
            <FooterHeading>Contact Us</FooterHeading>
            <ul>
              <ContactRow icon={PhoneSquareAltIcon}>
                {contact.phones.map((phone, i) => (
                  <span key={phone}>
                    <a href={`tel:${phone.replace(/\s/g, "")}`} className="whitespace-nowrap">
                      {phone}
                    </a>
                    {i < contact.phones.length - 1 && " , "}
                  </span>
                ))}
              </ContactRow>
              <ContactRow icon={EnvelopeOpenIcon}>
                {contact.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className="block break-all">
                    {email}
                  </a>
                ))}
              </ContactRow>
              <ContactRow icon={UserIcon}>{contact.proprietor}</ContactRow>
              <ContactRow icon={MapMarkerAltIcon}>Office Address : {contact.office} Factory</ContactRow>
              <ContactRow icon={MapMarkerAltIcon}>Factory Address : {contact.factory}</ContactRow>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#171717] px-[10px] py-[15px] text-center text-white">
        <p>Copyright © 2024 Royal Equipment Co. All Right Reserved | Powered by Bharat Bizmart</p>
      </div>
    </footer>
  );
}
