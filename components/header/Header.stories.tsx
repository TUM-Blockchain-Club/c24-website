import { Meta, StoryObj } from "@storybook/react";
import { Header } from "@/components/header/Header";

const meta: Meta<typeof Header> = {
  title: "Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
