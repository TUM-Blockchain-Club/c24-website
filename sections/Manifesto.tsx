import { Text } from "@/components/text";

const Manifesto = () => {
  return (
    <section className="w-full flex justify-center items-center" id="manifesto">
      <div className={"w-full flex flex-col gap-12 lg:gap-20 px-2 lg:px-0"}>
        <div className={"w-full flex justify-center"}>
          <Text textType={"sub_hero"} className="text-gradient">
            Manifesto
          </Text>
        </div>
        <div className="w-full flex justify-center">
          <Text as={"p"} className="text-left sm:max-w-[42rem]">
            We are committed to advancing the blockchain ecosystem by bringing
            together the <b>next generation of builders and thinkers</b> in web3
            in a non-profit setting where technology and open discourse take
            center stage.
            <br />
            <br />
            Our lineup of five tracks - <b>Education</b>, <b>Research</b>,{" "}
            <b>Ecosystem</b>,<b>Applications</b>, and <b>Regulation</b> - with
            experts from industry, academia, and politics, explores the latest
            technologies, projects, and legal landscapes in web3. This year,
            with its own dedicated track, we are placing particular emphasis on
            real-world applications and use cases of web3, exploring why web3
            matters today more than ever. In a world where AI threatens identity
            and information integrity, where ecosystem lock-ins are the norm,
            and true privacy is virtually non-existent in consumer products,
            web3 isn't just a trend - it's a lifeline.
          </Text>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
