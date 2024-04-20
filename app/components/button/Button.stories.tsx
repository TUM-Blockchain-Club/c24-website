import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/app/components/button/Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
