import { Button } from "@/components/ui/button";
import {
  ArrowBigRight,
  ArrowRight,
  ClipboardCheck,
  Container,
  Handshake,
  Timer,
  Warehouse,
} from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

const useData = () => {
  const data = useMemo(() => {
    return [
      {
        title: "Diverse Inventory",
        description:
          "We offer a wide selection of top-tier generic, surgical, and over-the-counter medicines, ensuring retailers can meet various customer needs.",
      },
      {
        title: "Quality Assurance",
        description:
          "Our medications come directly from reputable sources, guaranteeing authenticity and reliability.",
      },
      {
        title: "Efficient Supply Chain",
        description:
          "With optimized logistics, we ensure timely and consistent product delivery.",
      },
      {
        title: "Timely Delivery",
        description:
          "We prioritize on-time delivery, helping retailers maintain customer satisfaction and meet demand effectively.",
      },
      {
        title: "Supportive Partnership",
        description:
          "We value relationships with retailers, providing assistance and guidance for mutual success and growth.",
      },
    ];
  }, []);

  return data;
};

const Card = ({
  icon,
  title,
  subtitle,
  description,
}: {
  icon: any;
  title: string;
  subtitle: string;
  description: string;
}) => {
  return (
    <div className="p-4 px-8 rounded flex flex-col gap-4 min-w-64 lg:min-w-72 xl:min-w-80 max-w-[50rem]">
      <h4 className="text-4xl font-extrabold text-teal-800">{subtitle}</h4>

      <div className="flex flex-row gap-4 items-center">
        {icon}
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <p className="text-left text-slate-500 text-lg mt-2">{description}</p>
    </div>
  );
};

export default function WhyRetailersChooseUs() {
  const data = useData();

  const icons = [
    <Warehouse className="w-12 h-12 bg-green-100 text-green-800 p-2 rounded-xl" key="warehouse"/>,
    <ClipboardCheck className="w-12 h-12 bg-cyan-100 text-cyan-800 p-2 rounded-xl" key="clipboard"/>,
    <Container className="w-12 h-12 bg-violet-100 text-violet-800 p-2 rounded-xl" key="container"/>,
    <Timer className="w-12 h-12 bg-amber-100 text-amber-800 p-2 rounded-xl" key="timer"/>,
    <Handshake className="w-12 h-12 bg-blue-100 text-blue-800 p-2 rounded-xl" key="handhshake"/>,
  ];

  return (
    <div className="flex flex-col gap-8 items-center">
      <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-center text-teal-700 font-extrabold max-w-xl">
        Why Retailers Choose Us
      </h2>
      <p className="text-center w-80 md:w-96 lg:text-xl text-slate-400">
        Discover the benefits of choosing Shrikosh for your pharmacy needs.
      </p>

      <div className="flex flex-row gap-4">
        <Button
          className="bg-teal-600 text-white hover:bg-teal-700 rounded-xl px-8"
          asChild
        >
          <Link href="/contact">Contact Us</Link>
        </Button>
        <Button
          variant={"link"}
          className="bg-transparent text-teal-600 hover:bg-teal-100 rounded-xl px-8 text-xl"
          asChild
        >
          <Link href="/about">Learn More</Link>
        </Button>
      </div>

      <ul className="flex flex-row flex-wrap justify-center gap-8 lg:mt-12">
        {data.map((item, index) => (
          <li
            key={index}
            className="border border-slate-200 basis-full md:basis-1/3 lg:basis-1/4 rounded-xl flex-1 relative pb-8 overflow-hidden"
          >
            <Card
              icon={icons[index]}
              title={item.title}
              subtitle={`0${index + 1}`}
              description={item.description}
            />

            <div className="absolute w-full h-2 bg-teal-800 bottom-0"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
