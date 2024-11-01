"use client";

import { cva, VariantProps } from "class-variance-authority";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import { Link } from "../link";

const sponsorVariant = cva(
  "flex p-[10px] md:p-[20px] justify-center items-center shrink-0 bg-white",
  {
    variants: {
      sponsorType: {
        bronze: "w-[125px] h-[125px] md:w-[200px] md:h-[200px]",
        silver: "w-[200px] h-[200px] md:w-[200px] md:h-[200px]",
        gold: "w-[200px] h-[200px] md:w-[200px] md:h-[200px]",
        platinum:
          "w-[240px] h-[240px] md:w-[300px] md:h-[300px] border-gradient-tbc border-4",
      },
    },
    defaultVariants: {
      sponsorType: "bronze",
    },
  },
);

type SponsorVariantProps = VariantProps<typeof sponsorVariant>;

type SponsorElement = React.ElementRef<"div">;

export interface SponsorProps
  extends React.ComponentPropsWithoutRef<"div">,
    SponsorVariantProps {
  imageSrc: string | StaticImport;
  alt: string;
  link: string;
}

export const Sponsor = React.forwardRef<SponsorElement, SponsorProps>(
  (props, ref) => {
    const { className, sponsorType, imageSrc, link, alt, ...restProps } = props;
    return (
      <div
        className={sponsorVariant({ className, sponsorType })}
        ref={ref}
        {...restProps}
      >
        <Link
          className="w-full h-full flex items-center justify-center"
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
        </Link>
      </div>
    );
  },
);
Sponsor.displayName = "Sponsor";
