import Navbar from "./components/Navbar";
import Munich from "@/public/munich.png";
import Image from "next/image";
import Arrow from "@/public/arrow-black.png";

import { Raleway } from "next/font/google";
import Footer from "./components/Footer";
const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#181818]">
      <Navbar />
      <div className="relative mt-10 mx-5 sm:mt-20 sm:ml-20 lg:mt-40 lg:ml-40 z-10">
        <p
          className={
            raleway.className +
            " text-white text-3xl sm:text-5xl lg:text-7xl leading-tight mb-2"
          }
        >
          TUM
          <br />
          BLOCKCHAIN
          <br />
          CONFERENCE 24
        </p>
        <p className="text-white mb-8 text-xs sm:text-sm">
          Germany's leading student-run conference
          <br />
          exploring the frontiers of blockchain technology
        </p>
        <button className="flex items-center px-4 sm:px-12 py-4 sm:py-4 bg-[#FCCF6A] hover:border-white border-2 border-[#FCCF6A] duration-300 ease-in">
          <p className="text-black mr-4 text-sm">Speaker Application</p>
          <Image src={Arrow} alt="Arrow" width={20} height={20} />
        </button>
        <p
          className={
            raleway.className +
            " text-white sm:text-3xl text-2xl leading-tight mt-8"
          }
        >
          Deutsches Museum
          <br />
          13.09 - 14.09
        </p>
      </div>
      <div className="absolute right-0 bottom-0">
        <div className="2xl:w-full xl:w-[800px] h-full lg:w-[700px] w-[500px]">
          <Image src={Munich} alt="Munich" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
