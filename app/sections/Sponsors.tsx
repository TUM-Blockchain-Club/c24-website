import { Text } from "@/app/components/text";
import { Sponsor } from "../components/sponsor/Sponsor";

const Sponsors = () => {
  return (
    <section
      className="w-full flex flex-col items-center gap-12 lg:gap-20"
      id="sponsors"
    >
      <Text textType={"sub_hero"} className="text-gradient text-center">
        Previous
        <br className="sm:hidden" /> Sponsors
      </Text>
      <Text textType={"title"}>Gold</Text>
      <div className="grid grid-cols-2 gap-4 sponsor-gold">
        <Sponsor
          alt="Hedera"
          link="https://hedera.com/"
          imageSrc={"/sponsors/hedera_logo.png"}
        />
        <Sponsor
          alt="Dfinity"
          link="https://dfinity.org/"
          imageSrc={"/sponsors/icp_logo.png"}
        />
        <Sponsor
          alt="Solana"
          link="https://solana.com/"
          imageSrc={"/sponsors/solana_logo.png"}
        />
        <Sponsor
          alt="XRP Ledger"
          link="https://www.xrpl-commons.org/"
          imageSrc={"/sponsors/xrp_ledger_logo.png"}
        />
      </div>
      <Text textType={"title"}>Silver</Text>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sponsor-bronze">
        <Sponsor
          alt="Arbitrum"
          link="https://arbitrum.io/"
          imageSrc={"/sponsors/arbitrum_logo.png"}
        />
        <Sponsor
          alt="Staking Facilities"
          link="https://stakingfacilities.com/"
          imageSrc={"/sponsors/staking_facilities_logo.png"}
        />
        <Sponsor
          alt="Near Foundation"
          link="https://near.org/"
          imageSrc={"/sponsors/near_foundation_logo.png"}
        />
        <Sponsor
          alt="Ammer WEB3 Ecosystem"
          link="https://ammer.group/"
          imageSrc={"/sponsors/ammer_logo.png"}
        />
        <Sponsor
          alt="Aeternity Blockchain"
          link="https://aeternity.com/"
          imageSrc={"/sponsors/aeternity_logo.png"}
        />
        <Sponsor
          alt="Metabrew"
          link="https://www.metabrewsociety.com/en"
          imageSrc={"/sponsors/metabrew_logo.png"}
        />
      </div>
      <Text textType={"title"}>Bronze</Text>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <Sponsor
          alt="Ethereum Ecosystem Support Program"
          link="#"
          imageSrc={"/sponsors/ethereum_esp_logo.png"}
        />
        <Sponsor
          alt="Algorand"
          link="#"
          imageSrc={"/sponsors/algorand_logo.png"}
        />
        <Sponsor alt="Elusiv" link="#" imageSrc={"/sponsors/elusiv_logo.png"} />
        <Sponsor
          alt="Avalanche"
          link="#"
          imageSrc={"/sponsors/avalanche_logo.png"}
        />
        <Sponsor
          alt="Holoride"
          link="#"
          imageSrc={"/sponsors/holoride_logo.png"}
        />
        <Sponsor
          alt="Gateway.fm"
          link="#"
          imageSrc={"/sponsors/gateway_fm_logo.png"}
        />
        <Sponsor
          alt="UnternehmerTUM"
          link="#"
          imageSrc={"/sponsors/unternehmertum_logo.png"}
        />
        <Sponsor
          alt="UnternehmerTUM Venture Labs"
          link="#"
          imageSrc={"/sponsors/utum_venturelabs_logo.png"}
        />
        <Sponsor
          alt="Filecoin Foundation"
          link="#"
          imageSrc={"/sponsors/filecoin_foundation_logo.png"}
        />
        <Sponsor alt="Li.Fi" link="#" imageSrc={"/sponsors/li_fi_logo.png"} />
        <Sponsor
          alt="Landeshauptsadt München"
          link="#"
          imageSrc={"/sponsors/lhs_munchen_logo.png"}
        />
      </div>
    </section>
  );
};
export default Sponsors;
