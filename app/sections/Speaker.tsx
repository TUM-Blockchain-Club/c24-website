import React from "react";
import { Text } from "@/app/components/text";
import { Speaker as SpeakerComponent } from "../components/speaker";
import { Button } from "@/app/components/button";

const Speaker = () => {
  return (
    <section className="w-full flex flex-col items-center gap-32" id="speaker">
      <Text textType={"sub_hero"} className="text-gradient">
        Speakers
      </Text>
      <div className={"grid grid-cols-4 gap-x-4 gap-y-12"}>
      <SpeakerComponent imageSrc={""} name="Hilmar M. Orth" position="Founder at Gelato and Arrakis" company=""/>
      <SpeakerComponent imageSrc={""} name="Leonardo Alt" position="Formal Verification Lead. Compiler Engineer at Ethereum Foundation" company=""/>
      <SpeakerComponent imageSrc={""} name="Sarah Gramberg" position="Supervisory Expert Crypto-Assets at European Banking Authority" company=""/>
      <SpeakerComponent imageSrc={""} name="Marina Khaustova" position="CEO at Crytal Blockchain Analytics" company=""/>
      <SpeakerComponent imageSrc={""} name="Andri Rabetanety" position="Chief Operating Officer 1inch Network" company=""/>
      <SpeakerComponent imageSrc={""} name="Alessandro Ferrari" position="Head of Product of Algorand Foundation" company=""/>
      <SpeakerComponent imageSrc={""} name="Prof. Dr. Philipp Maume" position="Professor of Corporate Governance and Capital Markets Law at TUM" company=""/>
      <SpeakerComponent imageSrc={""} name="Philipp Lesche" position="Advisor for Digital Technologies & Head of Bavarian Center for Blockchain" company=""/>
      </div>
      <div className="w-full flex justify-center">
        <Button buttonType={"primary"} asChild>
          <a href={"https://tally.so/r/wk62O6"}>Apply as speaker</a>
        </Button>
      </div>
    </section>
  );
};

export default Speaker;
