import React, { useMemo } from "react";
import MissionImage from "@/public/mission.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Mission: React.FC = () => {
  const missions = useMemo(() => {
    return [
      "Enhance accessibility",
      "Empower Pharmacies",
      "Elevate Healthcare Delivery",
    ];
  }, []);

  return (
    <div className="flex justify-center items-center py-12 pb-24 border-y">
      <div className="container mx-auto px-4 md:px-12 lg:px-24 xl:px-32">
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center">
          <div className="lg:w-2/5 flex flex-col gap-12">
            <Image
              src={MissionImage}
              alt="Vision"
              width={500}
              height={500}
              unoptimized
              className="mx-auto rounded-xl w-full"
            />

            <Button
              className="bg-teal-500 hover:bg-teal-600 rounded-full px-4 lg:px-12 text-white w-full text-xl"
              asChild
            >
              <Link href="/enquiry-form">Contact Us</Link>
            </Button>
          </div>
          <div className="lg:w-3/5 my-8 flex flex-col md:py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left mb-8 text-teal-800">
              Our Mission
            </h1>

            <p className="text-lg md:text-2xl mb-4 text-slate-400 lg:w-3/4 text-justify lg:text-left">
              Shrikosh&apos;s mission is to empower pharmacies across India, both in
              rural and urban areas, by providing a streamlined and efficient
              healthcare supply chain solution. We strive to ensure timely
              delivery of a diverse range of high-quality medicines at
              competitive prices, ultimately enhancing accessibility to
              essential healthcare products for everyone.
            </p>

            <ul className="text-lg text-slate-400 flex flex-row flex-wrap gap-4 mt-4 max-w-2xl">
              {missions.map((mission, index) => (
                <li
                  key={index}
                  className="bg-gradient-to-r from-amber-100 to-amber-200 text-teal-800 border text-sm md:text-base p-1 px-4 rounded-full w-fit"
                >
                  {mission}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
