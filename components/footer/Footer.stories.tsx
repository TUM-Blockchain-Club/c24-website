import { Meta, StoryObj } from "@storybook/react";
import { Footer } from "@/components/footer/Footer";

const meta: Meta<typeof Footer> = {
  title: "Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
