import { Text } from "@/components/text";
import AfterEvent from "@/components/afterevent/AfterEvent";
import { Button } from "@/components/button";

const AfterEvents = () => {
  return (
    <section className="w-full" id="tickets">
      <div className="flex w-full justify-center items-center">
        <Text textType={"sub_hero"} className="text-center text-gradient">
          Evening Events
        </Text>
      </div>
      <div className="w-full flex justify-center mt-12">
        <div className="lg:flex lg:space-x-4 space-y-4 lg:space-y-0">
          <AfterEvent
            title="Blockchain Ecosystem Night"
            date="12.09.2024 | 5.45 - 8pm"
            img="/side-events/ecosystem_night.jpg"
            link="https://www.eventbrite.de/e/blockchain-ecosystem-night-tickets-1005031866367?aff=oddtdtcreator"
            desc="Join us for a relaxed evening at the Blockchain Ecosystem Night, hosted by the TUM Blockchain Club, Blockchain Bayern, Bundesblock, and W3MUC. We’ll kick off with two panels: one featuring students from international blockchain clubs and the other highlighting local blockchain initiatives. In between, Prof. Möslein will present his new book. After that, we’ll come together for drinks from Metabrew and some casual networking. It’s the perfect chance to connect with other blockchain enthusiasts and experts. Looking forward to seeing you there!"
          />
          <AfterEvent
            title="Student Initiatives Night"
            date="13.09.2024 | 6.15 - 7pm"
            img="/side-events/student-initiatives-night.jpg"
            link="/student-initiatives-night"
            desc="Student initiatives are an integral part of Munich's innovative
          ecosystem, always brimming with energy and enthusiasm. But we have few
          opportunities to truly understand the exciting projects that they are
          working on. That is why we bring to you the second iteration of
          Student Initiatives Night as part of this year's TUM Blockchain
          Conference!"
          />
        </div>
      </div>
      <div className="w-full flex justify-center mt-20">
        <Button buttonType={"cta"} asChild>
          <a href="/side-events">All Side Events</a>
        </Button>
      </div>
    </section>
  );
};

export default AfterEvents;
