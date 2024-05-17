import React from "react";
import Image from "next/image";
import c24Wordmark from "../../public/logos/c24-wordmark.svg";
import { Text } from "@/app/components/text";

const Hero = () => {
  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col xl:flex-row w-full justify-between items-center gap-16">
        <div className={"w-full"}>
          <div className="relative w-full max-w-[80vw] xl:max-w-[50vw] min-h-[150px] sm:w-[400px] sm:h-[175px] sm:mt-10 md:w-[500px] md:h-[200px] lg:w-[700px] lg:h-[350px]">
            <Image src={c24Wordmark} alt="TUM Blockchain Conference 24" fill />
          </div>
          <Text as={"p"} textType={"sub_title"} className="mt-2 text-center">Deutsches Museum, Munich</Text>
          <Text as={"p"} textType={"sub_title"} className="mt-2 text-center">September 12th - 13th 2024</Text>
        </div>
      </div>
    </section>
  );
};

export default Hero;
