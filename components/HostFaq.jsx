import React, { useState } from "react";
import faqList from "../data/faq";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

function HostFaq() {
  const [openFaqId, setOpenFaqId] = useState(1);
  return (
    <div className="mx-2 md:mx-0 mt-14 bg-gray-100 grid grid-cols-1 gap-y-4 md:grid-cols-2 px-3 md:px-16 py-5">
      <div>
        <h5 className="text-3xl md:text-5xl font-semibold text-[#222222]">Your questions, Answer</h5>
      </div>
      <div>
        {faqList?.map((faqItem) => {
          return (
            <div
              key={faqItem.id}
              className="py-3 px-2 border-b-2 border-gray-300"
            >
              <h6 onClick={() => setOpenFaqId(faqItem.id)} className="text-lg font-medium md:text-2xl cursor-pointer text-[#222222] flex items-center justify-between">
                <span>{faqItem.question}</span>
                {openFaqId === faqItem.id ? <ChevronUpIcon className="h-6" /> : <ChevronDownIcon className="h-6" />}
              </h6>
              <p
                className={`text-lg text-[#717171] ${
                  openFaqId === faqItem.id ? "" : "hidden"
                }`}
              >
                {faqItem.answer}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HostFaq;
