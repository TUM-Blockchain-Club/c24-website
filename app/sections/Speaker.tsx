import React from "react";
import { Text } from "@/app/components/text";
import { Speaker as SpeakerComponent } from "../components/speaker";
import { Button } from "@/app/components/button";

const Speaker = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center gap-12 lg:gap-20"
      id="speaker"
    >
      <Text textType={"sub_hero"} className="text-gradient text-center">
        Previous Speakers
      </Text>
      <div className={"grid grid-cols-1 lg:grid-cols-4 gap-20"}>
        <SpeakerComponent
          imageSrc={"/speakers/hilmar_orth.webp"}
          name="Hilmar M. Orth"
          position="Founder"
          company="Gelato and Arrakis"
        />
        <SpeakerComponent
          imageSrc={"/speakers/leonardo_alt.webp"}
          name="Leonardo Alt"
          position="Formal Verification Lead. Compiler Engineer"
          company="Ethereum Foundation"
        />
        <SpeakerComponent
          imageSrc={"/speakers/sarah_gramberg.webp"}
          name="Sarah Gramberg"
          position="Supervisory Expert Crypto-Assets"
          company="European Banking Authority"
        />
        <SpeakerComponent
          imageSrc={"/speakers/marina_khaustova.webp"}
          name="Marina Khaustova"
          position="Chief Executive Officer"
          company="Crytal Blockchain Analytics"
        />
        <SpeakerComponent
          imageSrc={"/speakers/andri_rabatanety.webp"}
          name="Andri Rabetanety"
          position="Chief Operating Officer"
          company="1inch Network"
        />
        <SpeakerComponent
          imageSrc={"/speakers/alessandro_capellato.webp"}
          name="Alessandro Ferrari"
          position="Head of Product"
          company="Algorand Foundation"
        />
        <SpeakerComponent
          imageSrc={"/speakers/philipp_maume.webp"}
          name="Prof. Dr. Philipp Maume"
          position="Professor of Corporate Governance and Capital Markets Law"
          company="TUM"
        />
        <SpeakerComponent
          imageSrc={"/speakers/philipp_lesche.webp"}
          name="Philipp Lesche"
          position="Advisor"
          company="Digital Technologies & Head of Bavarian Center for Blockchain"
        />
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
