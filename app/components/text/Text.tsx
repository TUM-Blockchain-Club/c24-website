import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";

const textVariants = cva("", {
  variants: {
    textType: {
      hero: "text-8xl font-display",
      sub_hero: "",
      title: "",
      sub_title: "",
      paragraph: "",
      small: "",
    },
  },
  defaultVariants: {
    textType: "paragraph",
  },
});
type TextVariantProps = VariantProps<typeof textVariants>;

type TextElement = React.ElementRef<"span">;
interface CommonTextProps
  extends Omit<TextVariantProps, "textType">,
    Required<Pick<TextVariantProps, "textType">> {
  asChild?: true | undefined;
}

type TextSpanProps = React.ComponentPropsWithoutRef<"span"> & { as?: "span" };
type TextDivProps = React.ComponentPropsWithoutRef<"div"> & { as: "div" };
type TextLabelProps = React.ComponentPropsWithoutRef<"label"> & { as: "label" };
type TextPProps = React.ComponentPropsWithoutRef<"p"> & { as: "p" };
export type TextProps = CommonTextProps &
  (TextSpanProps | TextDivProps | TextLabelProps | TextPProps);

export const Text = React.forwardRef<TextElement, TextProps>((props, ref) => {
  const {
    children,
    className,
    asChild,
    as: Tag = "span",
    color,
    textType,
    ...textProps
  } = props;
  return (
    <Slot
      data-accent-color={color}
      {...textProps}
      ref={ref}
      className={textVariants({ className, textType })}
    >
      {asChild ? children : <Tag>{children}</Tag>}
    </Slot>
  );
});
Text.displayName = "Text";
