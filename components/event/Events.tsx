"use client";

import React, { useState } from "react";
import { Event } from "./Event";

export interface SideEventItem {
  title: string;
  description: string;
  url: string;
  date: string;
  backgroundImg: string;
  subpage: boolean;
  link: string;
}

export interface SideEventProps {
  items: SideEventItem[];
}

export const Events: React.FC<SideEventProps> = ({ items }) => {
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
          subpage={item.subpage}
          link={item.link}
        />
      ))}
    </>
  );
};
