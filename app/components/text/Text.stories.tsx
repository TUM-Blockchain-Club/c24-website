import { Meta, StoryObj } from "@storybook/react";
import { Text } from "@/app/components/text/Text";

const meta = {
  title: "Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      type: "string",
      name: "text",
    },
    textType: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

const text = "The quick brown fox jumps over the lazy fox.";

export const Hero: Story = {
  args: {
    children: text,
    textType: "hero",
  },
};
