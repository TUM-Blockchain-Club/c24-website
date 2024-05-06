import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/app/components/button/Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ['autodocs'],
  argTypes: {
    buttonType: {
      table: {
        disable: true
      }
    },
    children: {
      type: "string"
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CTA: Story = {
  args: {
    buttonType: "cta",
    children: "CTA Button"
  }
}

export const Primary: Story = {
  args: {
    buttonType: "primary",
    children: "Primary Button"
  }
}

export const Secondary: Story = {
  args: {
    buttonType: "secondary",
    children: "Secondary Button"
  }
}
