import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { FiMenu } from "react-icons/fi";
import Link from "next/link";

const links = [
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

export default function TheSideNav() {
  return (
    <Sheet>
      <SheetTrigger className="text-white">
        <FiMenu size={35} />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader className="uppercase text-lg tracking-wider border-b pb-5">
          behandlingar
        </SheetHeader>
        <ul className="flex flex-col gap-5 pt-16 pl-1">
          {links.map((link) => (
            <li key={link.href} className="uppercase tracking-wide">
              <Link href={link.href}>{link.handle}</Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
