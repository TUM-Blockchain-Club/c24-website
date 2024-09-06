"use client";

import React from "react";
import * as RadixSelect from "@radix-ui/react-select";
export { Root, Group } from "@radix-ui/react-select";
import classNames from "classnames";
import { Button } from "@/components/button";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { Text } from "@/components/text";

type SelectRootProps = React.ComponentPropsWithoutRef<typeof RadixSelect.Root>;

type SelectGroupProps = React.ComponentPropsWithoutRef<
  typeof RadixSelect.Group
>;

type SelectTriggerElement = React.ElementRef<typeof RadixSelect.Trigger>;
type SelectTriggerProps = React.ComponentPropsWithoutRef<
  typeof RadixSelect.Trigger
> & {
  placeholder: string;
};

const SelectTrigger = React.forwardRef<
  SelectTriggerElement,
  SelectTriggerProps
>((props, forwardRef) => {
  const { children, placeholder, className, ...triggerProps } = props;

  return (
    <Text asChild textType={"small"}>
      <Button
        asChild
        className={classNames(
          "flex justify-between items-center gap-3",
          className,
        )}
        ref={forwardRef}
      >
        <RadixSelect.Trigger {...triggerProps}>
          <RadixSelect.Value placeholder={placeholder}></RadixSelect.Value>
          <RadixSelect.Icon>
            <ChevronDownIcon />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
      </Button>
    </Text>
  );
});
SelectTrigger.displayName = "Select.Trigger";

type SelectContentElement = React.ElementRef<typeof RadixSelect.Content>;
type SelectContentProps = React.ComponentPropsWithoutRef<
  typeof RadixSelect.Content
>;

const SelectContent = React.forwardRef<
  SelectContentElement,
  SelectContentProps
>((props, forwardRef) => {
  const { className, children, ...contentProps } = props;

  return (
    <RadixSelect.Portal>
      <RadixSelect.Content
        {...contentProps}
        className={classNames(
          "overflow-hidden bg-black border border-white z-[999] w-full",
          className,
        )}
        ref={forwardRef}
      >
        <RadixSelect.ScrollUpButton className="flex items-center justify-center h-[25px] cursor-default">
          <ChevronUpIcon />
        </RadixSelect.ScrollUpButton>
        <RadixSelect.Viewport className={"p-2 flex flex-col gap-2"}>
          {children}
        </RadixSelect.Viewport>
        <RadixSelect.ScrollDownButton />
        <RadixSelect.Arrow />
      </RadixSelect.Content>
    </RadixSelect.Portal>
  );
});
SelectContent.displayName = "Select.Content";

type SelectLabelElement = React.ElementRef<typeof RadixSelect.Label>;
type SelectLabelProps = React.ComponentPropsWithoutRef<
  typeof RadixSelect.Label
>;

const SelectLabel = React.forwardRef<SelectLabelElement, SelectLabelProps>(
  (props, forwardRef) => {
    const { className, ...labelProps } = props;

    return (
      <Text
        className={classNames(className, "!text-gray-300 !leading-3")}
        textType={"small"}
      >
        <RadixSelect.Label {...labelProps} ref={forwardRef} />
      </Text>
    );
  },
);
SelectLabel.displayName = "Select.Label";

type SelectSeparatorElement = React.ElementRef<typeof RadixSelect.Separator>;
type SelectSeparatorProps = React.ComponentPropsWithoutRef<
  typeof RadixSelect.Separator
>;

const SelectSeparator = React.forwardRef<
  SelectSeparatorElement,
  SelectSeparatorProps
>((props, forwardRef) => {
  const { className, ...separatorProps } = props;

  return (
    <RadixSelect.Separator
      {...separatorProps}
      className={classNames(className, "")}
      ref={forwardRef}
    />
  );
});
SelectSeparator.displayName = "Select.Separator";

type SelectItemElement = React.ElementRef<typeof RadixSelect.Item>;
type SelectItemProps = React.ComponentPropsWithoutRef<typeof RadixSelect.Item>;

const SelectItem = React.forwardRef<SelectItemElement, SelectItemProps>(
  (props, forwardRef) => {
    const { children, className, ...itemProps } = props;

    return (
      <RadixSelect.Item
        {...itemProps}
        className={classNames(
          "pr-2 pl-2 hover:cursor-pointer leading-none flex items-center !relative select-non data-[disabled]:!text-gray-500 data-[disabled]:pointer-events-none data-[highlighted]:outline-none",
          className,
        )}
        ref={forwardRef}
      >
        <Text textType={"small"} className={"hover:cursor-pointer"}>
          <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
        </Text>
      </RadixSelect.Item>
    );
  },
);
SelectItem.displayName = "Select.Item";

export {
  SelectTrigger as Trigger,
  SelectItem as Item,
  SelectContent as Content,
  SelectLabel as Label,
  SelectSeparator as Separator,
};

export type {
  SelectTriggerProps as TriggerProps,
  SelectItemProps as ItemProps,
  SelectContentProps as ContentProps,
  SelectLabelProps as LabelProps,
  SelectSeparatorProps as SeparatorProps,
  SelectGroupProps as GroupProps,
  SelectRootProps as RootProps,
};
