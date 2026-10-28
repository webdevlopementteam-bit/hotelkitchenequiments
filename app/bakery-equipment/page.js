import PageHero from "@/components/PageHero";
import ProductListing from "@/components/ProductListing";
import { bakery } from "@/data/bakery";

export const metadata = { title: "Bakery Equipment" };

export default function BakeryEquipmentPage() {
  return (
    <>
      <PageHero
        title="BAKERY EQUIPMENT"
        image="/images/man-working-bread-factory.webp"
        gradient="linear-gradient(180deg, #000262 0%, #303030 100%)"
      />
      <ProductListing {...bakery} />
    </>
  );
}
