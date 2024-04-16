import React from "react";
import VisionImage from "@/public/vision.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Vision: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-teal-50 py-8 border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <Image
              src={VisionImage}
              unoptimized
              alt="Vision"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8 my-8 flex flex-col md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left mb-8 text-teal-800">
              Our Vision
            </h1>

            <p className="text-lg md:text-2xl mb-4 text-slate-400 text-justify lg:text-left">
              Shrikosh's vision is to revolutionize the Indian healthcare
              landscape by building a stronger and more reliable healthcare
              ecosystem. We are committed to continuous improvement, fostering
              strong partnerships with pharmacies, and leveraging innovation to
              ensure seamless delivery of essential medicines. We believe that
              by working together, we can ensure everyone has access to the
              healthcare they deserve
            </p>

            <Button
              className="bg-teal-500 hover:bg-teal-600 rounded-full px-4 lg:px-12 text-white w-full text-xl mt-4"
              asChild
            >
              <Link href="/enquiry-form">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
