import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";

import { FiMenu } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { AiTwotonePhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import TheNavLinks from "./TheNavLinks";

const treatmentLinks = [
  { href: "/behandlingar", handle: "dermapen" },
  { href: "/ansiktsspa", handle: "ansiktsspa med ånga" },
  { href: "/botox", handle: "botox" },
  { href: "/buttlift", handle: "butt lidft" },
  { href: "/dermapen", handle: "dermapen" },
  { href: "/fettreducering", handle: "fettreducering" },
  { href: "/laserbehandling", handle: "laserbehandling" },
  { href: "/filler", handle: "filler" },
  { href: "/profhilo", handle: "profhilo" },
  { href: "/prp", handle: "prp behandling" },
  { href: "/trådlyft", handle: "trådlyft" },
  { href: "/vitaminboost", handle: "vitamin boost" },
];

const links = [
  { href: "/hem", handle: "hem" },
  { href: "/behandlingar", handle: "behandlingar", treatmentLinks },
  { href: "/faq", handle: "faq" },
];



type SideNavProps = {
  isHomePage: boolean;
  isHovered: boolean;
};

export default function TheSideNav({ isHomePage, isHovered }: SideNavProps) {
  const btnColorValue = isHomePage
    ? `${isHovered ? "text-black" : "text-white"}`
    : "text-white";

  return (
    <Sheet>
      <SheetTrigger className={btnColorValue}>
        <FiMenu size={35} />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader className="uppercase text-lg tracking-wider text-slate-700 border-b pb-5">
          behandlingar
        </SheetHeader>
        <TheNavLinks />
      </SheetContent>
    </Sheet>
  );
}
