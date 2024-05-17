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
      <div className={"flex flex-wrap justify-center gap-x-4 gap-y-12"}>
      <SpeakerComponent imageSrc={"https://upload.wikimedia.org/wikipedia/commons/1/1c/Vitalik_Buterin_TechCrunch_London_2015_%28cropped%29.jpg"} name="Hilmar M. Orth" position="Founder" company="Gelato and Arrakis"/>
      <SpeakerComponent imageSrc={"https://upload.wikimedia.org/wikipedia/commons/1/1c/Vitalik_Buterin_TechCrunch_London_2015_%28cropped%29.jpg"} name="Leonardo Alt" position="Formal Verification Lead. Compiler Engineer" company="Ethereum Foundation"/>
      <SpeakerComponent imageSrc={"https://upload.wikimedia.org/wikipedia/commons/1/1c/Vitalik_Buterin_TechCrunch_London_2015_%28cropped%29.jpg"} name="Sarah Gramberg" position="Supervisory Expert Crypto-Assets" company="European Banking Authority"/>
      <SpeakerComponent imageSrc={"https://upload.wikimedia.org/wikipedia/commons/1/1c/Vitalik_Buterin_TechCrunch_London_2015_%28cropped%29.jpg"} name="Marina Khaustova" position="Chief Executive Officer" company="Crytal Blockchain Analytics"/>
      <SpeakerComponent imageSrc={"https://upload.wikimedia.org/wikipedia/commons/1/1c/Vitalik_Buterin_TechCrunch_London_2015_%28cropped%29.jpg"} name="Andri Rabetanety" position="Chief Operating Officer" company="1inch Network"/>
      <SpeakerComponent imageSrc={"https://upload.wikimedia.org/wikipedia/commons/1/1c/Vitalik_Buterin_TechCrunch_London_2015_%28cropped%29.jpg"} name="Alessandro Ferrari" position="Head of Product" company="Algorand Foundation"/>
      <SpeakerComponent imageSrc={"https://upload.wikimedia.org/wikipedia/commons/1/1c/Vitalik_Buterin_TechCrunch_London_2015_%28cropped%29.jpg"} name="Prof. Dr. Philipp Maume" position="Professor of Corporate Governance and Capital Markets Law" company="TUM"/>
      <SpeakerComponent imageSrc={"https://upload.wikimedia.org/wikipedia/commons/1/1c/Vitalik_Buterin_TechCrunch_London_2015_%28cropped%29.jpg"} name="Philipp Lesche" position="Advisor" company="Digital Technologies & Head of Bavarian Center for Blockchain"/>
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
