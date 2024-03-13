import Navbar from "./components/Navbar";
import Munich from "@/public/munich.png";
import Image from "next/image";
import Arrow from "@/public/arrow-black.png";

import { Raleway } from "next/font/google";
import Footer from "./components/Footer";
const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black">
      <Navbar />
      <div className="relative mt-10 mx-5 sm:mt-20 sm:ml-20 lg:mt-32 lg:ml-40 z-10">
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
        <div className="md:flex">
          <button className="flex w-[275px] md:w-[300px] items-center justify-center mr-8 px-4 sm:px-16 py-4 sm:py-4 bg-[#FCCF6A] hover:border-white border-2 border-[#FCCF6A] duration-300 ease-in">
            <p className="text-black mr-4 text-sm">Speaker Application</p>
            <Image src={Arrow} alt="Arrow" width={20} height={20} />
          </button>
          <a
            href="mailto:sponsors@tum-blockchain.com"
            className="flex w-[275px] md:w-[250px] justify-center items-center mt-8 md:mt-0 px-4 sm:px-14 py-4 group sm:py-4 hover:border-white border-2 border-[#FCCF6A] duration-300 ease-in"
          >
            <p className="text-[#FCCF6A] mr-4 text-sm group-hover:text-white duration-300 ease-in">
              Become Sponsor
            </p>
          </a>
        </div>
        <p
          className={
            raleway.className +
            " text-white sm:text-3xl text-2xl leading-tight mt-8"
          }
        >
          Deutsches Museum
          <br />
          12.09 - 13.09
        </p>
        <button className="flex items-center mt-8">
          <p className="text-[#FCCF6A] underline mr-4 text-sm">
            Conference Newsletter
          </p>
        </button>
        <p
          className={
            raleway.className +
            " text-white sm:text-3xl text-2xl leading-tight mt-8"
          }
        ></p>
      </div>

      <div className="absolute right-0 bottom-0">
        <div className="2xl:w-full xl:w-[800px] h-full lg:w-[700px] w-[500px]">
          <Image src={Munich} alt="Munich" />
        </div>
      </div>
      <div className="absolute right-0 bottom-0">
        <div className="md:hidden min-w-[500px] min-h-[500px] from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.7)] bg-gradient-to-t to-50%"></div>
      </div>

      <Footer />
    </div>
  );
}
