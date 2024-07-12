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
        Speakers
      </Text>
      <div
        className={
          "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-6"
        }
      >
        <SpeakerComponent
          imageSrc={"/speakers/kostas_chalkias.png"}
          name="Kostas Chalkias"
          position="Chief Cryptographer & Co-Founder, Mysten Labs"
          // company=""
        />
        <SpeakerComponent
          imageSrc={"/speakers/yvonne_anne_pignolet.png"}
          name="Dr. Yvonne-Anne Pignolet"
          position="Director of Research, DFINITY"
          // company=""
        />
        <SpeakerComponent
          imageSrc={"/speakers/david_bchiri.png"}
          name="David Bchiri"
          position="President, XRPL Commons"
          // company=""
        />
        <SpeakerComponent
          imageSrc={"/speakers/sebastian_banescu.png"}
          name="Dr. Sebastian Banescu"
          position="CEO, Chainproof & Head of Quantstamp Germany"
          // company=""
        />
        <SpeakerComponent
          imageSrc={"/speakers/james_smith.jpg"}
          name="James"
          position="Consulting in Staking, ZK, and more, Ethereum Foundation"
          // company=""
        />
        <SpeakerComponent
          imageSrc={"/speakers/jens_ernstberger.png"}
          name="Jens Ernstberger"
          position="Research Intern, a16z"
          // company=""
        />
        <SpeakerComponent
          imageSrc={"/speakers/christoph_wronka.jpg"}
          name="Dr. Christoph Wronka"
          position="Director, Deloitte GmbH"
          // company=""
        />
        <SpeakerComponent
          imageSrc={"/speakers/ulrich_gallersdoerfer.png"}
          name="Dr. Ulrich Gallersdörfer"
          position="CTO & Co-founder, CCRI"
          // company=""
        />
        <SpeakerComponent
          imageSrc={"/speakers/yannik_schrade.jpeg"}
          name="Yannik Schrade"
          position="Co-Founder & CEO, Arcium"
          // company=""
        />
        <SpeakerComponent
          imageSrc={"/speakers/alexander_bechtel.jpg"}
          name="Alexander Bechtel"
          position="Head of Digital Product Strategy, DWS"
          // company=""
        />
        <SpeakerComponent
          imageSrc={"/speakers/bastian_burger.jpg"}
          name="Bastian Burger"
          position="Director AI&X TUM Venture Labs"
          // company=""
        />
        <SpeakerComponent
          imageSrc={"/speakers/thomas.png"}
          name="Thomas"
          position="Software Developer, TLSNotary, PSE"
          // company=""
        />
      </div>
      <div className="md:flex space-x-0 md:space-x-4 space-y-4 md:space-y-0">
        <div>
          <div className="w-full flex justify-center">
            <Button buttonType={"cta"} asChild>
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
                Speakers 2023
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaker;
