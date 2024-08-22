"use client";

import { Text } from "@/app/components/text";
import classNames from "classnames";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import { Button } from "../button";

interface EventModel {
  title: string;
  bgImage: string;
  description: string;
  url: string;
  date: string;
  subpage: boolean;
  link: string;
}

type EventElement = React.ElementRef<"div">;
export type EventProps = React.ComponentPropsWithoutRef<"div"> & EventModel;

export const Event = React.forwardRef<EventElement, EventProps>((props) => {
  const {
    className,
    bgImage,
    title,
    description,
    url,
    date,
    subpage,
    link,
    ...restProps
  } = props;
  return (
    <div
      className={classNames(
        className,
        "flex flex-col cta-border border-[1px] border-white p-6 mt-10 hover:scale-[102%] duration-500 ease-in-out",
      )}
      {...restProps}
    >
      <div className="relative w-full h-[200px]">
        <Image
          className={"object-contain pl-4"}
          src={bgImage}
          alt={title}
          title={title}
          fill
        />
      </div>
      <Text textType={"sub_title"} as="p" className="mt-10">
        {title}
      </Text>
      <Text className="mt-4 underline" textType={"small"} as="p">
        {date}
      </Text>
      <Text className="mt-4" textType={"small"} as="p">
        {description}
      </Text>
      <NextLink href={subpage ? `/side-events/${url}` : link}>
        <Button className="mt-4" buttonType={"primary"}>
          more
        </Button>
      </NextLink>
    </div>
  );
});
Event.displayName = "Event";
