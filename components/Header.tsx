"use client";
import React from "react";
import Image from "next/image";
import Logo from "../public/logo.png";
import { IoMenuSharp } from "react-icons/io5";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      key: "home",
    },
    {
      name: "About",
      link: "/#about",
      key: "about",
    },
    {
      name: "Our USP",
      link: "/#our-usp",
      key: "our-usp",
    },
    {
      name: "Mission and Vision",
      link: "/#mission-and-vision",
      key: "mission-and-vision",
    },
    {
      name: "Contact Us",
      link: "/#contact-us",
      key: "contact-us",
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState("home");

  return (
    <div className="hidden md:flex items-center gap-8 lg:gap-16 mx-auto">
      {navItems.map((item, index) => (
        <Link
          href={item.link}
          key={item.key}
          className={cn([
            "flex relative",
            "text-slate-400 hover:text-slate-700 font-bold cursor-pointer",
            activeIndex === item.key && "text-slate-800",
            "hover:-translate-y-0.5 transition-all",
          ])}
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

const NavbarMobile = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      key: "home",
    },
    {
      name: "About",
      link: "/#about",
      key: "about",
    },
    {
      name: "Our USP",
      link: "/#our-usp",
      key: "our-usp",
    },
    {
      name: "Mission and Vision",
      link: "/#mission-and-vision",
      key: "mission-and-vision",
    },
    {
      name: "Contact Us",
      link: "/#contact-us",
      key: "contact-us",
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState("home");

  return (
    <div className="md:hidden flex flex-col items-center gap-8 lg:gap-16 mx-auto bg-white py-8">
      {navItems.map((item, index) => (
        <Link
          href={item.link}
          key={item.key}
          className={cn([
            "flex relative",
            "text-slate-400 hover:text-slate-700 font-bold cursor-pointer",
            activeIndex === item.key && "text-slate-800",
            "hover:-translate-y-0.5 transition-all",
          ])}
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
    <div>
      <div className="flex items-center p-4 bg-white shadow">
        <Link href="/">
          <Image
            src={Logo}
            width={100}
            height={100}
            alt="logo"
            unoptimized
            className="w-24 h-12 bg-white p-2 rounded-xl border border-slate-600"
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
