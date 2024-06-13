import { Text } from "@/app/components/text";

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
            Europe's biggest student-run blockchain event is back! Hosted again
            at the historic Deutsches Museum in Munich, the{" "}
            <b>TUM Blockchain Conference</b> is bringing together the next
            generation of builders and thinkers in web3 in a non-profit setting
            where technology and substantive discourse take center stage.
            <br />
            <br />
            Our lineup of five tracks - <b>Education</b>, <b>Research</b>,{" "}
            <b>Ecosystem</b>, <b>Applications</b>, and <b>Regulation</b> - with
            experts from industry, academia, and politics, explores the latest
            technologies, projects, and legal landscapes in web3. This year,
            with its own dedicated track, we are placing particular emphasis on
            real-world applications and use cases of web3, exploring why web3
            matters today more than ever. In a world where AI threatens identity
            and information integrity, where ecosystem lock-ins are the norm,
            and true privacy is virtually non-existent in consumer products,
            web3 isn't just a trend - it's a lifeline.
            <br />
            <br />
            Munich, home to Germany's largest technical university and a hotbed
            of innovation, sets the stage for this conference. Here, amidst the
            blend of tech and tradition that defines the city, the conference
            creates a platform for connections not just within the web3
            community but with established companies and government
            representatives from across Germany and Europe. And it's all going
            down just before Oktoberfest.
            <br />
            <br />
            Behind the scenes, powering this event, is the TUM Blockchain Club -
            a crew of web3 builders with a passion for pushing boundaries. As a
            non-profit organization, we're driven by our love for the tech and
            our commitment to building a better digital world. Together, let's
            build something incredible.
            <br />
            <br />- TUM Blockchain Club
          </Text>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
