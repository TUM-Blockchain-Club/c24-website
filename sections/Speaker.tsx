import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { Speaker as SpeakerComponent } from "@/components/speaker";
import { useSpeaker } from "@/hooks/useSpeaker";
import { Link } from "@/components/link";

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
            <SpeakerComponent key={index} {...speaker} hasSocialLink />
          ))}
      </div>
      <div className="md:flex space-x-0 md:space-x-4 space-y-4 md:space-y-0">
        <div>
          <div className="w-full flex justify-center">
            <Button disabled>Apply as speaker</Button>
          </div>
        </div>
        <div>
          <div className="w-full flex justify-center">
            <Button buttonType={"primary"} asChild>
              <Link href={"/speakers"}>All speakers</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaker;
