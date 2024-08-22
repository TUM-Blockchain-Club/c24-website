"use client";

import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import classNames from "classnames";

const buttonVariants = cva(
  "hover:no-underline font-sans button text-white p-3 bg-black",
  {
    variants: {
      buttonType: {
        cta: "font-bold border-gradient-tbc border-2 hover:bg-gradient-to-br hover:from-tbc-yellow/30 hover:via-tbc-pink/30 hover:to-tbc-blue/30",
        primary: "border border-white hover:bg-bg-hover",
        secondary: "hover:bg-bg-hover",
      },
    },
    defaultVariants: {
      buttonType: "primary",
    },
  },
);
type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type ButtonElement = React.ElementRef<"button">;
export interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    ButtonVariantProps {
  asChild?: undefined | true;
}

export const Button = React.forwardRef<ButtonElement, ButtonProps>(
  (props, ref) => {
    const { asChild, buttonType, disabled, className, ...buttonProps } = props;

    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        data-disabled={disabled || undefined}
        {...buttonProps}
        disabled={disabled}
        className={buttonVariants({
          className: classNames(className, {
            "opacity-50 cursor-not-allowed": disabled,
          }),
          buttonType,
        })}
        ref={ref}
      ></Comp>
    );
  },
);
Button.displayName = "Button";
