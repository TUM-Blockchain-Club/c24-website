import { Track } from "@/components/track/Track";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Track> = {
  title: "Track",
  component: Track,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    imageSrc: "/tracks/earth.svg",
    imageAlt: "earth",
    dimension: 45,
    title: "Application",
  },
};
