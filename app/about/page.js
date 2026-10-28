import Image from "next/image";
import PageHero from "@/components/PageHero";
import { CheckCircleIcon } from "@/components/Icons";

export const metadata = { title: "About" };

const infoTables = [
  {
    title: "Basic Information",
    rows: [
      ["Nature of Business", "Exporter and Manufacturer"],
      ["Company CEO", "Sushil Kumar"],
      ["Registered Address", "Plot no. A1, surajvihar, opposite NSIT college, near Dwarka Mor metro station, New Delhi -110078"],
      ["Industry", "Manufacturing, Trading, Importer and Exporter of Kitchen Equipment such as Cooking Range, Bakery Range, and Food Processor, etc."],
      ["Total Number of Employees", "26 to 50 People"],
      ["Year of Establishment", "2001"],
      ["Legal Status of Firm", "Individual - Proprietor"],
      ["Promoter", "Mr. Sushil Kumar"],
      ["Annual Turnover", "Rs. 10 - 25 Crore"],
    ],
  },
  {
    title: "Infrastructure",
    rows: [
      ["Location Type", "URBAN"],
      ["Building Infrastructure", "Permanent"],
      ["Size of Premises", "1500 Square yards"],
      ["Space Around", "Front porch"],
    ],
  },
  {
    title: "Statutory Profile",
    rows: [
      ["Import Export Code (IEC)", "05120*****"],
      ["GST No.", "07AIOPK9030E1Z8"],
    ],
  },
  {
    title: "Packaging/Payment and Shipment Details",
    rows: [
      ["Payment Mode", "Cash, DD, RTGS, Bank Transfer"],
      ["Shipment Mode", "By Road"],
    ],
  },
];

function InfoTable({ title, rows }) {
  return (
    <section className="px-[10px] py-[40px]">
      <div className="mx-auto max-w-[1140px]">
        <div className="bg-black py-[10px]">
          <h2 className="pl-[15px] text-[28px] font-medium text-white md:text-[35px]">{title}</h2>
        </div>
        <div className="mt-[-1px]">
          {rows.map(([label, value], i) => (
            <div key={label} className="flex flex-col border border-palette-3 md:flex-row">
              <div className="flex items-center bg-[#20384C] py-[10px] md:w-[33.393%]">
                <h4 className="pl-[15px] text-[20px] font-medium text-white md:text-[23px]">{label}</h4>
              </div>
              <div className={`pt-[10px] pr-[10px] pb-[9px] pl-[30px] md:w-[66.607%] ${i % 2 ? "bg-[#D0D6DB]" : "bg-white"}`}>
                <h5 className="leading-[27px] font-medium">{value}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckList({ items, size = "lg" }) {
  return (
    <ul className="space-y-[8px]">
      {items.map((item) => (
        <li key={item} className={`flex items-center font-semibold text-black ${size === "lg" ? "text-[21px]" : "text-[17px]"}`}>
          <CheckCircleIcon className="mr-[8px] h-[21px] w-[21px] shrink-0 fill-[#14B600]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Card({ children, padded = true }) {
  return (
    <div
      className={`m-[10px] shadow-[1px_1px_6px_2px_rgba(0,0,0,0.09)] md:m-[50px] md:flex-1 ${padded ? "p-[30px] md:p-[60px]" : ""}`}
    >
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero title="ABOUT US" image="/images/group-people-working-out-business-plan-officed96e.webp" />

      {/* Proprietor slider + intro */}
      <section className="px-[15px] lg:px-[150px]">
        <div className="mx-auto flex max-w-[1140px] flex-col md:flex-row">
          <div className="pt-[50px] md:w-1/2 md:px-[10px]">
            <div className="about-slider overflow-hidden rounded-[10px] bg-[#212B49]">
              <Image
                src="/images/building-4803602_1920fbf8.webp"
                alt=""
                width={1920}
                height={1280}
                className="h-auto w-full rounded-[10px]"
              />
              <p className="px-[50px] pt-[25px] pb-[35px] text-center font-nunito text-[15px] font-medium text-white">
                Under the capable leadership of our proprietor, <strong>Mr. Shushil Kumar</strong>, we are enjoying an
                unmatched reputation in the industry. We get constant guidance and motivation from our mentor, who holds
                a vast industry experience and huge knowledge of the business.
              </p>
            </div>
            <div className="about-slider mt-[20px] flex justify-center">
              <span className="swiper-pagination-bullet swiper-pagination-bullet-active inline-block" />
            </div>
          </div>
          <div className="flex flex-col justify-center p-[20px] md:mt-[35px] md:w-1/2 md:p-[50px]">
            <h2 className="font-lato text-[40px] leading-[1.5] font-semibold text-black">Royal Equipment Co.</h2>
            <h2 className="font-lato text-[30px] leading-[1.5] font-semibold text-[#0004B7]">About us</h2>
            <p className="mt-[20px] font-open-sans text-[16px] leading-[2.2em] text-black">
              Established in the year 2001, we, Royal Equipment Company, an ISO 9001:2008 certified company, are one of
              the distinguished manufacturers, importers, suppliers and traders of a long list of Kitchen Equipment. Our
              product range consists of Bakery Equipment, Cooking Range and Food Processors that are extremely popular
              for their rugged construction, longer working life, minimum maintenance, ease of operation and flawless
              finishing. Owing to the outstanding features, our product selection is extensively popular among our
              esteemed customers, across the nation. With our hard work and determination, we have earned an unmatched
              reputation in the business. Furthermore, we cater to the varied needs of our clients, within the promised
              time.
            </p>
          </div>
        </div>
      </section>

      <section className="px-[15px] md:-mt-[30px]">
        <p className="mx-auto max-w-[1140px] px-[10px] text-black">
          We have established an excellent infrastructure that is completely equipped with latest and advance technology
          based machinery, which helps us in performing various operations, in hassle-free manner. In addition to the
          spacious workspace, we have recruited a team of experienced and qualified professionals, who are capable of
          understanding &amp; catering to the varied requirements of our prestigious customers, within the committed
          period. We believe in establishing strong rapport with our customers and in the future, we wish to gain more
          acceptance in the market, with our regular efforts.
        </p>
      </section>

      {/* Why Us */}
      <section className="mt-[40px] bg-white p-[15px] md:p-[30px]">
        <div className="mx-auto flex max-w-[1140px] flex-col md:flex-row md:items-center">
          <div className="p-[20px] md:w-1/2 md:p-[35px]">
            <h1 className="font-lato text-[40px] font-semibold text-black">Why Us?</h1>
            <p className="mt-[20px]">
              Royal Equipment Company is one of the preferred choices of our customers for proffering quality grade
              Kitchen Equipment. Our products are appreciated for their outstanding quality and reliable performance. We
              are based on the grounds of moral values and principles. In the past years of our service, we have
              successfully earned the dependence of our clients, whom we value a lot. Our company indulges in ethical
              business dealings only.
            </p>
          </div>
          <div className="p-[20px] md:w-1/2 md:p-[35px]">
            <Image src="/images/download.webp" alt="" width={612} height={408} className="h-auto w-full rounded-[10px]" />
          </div>
        </div>
      </section>

      {infoTables.map((table) => (
        <InfoTable key={table.title} {...table} />
      ))}

      {/* Infrastructure */}
      <section className="mt-[50px] px-[15px]">
        <div className="mx-auto max-w-[1140px] px-[10px]">
          <h2 className="pl-[15px] text-center font-bold text-black">Infrastructure</h2>
          <p className="mt-[20px] text-center text-[#1A1A1A]">
            Infrastructure plays an important role in the success of an organization. In our case, we are backed by a
            spacious workspace that is equipped with a varied range of efficient and powerful machines &amp; tools, which
            play a vital role in attaining the exact desired quality. All the machines and systems are handled by a team
            that is responsible for performing various up gradations, needed from time-to-time.
          </p>
          <h3 className="pt-[30px] pl-[15px] font-semibold text-black">Following are the sections of our infrastructure:</h3>
          <div className="mt-[20px] grid gap-[8px] md:grid-cols-2">
            <CheckList items={["Manufacture", "Quality control", "Administrative"]} />
            <CheckList items={["Warehouse & packaging", "Sales & marketing"]} />
          </div>
        </div>
      </section>

      <section className="mt-[50px] bg-white py-[20px]">
        <div className="mx-auto flex max-w-[1140px] flex-col md:flex-row">
          <Card>
            <h4 className="font-semibold">Infrastructure &amp; Manufacturing Facilities</h4>
            <p className="mt-[20px]">
              An MSME (Micro, Small and Medium Enterprise) is defined by RBI/GOI differently for the Manufacturing and the
              Services Sector, as follows: Manufacturing Sector. Manufacturing sector refers to enterprises engaged in
              manufacture or production, processing or preservation of goods.
            </p>
          </Card>
          <Card padded={false}>
            <Image src="/images/sme-part-ii-500x500-1cad3-1.webp" alt="" width={500} height={500} className="mx-auto h-auto w-full max-w-[500px]" />
          </Card>
        </div>
      </section>

      <section className="mt-[50px] bg-white py-[20px]">
        <div className="mx-auto flex max-w-[1140px] flex-col md:flex-row">
          <Card padded={false}>
            <Image
              src="/images/scan-cert-of-qms-royal-equipment-page-001-500x500-1338c.webp"
              alt=""
              width={500}
              height={500}
              className="mx-auto h-auto w-full max-w-[500px]"
            />
          </Card>
          <Card>
            <h4 className="font-semibold">ISO Certification</h4>
            <div className="mt-[20px]">
              <CheckList
                items={["Certificate Type: ISO 9001:2008", "Issue Date: 24-Jun-2014", "Expiry Date: 23-Jun-2017"]}
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-[#667C8E] px-[15px] py-[45px]">
        <div className="mx-auto max-w-[1140px] px-[10px] text-center">
          <h4 className="font-medium text-white">A Few Words About</h4>
          <h1 className="font-medium text-white">Our Team</h1>
          <p className="mt-[20px] text-white">
            Our company has recruited a team of experienced, well-trained and skilled designers, engineers, technicians,
            quality controllers, warehouse &amp; packaging experts, administrative staff members, sales &amp; marketing
            professionals. Our team members work in full co-ordination with each other and make sure that all the
            products are manufactured as per the industry guidelines. To enhance the knowledge and skills of our team
            members, we carry out several trainings, workshops and seminars, on a regular basis.
          </p>
        </div>
      </section>

      {/* Company Album */}
      <section className="pb-[30px]">
        <h3 className="pt-[45px] text-center font-medium text-black">Company Album</h3>
        <div className="mx-auto flex max-w-[1140px] flex-col md:flex-row">
          {["sme-part-ii-500x500-152cd-1.webp", "scan-cert-of-qms-royal-equipment-page-001-500x500-1fe8c.webp"].map((f) => (
            <div key={f} className="m-[15px] p-[30px] shadow-[1px_0px_6px_0px_rgba(0,0,0,0.19)] md:m-[35px] md:flex-1 md:p-[52px]">
              <Image src={`/images/${f}`} alt="" width={500} height={500} className="mx-auto h-auto w-full max-w-[500px]" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
