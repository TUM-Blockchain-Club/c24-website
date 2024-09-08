"use client";

import { Text } from "@/components/text";
import classNames from "classnames";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import { Button } from "../button";

interface WorkshopModel {
  title: string;
  bgImage: string;
  description: string;
  url: string;
}

type WorkshopElement = React.ElementRef<"div">;
export type WorkshopProps = React.ComponentPropsWithoutRef<"div"> &
  WorkshopModel;

export const Workshop = React.forwardRef<WorkshopElement, WorkshopProps>(
  (props, ref) => {
    const { className, bgImage, title, description, url, ...restProps } = props;
    return (
      <div
        className={classNames(
          className,
          "flex flex-col border-[1px] border-white p-6 mt-10 hover:scale-[102%] duration-500 ease-in-out",
        )}
        {...restProps}
      >
        <div className="relative w-full h-[100px] md:h-[250px]">
          <Image
            className={"object-contain"}
            src={bgImage}
            alt={title}
            title={title}
            fill
          />
        </div>
        <Text textType={"sub_title"} as="p" className="mt-10">
          {title}
        </Text>
        <Text className="mt-4 text-gray-400" textType={"small"} as="p">
          {description}
        </Text>
        <NextLink href={url}>
          <Button className="mt-4" buttonType={"cta"}>
            Learn More
          </Button>
        </NextLink>
      </div>
    );
  },
);
Workshop.displayName = "Workshop";
