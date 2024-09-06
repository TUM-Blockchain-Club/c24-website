"use client";

import * as RadixToggle from "@radix-ui/react-toggle";
import React from "react";
import classNames from "classnames";

type ToggleElement = React.ElementRef<typeof RadixToggle.Root>;
type ToggleProps = React.ComponentPropsWithoutRef<typeof RadixToggle.Root>;

export const Toggle = React.forwardRef<ToggleElement, ToggleProps>(
  (props, forwardRef) => {
    const { className, children, ...toggleProps } = props;

    return (
      <RadixToggle.Root
        {...toggleProps}
        className={classNames(
          className,
          "hover:no-underline font-sans button p-3 bg-black",
          "bg-black border border-white text-white hover:bg-bg-hover",
          "data-[state=on]:bg-white data-[state=on]:text-black",
          "duration-300",
        )}
      >
        {children}
      </RadixToggle.Root>
    );
  },
);
Toggle.displayName = "Toggle";

export default Toggle;
