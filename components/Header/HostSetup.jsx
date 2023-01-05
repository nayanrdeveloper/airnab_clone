import Image from "next/image";
import React from "react";
import hostSetupSteps from "../../data/hostSetupStep";

function HostSetup() {
  return (
    <div className="mx-5 md:mx-20 mt-14">
      <h4 className="text-center text-xl md:text-5xl font-bold">
        Airbnb it easily with Airbnb Setup
      </h4>
      <div className="relative h-72 w-full mt-5">
        <Image src={"/host_banner.webp"} alt="" fill />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-x-4 gap-y-2">
        {hostSetupSteps?.map((hostStep) => {
          return (
            <div key={hostStep.step} className="px-2 py-1">
              <h5 className="font-semibold text-lg">{hostStep.title}</h5>
              <p className="text-[#717171]">{hostStep.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HostSetup;
