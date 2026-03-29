"use client";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import BlackLogo from "@/public/assets/black_logo.png";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

interface NavbarProps {
  className?: string;
  textColor?: string;
  useDarkLogo?: boolean;
}

const Navbar = ({ className, textColor, useDarkLogo }: NavbarProps) => {
  // const [isScrolled, setIsScrolled] = useState(false);

  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // }

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 0);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <header className={`fixed top-0 flex justify-between h-20 items-center w-full transition-colors duration-300 z-20 px-12 lg:px-20 ${className || 'bg-[#090E4A]'}`}>
      <div className={textColor || "text-white"}>
        <Link
          href="/"
          className="flex items-center gap-2 text-lg  font-semibold lg:text-base"
        >
          {/* <Package2 className='h-6 w-6' /> */}
          <Image src={useDarkLogo ? BlackLogo : Logo} alt="Logo" height={50} />

          <span className="sr-only">Catapult</span>
        </Link>
      </div>

      <nav className={`hidden h-full ${textColor || "text-white"} flex-col gap-3 text-lg font-medium lg:flex lg:flex-row lg:items-center lg:gap-6 lg:text-sm xl:gap-14`}>
        <Link
          href="/"
          className="transition-colors flex items-center hover:border-b-4 hover:border-[#FFE600] h-full"
        >
          Home
        </Link>

        <div className="transition-colors flex items-center hover:border-b-4 hover:border-[#FFE600] h-full">
          {/* How We Help Clients */}
          <NavigationMenu className="bg-transparent border-none">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="list-none">
                  How We Help Clients
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#090E4A] text-white border-none py-4 px-6 ">
                  <div className="flex flex-col gap-4 w-60">
                    <div>
                      <Link
                        href="/catapult-capability"
                        className="hover:border-[#FFE600] hover:border-b-4 pb-1 pr-4"
                      >
                        Capbility Centres
                      </Link>
                    </div>
                    
                    <div>
                      <Link
                        href="/data-cloud"
                        className="hover:border-[#FFE600] hover:border-b-4 pb-1 pr-4"
                      >
                        Enterprise Data Cloud & Ai
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="/performance-improvement"
                        className="hover:border-[#FFE600] hover:border-b-4 pb-1 pr-4"
                      >
                        Performance Improvement
                      </Link>
                    </div>
                    <div className="">
                      <Link href="/m&a" className="w-fit">
                        <div className="hover:border-[#FFE600] hover:border-b-4 pb-1 w-56">
                          M&A, Private Equity & Investor Relations
                        </div>
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <Link
          href="/catapult-advantage"
          className="transition-colors flex items-center  hover:border-b-4 hover:border-[#FFE600] h-full  "
        >
          The Catapult Advantage
        </Link>
        <Link
          href="/insights"
          className="transition-colors flex items-center  hover:border-b-4 hover:border-[#FFE600] h-full  "
        >
          Insights
        </Link>
        <Link
          href="/about-us"
          className="transition-colors flex items-center  hover:border-b-4 hover:border-[#FFE600] h-full  "
        >
          About Us
        </Link>
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="icon"
            className="shrink-0 lg:hidden bg-white text-black hover:bg-[#021836]   border-2 hover:shadow-white/50 hover:text-white"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="topLeft"
          className="w-full max-w-[20rem] text-white border-0 shadow-lg shadow-white/50 rounded-md bg-[#090E4A]"
        >
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="transition-colors flex items-center  hover:border-b-4 hover:border-[#FFE600] h-full  "
            >
              Home
            </Link>
            <div className="transition-colors flex items-center hover:border-b-4 hover:border-[#FFE600] h-full">
              {/* How We Help Clients */}
              <NavigationMenu className="bg-transparent border-none">
                <NavigationMenuList>
                  <NavigationMenuItem className=" border-none">
                    <NavigationMenuTrigger className="text-lg p-0">
                      How We Help Clients
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-[#090E4A] text-white border-0 py-4 px-6">
                      <div className="flex flex-col gap-4 w-60 border-none">
                        <div className="hover:border-[#FFE600] hover:border-b-4 ">
                          <Link href="/catapult-capability">
                            Capbility Centres
                          </Link>
                        </div>
                        <div className="hover:border-[#FFE600] hover:border-b-4 ">
                          <Link href="/m&a">
                            M&A, Private Equity & Investor Relations
                          </Link>
                        </div>
                        <div className="hover:border-[#FFE600] hover:border-b-4 ">
                          <Link href="/data-cloud">
                            Enterprise Data Cloud & Ai
                          </Link>
                        </div>
                        <div className="hover:border-[#FFE600] hover:border-b-4 ">
                          <Link href="/performance-improvement">
                            Performance Improvement
                          </Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <Link
              href="/catapult-advantage"
              className="transition-colors flex items-center  hover:border-b-4 hover:border-[#FFE600] h-full  "
            >
              The Catapult Advantage
            </Link>
            <Link
              href="/insights"
              className="transition-colors flex items-center  hover:border-b-4 hover:border-[#FFE600] h-full  "
            >
              Insights
            </Link>
            <Link
              href="/about-us"
              className="transition-colors flex items-center  hover:border-b-4 hover:border-[#FFE600] h-full  "
            >
              About Us
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
