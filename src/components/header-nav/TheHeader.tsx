"use client";

import React from "react";
import { useHover } from "@uidotdev/usehooks";
import TheSideNav from "./side-nav/TheSideNav";
import { usePathname } from "next/navigation";

export default function TheHeader() {
  const pathname = usePathname()

  const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  const isHomePage = pathname === "/"
  return (
    <div
      className={`flex h-[125px] justify-between items-center p-10 border-b transition ease-out duration-300 bg-transparent absolute w-full hover:bg-white`}
      ref={hoverRef}
    >
        <TheSideNav isHovered={isHovered} isHomePage={isHomePage}/>
        <h2 className="text-2xl tracking-wider">Aesthetics by Teo</h2>
        <h2>cart</h2>
    </div>
  );
}
