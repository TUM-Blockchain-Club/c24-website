import { Meta, StoryObj } from "@storybook/react";
import { Link, LinkProps } from "@/components/link/Link";
import { Text } from "@/components/text";
import React from "react";

type LinkCustomPropsAndArgs = Omit<LinkProps, "children"> & { text: string };

const meta: Meta<LinkCustomPropsAndArgs> = {
  title: "Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<LinkCustomPropsAndArgs>;

export const NormalLink: Story = {
  args: {
    text: "Click Me",
  },
  render: ({ text }) => (
    <Link href={"#"}>
      <Text>{text}</Text>
    </Link>
  ),
};
