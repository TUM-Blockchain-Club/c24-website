import { Text } from "@/components/text";
import { Sponsor } from "@/components/sponsor/Sponsor";

const Sponsors = () => {
  return (
    <section
      className="w-full flex flex-col items-center gap-12 lg:gap-20"
      id="sponsors"
    >
      <Text textType={"sub_hero"} className="text-gradient text-center">
        Sponsors
      </Text>
      <Text textType={"title"} className="text-gradient font-bold">
        Platinum
      </Text>
      <div className={"glow"}>
        <Sponsor
          alt="Sui"
          sponsorType={"platinum"}
          link="https://sui.io/"
          className={"!p-0"}
          imageSrc={"/sponsors/sui_logo.png"}
        ></Sponsor>
      </div>
      <Text textType={"title"} className="text-gradient font-medium">
        Gold
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 glow">
        <Sponsor
          alt="1Inch"
          sponsorType="gold"
          link="https://1inch.io"
          imageSrc={"/sponsors/1inch_logo.png"}
        />
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
          alt="Verus"
          sponsorType="gold"
          link="https://verus.io"
          imageSrc={"/sponsors/verus_logo.png"}
        />
        <Sponsor
          alt="aeternity"
          sponsorType="gold"
          link="https://aeternity.com/"
          imageSrc={"/sponsors/aeternity_logo.png"}
        />
      </div>
      <Text textType={"title"}>Silver</Text>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Sponsor
          alt="XRP Ledger"
          sponsorType="silver"
          className={"!p-2"}
          link="https://www.xrpl-commons.org/"
          imageSrc={"/sponsors/xrpl.png"}
        />
        <Sponsor
          alt="Starknet"
          sponsorType="silver"
          link="https://www.starknet.io"
          imageSrc={"/sponsors/starknet_logo.jpg"}
        />
        <Sponsor
          alt="Wormhole"
          sponsorType="silver"
          link="https://wormhole.com"
          imageSrc={"/sponsors/wormhole_logo.png"}
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
        <Sponsor
          alt="Doubleup"
          sponsorType="silver"
          link="https://www.doubleup.fun/"
          imageSrc={"/sponsors/doubleup_logo.png"}
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
          alt="Obol labs"
          sponsorType="bronze"
          link="https://obol.org"
          imageSrc={"/sponsors/obol_logo.png"}
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
          alt="Polkadot"
          sponsorType="bronze"
          link="https://polkadot.com/"
          imageSrc={"/sponsors/Polkadot_Logo.png"}
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
        <Sponsor
          alt="Ethereum Name Service"
          sponsorType="bronze"
          link="https://ens.domains"
          className={"!p-10"}
          imageSrc={"/sponsors/ens_logo.png"}
        />
        <Sponsor
          alt="Nil"
          sponsorType="bronze"
          link="https://nil.foundation/"
          imageSrc={"/sponsors/nil_logo.svg"}
        />
        <Sponsor
          alt="polkadot blockchain academy"
          sponsorType="bronze"
          link="https://polkadot.com/blockchain-academy"
          imageSrc={"/sponsors/PBA2.png"}
        />
      </div>
    </section>
  );
};
export default Sponsors;
