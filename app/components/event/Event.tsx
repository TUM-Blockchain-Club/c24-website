"use client";

import { Text } from "@/app/components/text";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { Button } from "../button";

interface EventModel {
  title: string;
  bgImage: string;
  description: string;
  url: string;
  date: string;
}

type EventElement = React.ElementRef<"div">;
export type EventProps = React.ComponentPropsWithoutRef<"div"> & EventModel;

export const Event = React.forwardRef<EventElement, EventProps>((props) => {
  const { className, bgImage, title, description, url, date, ...restProps } =
    props;
  return (
    <div
      className={classNames(
        className,
        "flex cta-border border-[1px] border-white p-6 mt-10 hover:scale-[102%] duration-500 ease-in-out",
      )}
      {...restProps}
    >
      <div>
        <Text textType={"sub_title"} as="p">
          {title}
        </Text>
        <Text className="mt-4 underline" textType={"small"} as="p">
          {date}
        </Text>
        <Text className="mt-4" textType={"small"} as="p">
          {description}
        </Text>
        <Button className="mt-4" buttonType={"primary"}>
          more
        </Button>
      </div>
      <Image
        className={"object-cover pl-4"}
        src={bgImage}
        alt={title}
        title={title}
        width={275}
        height={275}
      />
    </div>
  );
});
Event.displayName = "Event";
