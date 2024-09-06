"use client";

import { Text } from "@/components/text";
import classNames from "classnames";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

type TrackElement = React.ElementRef<"div">;
export type TrackProps = React.ComponentPropsWithoutRef<"div"> & {
  imageSrc: string | StaticImport;
  imageAlt: string;
  dimension: number;
  title: string;
  desc: string | JSX.Element;
};

export const Track = React.forwardRef<TrackElement, TrackProps>(
  (props, ref) => {
    const {
      className,
      imageSrc,
      imageAlt,
      dimension,
      title,
      desc,
      ...restProps
    } = props;
    return (
      <div
        className={classNames(className, "w-[265px] sm:max-w-[400px] md:px-4")}
        ref={ref}
        {...restProps}
      >
        <Image
          className={"object-contain mx-auto"}
          src={imageSrc}
          alt={imageAlt}
          width={dimension}
          height={dimension}
        />
        <Text textType={"sub_title"} className="mt-8 text-center" as="p">
          {title}
        </Text>
        <Text textType={"paragraph"} className="mt-6" as="p">
          {desc}{" "}
        </Text>
      </div>
    );
  },
);
Track.displayName = "Track";
