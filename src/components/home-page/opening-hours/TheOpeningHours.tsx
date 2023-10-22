import Image from "next/image";
import React from "react";

import img1 from "@/assets/images/1.jpeg";
import img2 from "@/assets/images/2.jpeg";
import img3 from "@/assets/images/3.jpeg";

export default function TheOpeningHours() {
  return (
    <div className="h-[95vh] bg-[#fafafa]">
      <p className="flex justify-center py-10">
        Skönhetsbehandlingar utan kirurgi
      </p>
      <div className="flex h-60">
        <div className="w-[40%] h-full">
          <Image src={img1} alt="three women"/>
        </div>
        <div className="flex w-[40%] h-full">
          <Image src={img2} alt="single woman" />
          <Image src={img3} alt="single man" />
        </div>
      </div>
    </div>
  );
}
