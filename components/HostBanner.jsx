import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useState } from "react";

function HostBanner() {
  const [rangeGuest, setRangeGuest] = useState(1);
  const [amount, setAmount] = useState(1200);

  const setRoomAmount = (e) => {
    const amount = 1200 *  parseInt(e.currentTarget.value)
    setAmount(amount);
    setRangeGuest(parseInt(e.currentTarget.value));
  }

  return (
    <div className="mt-10 px-5 md:px-24 space-y-4 md:space-y-0 grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col space-y-3 text-center items-center">
        <p className="text-4xl md:text-[3rem] font-semibold text-[#F24D65]">Airbnb it.</p>
        <p className="text-4xl md:text-[3rem] font-semibold text-[#222222]">You Could earn</p>
        <p className="text-4xl md:text-[3rem] font-semibold text-[#222222]">₹{amount}</p>
        <p className="text-[#222222]"><span className="border-b-2 border-gray-400 mt-1 text-[rgb(34, 34, 34)]">{rangeGuest} nights</span> at an estimated ₹{amount} a night</p>
        <input
          type={"range"}
          className="bg-red-300"
          min={1}
          max={10}
          value={rangeGuest}
          onChange={setRoomAmount}
        />
        <p className="text-[#717171] underline cursor-pointer">Learn how we estimate your earnings</p>
        <div className="flex space-x-2 border border-gray-200 rounded-full py-2 px-4 items-center">
          <MagnifyingGlassIcon className="w-6 h-6 text-[#F24D65]" />
          <input
            type={"text"}
            className="px-2 py-2 outline-none placeholder-gray-500 text-gray-600"
            placeholder="Private Rooms 2 guests"
          />
        </div>
      </div>
      <div className="relative h-96 w-full">
        <Image src={'/large_banner.webp'} alt='' fill className="rounded-2xl" />
      </div>
    </div>
  );
}

export default HostBanner;
