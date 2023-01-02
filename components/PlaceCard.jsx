import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

function PlaceCard({
  img,
  star,
  price,
  total,
  long,
  lat,
  description,
  title,
  location,
}) {
  return (
    <div className="flex py-7 px-2 rounded-2xl border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t">
      <div className="relative h-28 w-28 md:h-52 md:w-80 flex-shrink-0">
        <Image src={img} alt={title} fill className="rounded-2xl" />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between items-center">
          <p>{location}</p>
          <HeartIcon className="h-8" />
        </div>
        <h4 className="text-sm md:text-xl ">{title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between">
          <p className="flex items-center space-x-1">
            <StarIcon className="w-5 md:w-8 text-red-300" />
            <span>{star}</span>
          </p>
          <div>
            <p className="text-sm lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-sm text-right font-extralight ">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;
