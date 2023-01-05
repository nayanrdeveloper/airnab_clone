import Image from "next/image";
import React from "react";
import hostFeatureList from "../data/hostFeature";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

function AirCover() {
  return (
    <div className="mx-5 md:mx-20 mt-14">
      <div className="relative w-56 h-36 mx-auto">
        <Image src={"/aircover.webp"} alt={"aircover"} fill />
      </div>
      <h5 className="text-center text-3xl font-semibold">
        Airbnb it with top-to-bottom protection
      </h5>
      <div>
        <table className="mt-5 w-96 md:min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
          <thead class="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th
                scope="col"
                class="py-3 px-1 md:px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
              >
                <span />
              </th>
              <th
                scope="col"
                class="py-3 px-1 md:px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
              >
                Airbnb
              </th>
              <th
                scope="col"
                class="py-3 px-1 md:px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
              >
                Competitor
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
            {hostFeatureList.map((featureItem) => {
              return (
                <tr
                  key={featureItem.id}
                  class="hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <td class="py-4 px-1 md:px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {featureItem.title}
                  </td>
                  <td class="py-4 px-1 md:px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                    {featureItem.airbnb ? (
                      <CheckIcon className="h-8 font-bold text-lg text-green-600" />
                    ) : (
                      <XMarkIcon className="h-8 text-red-600" />
                    )}
                  </td>
                  <td class="py-4 px-1 md:px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {featureItem.competitors ? (
                      <CheckIcon className="h-8 text-green-600" />
                    ) : (
                      <XMarkIcon className="h-8 text-red-600" />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AirCover;
