import React from "react";
import Arrow from "@/public/arrow-white.png";
import tbcWordmark from "@/public/tbc-wordmark.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="absolute w-full">
      <div className="flex items-center justify-between w-full mobile-wide:h-[55px] h-[100px] px-4 sm:px-10 md:px-20">
        <div className="flex items-center justify-between h-full w-full">
          <a
            href="https://www.tum-blockchain.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-pointer"
          >
            <div className="relative w-[100px] md:w-[125px] h-[100px]">
              <Image src={tbcWordmark} alt="Logo" fill={true} />
            </div>
          </a>
          <a
            className="flex cursor-pointer text-sm md:text-base"
            href="https://www.tum-blockchain.com/conference2023"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conference 2023
            <Image src={Arrow} alt="Arrow" width={20} height={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
