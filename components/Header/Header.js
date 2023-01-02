import Image from "next/image";
import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/router";

export default function Header({rangeLocation}) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [userNumber, setUserNumber] = useState(1);
  const router = useRouter();

  const selectHandle = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const dateRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resetSearchInput = () => {
    setSearchInput('');
  }

  const routerHistory = () => {
    router.push('/');
  }

  const searchRouter = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        user: userNumber,

      }
    })
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md h-16 items-center px-3 py-2 md:px-10">
      {/* Left */}
      <div className="relative flex items-center cursor-pointer my-auto" onClick={routerHistory}>
        <Image src={"/logo_3.png"} width={100} height={40} alt="Logo" />
      </div>

      {/* Center */}
      <div className="flex items-center rounded-full md:border-2 py-1 md:shadow-sm">
        <input
          type={"text"}
          value={searchInput}
          onChange={(e) => setSearchInput(e.currentTarget.value)}
          placeholder={rangeLocation || 'Search your Location'}
          className="pl2 md:pl-5 md:flex-grow bg-transparent outline-none text-gray-600 w-28 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="h-8 bg-red-400 text-white rounded-full hidden md:inline-flex p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex space-x-4 justify-end items-center text-gray-500">
        <span className="hidden md:inline cursor-pointer">
          Airnab Your Home
        </span>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex border-2 border-gray-300 rounded-full p-2 space-x-2">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto bg-white px-2">
          <DateRangePicker
            ranges={[dateRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={selectHandle}
          />
          <div className="flex items-center border-b pb-3 border-gray-300">
            <h3 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h3>
            <UserIcon className="h-8" />
            <input
              type={"number"}
              value={userNumber}
              onChange={(e) => setUserNumber(e.currentTarget.value)}
              className="w-12 pl-2 text-lg outline-none text-red-400" min={1 }
            />
          </div>
          <div className="flex justify-around">
            <button onClick={resetSearchInput} className="text-gray-400 px-2 py-2">Cancel</button>
            <button className="text-gray-400 px-2 py-2" onClick={searchRouter}>Search</button>
          </div>
        </div>
      )}
    </header>
  );
}
