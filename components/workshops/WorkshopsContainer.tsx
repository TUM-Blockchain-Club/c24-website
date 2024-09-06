"use client";

import React from "react";
import { Workshop } from "./WorkshopItem";

export interface WorkshopItem {
  title: string;
  url: string;
  description: string;
  backgroundImg: string;
}

export interface WorkshopProps {
  items: WorkshopItem[];
}

export const WorkshopsContainer: React.FC<WorkshopProps> = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <Workshop
          key={index}
          title={item.title}
          description={item.description}
          url={item.url}
          bgImage={item.backgroundImg}
        />
      ))}
    </>
  );
};
