import Image from "next/image";
import React from "react";

function LocationCard({ img, location, distance }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-3 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* Left */}
      <div className="relative h-16 w-16">
        <Image src={img} fill className="rounded-lg" />
      </div>

      {/* Right */}
      <div>
        <p>{location}</p>
        <p className="text-gray-400">{distance}</p>
      </div>
    </div>
  );
}

export default LocationCard;
