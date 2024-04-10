"use client";

import Image from "next/image";
import c24Wordmark from "../public/c24-wordmark.svg";
import Arrow from "../public/arrow-white.png";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Canvas from "./components/Canvas";

export default function Home() {
  return (
    <>
      <Navbar />
      <Canvas />
      <div className="w-full h-screen flex justify-center items-center">
        <div>
          <div className="w-full flex justify-center">
            <div className="relative w-[200px] h-[100px] md:w-[500px] md:h-[200px]">
              <Image
                src={c24Wordmark}
                alt="TUM Blockchain Conference 24"
                fill={true}
              />
            </div>
          </div>
          <p className="w-full text-center mt-12 text-xs md:text-xl">
            Munich, Deutsches Museum
          </p>
          <p className="w-full text-center mt-2 text-xs md:text-xl">
            September 12th - 13th
          </p>
          <p className="w-full text-center mt-12 text-xs md:text-base">
            Last Year's Conference
          </p>
          <div className="flex items-center space-x-3 md:space-x-8 mt-6">
            <div>
              <p className="md:text-2xl w-full text-center">1000+</p>
              <p className="text-xs md:text-base">Attendees</p>
            </div>
            <div className="h-8 w-0.5 bg-neutral-500" />
            <div>
              <p className="md:text-2xl w-full text-center">100+</p>
              <p className="text-xs md:text-base">Speakers</p>
            </div>
            <div className="h-8 w-0.5 bg-neutral-500" />
            <div>
              <p className="md:text-2xl w-full text-center">40+</p>
              <p className="text-xs md:text-base">Talks</p>
            </div>
            <div className="h-8 w-0.5 bg-neutral-500" />
            <div>
              <p className="md:text-2xl w-full text-center">20+</p>
              <p className="text-xs md:text-base">Sponsors</p>
            </div>
          </div>
          <div className="w-full mt-10">
            <a
              className="flex items-center"
              href="#tally-open=meMOdl&tally-emoji-text=👋&tally-emoji-animation=wave"
            >
              <p className="cursor-pointer text-sm md:text-base w-full text-center opacity-50">
                Join Waitlist
              </p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
