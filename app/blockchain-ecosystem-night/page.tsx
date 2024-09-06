import Image from "next/image";
import { Container } from "@/components/container";
import { Text } from "@/components/text";

export default function PaperSubmission() {
  return (
    <div className={"overflow-x-hidden"}>
      <main className={"w-full pt-[25px] lg:pt-0 z-20 2xl:px-[225px] pb-40"}>
        <Container className="flex justify-center">
          <div className={"mt-[100px] md:mt-[20vh] z-10 max-w-3xl"}>
            <Text textType={"sub_hero"} className="text-gradient text-left">
              Student Initiatives Night
            </Text>
            <div className="mt-12">
              <Text textType={"paragraph"}>Calling all curious seekers!</Text>
            </div>
            <div className="mt-6">
              <Text textType={"paragraph"}>
                Student initiatives are an integral part of Munich's innovative
                ecosystem, always brimming with energy and enthusiasm. But we
                have few opportunities to truly understand the exciting projects
                that they are working on. That is why we bring to you the second
                iteration of Student Initiatives Night as part of this year's
                TUM Blockchain Conference!
              </Text>
            </div>
            <div className="mt-12">
              <Text textType={"title"} className="text-gradient">
                Initiatives
              </Text>
            </div>
            <div className="grid items-center grid-cols-3 px-4 gap-4 md:grid-cols-5 mt-12">
              <Image
                src={"/student-initiatives/180-logo.png"}
                alt={"180 degrees"}
                width={100}
                height={100}
              />
              <Image
                src={"/student-initiatives/aitum-logo.png"}
                alt={"Tum.ai"}
                width={100}
                height={100}
              />
              <Image
                src={"/student-initiatives/aselub-logo.png"}
                alt={"Aselub"}
                width={100}
                height={100}
              />
              <Image
                src={"/student-initiatives/cdtm-logo.png"}
                alt={"CDTM"}
                width={100}
                height={100}
              />
              <Image
                src={"/student-initiatives/enactus-logo.png"}
                alt={"Enactus"}
                width={100}
                height={100}
              />
              <Image
                src={"/student-initiatives/green-logo.png"}
                alt={"Tum greem tech"}
                width={100}
                height={100}
              />
              <Image
                src={"/student-initiatives/horyzn-logo.png"}
                alt={"Horyzn"}
                width={100}
                height={100}
              />
              <Image
                src={"/student-initiatives/levitum-logo.png"}
                alt={"Levitum"}
                width={100}
                height={100}
              />
              <Image
                src={"/student-initiatives/mtp-logo.png"}
                alt={"MTP"}
                width={100}
                height={100}
              />
              <Image
                src={"/student-initiatives/neurotum-logo.png"}
                alt={"Neurotum"}
                width={100}
                height={100}
              />
              <Image
                src={"/student-initiatives/speaker-logo.png"}
                alt={"Tum Speaker Series"}
                width={100}
                height={100}
              />
              <Image
                src={"/student-initiatives/sr-logo.png"}
                alt={"SR"}
                width={100}
                height={100}
              />
              <Image
                src={"/student-initiatives/start-logo.png"}
                alt={"Start munich"}
                width={100}
                height={100}
              />
              <Image
                src={"/student-initiatives/teg-logo.png"}
                alt={"TEG"}
                width={100}
                height={100}
              />
              <Image
                src={"/student-initiatives/tuic-logo.png"}
                alt={"TUIC"}
                width={100}
                height={100}
              />
              <Image
                src={"/student-initiatives/warr-logo.png"}
                alt={"WARR"}
                width={100}
                height={100}
              />
            </div>
            <div className="mt-16">
              <Text textType={"paragraph"}>
                Join us for an exciting evening where 15 initiatives will pitch
                the most interesting projects that they have been working on and
                how you can get involved with them! Note: This event is open to
                everyone attending the conference, so whether you're a
                professional, entrepreneur, or corporate, don't miss joining us
                to get a scoop on the latest happenings!
              </Text>
            </div>
            <div className="mt-12">
              <Text textType={"title"} className="text-gradient">
                Agenda
              </Text>
            </div>
            <div className="mt-6">
              <Text textType={"paragraph"}>
                <ul
                  style={{ listStyleType: "circle" }}
                  className="pl-5 space-y-2"
                >
                  <li>
                    17:00 - 18:00: Board Workshop
                    <br /> In this workshop, we will discuss the most pressing
                    issues that the initiatives face and how to overcome them!
                  </li>
                  <li>
                    19:00 - 19.45: Initiative Pitches
                    <br />
                    15 pitches, 2 minutes each! Initiatives will pitch the
                    latest projects that they have been working on, so stay
                    tuned for surprises and opportunities.
                  </li>
                  <li>
                    19:45 - 21:00: Networking
                    <br />
                    Network with various initiatives and get to know how you can
                    join them!
                  </li>
                </ul>
              </Text>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
