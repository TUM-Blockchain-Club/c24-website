import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva("button", {
  variants: {
    buttonType: {
      cta: "",
      primary: "",
      secondary: "",
    },
  },
  defaultVariants: {
    buttonType: "primary",
  },
});
type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export type ButtonElement = React.ElementRef<"button">;
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
      ></Comp>
    );
  },
);
Button.displayName = "Button";
