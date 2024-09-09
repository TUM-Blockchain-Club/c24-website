export const dynamic = "force-static";

import Sparkle from "@/components/Sparkle";
import { Container } from "@/components/container";
import Sponsors from "@/sections/Sponsors";
import Statistic from "@/sections/Statistic";
import { Link } from "@/components/link";
import { Text } from "@/components/text";
import AcademicTrack from "@/sections/AcademicTrack";
import AfterEvents from "@/sections/AfterEvents";
import FAQSection from "@/sections/FAQ";
import Grants from "@/sections/Grants";
import Hero from "@/sections/Hero";
import Manifesto from "@/sections/Manifesto";
import Partners from "@/sections/Partners";
import Speaker from "@/sections/Speaker";
import Tickets from "@/sections/Tickets";
import Tracks from "@/sections/Tracks";
import Venue from "@/sections/Venue";
import Video from "@/sections/Video";

export default function Home() {
  return (
    <>
      <div>
        <Sparkle />
        <main className={"w-full flex justify-center pt-[25px] lg:pt-0 z-20"}>
          <Container>
            <div className={"flex flex-col max-w-7xl z-10"}>
              <Hero />
              <div className={"flex flex-col pb-24 gap-32"}>
                <Video />
                <Statistic />
                <Manifesto />
                <Speaker />
                <AcademicTrack />
                <Tracks />
                <Venue />
                <Tickets />
                <AfterEvents />
                <Grants />
                <Sponsors />
                <Partners />
                <div className="w-full flex justify-center">
                  <Text className="border border-white px-6 py-4">
                    <Link
                      href={"https://www.tum-blockchain.com/conference2023"}
                    >
                      Throwback 2023
                    </Link>
                  </Text>
                </div>
                <FAQSection />
              </div>
            </div>
          </Container>
        </main>
      </div>
    </>
  );
}
