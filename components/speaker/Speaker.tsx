"use client";

import { Text } from "@/components/text";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { Speaker as SpeakerModel } from "@/model/speaker";
import Link from "next/link";
import {
  GitHubLogoIcon,
  GlobeIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { contentfulImageLoader } from "@/util/contentfulImageLoader";

type SpeakerElement = React.ElementRef<"div">;
export type SpeakerProps = React.ComponentPropsWithoutRef<"div"> &
  Omit<SpeakerModel, "priority"> & {
    hasSocialLink?: true | undefined;
  };

export const Speaker = React.forwardRef<SpeakerElement, SpeakerProps>(
  (props, ref) => {
    const {
      className,
      profilePhoto,
      name,
      description,
      hasSocialLink,
      urlType,
      url,
      ...restProps
    } = props;
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
          src={profilePhoto || "/speakers/placeholder.webp"}
          loader={profilePhoto ? contentfulImageLoader : undefined}
          alt={name}
          title={name}
          width={275}
          height={275}
        />
        <div className={"flex flex-col gap-1 self-stretch"}>
          <Text textType={"sub_title"} className={"font-bold"}>
            {name}
          </Text>
          <Text textType={"paragraph"}>{description}</Text>
          {hasSocialLink && url && (
            <div className={"w-fit"}>
              <Link href={url} className={"text-inherit"}>
                {urlType == "x" && <TwitterLogoIcon />}
                {urlType == "website" && <GlobeIcon />}
                {urlType == "linkedin" && <LinkedInLogoIcon />}
                {urlType == "github" && <GitHubLogoIcon />}
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  },
);
Speaker.displayName = "Speaker";
