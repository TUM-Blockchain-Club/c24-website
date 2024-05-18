"use client";

import { Footer } from "@/app/components/footer/Footer";
import Canvas from "./components/Canvas";
import Hero from "./sections/Hero";
import Manifesto from "./sections/Manifesto";
import { Header } from "@/app/components/header";
import { Container } from "@/app/components/container";
import Statistic from "@/app/sections/Statistic";
import Sparkle from "@/app/components/Sparkle";
import { Button } from "@/app/components/button";
import Speaker from "./sections/Speaker";

export default function Home() {
  return (
    <div>
      <Header />
      <Sparkle />
      <main className={"w-full flex justify-center pt-[25px] lg:pt-0 z-20"}>
        <Container>
          <div className={"flex flex-col max-w-7xl"}>
            <Hero />
            <div className={"flex flex-col pb-24 gap-32"}>
              <Statistic />
              <Manifesto />
              <Speaker />
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
