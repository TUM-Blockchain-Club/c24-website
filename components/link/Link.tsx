"use client";

import React from "react";
import NextLink from "next/link";
import classNames from "classnames";

type LinkElement = React.ElementRef<typeof NextLink>;
export type LinkProps = React.ComponentPropsWithoutRef<typeof NextLink>;

export const Link = React.forwardRef<LinkElement, LinkProps>((props, ref) => {
  const { className, ...restProps } = props;
  return (
    <NextLink
      {...restProps}
      className={classNames(
        className,
        "hover:decoration-dotted dark:hover:decoration-white hover:underline hover:decoration hover:underline-offset-4",
      )}
      ref={ref}
    />
  );
});
Link.displayName = "Link";
