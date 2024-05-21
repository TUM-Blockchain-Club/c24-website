"use client";

import Sparkle from "@/app/components/Sparkle";
import { Container } from "@/app/components/container";
import { Footer } from "@/app/components/footer/Footer";
import { Header } from "@/app/components/header";
import Sponsors from "@/app/sections/Sponsors";
import Statistic from "@/app/sections/Statistic";
import Hero from "./sections/Hero";
import Manifesto from "./sections/Manifesto";
import Speaker from "./sections/Speaker";
import Video from "./sections/Video";

export default function Home() {
  return (
    <div className={"overflow-x-hidden"}>
      <Header />
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
              <Sponsors />
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
