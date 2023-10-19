"use client";

import React from "react";
import { useHover } from "@uidotdev/usehooks";

export default function TheHeader() {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  return (
    <div
      className={`flex h-[125px] justify-between items-center p-10 border-b transition ease-out duration-300 bg-transparent absolute w-full hover:bg-white`}
      ref={hoverRef}
    >
        <h2>menu</h2>
        <h2 className="text-2xl tracking-wider">Aesthetics by Teo</h2>
        <h2>cart</h2>
    </div>
  );
}
