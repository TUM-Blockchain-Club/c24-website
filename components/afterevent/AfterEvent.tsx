"use client";

import Image from "next/image";
import NextLink from "next/link";
import { Button } from "../button";
import { Text } from "../text";

type AfterEventProps = {
  img: string;
  date: string;
  title: string;
  desc: string;
  link: string;
};

const AfterEvent = (props: AfterEventProps) => {
  return (
    <div className="w-full relative pb-32 border border-gradient-tbc max-w-[280px] sm:max-w-[30rem] p-6">
      <div className="relative w-full h-[150px]">
        <Image
          alt={props.title}
          src={props.img}
          className="border-gradient-tbc"
          fill
          style={{ objectFit: "contain" }}
        ></Image>
      </div>
      <div className="w-full flex justify-center mt-10">
        <Text
          textType={"sub_title"}
          className="text-center max-w-[250px] sm:max-w-[42rem]"
        >
          {props.title}
        </Text>
      </div>
      <div className="w-full flex justify-center">
        <Text
          textType={"paragraph"}
          className="text-center max-w-[250px] sm:max-w-[42rem]"
        >
          {props.date}
        </Text>
      </div>
      <div className="w-full flex justify-center mt-6">
        <Text
          textType={"lgsmall"}
          as="p"
          className="text-left text-gray-400 max-w-[250px] sm:max-w-[42rem]"
        >
          {props.desc}
        </Text>
      </div>
      <div className="w-full absolute bottom-10 flex justify-start mt-10">
        <Button buttonType={"cta"}>
          <NextLink href={props.link}>Learn More</NextLink>
        </Button>
      </div>
    </div>
  );
};

export default AfterEvent;
