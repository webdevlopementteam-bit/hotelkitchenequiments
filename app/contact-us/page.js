import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { EnvelopeOpenTextIcon, MapMarkerAltIcon, MobileAltIcon } from "@/components/Icons";

export const metadata = { title: "Contact Us" };

const mapQuery = encodeURIComponent(
  "Office Address : Plot no. A1, suraj vihar, opposite NSIT college, near Dwarka Mor metro station, New Delhi -110078"
);

function InfoBox({ icon: Icon, title, children }) {
  return (
    <div className="flex items-start gap-[15px]">
      {/* Fixed-width icon slot keeps every text column aligned. */}
      <span className="flex w-[36px] shrink-0 justify-center pt-[2px]">
        <Icon className="h-[32px] w-[32px] fill-white" />
      </span>
      <div className="min-w-0 flex-1">
        {title && <h3 className="mb-[8px] text-[21px] leading-[1.3] text-white">{title}</h3>}
        <div className="leading-[1.6] text-white">{children}</div>
      </div>
    </div>
  );
}

function WhiteDivider() {
  return <hr className="border-t border-white/60" />;
}

const phones = ["9310010882", "9355055513", "9310510882", "9310804106", "9811810882"];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="CONTACT US"
        image="/images/woman-working-call-centerd96e.webp"
        gradient="linear-gradient(180deg, #8D3A26 0%, #AAAAAA 100%)"
      />

      <section className="bg-[#FCF6F4] px-[15px] pt-[40px]">
        <div className="mx-auto max-w-[1140px] px-[10px]">
          <h5 className="text-center">Have any queries?</h5>
          <h2 className="text-center">We&apos;re here to help.</h2>

          <div className="flex flex-col pt-[50px] pb-[80px] md:flex-row">
            <div className="space-y-[25px] bg-[#CF7965] p-[30px] md:w-[38.393%] md:p-[40px] lg:p-[50px]">
              <InfoBox icon={MapMarkerAltIcon} title="Our Location">
                <p>
                  <strong className="font-semibold">Office Address :</strong> Plot no. A1, suraj vihar, opposite NSIT
                  college, near Dwarka Mor metro station, New Delhi -110078
                </p>
                <p className="mt-[12px]">
                  <strong className="font-semibold">Factory &amp; Showroom Address :</strong> Khewat No. 979, Khatoni
                  No. 1127 Khatri Industrial Area , Khasra No. 170/5/1, Sampla Beri Road , Ismalia-11B , Rohtak ,
                  Haryana-124501
                </p>
              </InfoBox>
              <WhiteDivider />
              <InfoBox icon={MobileAltIcon} title="Phone Number">
                <ul className="grid grid-cols-1 gap-x-[20px] gap-y-[2px] sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                  {phones.map((phone) => (
                    <li key={phone}>
                      <a href={`tel:+91${phone}`} className="whitespace-nowrap hover:underline">
                        +91 {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </InfoBox>
              <WhiteDivider />
              <InfoBox icon={EnvelopeOpenTextIcon} title="Email Us">
                <a href="mailto:royalequipments@gmail.com" className="block break-all hover:underline">
                  royalequipments@gmail.com
                </a>
                <a href="mailto:sales@royalequipments.in" className="block break-all hover:underline">
                  sales@royalequipments.in
                </a>
              </InfoBox>
            </div>
            <div className="bg-white px-[20px] pt-[20px] pb-[20px] md:w-[61.607%] md:pt-0">
              <div className="md:pt-[20px]">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[400px]">
        <iframe
          title="Office Address : Plot no. A1, suraj vihar, opposite NSIT college, near Dwarka Mor metro station, New Delhi -110078"
          src={`https://maps.google.com/maps?q=${mapQuery}&t=m&z=10&output=embed&iwloc=near`}
          className="block h-[450px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
