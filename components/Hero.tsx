import React from "react";
import Image from "next/image";
import SurgeryImage from "@/public/pexels-gaspar-osorio-15771808.jpg";
import { Sparkle } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="px-4 py-12 lg:px-24 lg:py-16 xl:px-32 flex flex-row">
      <div className="w-full flex flex-col items-center gap-8">
        <h1 className="uppercase text-5xl font-extrabold w-full md:w-8/12 lg:text-6xl xl:text-7xl text-center flex flex-col items-center text-slate-700">
          <span>Simplifying</span>
          <span>Healthcare</span>
          <span className="text-teal-600">Supply Chain</span>
        </h1>

        <p className="text-center text-lg lg:text-xl text-slate-500 max-w-md lg:max-w-lg">
          Shreekosh by Varek Pharmasol: Ensuring Guaranteed 24-Hour Delivery,
          Wide Variety of Medicines, and Flexible Cash Trade for pharmacies
          nationwide.
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <Button
            className="bg-teal-400 hover:bg-teal-500 text-white rounded-full text-lg px-8 w-full md:w-72"
            size={"lg"}
            asChild
          >
            <Link href="/enquiry-form">Enquire Now</Link>
          </Button>

          <Button
            className="bg-white border-2 border-teal-500 hover:bg-teal-500 text-slate-800 hover:text-white rounded-full text-lg px-8 w-full md:w-72"
            size={"lg"}
            asChild
            variant={"outline"}
          >
            <Link href="/enquiry-form">Explore How We Works</Link>
          </Button>
        </div>

        <video
          className="w-full rounded-xl md:mt-8"
          autoPlay
          loop
          muted
          // playsInline
          // controls
        >
          <source src="/promo-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Hero;
