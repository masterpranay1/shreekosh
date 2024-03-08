import React from "react";
import AboutImage from "../public/about.png";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-white py-8 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <Image
              src={AboutImage}
              alt="Vision"
              width={500}
              height={500}
              unoptimized
              className="mx-auto h-64 md:h-96 rounded"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8 flex flex-col md:p-12 mt-4 md:mt-0">
            <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left mb-8 text-teal-400">
              About Us
            </h1>

            <p className="text-lg md:text-2xl text-slate-400 lg:w-3/4">
              Varek Pharmasol Shrikosh aims to revolutionize healthcare supply
              chain management by ensuring timely delivery, diverse product
              range, and convenience. With a focus on rural markets initially,
              the company plans to expand nationwide, ensuring accessibility and
              affordability of healthcare products across India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
