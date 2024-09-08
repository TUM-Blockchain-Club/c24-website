import { Ticket } from "@/components/ticket/Ticket";
import { Meta, StoryObj } from "@storybook/react";
import React from "react";

type TextPropAndCustomArgs = React.ComponentProps<typeof Ticket> & {
  label: string;
};

const meta: Meta<TextPropAndCustomArgs> = {
  title: "Ticket",
  component: Ticket,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    ticketType: {
      table: {
        disable: true,
      },
    },
    label: {
      type: "string",
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<TextPropAndCustomArgs>;

export const Regular: Story = {
  args: {
    label: "400€",
  },
  render: ({ label }) => (
    <Ticket ticketType={"vip"} price={parseFloat(label)} title="VIP"></Ticket>
  ),
};

export const Vip: Story = {
  args: {
    label: "120€",
  },
  render: ({ label }) => (
    <Ticket price={parseFloat(label)} title="Regular"></Ticket>
  ),
};

export const Student: Story = {
  args: {
    label: "12€",
  },
  render: ({ label }) => (
    <Ticket
      ticketType={"student"}
      price={parseFloat(label)}
      title="Student"
    ></Ticket>
  ),
};
