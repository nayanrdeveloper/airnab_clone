import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function Banner() {
  const router = useRouter();
  const gotoExplore = () => {
    router.push({
      pathname: "/explore",
    });
  };
  return (
    <div className="relative md:h-[500px] h-[300px]">
      <Image src={"/main_banner.webp"} fill alt="main_banner" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg ">Not Sure to go? Perfect</p>
        <button onClick={gotoExplore} className="text-purple-400 bg-white px-6 py-3 my-3 rounded-full shadow-md font-bold hover:shadow-lg active:scale-90 duration-300">
          Explore Place
        </button>
      </div>
    </div>
  );
}

export default Banner;
