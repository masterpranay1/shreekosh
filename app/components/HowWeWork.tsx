"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useMemo, useState } from "react";

const useData = () => {
  return [
    {
      title: "Assessment and Planning",
      description:
        "We begin by understanding your unique needs and objectives. Our team conducts a thorough assessment to tailor solutions that perfectly match your requirements.",
    },
    {
      title: "Product Selection and Sourcing",
      description:
        "Leveraging our extensive network and expertise, we curate a comprehensive inventory of top-tier medications. Each product is sourced directly from reputable suppliers, guaranteeing authenticity and quality.",
    },
    {
      title: "Order Placement and Fulfilment",
      description:
        "Our streamlined process ensures convenience. Simply place your orders via phone with our friendly and knowledgeable staff. Once confirmed, our system ensures prompt processing and dispatch of your order.",
    },
    {
      title: "Logistics and Delivery",
      description:
        "With a focus on reliability and timeliness, our logistics team facilitates seamless delivery. We optimize routes and minimize transit times to ensure efficient service.",
    },
    {
      title: "Customer Support and Feedback",
      description:
        "Our commitment goes beyond delivery. We provide dedicated customer support and value your feedback to continuously improve our services.",
    },
  ];
};

export default function HowWeWork() {
  const data = useData();

  const images = useMemo(() => {
    return [
      "planning.jpg",
      "product-selection.png",
      "order-placement.jpg",
      "delivery.jpg",
      "feedback.jpg",
    ];
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <section className="flex flex-col gap-8 items-center">
      <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl text-center text-teal-700 font-extrabold max-w-xl">
        How Shreekosh Works
      </h2>
      <p className="text-center w-80 md:w-[30rem] md:text-xl lg:text-2xl text-slate-400">
        At ShreeKosh, transparency and efficiency define our operational ethos.
        Here's a glimpse into our streamlined process:
      </p>

      <div className="flex flex-row gap-8 w-full mt-12 min-h-[50vh]">
        <img
          src={`/how-we-work/${images[currentImageIndex]}`}
          alt="How Shreekosh Works"
          className="w-1/2 rounded-xl hidden lg:block aspect-video max-h-96"
        />
        <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
          {data.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger
                className="text-xl md:text-2xl lg:text-2xl text-teal-800 lg:text-left"
                onClick={() => setCurrentImageIndex(index)}
              >
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-lg md:text-xl text-slate-400">
                <p>{item.description}</p>
                <img
                  src={`/how-we-work/${images[index]}`}
                  alt={item.title}
                  className="w-full mt-4 rounded-xl lg:hidden"
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
