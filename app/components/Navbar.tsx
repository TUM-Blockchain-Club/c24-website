import React from "react";
import Arrow from "@/public/assets/arrow-white.png";
import tbcWordmark from "@/public/logos/tbc-conference-logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="absolute flex items-center justify-between py-5 px-8 2xl:px-0 w-full max-w-[1500px]">
      <a
        href="https://www.tum-blockchain.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex cursor-pointer"
      >
        <div className="relative w-[50px] h-[50px]">
          <Image src={tbcWordmark} alt="Logo" fill={true} />
        </div>
      </a>
      <div className="flex items-center space-x-8">
        <a className="flex cursor-pointer text-sm md:text-base" href="/">
          Manifesto
        </a>
        <a
          className="flex cursor-pointer text-sm md:text-base"
          href="#tally-open=wAlAek&tally-emoji-text=👋&tally-emoji-animation=wave"
        >
          <div className="cta-border p-[2px]">
            <p className="bg-black px-4 py-2 hover:bg-transparent duration-300">
              Waitlist
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
