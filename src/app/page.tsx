import HomePage from "@/components/home-page/HomePage";

import classes from "./HomePage.module.css";
import TheOpeningHours from "@/components/home-page/opening-hours/TheOpeningHours";

export default function Home() {
  // const bgImageStyle = {
  //   background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bg}) center/cover no-repeat`,
  //   height: "95vh",
  // };
  return (
    <div className="flex flex-col items-center justify-center gap-5 pb-10">
      <div
        className={`flex flex-col justify-start gap-10 h-[600px] w-full ${classes.hero_image} `}
      >
        <div className="relative top-[50%] lg:top-[70%] pl-8">
          <HomePage />
        </div>
        
      </div><TheOpeningHours />
    </div>
  );
}
