"use client";

import { Text } from "@/app/components/text";

const Video = () => {
  return (
    <>
      <div className="relative w-full flex justify-end items-center overflow-visible">
        <div className="relative w-full mr-[4vh] max-w-[100vw] xl:max-w-[50vw] sm:max-w-[30vw] min-h-[10px] text-right">
          <p className="text-xs sm:text-base">
            <Text>Knowledge Partner</Text>
            <br />
            <b>
              <Text>IEEE Blockchain</Text>
            </b>
          </p>
        </div>
      </div>
      <section className="w-full flex flex-col lg:flex-row justify-center items-center mt-[-125px]">
        <div className="w-full flex justify-center max-w-[275px] sm:max-w-[500px] xl:max-w-full">
          <video
            className="glow cta-border"
            poster="/hero/thumbnail.png"
            controls
            id="vid-hero"
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
      </section>
    </>
  );
};

export default Video;
