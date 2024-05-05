"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Canvas from "./components/Canvas";
import Hero from "./sections/Hero";
import Manifesto from "./sections/Manifesto";

export default function Home() {
  return (
    <div className="flex justify-center w-full">
      <Canvas />
      <div className="w-full max-w-[1500px]">
        <Navbar />
        <Hero />
        <Manifesto />
        <Footer />
      </div>
    </div>
  );
}
