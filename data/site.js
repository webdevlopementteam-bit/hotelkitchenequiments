export const siteName = "hotelkitchenequipments.in";
export const siteUrl = "https://www.hotelkitchenequipments.in";
export const brochureUrl = "/downloads/royal-equipment-co-1.pdf";

export const productCategories = [
  { label: "Bakery Equipment", footerLabel: "Bakery-Equipment", href: "/bakery-equipment" },
  { label: "Preparation Equipment", footerLabel: "Preparation Equipments", href: "/preparation-equipment" },
  { label: "Bar Equipment", footerLabel: "Bar Equipment", href: "/bar-equipment" },
  { label: "Cooking Equipment", footerLabel: "Cooking Equipment", href: "/cooking-equipment" },
  { label: "Refrigeration Equipment", footerLabel: "Refrigeration Equipment", href: "/refrigeration-equipment" },
  { label: "Chapati Equipment", footerLabel: "Chapati Equipments", href: "/chapati-equipment" },
  { label: "Commercial Refrigerator", footerLabel: "Commercial Refrigerator", href: "/commercial-refrigerator" },
  { label: "Service Equipment", footerLabel: "Service Equipments", href: "/service-equipment" },
  { label: "Food Preparation Equipment", footerLabel: "Food Preparation Equipments", href: "/food-preparation-equipment" },
];

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Products", href: "/our-products", children: productCategories },
  { label: "Our Clients", href: "/our-clients" },
  { label: "Brand", href: "/brand" },
  { label: "Download", href: "/download", children: [{ label: "Brochure", href: brochureUrl, external: true }] },
  { label: "Contact Us", href: "/contact-us" },
];

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Clients", href: "/our-clients" },
  { label: "Brand", href: "/brand" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Brochure", href: brochureUrl, external: true },
  { label: "Catelogue", href: "/download" },
  { label: "Our Products", href: "/our-products" },
];

export const contact = {
  phones: ["+91 9310010882", "+91 9310510882", "+91 9811810882", "+91 9355055513", "+91 9310804106"],
  emails: ["royalequipments@gmail.com", "Sales@Royalequipments.in"],
  proprietor: "Sushil Kumar (Proprietor)",
  office:
    "Plot no. A1, surajvihar, opposite NSIT college, near Dwarka Mor metro station, New Delhi -110078",
  factory:
    "Khewat No. 979, Khatoni No. 1127 Khatri Industrial Area , Khasra No. 170/5/1, Sampla Beri Road , Ismalia-11B , Rohtak , Haryana-124501",
};

// Pages + products indexed by the header search modal.
export const searchIndex = [
  ...mainNav.filter((item) => !item.children).map(({ label, href }) => ({ label, href })),
  { label: "Our Products", href: "/our-products" },
  { label: "Download", href: "/download" },
  ...productCategories.map(({ label, href }) => ({ label, href })),
];
