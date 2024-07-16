"use client";

import React from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import classNames from "classnames";

type AccordionRootElement = React.ElementRef<typeof RadixAccordion.Root>;
export type AccordionRootProps = React.ComponentPropsWithoutRef<
  typeof RadixAccordion.Root
>;

export const AccordionRoot = React.forwardRef<
  AccordionRootElement,
  AccordionRootProps
>(({ className, ...rootProps }, ref) => {
  return (
    <RadixAccordion.Root
      {...rootProps}
      className={classNames(className, "")}
      ref={ref}
    />
  );
});
AccordionRoot.displayName = "AccordionRoot";

type AccordionItemElement = React.ElementRef<typeof RadixAccordion.Item>;
export type AccordionItemProps = React.ComponentPropsWithoutRef<
  typeof RadixAccordion.Item
>;

export const AccordionItem = React.forwardRef<
  AccordionItemElement,
  AccordionItemProps
>(({ className, ...itemProps }, ref) => {
  return (
    <RadixAccordion.Item
      {...itemProps}
      className={classNames(className, "overflow-hidden")}
      ref={ref}
    ></RadixAccordion.Item>
  );
});
AccordionItem.displayName = "AccordionItem";

type AccordionTriggerElement = React.ElementRef<typeof RadixAccordion.Trigger>;
export type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof RadixAccordion.Trigger
>;

export const AccordionTrigger = React.forwardRef<
  AccordionTriggerElement,
  AccordionTriggerProps
>(({ className, ...triggerProps }, ref) => {
  return (
    <RadixAccordion.Trigger
      {...triggerProps}
      className={classNames(className, "")}
      ref={ref}
    ></RadixAccordion.Trigger>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

type AccordionContentElement = React.ElementRef<typeof RadixAccordion.Content>;
export type AccordionContentProps = React.ComponentPropsWithoutRef<
  typeof RadixAccordion.Content
>;

export const AccordionContent = React.forwardRef<
  AccordionContentElement,
  AccordionContentProps
>(({ className, ...contentProps }, ref) => {
  return (
    <RadixAccordion.Content
      {...contentProps}
      className={classNames(className, "")}
      ref={ref}
    />
  );
});
AccordionContent.displayName = "AccordionContent";

export default {
  Root: AccordionRoot,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
};
