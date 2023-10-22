"use client";

import React from "react";
import { useHover } from "@uidotdev/usehooks";
import TheSideNav from "./side-nav/TheSideNav";
import { usePathname } from "next/navigation";
import { BsInstagram } from "react-icons/bs";
import { AiTwotonePhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function TheHeader() {
  const pathname = usePathname();

  const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  const isHomePage = pathname === "/";

  const colorValue = isHomePage
    ? `${isHovered ? "text-black" : "text-white"}`
    : "text-black";
  return (
    <div
      className={`flex h-[125px] justify-between items-center p-16 border-b transition ease-out duration-300 bg-transparent absolute w-full hover:bg-white`}
      ref={hoverRef}
    >
      <TheSideNav isHovered={isHovered} isHomePage={isHomePage} />
      <h2 className={`text-2xl tracking-wider ${colorValue}`}>
        Aesthetics by Teo
      </h2>
      <div className={`flex gap-5 items-center ${colorValue}`} >
        <p className="flex items-center gap-3 font-medium">
          <BsInstagram size={20}/>
        </p>
        <p className="flex items-center gap-3 font-medium">
          <AiTwotonePhone size={23}/>
        </p>
        <p className="flex items-center gap-3 font-medium">
          <MdEmail size={23} />
        </p>
      </div>
    </div>
  );
}
