import { Text } from "@/app/components/text";
import Image from "next/image";
import NextLink from "next/link";
import { Button } from "../components/button";

const AfterEvents = () => {
  return (
    <section className="w-full" id="tickets">
      <div className="flex w-full justify-center items-center">
        <Text textType={"sub_hero"} className="text-gradient text-center">
          After Events
        </Text>
      </div>
      <div className="w-full flex justify-center mt-12">
        <div className="w-full border border-gradient-tbc max-w-[250px] sm:max-w-[42rem] p-4 md:p-6">
          <div className="relative w-full h-[200px]">
            <Image
              alt="Student Initiatives Night"
              src="/side-events/student-initiatives-night.jpg"
              className="border-gradient-tbc"
              fill
              style={{ objectFit: "contain" }}
            ></Image>
          </div>
          <div className="w-full flex justify-center mt-10">
            <Text
              textType={"sub_title"}
              className="underline text-center max-w-[250px] sm:max-w-[42rem]"
            >
              Student Initiatives Night
            </Text>
          </div>
          <div className="w-full flex justify-center mt-6">
            <Text
              textType={"paragraph"}
              as="p"
              className="text-left max-w-[250px] sm:max-w-[42rem]"
            >
              Student initiatives are an integral part of Munich's innovative
              ecosystem, always brimming with energy and enthusiasm. But we have
              few opportunities to truly understand the exciting projects that
              they are working on. That is why we bring to you the second
              iteration of Student Initiatives Night as part of this year's TUM
              Blockchain Conference!
            </Text>
          </div>
          <div className="w-full flex justify-center mt-10">
            <Button buttonType={"cta"}>
              <NextLink href="/student-initiatives-night">more</NextLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterEvents;
