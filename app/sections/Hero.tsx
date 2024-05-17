import React from "react";
import Image from "next/image";
import c24Wordmark from "../../public/logos/c24-wordmark.svg";

const Hero = () => {
  return (
    <section className="px-10 lg:px-0 h-screen w-full flex justify-center items-center">
      <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-16">
        <div className={"w-full"}>
          <div className="relative w-full min-h-[150px] sm:w-[400px] sm:h-[175px] sm:mt-10 md:w-[500px] md:h-[200px] lg:w-[700px] lg:h-[350px]">
            <Image
              src={c24Wordmark}
              alt="TUM Blockchain Conference 24"
              fill
            />
          </div>
          <p className="mt-2 text-xs md:text-xl">Deutsches Museum, Munich</p>
          <p className="mt-2 text-xs md:text-xl">September 12th - 13th 2024</p>
        </div>
        <div className="w-full flex justify-center">
          <video
            className="glow"
            controls
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
    </section>
  );
};

export default Hero;
