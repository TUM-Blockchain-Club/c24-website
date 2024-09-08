import { Meta, StoryObj } from "@storybook/react";
import { Text } from "@/components/text/Text";

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

const text = "The quick brown fox jumps over the lazy dog.";

export const Hero: Story = {
  args: {
    children: text,
    textType: "hero",
  },
};

export const Subhero: Story = {
  args: {
    children: text,
    textType: "sub_hero",
  },
};

export const Title: Story = {
  args: {
    children: text,
    textType: "title",
  },
};

export const Subtitle: Story = {
  args: {
    children: text,
    textType: "sub_title",
  },
};

export const Paragraph: Story = {
  args: {
    children: text,
    textType: "paragraph",
  },
};

export const Small: Story = {
  args: {
    children: text,
    textType: "small",
  },
};
