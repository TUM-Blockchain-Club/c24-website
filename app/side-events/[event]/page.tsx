import { Container } from "@/app/components/container";
import { Text } from "@/app/components/text";
import { sideEventsItems } from "@/app/constants/SideEventData";
import Image from "next/image";

export async function generateStaticParams() {
  return sideEventsItems.map((event) => ({
    event: event.url,
  }));
}

export default function EventDetail({ params }: { params: { event: string } }) {
  const event = sideEventsItems.find((obj) => obj.url == params.event);
  if (!event) {
    window.location.href = "/";
    return;
  }
  return (
    <div className={"overflow-x-hidden"}>
      <main className={"w-full pt-[25px] lg:pt-0 z-20 2xl:px-[225px] pb-40"}>
        <Container className="flex justify-center">
          <div className={"mt-[100px] md:mt-[15vh] z-10 max-w-3xl"}>
            <Text
              textType={"sub_hero"}
              className="text-gradient text-left"
              as="p"
            >
              {event?.title}
            </Text>
            <Text textType={"paragraph"} className="text-left mt-10" as="p">
              {event?.description}
            </Text>
            <div className="flex mt-20 justify-center space-x-20">
              <div className="relative w-[300px] h-[250px]">
                <Image
                  className="object-cover cta-border"
                  src={event.backgroundImg}
                  alt={event.title}
                  fill
                />
              </div>
              <div className="relative w-[300px] h-[250px]">
                <Image
                  className="object-cover cta-border"
                  src={event.backgroundImg}
                  alt={event.title}
                  fill
                />
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
