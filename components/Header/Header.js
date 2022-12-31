import Image from "next/image";
import React from "react";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md h-16 items-center px-3 py-2 md:px-10">
      {/* Left */}
      <div className="relative flex items-center cursor-pointer my-auto">
        <Image src={"/logo_3.png"} width={100} height={40} alt="Logo" />
      </div>

      {/* Center */}
      <div className="flex items-center rounded-full md:border-2 py-1 md:shadow-sm">
        <input
          type={"text"}
          placeholder="Start your Search"
          className="pl-5 flex-grow bg-transparent outline-none text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="h-8 bg-red-400 text-white rounded-full hidden md:inline-flex p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex space-x-4 justify-end items-center text-gray-500">
        <span className="hidden md:inline cursor-pointer">Airnab Your Home</span>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex border-2 border-gray-300 rounded-full p-2 space-x-2">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}
