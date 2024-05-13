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
    <div className="flex justify-center w-full">
      <Canvas />
      <div className="w-full max-w-[1500px]">
        <Header />
        <Hero />
        <Manifesto />
        <div
          className={"w-full mt-20 mb-40 px-12 2xl:px-0 flex justify-center"}
        >
          <Button buttonType={"primary"} asChild>
            <a href={"https://tally.so/r/wk62O6"}>Apply as speaker</a>
          </Button>
        </div>
        <Footer />
      </div>
    </div>
  );
}
