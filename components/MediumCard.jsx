import Image from "next/image";
import React from "react";

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 duration-300 transition transform ease-out">
      <div className="relative h-80 w-80 rounded-lg">
        <Image src={img} alt={title} fill className="rounded-md" />
      </div>
      <h3 className="mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
