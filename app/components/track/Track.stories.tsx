import { Meta, StoryObj } from "@storybook/react";
import { Track, TrackProps } from "@/app/components/track/Track";

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
    width: 45,
    height: 45,
    title: "Application",
  },
};
