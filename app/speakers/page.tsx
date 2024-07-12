import { Speaker as SpeakerComponent } from "@/app/components/speaker";
import { Asset } from "contentful";
import { useSpeaker } from "@/app/hooks/useSpeaker";
import { Header } from "@/app/components/header";
import { Container } from "@/app/components/container";
import { Text } from "@/app/components/text";
import { Footer } from "@/app/components/footer";

const SpeakersPage = async () => {
  const speakers = await useSpeaker();

  return (
    <div className={"overflow-x-hidden"}>
      <Header />
      <main className={"w-full pt-[25px] lg:pt-0 z-20 2xl:px-[225px] pb-40"}>
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
            {speakers.items.map((speaker, index) => (
              <SpeakerComponent
                key={index}
                imageSrc={
                  (speaker.fields.profilePhoto as Asset)?.fields.file
                    ?.url as string
                }
                name={speaker.fields.name as string}
                position={speaker.fields.description as string}
              />
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default SpeakersPage;
