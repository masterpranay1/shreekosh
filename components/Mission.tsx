import React from "react";
import MissionImage from "../public/mission.jpg";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Mission: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center">
          <div className="lg:w-1/2">
            <Image
              src={MissionImage}
              alt="Vision"
              width={500}
              height={500}
              unoptimized
              className="mx-auto"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-24 my-8 flex flex-col md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left mb-8 text-teal-400">
              Our Mission
            </h1>

            <p className="text-lg md:text-2xl mb-4 text-slate-400 lg:w-3/4">
              We strive to offer our customers the lowest possible prices, the
              best available selection and variety, timely delivery and the
              utmost convenience.
            </p>

            <Button
              asChild
              className="w-1/2 mx-auto lg:mx-0 bg-teal-500 hover:bg-teal-400 mt-8 py-2 rounded"
            >
              <Link href="#" className="text-xl text-white">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
