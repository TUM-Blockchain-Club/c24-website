"use client";

import { Text } from "@/app/components/text";
import classNames from "classnames";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

type SpeakerElement = React.ElementRef<"div">;
export type SpeakerProps = React.ComponentPropsWithoutRef<"div"> & {
  imageSrc?: string | StaticImport;
  name: string;
  position: string;
  company?: string;
};

export const Speaker = React.forwardRef<SpeakerElement, SpeakerProps>(
  (props, ref) => {
    const { className, imageSrc, name, position, company, ...restProps } =
      props;
    return (
      <div
        className={classNames(
          className,
          "flex w-[150px] xs:w-[180px] sm:w-[200px] min-h-[200px] xs:min-h-[270px] sm:min-h-[300px] flex-col gap-4 items-start shrink-0",
        )}
        ref={ref}
        {...restProps}
      >
        <Image
          className={"object-cover"}
          src={imageSrc || "/speakers/placeholder.webp"}
          alt={name}
          title={name}
          width={275}
          height={275}
        />
        <div className={"flex flex-col gap-1 self-stretch"}>
          <Text textType={"sub_title"} className={"font-bold"}>
            {name}
          </Text>
          <Text textType={"paragraph"}>
            {position}
            {company && <>, {company}</>}
          </Text>
        </div>
      </div>
    );
  },
);
Speaker.displayName = "Speaker";
