import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva("button text-white p-4 bg-black", {
  variants: {
    buttonType: {
      cta: "border-gradient-tbc border-2 hover:bg-gradient-to-br hover:from-tbc-yellow hover:via-tbc-pink hover:to-tbc-blue",
      primary: "border border-white hover:bg-bg-hover",
      secondary: "hover:bg-bg-hover",
    },
  },
  defaultVariants: {
    buttonType: "primary",
  },
});
type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type ButtonElement = React.ElementRef<"button">;
export interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    Omit<ButtonVariantProps, "buttonType">,
    Required<Pick<ButtonVariantProps, "buttonType">> {
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
        className={buttonVariants({ className, buttonType })}
        ref={ref}
      ></Comp>
    );
  },
);
Button.displayName = "Button";
