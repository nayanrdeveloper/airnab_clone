import Image from "next/image";
import React from "react";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="py-16 relative">
      <div className="relative h-96 min-w-[300px]">
        <Image fill src={img} alt="medium image" className="rounded-2xl" />
      </div>
      <div className="absolute top-24 left-12">
        <h3 className="text-4xl w-64 font-bold mb-3">{title}</h3>
        <p>{description}</p>
        <button className="px-4 py-2 bg-gray-800 text-white rounded-xl mt-5">{buttonText}</button>
      </div>
    </section>
  );
}

export default LargeCard;
