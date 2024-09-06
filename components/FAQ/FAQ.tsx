"use client";

import React, { useState } from "react";
import { Link } from "@/components/link";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { Text } from "@/components/text";

export interface FAQItem {
  question: string;
  answer: string | JSX.Element;
}

export interface FAQProps {
  items: FAQItem[];
  contactEmail: string;
}

export const FAQ: React.FC<FAQProps> = ({ items, contactEmail }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white p-8 rounded-lg border-blue-500 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <Text textType={"sub_title"}>Frequently Asked</Text>
            <br />
            <Text textType={"sub_title"}>Questions</Text>
          </div>
        </div>
        <div className="md:col-span-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="mb-4 pb-4 border-b border-gray-700 last:border-b-0"
            >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleQuestion(index)}
              >
                <Text textType={"paragraph"} className="pr-4">
                  {item.question}
                </Text>
                {openIndex === index ? (
                  <ChevronUpIcon className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="text-gray-400 mt-2 text-sm transition-all duration-300 ease-in-out overflow-auto max-h-60">
                  {typeof item.answer === "string"
                    ? item.answer
                    : React.cloneElement(item.answer as React.ReactElement, {
                        className: "text-gray-400 text-sm",
                      })}
                </div>
              )}
            </div>
          ))}
          <p className="text-gray-400 mt-6 text-sm">
            For further questions, contact{" "}
            <Link
              href={`mailto:${contactEmail}`}
              className="text-pink-500 hover:text-pink-400"
            >
              {contactEmail}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
