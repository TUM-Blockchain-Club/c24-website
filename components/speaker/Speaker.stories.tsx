"use client";

import { Meta, StoryObj } from "@storybook/react";
import { Speaker, SpeakerProps } from "@/components/speaker/Speaker";

const meta: Meta<typeof Speaker> = {
  title: "Speaker",
  component: Speaker,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    profilePhoto:
      "https://upload.wikimedia.org/wikipedia/commons/1/1c/Vitalik_Buterin_TechCrunch_London_2015_%28cropped%29.jpg",
    name: "Vitalik Buterin",
    description: "CEO @ Ethereum Foundation",
    url: "https://google.com",
    urlType: "website",
  },
};

export const WithLink: Story = {
  args: {
    profilePhoto:
      "https://upload.wikimedia.org/wikipedia/commons/1/1c/Vitalik_Buterin_TechCrunch_London_2015_%28cropped%29.jpg",
    name: "Vitalik Buterin",
    description: "CEO @ Ethereum Foundation",
    url: "https://google.com",
    urlType: "website",
    hasSocialLink: true,
  },
};
