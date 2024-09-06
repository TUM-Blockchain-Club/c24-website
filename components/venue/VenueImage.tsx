"use client";

import classNames from "classnames";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

type VenueElement = React.ElementRef<"div">;
export type VenueProps = React.ComponentPropsWithoutRef<"div"> & {
  imageSrc: string | StaticImport;
  imageAlt: string;
};

export const VenueImage = React.forwardRef<VenueElement, VenueProps>(
  (props, ref) => {
    const { className, imageSrc, imageAlt, ...restProps } = props;
    return (
      <div
        className={classNames(
          className,
          "min-w-[280px] sm:min-w-[600px] xl:min-w-[800px] min-h-[200px] md:h-[350px] xl:h-[500px] relative",
        )}
        ref={ref}
        {...restProps}
      >
        <Image src={imageSrc} alt={imageAlt} fill={true} />
      </div>
    );
  },
);
VenueImage.displayName = "Venue";
