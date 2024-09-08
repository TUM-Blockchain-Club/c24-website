import { Container } from "@/components/container";
import { Text } from "@/components/text";
import { sideEventsItems } from "@/constants/SideEventData";
import Image from "next/image";
import NextLink from "next/link";

export async function generateStaticParams() {
  const eventItems = sideEventsItems.filter((event) => event.subpage);
  return eventItems.map((event) => ({
    event: event.url,
  }));
}

export default function Page({ params }: { params: { event: string } }) {
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
            <NextLink href="/side-events">
              <Text
                textType={"paragraph"}
                className="text-left underline mt-4"
                as="p"
              >
                Back to overview
              </Text>
            </NextLink>
            <div className="flex mt-10 justify-center space-x-20">
              <div className="relative w-full h-[250px]">
                <Image
                  className="object-cover cta-border"
                  src={event.backgroundImg}
                  alt={event.title}
                  fill
                />
              </div>
            </div>
            <Text textType={"paragraph"} className="text-left mt-10" as="p">
              {event?.description}
            </Text>
          </div>
        </Container>
      </main>
    </div>
  );
}
