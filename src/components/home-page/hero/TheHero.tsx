import { Button } from "@/components/ui/button";
import React from "react";

export default function TheHero() {
  return (
    <div className={`flex flex-col justify-center items-center lg:items-start pl-10 w-[60%] gap-5 text-center lg:text-left`}>
      <p className="tracking-wider text-white text-lg font-semibold uppercase">
        Välkommen till PersiCare Beauty
      </p>
      <p className="tracking-wider uppercase text-2xl font-medium text-[#dbdbdb]">
        Din klinik för skönhet & hälsa i Stockholm, Solna
      </p>
      <Button variant={"outline"} className="uppercase tracking-wider w-52 h-12">Boka tid</Button>
    </div>
  );
}
