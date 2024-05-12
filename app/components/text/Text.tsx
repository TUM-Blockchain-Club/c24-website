import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { Montserrat, Space_Grotesk } from "next/font/google";
import classNames from "classnames";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const textVariants = cva("dark:text-white text-black", {
  variants: {
    textType: {
      hero: "text-8xl font-display",
      sub_hero: "text-7xl font-display",
      title: "text-5xl font-sans",
      sub_title: "text-2xl font-sans",
      paragraph: "text-base font-sans",
      small: "text-xs font-sans",
    },
  },
  defaultVariants: {
    textType: "paragraph",
  },
});
type TextVariantProps = VariantProps<typeof textVariants>;

type TextElement = React.ElementRef<"span">;
interface CommonTextProps extends TextVariantProps {
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
      className={textVariants({
        className: classNames(
          className,
          spaceGrotesk.variable,
          montserrat.variable,
        ),
        textType,
      })}
    >
      {asChild ? children : <Tag>{children}</Tag>}
    </Slot>
  );
});
Text.displayName = "Text";
