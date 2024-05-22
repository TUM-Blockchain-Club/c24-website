"use client";

import classNames from "classnames";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

type SponsorElement = React.ElementRef<"div">;
export type SponsorProps = React.ComponentPropsWithoutRef<"div"> & {
  imageSrc: string | StaticImport;
  alt: string;
  link: string;
};

export const Sponsor = React.forwardRef<SponsorElement, SponsorProps>(
  (props, ref) => {
    const { className, imageSrc, link, alt, ...restProps } = props;
    return (
      <div
        className={classNames(
          className,
          "flex w-[120px] h-[120px] p-[10px] md:w-[150px] md:h-[150px] md:p-[25px] justify-center items-center shrink-0 bg-white",
        )}
        ref={ref}
        {...restProps}
      >
        <a
          className="w-full h-full flex items-center"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={"object-cover"}
            src={imageSrc}
            alt={alt}
            width={275}
            height={275}
          />
        </a>
      </div>
    );
  },
);
Sponsor.displayName = "Sponsor";
