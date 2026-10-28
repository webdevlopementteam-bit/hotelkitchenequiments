import { Lato, Nunito_Sans, Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteName, siteUrl } from "@/data/site";
import "./globals.css";

const lato = Lato({ variable: "--font-lato", subsets: ["latin"], weight: ["400", "700"] });
const openSans = Open_Sans({ variable: "--font-open-sans", subsets: ["latin"], weight: ["400", "500", "600"] });
const nunitoSans = Nunito_Sans({ variable: "--font-nunito-sans", subsets: ["latin"], weight: ["500"] });

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s – ${siteName}`,
  },
  description:
    "Royal Equipments – ISO 9001:2008 certified Hotel Kitchen Equipment Manufacturer, importer, supplier and trader of Bakery Equipment, Cooking Ranges and Food Processing Machines since 2001.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" className={`${lato.variable} ${openSans.variable} ${nunitoSans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
