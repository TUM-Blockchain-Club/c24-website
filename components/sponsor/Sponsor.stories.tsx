import { Sponsor } from "@/components/sponsor/Sponsor";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Sponsor> = {
  title: "Sponsor",
  component: Sponsor,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    imageSrc:
      "https://assets-global.website-files.com/631ad94cbdadc424bb3d6461/64d3c97acfe5c9b1d5518434_Hedera.png",
  },
};
