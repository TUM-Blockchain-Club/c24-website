import React from "react";
import Image from "next/image";
import c24Wordmark from "../../public/logos/c24-wordmark.svg";

const Hero = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center px-8 2xl:px-0">
      <div className="xl:flex w-full justify-between items-center md:mt-40 lg:mt-60 xl:mt-0 mobile-wide:mt-[450px]">
        <div className="xl:mr-32">
          <div className="relative w-[250px] h-[150px] sm:w-[400px] sm:h-[175px] sm:mt-10 md:w-[500px] md:h-[200px] lg:w-[700px] lg:h-[350px]">
            <Image
              src={c24Wordmark}
              alt="TUM Blockchain Conference 24"
              fill={true}
            />
          </div>
          <p className="mt-2 text-xs md:text-xl">Deutsches Museum, Munich</p>
          <p className="mt-2 text-xs md:text-xl">September 12th - 13th 2024</p>
        </div>
        <div className="mt-20 w-full flex justify-center xl:mt-0 xl:justify-normal">
          <video
            className="glow"
            autoPlay
            muted
            width={850}
            height={480}
            style={{ objectFit: "cover" }}
            ref={(elm) => {
              if (elm)
                elm.onclick = () => {
                  elm.muted = false;
                };
            }}
          >
            <source src="/hero/conference.mp4" />
            Your browser does not support videos
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
