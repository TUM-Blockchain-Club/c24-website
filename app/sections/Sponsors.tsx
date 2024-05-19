import React from "react";
import { Text } from "@/app/components/text";

const Sponsors = () => {
  return (
    <section
      className="w-full flex flex-col items-center gap-12 lg:gap-20"
      id="sponsors"
    >
      <Text textType={"sub_hero"} className="text-gradient">
        Previous Sponsors
      </Text>
    </section>
  );
};
export default Sponsors;
