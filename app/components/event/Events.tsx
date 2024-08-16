"use client";

import React, { useState } from "react";
import { Event } from "./Event";

export interface SideEventItem {
  title: string;
  description: string;
  url: string;
  date: string;
  backgroundImg: string;
}

export interface SideEventProps {
  items: SideEventItem[];
}

export const Events: React.FC<SideEventProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {items.map((item, index) => (
        <Event
          key={index}
          title={item.title}
          description={item.description}
          url={item.url}
          bgImage={item.backgroundImg}
          date={item.date}
        />
      ))}
    </>
  );
};
