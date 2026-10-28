import {
  BalanceScaleIcon,
  ChartBarIcon,
  FileCodeIcon,
  FilePdfIcon,
  GlobeAfricaIcon,
  SortAmountUpIcon,
  UserIcon,
} from "@/components/Icons";

const boxes = [
  { icon: GlobeAfricaIcon, title: "Nature of Business", text: "Exporter and Manufacturer" },
  { icon: UserIcon, title: "Total Number of Employees", text: "26 to 50 People" },
  { icon: SortAmountUpIcon, title: "Year of Establishment", text: "2001" },
  { icon: BalanceScaleIcon, title: "Legal Status of Firm", text: "Individual – Proprietor" },
  { icon: ChartBarIcon, title: "Annual Turnover", text: "Rs. 10 – 25 Crore" },
  { icon: FileCodeIcon, title: "Import Export Code (IEC)", text: "05120*****" },
  { icon: FilePdfIcon, title: "GST Number", text: "07AIOPK9030E1Z8" },
];

// Odd boxes are blue, even boxes are charcoal — as on the original site.
const themes = [
  { icon: "bg-[#0004B7]", hover: "bg-[#020350]", border: "border-[#2F3192]" },
  { icon: "bg-[#282828]", hover: "bg-black", border: "border-black hover:border-[#2F3192]" },
];

function IconBox({ icon: Icon, title, text, theme }) {
  return (
    <div
      className={`group h-full border bg-transparent p-[30px] text-center transition-shadow duration-300 hover:shadow-[0px_10px_20px_0px_rgba(0,0,0,0.05)] ${theme.border}`}
    >
      <div className="mb-[25px] flex justify-center pt-[10px]">
        <span
          className={`relative inline-flex rotate-45 items-center justify-center overflow-hidden p-[25px] text-white transition-transform duration-500 group-hover:rotate-[135deg] ${theme.icon}`}
        >
          <span
            className={`absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 group-hover:scale-y-100 ${theme.hover}`}
          />
          <Icon className="relative h-[40px] w-[40px] rotate-[314deg] transition-transform duration-500 group-hover:rotate-[225deg] lg:h-[20px] lg:w-[20px]" />
        </span>
      </div>
      <h3 className="mb-[10px] text-[20px] leading-[1.5]">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default function InfoBoxes() {
  return (
    <section className="bg-[#FFD1AF14] px-[15px] py-[50px] md:px-[30px] md:py-[80px] lg:px-0 lg:py-[65px]">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-4">
          {boxes.slice(0, 4).map((box, i) => (
            <IconBox key={box.title} {...box} theme={themes[i % 2]} />
          ))}
        </div>
        <div className="mt-[20px] grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:mt-0 lg:grid-cols-4 lg:pt-[40px]">
          {boxes.slice(4).map((box, i) => (
            <IconBox key={box.title} {...box} theme={themes[i % 2]} />
          ))}
        </div>
      </div>
    </section>
  );
}
