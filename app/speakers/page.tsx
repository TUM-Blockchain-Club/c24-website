import { Container } from "@/components/container";
import { Speaker as SpeakerComponent } from "@/components/speaker";
import { Text } from "@/components/text";
import { useSpeaker } from "@/hooks/useSpeaker";

const SpeakersPage = async () => {
  const speakers = await useSpeaker();

  return (
    <div className={"flex justify-center"}>
      <main className={"w-full max-w-7xl pt-[25px] lg:pt-0 z-20 pb-40"}>
        <Container>
          <div className={"mt-[100px] md:mt-[20vh] z-10 max-w-3xl"}>
            <div className="lg:flex items-center">
              <Text textType={"sub_hero"} className="text-gradient text-left">
                Speakers
              </Text>
            </div>
          </div>
          <div
            className={"grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6 mt-24"}
          >
            {speakers &&
              speakers.map((speaker, index) => (
                <SpeakerComponent key={index} {...speaker} hasSocialLink />
              ))}
          </div>
        </Container>
      </main>
    </div>
  );
};

export default SpeakersPage;
