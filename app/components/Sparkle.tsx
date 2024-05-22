"use client";

import Spline from "@splinetool/react-spline";
import { useEffect, useRef } from "react";

const Sparkle = () => {
  // Ref to access the underlying Spline DOM element
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let canvasElement = splineRef.current?.querySelector("canvas");

    const handleWheel = (e: WheelEvent) => e.preventDefault();
    const handleTouch = (e: TouchEvent) => e.preventDefault();

    if (canvasElement) {
      // Disable scroll and mouse wheel events on the canvas
      canvasElement.addEventListener("wheel", handleWheel);

      // Prevent click-through on mobile (optional enhancement)
      canvasElement.addEventListener("touchstart", handleTouch);
    }

    // Cleanup when the component unmounts
    return () => {
      if (canvasElement) {
        canvasElement.removeEventListener("wheel", handleWheel);
        canvasElement.removeEventListener("touchstart", handleTouch);
      }
    };
  }, []); // Run only once when the component mounts

  return (
    <div className={"absolute w-screen h-screen -z-10"}>
      <Spline
        scene={"https://prod.spline.design/LvzD1uPG26gSdiXR/scene.splinecode"}
        className={
          "absolute opacity-50 !h-screen lg:!h-[150vh] lg:top-[calc(-150vh/5)] top-0 left-0"
        }
        style={{ width: "100vw" }}
        ref={splineRef}
      />
    </div>
  );
};

export default Sparkle;
