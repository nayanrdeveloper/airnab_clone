import Image from "next/image";
import React from "react";

function CategoryPlace({ id, name, icon, url }) {
  return (
    <div
      key={id}
      className="items-center flex flex-col space-y-2 cursor-pointer duration-300 transition transform ease-out hover:border-b"
    >
      <div className="relative h-8 w-8">
        <Image
          src={icon}
          alt={name}
          fill
          className="opacity-60 hover:opacity-100"
        />
      </div>
      <h5 className="text-[#717171] hover:text-black">{name}</h5>
    </div>
  );
}

export default CategoryPlace;
