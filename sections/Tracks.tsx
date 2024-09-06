import Image from "next/image";
import { Text } from "@/components/text";
import { trackItems } from "@/constants/TrackData";
import { Track } from "@/components/track";

const Tracks = () => {
  return (
    <section className="w-full flex flex-col items-center" id="tracks">
      <Text textType={"sub_hero"} className="text-gradient text-center">
        Tracks
      </Text>
      <div className="md:flex justify-center md:gap-x-8 mt-20">
        <Track
          imageAlt="hat"
          imageSrc={trackItems[0].img}
          title={trackItems[0].title}
          desc={trackItems[0].description}
          dimension={70}
        />
        <Track
          imageAlt="globe"
          className="mt-10 md:mt-0"
          imageSrc={trackItems[1].img}
          title={trackItems[1].title}
          desc={trackItems[1].description}
          dimension={70}
        />
        <Track
          imageAlt="lab"
          className="mt-10 md:mt-0"
          imageSrc={trackItems[2].img}
          title={trackItems[2].title}
          desc={trackItems[2].description}
          dimension={70}
        />
      </div>
      <div className="md:flex justify-center md:gap-x-8 md:mt-20">
        <Track
          imageAlt="paragraph"
          className="mt-10 md:mt-0"
          imageSrc={trackItems[3].img}
          title={trackItems[3].title}
          desc={trackItems[3].description}
          dimension={70}
        />
        <Track
          imageAlt="objects"
          className="mt-10 md:mt-0"
          imageSrc={trackItems[4].img}
          title={trackItems[4].title}
          desc={trackItems[4].description}
          dimension={70}
        />
      </div>
    </section>
  );
};

export default Tracks;
