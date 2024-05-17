"use client";

import Spline from "@splinetool/react-spline";

const Sparkle = () => {
  return (
    <div className={"absolute w-screen h-screen -z-10"}>
      <Spline
        scene={"https://prod.spline.design/LvzD1uPG26gSdiXR/scene.splinecode"}
        className={
          "absolute opacity-50 !h-screen lg:!h-[150vh] lg:top-[calc(-150vh/5)] top-0 left-0"
        }
        style={{ width: "100vw" }}
      />
    </div>
  );
};

export default Sparkle;
