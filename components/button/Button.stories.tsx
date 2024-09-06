import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/button/Button";
import { Text } from "@/components/text";
import React from "react";

type TextPropAndCustomArgs = React.ComponentProps<typeof Button> & {
  label: string;
};

const meta: Meta<TextPropAndCustomArgs> = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    buttonType: {
      table: {
        disable: true,
      },
    },
    label: {
      type: "string",
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<TextPropAndCustomArgs>;

export const CTA: Story = {
  args: {
    label: "CTA Button",
  },
  render: ({ label }) => (
    <Button buttonType={"cta"}>
      <Text>{label}</Text>
    </Button>
  ),
};

export const Primary: Story = {
  args: {
    label: "Primary Button",
  },
  render: ({ label }) => (
    <Button>
      <Text>{label}</Text>
    </Button>
  ),
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
  },
  render: ({ label }) => (
    <Button buttonType={"secondary"}>
      <Text>{label}</Text>
    </Button>
  ),
};
