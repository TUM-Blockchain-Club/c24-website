import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FAQ, FAQProps } from "./FAQ";
import { faqItems } from "@/constants/FAQData";

const meta: Meta<typeof FAQ> = {
  title: "Components/FAQ",
  component: FAQ,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof FAQ>;

export const Default: Story = {
  args: {
    items: faqItems,
    contactEmail: "conference@tum-blockchain.com",
  },
};
