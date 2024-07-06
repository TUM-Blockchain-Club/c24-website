import React, { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  items: FAQItem[];
}

export const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">FAQ</h2>
      {items.map((item, index) => (
        <div key={index} className="mb-2">
          <button
            className="flex justify-between items-center w-full text-left py-2 px-4 bg-gray-800 hover:bg-gray-700 rounded"
            onClick={() => toggleItem(index)}
          >
            <span>{`${index + 1}. ${item.question}`}</span>
            <span>{openIndex === index ? "▼" : "▶"}</span>
          </button>
          {openIndex === index && (
            <div className="mt-2 ml-4 text-gray-300">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};
