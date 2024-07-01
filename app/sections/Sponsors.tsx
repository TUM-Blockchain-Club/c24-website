import { Text } from "@/app/components/text";
import { Sponsor } from "../components/sponsor/Sponsor";

const Sponsors = () => {
  return (
    <section
      className="w-full flex flex-col items-center gap-12 lg:gap-20"
      id="sponsors"
    >
      <Text textType={"sub_hero"} className="text-gradient text-center">
        Sponsors
      </Text>
      <Text textType={"title"}>Gold</Text>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sponsor-gold">
        <Sponsor
          alt="Dfinity"
          sponsorType="gold"
          link="https://dfinity.org/"
          imageSrc={"/sponsors/icp_logo.png"}
        />
        <Sponsor
          alt="Solana"
          sponsorType="gold"
          link="https://solana.com/"
          imageSrc={"/sponsors/solana_logo.png"}
        />
        <Sponsor
          alt="1Inch"
          sponsorType="gold"
          link="https://1inch.io"
          imageSrc={"/sponsors/1inch_logo.png"}
        />
      </div>
      <Text textType={"title"}>Silver</Text>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sponsor-bronze">
        <Sponsor
          alt="XRP Ledger"
          sponsorType="silver"
          link="https://www.xrpl-commons.org/"
          imageSrc={"/sponsors/xrp_ledger_logo.png"}
        />
        <Sponsor
          alt="Staking Facilities"
          sponsorType="silver"
          link="https://stakingfacilities.com/"
          imageSrc={"/sponsors/staking_facilities_logo.png"}
        />
        <Sponsor
          alt="Arcium"
          sponsorType="silver"
          link="https://arcium.com"
          imageSrc={"/sponsors/arcium_logo.png"}
        />
      </div>
      <Text textType={"title"}>Bronze</Text>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <Sponsor
          alt="Ethereum Ecosystem Support Program"
          sponsorType="bronze"
          link="https://ethereum.org/"
          imageSrc={"/sponsors/ethereum_esp_logo.png"}
        />
        <Sponsor
          alt="Filecoin Foundation"
          sponsorType="bronze"
          link="https://fil.org"
          imageSrc={"/sponsors/filecoin_foundation_logo.png"}
        />
        <Sponsor
          alt="API3"
          sponsorType="bronze"
          link="https://api3.org"
          imageSrc={"/sponsors/api3_logo.png"}
        />
        <Sponsor
          alt="Lido"
          sponsorType="bronze"
          link="https://lido.fi"
          imageSrc={"/sponsors/lido_logo.png"}
        />
        <Sponsor
          alt="Scroll"
          sponsorType="bronze"
          link="https://scroll.io"
          imageSrc={"/sponsors/scroll_logo.png"}
        />
        <Sponsor
          alt="WM Datenservice"
          sponsorType="bronze"
          link="https://www.wmdatenservice.com/en/"
          imageSrc={"/sponsors/wm_datenservice_logo.jpg"}
        />
      </div>
    </section>
  );
};
export default Sponsors;
