import { Text } from "@/components/text";
import { Button } from "@/components/button";

const AcademicTrack = () => {
  return (
    <section
      className="w-full flex justify-center items-center"
      id="Academic Track"
    >
      <div className={"w-full flex flex-col gap-8 lg:gap-12 px-2 lg:px-0"}>
        <div className={"w-full flex justify-center"}>
          <Text textType={"sub_hero"} className="text-gradient text-center">
            Academic Track
          </Text>
        </div>
        <div className="w-full flex justify-center">
          <Text as={"p"} className="text-left sm:max-w-[42rem]">
            We are delighted to announce the <b>Call for Extended Abstracts</b>{" "}
            for the academic track at the 2024 TUM Blockchain Conference. This
            track is part of the research track and hosted in collaboration with
            the TUM Chair of Network Architectures and Services and IEEE
            Blockchain as a Knowledge partner.
            <br />
            <br />
            We invite researchers, academics, and industry professionals to
            present their latest work in the topics related to the Science of
            Blockchains.
          </Text>
        </div>
        <div className="w-full flex justify-center">
          <Button disabled>Call for Abstracts</Button>
        </div>
      </div>
    </section>
  );
};

export default AcademicTrack;
