import Sparkle from "@/app/components/Sparkle";
import { Container } from "@/app/components/container";
import Sponsors from "@/app/sections/Sponsors";
import Statistic from "@/app/sections/Statistic";
import { Link } from "./components/link";
import { Text } from "./components/text";
import AcademicTrack from "./sections/AcademicTrack";
import FAQSection from "./sections/FAQ";
import Hero from "./sections/Hero";
import Manifesto from "./sections/Manifesto";
import Partners from "./sections/Partners";
import Speaker from "./sections/Speaker";
import StudentGrants from "./sections/StudentGrants";
import Tickets from "./sections/Tickets";
import Tracks from "./sections/Tracks";
import Venue from "./sections/Venue";
import Video from "./sections/Video";

export default function Home() {
  return (
    <>
      <Script
        id="tally-widget"
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
      />
      <Script
        id="tally-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.TallyConfig = {
              formId: "wv4qLD",
              popup: {
                width: 400,
                open: {
                  trigger: "time",
                  ms: 5000
                }
              }
            };
          `,
        }}
      />
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
                <StudentGrants />
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
