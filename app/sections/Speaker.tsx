import { Button } from "@/app/components/button";
import { Text } from "@/app/components/text";
import { Speaker as SpeakerComponent } from "../components/speaker";

const Speaker = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center gap-12 lg:gap-20"
      id="speaker"
    >
      <Text textType={"sub_hero"} className="text-gradient text-center">
        Previous
        <br className="sm:hidden" /> Speakers
      </Text>
      <div className={"grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6"}>
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
        <SpeakerComponent
          imageSrc={"/speakers/jens_strueker.png"}
          name="Prof. Jens Strüker"
          position="Director @ Fraunhofer Blockchain Lab & Prof. @ University of Bayreuth"
          // company=""
        />
        <SpeakerComponent
          imageSrc={"/speakers/bart_preneel.png"}
          name="Prof. Bart Preneel"
          position="Prof. for Cryptology & Cybersecurity @ KU Leuven, ex-president @ IACR"
          // company=""
        />
        <SpeakerComponent
          imageSrc={"/speakers/yvonne_anne_pignolet.png"}
          name="Dr. Yvonne-Anne Pignolet"
          position="Director of Research @ DFINITY"
          // company=""
        />
        <SpeakerComponent
          imageSrc={"/speakers/sebastian_banescu.png"}
          name="Dr. Sebastian Banescu"
          position="CEO @ Chainproof & Head of Quantstamp Germany"
          // company=""
        />
      </div>
      <div className="md:flex space-x-0 md:space-x-4 space-y-4 md:space-y-0">
        <div>
          <div className="w-full flex justify-center">
            <Button buttonType={"primary"} asChild>
              <a href={"https://tally.so/r/wk62O6"}>Apply as speaker</a>
            </Button>
          </div>
        </div>
        <div>
          <div className="w-full flex justify-center">
            <Button buttonType={"primary"} asChild>
              <a
                href={"https://www.tum-blockchain.com/conference2023/speakers"}
              >
                All speakers
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaker;
