import React from "react";
import Image from "next/image";
import SurgeryImage from "@/public/pexels-gaspar-osorio-15771808.jpg";
import { Sparkle } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="p-12 lg:p-24 flex flex-row">
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl font-extrabold leading-8 w-full md:w-8/12 md:text-4xl lg:text-5xl">
          Revolutionizing Healthcare Supply Chain in{" "}
          <span className="text-teal-500">Rural India</span>
        </h1>

        <ul className="my-8 text-sm md:text-base flex flex-col gap-2 text-slate-600">
          <li className="flex flex-row items-start gap-2">
            <Sparkle size={24} />
            <span>Guaranteed 24-Hour Delivery</span>
          </li>

          <li className="flex flex-row items-start gap-2">
            <Sparkle size={24} />
            <span>Wide Variety of Brands</span>
          </li>

          <li className="flex flex-row items-start gap-2">
            <Sparkle size={24} />
            <span>Flexible Cash Trade</span>
          </li>
        </ul>

        <Button
          className="bg-teal-400 hover:bg-teal-500 hover:-translate-y-1 text-white rounded px-8 w-full mt-8 md:w-fit"
          size={"lg"}
          asChild
        >
          <Link href="/enquiry-form">Enquire Now</Link>
        </Button>
      </div>

      <div className="hidden md:flex justify-center md:w-1/2 relative">
        <Image
          src={SurgeryImage}
          alt="Surgery Image"
          height={400}
          width={600}
          className="rounded-xl h-96 w-96 z-10  hover:translate-x-2 hover:translate-y-2 transition-all"
        />
        <div className="hidden lg:block absolute w-96 h-96 bg-gray-600 blur-sm translate-x-4 translate-y-4 rounded-xl"></div>
      </div>
    </section>
  );
};

export default Hero;
