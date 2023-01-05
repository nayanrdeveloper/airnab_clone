import React from "react";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UserIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/solid";

function ShortFooter() {
  return (
    <div className="hidden md:flex px-8 py-2 border-t-2 flex sticky bottom-0 left-0 bg-white justify-between z-50">
      <div className="flex">
        <p>© 2023 Airbnb, Inc.</p>
        <ul className="flex space-x-6 ml-6 list-disc">
          <li className="">Privacy</li>
          <li>Terms</li>
          <li>SiteMap</li>
          <li>Company Details</li>
          <li>Destination</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <GlobeAltIcon className="h-6 cursor-pointer" />
          <span>English (IN)</span>
        </div>
        <p>₹ INR</p>
        <div className="flex space-x-2 items-center">
          <span>Support & Service</span>
          <ArrowUpIcon className="h-4 cursor-pointer" />
          {/* <ArrowUpIcon lassName="h-2 w-2 cursor-pointer" /> */}
        </div>
      </div>
    </div>
  );
}

export default ShortFooter;
