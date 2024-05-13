"use client";

import Navbar from "./components/Navbar";
import { Footer } from "@/app/components/footer/Footer";
import Canvas from "./components/Canvas";
import Hero from "./sections/Hero";
import Manifesto from "./sections/Manifesto";
import { Button } from "@/app/components/button";
import { Header } from "@/app/components/header";

export default function Home() {
  return (
    <div>
      <Canvas />
      <Header />
      <main className={"w-full flex justify-center pt-[25px] lg:pt-0"}>
        <div className={"flex flex-col max-w-7xl "}>
          <Hero />
          <div className={"flex flex-col pb-24 gap-32"}>
            <Manifesto />
            <div
              className={"w-full mt-20 mb-40 px-12 2xl:px-0 flex justify-center"}
            >
              <Button buttonType={"primary"} asChild>
                <a href={"https://tally.so/r/wk62O6"}>Apply as speaker</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
);
}
