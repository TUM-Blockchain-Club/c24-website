"use client";

import { Meta, StoryObj } from "@storybook/react";
import * as Select from "@/components/select/Select";
import React from "react";

const meta: Meta<Select.RootProps> = {
  title: "Select",
  component: Select.Root,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<Select.RootProps>;

export const SelectStory: Story = {
  render: () => (
    <Select.Root>
      <Select.Trigger placeholder={"test"} />
      <Select.Content>
        <Select.Group>
          <Select.Label>Group 1</Select.Label>
          <Select.Item value={"value 1"}>Value 1</Select.Item>
          <Select.Item value={"value 2"} disabled>
            Value 2 Disabled
          </Select.Item>
          <Select.Item value={"value 3"}>Value 3</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  ),
};
