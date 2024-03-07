import React from "react";
import VisionImage from "../public/vision.jpg";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Vision: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-white py-8 border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <Image
              src={VisionImage}
              alt="Vision"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8 my-8 flex flex-col">
            <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left mb-8 text-teal-400">
              Our Vision
            </h1>

            <p className="text-lg md:text-2xl mb-4 text-slate-400 lg:w-3/4">
              To be the one-stop solution of multiple range of healthcare
              supplies for all pharmacies / nursing homes situated in rural
              areas to meet their daily requirements.
            </p>

            <Button asChild className="w-1/2 mx-auto lg:mx-0 bg-teal-500 hover:bg-teal-400 mt-8 py-2 rounded">
              <Link href="/about" className="text-xl text-white">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
