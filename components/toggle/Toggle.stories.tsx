import { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "@/components/toggle/Toggle";
import { Text } from "@/components/text/Text";
import React from "react";

const meta: Meta<typeof Toggle> = {
  title: "Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: <Text className="!text-inherit">Toggle</Text>,
  },
};
