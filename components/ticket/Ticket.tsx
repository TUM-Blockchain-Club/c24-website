"use client";
import { Text } from "@/components/text";
import { cva, VariantProps } from "class-variance-authority";
import classNames from "classnames";
import Image from "next/image";
import React from "react";

const ticketVariants = cva("", {
  variants: {
    ticketType: {
      student: "",
      regular: "",
      vip: "cta-border",
    },
  },
  defaultVariants: {
    ticketType: "student",
  },
});
type TicketVariantProps = VariantProps<typeof ticketVariants>;

type TicketElement = React.ElementRef<"div">;
export interface TicketProps
  extends React.ComponentPropsWithoutRef<"div">,
    TicketVariantProps {
  price: number;
  title: string;
}

export const Ticket = React.forwardRef<TicketElement, TicketProps>(
  (props, ref) => {
    const { className, price, ticketType, title, ...ticketProps } = props;
    return (
      <div
        className={ticketVariants({
          className: classNames(className, "border-2 border-white"),
          ticketType,
        })}
      >
        <div className="p-3 md:p-10 flex-col flex items-center">
          <Text textType={"sub_title"}>
            {title}
            <br />
          </Text>
          <Text textType={"title"} className="mt-4">
            {price}€<br />
          </Text>
          <Text
            textType={"small"}
            className={
              (ticketType == "student" ? "" : "hidden") + " text-center mt-4"
            }
          >
            Valid only with Student
            <br />
            ID (any university)
            <br />
          </Text>
          <div className={ticketType == "student" ? "" : "mb-12"}></div>
        </div>
        <div
          className={
            (ticketType == "vip" ? "bg-gradient-tbc" : "bg-white") +
            " w-full h-[2px]"
          }
        ></div>
        <div className="p-6 space-y-2">
          <Text textType={"paragraph"}>
            Grant access to:
            <br />
          </Text>
          <div className="flex items-center">
            <div className="w-[14px] h-[14x]">
              <Image
                className={"object-cover"}
                src={"/assets/check_white.png"}
                alt={"check"}
                width={100}
                height={100}
              />
            </div>
            <Text textType={"paragraph"} className="ml-2">
              2-day Conference
              <br />
            </Text>
          </div>
          <div className="flex items-center">
            <div className="w-[14px] h-[14x]">
              <Image
                className={"object-cover"}
                src={"/assets/check_white.png"}
                alt={"check"}
                width={100}
                height={100}
              />
            </div>
            <Text textType={"paragraph"} className="ml-2">
              Workshops
              <br />
            </Text>
          </div>
          <div className="flex items-center">
            <div className="w-[14px] h-[14x]">
              <Image
                className={"object-cover"}
                src={"/assets/check_white.png"}
                alt={"check"}
                width={100}
                height={100}
              />
            </div>
            <Text textType={"paragraph"} className="ml-2">
              Ecosystem Night
              <br />
            </Text>
          </div>
          <div className="flex items-center">
            <div>
              <div className="w-[14px] h-[14x]">
                <Image
                  className={"object-cover"}
                  src={"/assets/check_white.png"}
                  alt={"check"}
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <Text textType={"paragraph"} className="ml-2">
              Student Initiative Night
              <br />
            </Text>
          </div>
          <div className="flex items-center">
            <div className="w-[14px] h-[14x]">
              <Image
                className={"object-cover"}
                src={"/assets/check_white.png"}
                alt={"check"}
                width={100}
                height={100}
              />
            </div>
            <Text textType={"paragraph"} className="ml-2">
              After-Party
              <br />
            </Text>
          </div>
          <div
            className={
              (ticketType == "vip" ? "block" : "hidden") + " space-y-2"
            }
          >
            <div className="flex items-center">
              <div>
                <div className="w-[14px] h-[14x]">
                  <Image
                    className={"object-cover"}
                    src={"/assets/check_gold.png"}
                    alt={"check"}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <Text textType={"paragraph"} className="ml-2 text-[#DE9E31]">
                VIP-Speaker Lounge
                <br />
              </Text>
            </div>
            <div className="flex items-center">
              <div className="w-[14px] h-[14x]">
                <Image
                  className={"object-cover"}
                  src={"/assets/check_gold.png"}
                  alt={"check"}
                  width={100}
                  height={100}
                />
              </div>
              <Text textType={"paragraph"} className="ml-2 text-[#DE9E31]">
                VIP-Entrance
                <br />
              </Text>
            </div>
          </div>
        </div>
      </div>
    );
  },
);
Ticket.displayName = "Ticket";
