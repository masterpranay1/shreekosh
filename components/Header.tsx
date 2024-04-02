"use client";
import React, { useEffect, useMemo } from "react";
import Image from "next/image";
import Logo from "../public/logo.png";
import { IoMenuSharp } from "react-icons/io5";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const useNavData = () => {
  const navItems = useMemo(() => {
    return [
      {
        name: "Home",
        link: "/",
        key: "home",
      },
      {
        name: "About Us",
        link: "/#about",
        key: "about",
      },
      {
        name: "Careers",
        link: "/careers",
        key: "careers",
      },
      {
        name: "Gallery",
        link: "/gallery",
        key: "gallery",
      },
    ];
  }, []);

  return { navItems };
};

const Navbar = () => {
  const { navItems } = useNavData();

  const [activeIndex, setActiveIndex] = React.useState("home");

  return (
    <div className="hidden md:flex items-center justify-center gap-8 lg:gap-16 w-full">
      <div className="flex flex-row gap-8 lg:gap-16 ml-auto">
        {navItems.map((item, index) => (
          <Link
            href={item.link}
            key={item.key}
            className={cn([
              "flex items-center justify-center relative",
              "text-slate-400 hover:text-slate-700 font-semibold cursor-pointer",
              activeIndex === item.key && "text-teal-500 hover:text-teal-600",
              "hover:-translate-y-0.5 transition-all",
            ])}
            onClick={() => setActiveIndex(item.key)}
          >
            {item.name}
            {activeIndex === item.key && (
              <span className="w-4 h-1 bg-teal-600 rounded-full absolute -bottom-2"></span>
            )}
          </Link>
        ))}
      </div>

      <Button
        className="bg-teal-500 hover:bg-teal-600 rounded text-white ml-auto"
        asChild
      >
        <Link href="/enquiry-form">Enquire Now</Link>
      </Button>
    </div>
  );
};

const NavbarMobile = () => {
  const { navItems } = useNavData();

  const [activeIndex, setActiveIndex] = React.useState("home");

  return (
    <div className="md:hidden flex flex-col items-center gap-8 lg:gap-16 mx-auto bg-white py-8">
      {navItems.map((item, index) => (
        <Link
          href={item.link}
          key={item.key}
          className={cn([
            "flex relative",
            "text-slate-400 hover:text-slate-700 cursor-pointer font-semibold",
            activeIndex === item.key && "text-slate-800",
            "hover:-translate-y-0.5 transition-all",
          ])}
          onClick={() => setActiveIndex(item.key)}
        >
          {item.name}
          {activeIndex === item.key && (
            <span className="w-1.5 h-1.5 bg-teal-600 rounded-full absolute -bottom-2 left-[49%]"></span>
          )}
        </Link>
      ))}
    </div>
  );
};

const Header = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  return (
    <div className="sticky top-0 z-50">
      <div className="flex items-center p-4 bg-white/30 shadow backdrop-blur-sm">
        <Link href="/">
          <Image
            src={Logo}
            width={500}
            height={500}
            alt="logo"
            unoptimized
            className="w-32 p-2"
          />
        </Link>
        <Navbar />
        <IoMenuSharp
          className="md:hidden text-black ml-auto cursor-pointer"
          size={30}
          onClick={() => setIsNavOpen(!isNavOpen)}
        />
      </div>
      {isNavOpen && <NavbarMobile />}
    </div>
  );
};

export default Header;
