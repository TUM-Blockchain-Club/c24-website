import { Button } from "@/app/components/button";
import { Text } from "@/app/components/text";
import { Speaker as SpeakerComponent } from "../components/speaker";
import { useSpeaker } from "@/app/hooks/useSpeaker";

const Speaker = async () => {
  const speakers = await useSpeaker(12);

  return (
    <section
      className="w-full flex flex-col items-center justify-center gap-12 lg:gap-20"
      id="speaker"
    >
      <Text textType={"sub_hero"} className="text-gradient text-center">
        Speakers
      </Text>
      <div className={"grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6"}>
        {speakers &&
          speakers.map((speaker, index) => (
            <SpeakerComponent
              key={index}
              imageSrc={speaker.profilePhoto}
              name={speaker.name as string}
              position={speaker.description as string}
            />
          ))}
      </div>
      <div className="md:flex space-x-0 md:space-x-4 space-y-4 md:space-y-0">
        <div>
          <div className="w-full flex justify-center">
            <Button buttonType={"cta"} asChild>
              <a href={"https://tally.so/r/wk62O6"}>Apply as speaker</a>
            </Button>
          </div>
        </div>
        <div>
          <div className="w-full flex justify-center">
            <Button buttonType={"primary"} asChild>
              <a href={"/speakers"}>All speakers</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaker;
