"use client";
import React, { useEffect, useMemo } from "react";
import Image from "next/image";
import Logo from "../public/logo.png";
import { IoMenuSharp } from "react-icons/io5";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { SidebarCloseIcon, X } from "lucide-react";
import { usePathname } from "next/navigation";

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
        link: "/about",
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

  const path = usePathname();

  useEffect(() => {
    const activeItem = navItems.find((item) => item.link === path);
    if (activeItem) {
      setActiveIndex(activeItem.key);
    }
  }, [path]);

  return (
    <div className="hidden md:flex items-center justify-center gap-8 lg:gap-16 w-full bg-white">
      <div className="flex flex-row gap-8 lg:gap-16 ml-auto">
        {navItems.map((item, index) => (
          <Link
            href={item.link}
            key={item.key}
            className={cn([
              "flex items-center justify-center relative",
              "text-slate-800 hover:text-slate-700 font-semibold cursor-pointer",
              activeIndex === item.key && "text-teal-700 hover:text-teal-600",
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
        className="bg-teal-500 hover:bg-teal-600 rounded-full px-4 lg:px-12 text-white ml-auto"
        asChild
      >
        <Link href="/enquiry-form">Enquire Now</Link>
      </Button>
    </div>
  );
};

const NavbarMobile = ({ closeNav }: { closeNav: () => void }) => {
  const { navItems } = useNavData();

  const [activeIndex, setActiveIndex] = React.useState("home");

  const path = usePathname();

  useEffect(() => {
    const activeItem = navItems.find((item) => item.link === path);
    if (activeItem) {
      setActiveIndex(activeItem.key);
    }
  }, [path]);

  return (
    <div className="md:hidden absolute w-full h-screen overflow-hidden flex flex-col items-center gap-16 lg:gap-16 mx-auto bg-white py-8 pt-20 px-4">
      {navItems.map((item, index) => (
        <Link
          href={item.link}
          key={item.key}
          className={cn([
            "flex relative",
            "text-slate-400 hover:text-slate-700 cursor-pointer font-bold text-2xl",
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

      <Button
        className="bg-teal-500 hover:bg-teal-600 rounded-full w-1/2 text-white text-xl py-4"
        asChild
      >
        <Link href="/enquiry-form" className="py-4">
          Enquire Now
        </Link>
      </Button>
    </div>
  );
};

const Header = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const path = usePathname();

  useEffect(() => {
    setIsNavOpen(false);
  }, [path]);

  return (
    <div className="sticky top-0 z-50 border-b bg-white">
      <div className="flex items-center px-8 lg:px-24 xl:px-32">
        <Link href="/">
          <Image
            src={Logo}
            width={500}
            height={500}
            alt="logo"
            unoptimized
            className="w-32 py-4"
          />
        </Link>
        <Navbar />

        {!isNavOpen && (
          <IoMenuSharp
            className="md:hidden text-black ml-auto cursor-pointer bg-slate-100 rounded-full w-10 h-10 p-2"
            size={30}
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        )}

        {isNavOpen && (
          <X
            className="md:hidden text-black ml-auto cursor-pointer bg-slate-100 rounded-full w-10 h-10 p-2"
            size={30}
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
        )}
      </div>
      {isNavOpen && <NavbarMobile closeNav={() => setIsNavOpen(false)} />}
    </div>
  );
};

export default Header;
