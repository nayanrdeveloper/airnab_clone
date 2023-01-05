import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

function PlaceMediumCard({ title, star, price, total, img }) {
  return (
    <div>
      <div className="relative h-60 w-full px-2 py-4">
        <Image src={img} alt={title} fill className="rounded-xl" />
      </div>
      <div className="flex justify-between items-center mt-3">
        <h4 className="text-[#222222] font-semibold">Pimplad Nasik, India</h4>
        <span className="flex items-center space-x-1">
          <StarIcon className="w-5 h-5 text-[#222222]" />
          <span className="text-[#222222]">{star}</span>
        </span>
      </div>
      <p className="text-[#717171]">134 kilometer away</p>
      <p className="text-[#717171]">11-16 Jan</p>
      <p className="text-[#222222]"><span className="font-semibold">₹40,720</span> night</p>
    </div>
  );
}

export default PlaceMediumCard;
