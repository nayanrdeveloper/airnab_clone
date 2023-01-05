import Image from "next/image";
import React from "react";

function HostHeader() {
  return (
    <header className="sticky top-0 z-50 flex justify-between bg-white shadow-md h-16 items-center px-3 py-2 md:px-10">
        <div className="relative h-10 w-10">
            <Image src={'/airbnb.png'} alt='logo' fill />
        </div>
        <div className="flex space-x-4 items-center">
            <p className="text-lg font-medium">Ready to Airbnb it?</p>
            <button className="px-5 py-3 bg-[#F24D65] rounded-xl text-white font-semibold">Airbnb Setup</button>
        </div>
    </header>
  );
}

export default HostHeader;
