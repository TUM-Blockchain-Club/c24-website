import Image from "next/image";
import { Text } from "../components/text";
import { trackItems } from "@/app/constants/TrackData";
import { Track } from "../components/track";
import { VenueImage } from "../components/venue/VenueImage";

const Venue = () => {
  const scroll = (node: any) => {
    if (node == null) return;
    let counter = 1;
    let num = node.children.length;
    setInterval(() => {
      document.getElementById("line-anim")?.classList.add("line-anim");
      node.style.transform = `translateX(-${100 * counter}%)`;
      counter++;
      if (counter == num) counter = 0;
    }, 4000);
  };

  return (
    <section className="w-full flex flex-col items-center" id="tracks">
      <Text textType={"sub_hero"} className="text-gradient text-center">
        Venue
      </Text>
      <div className="mt-20">
        <div className="overflow-x-hidden w-[280px] sm:w-[600px] xl:w-[800px]">
          <div
            className="flex relative duration-500 ease-in-out"
            ref={(node) => scroll(node)}
          >
            <VenueImage
              imageSrc={"/venue/venue_1.jpg"}
              imageAlt="Deutsches Museum"
            />
            <VenueImage
              imageSrc={"/venue/venue_2.jpg"}
              imageAlt="Deutsches Museum"
            />
            <VenueImage
              imageSrc={"/venue/venue_3.jpg"}
              imageAlt="Deutsches Museum"
            />
            <VenueImage
              imageSrc={"/venue/venue_4.jpg"}
              imageAlt="Deutsches Museum"
            />
            <VenueImage
              imageSrc={"/venue/venue_5.jpg"}
              imageAlt="Deutsches Museum"
            />
          </div>
          <div id="line-anim" className="w-full h-[2px] bg-gradient-tbc"></div>
        </div>
        <div className="relative -translate-y-[50%] bg-black mx-auto border-gradient-tbc border-2 text-center max-w-[250px] sm:max-w-[400px] py-4 sm:py-8">
          <Text as="p" textType={"sub_title"}>
            Deutsches Museum
          </Text>
          <Text as="p" textType={"paragraph"}>
            Museumsinsel 1, 80538 Munich
          </Text>
        </div>
      </div>
    </section>
  );
};

export default Venue;
