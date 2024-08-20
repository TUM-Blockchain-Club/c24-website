import Image from "next/image";
import { Text } from "../components/text";

const Partners = () => {
  return (
    <section className="w-full flex flex-col items-center gap-12 lg:gap-20">
      <div className={"w-full flex justify-center"}>
        <Text textType={"sub_hero"} className="text-gradient">
          Partners
        </Text>
      </div>
      <div className={"flex flex-col gap-6 lg:gap-12"}>
        <Text className="w-full text-center" as="p" textType={"sub_title"}>
          Knowledge Partner
        </Text>
        <div className="w-full flex justify-center">
          <div className="relative w-[150px] h-[100px]">
            <Image
              alt="IEEE Blockchain"
              src="/papers/ieee_logo.png"
              fill={true}
              style={{ objectFit: "contain" }}
            ></Image>
          </div>
        </div>
      </div>
      <div className={"flex flex-col gap-6 lg:gap-12"}>
        <Text className="w-full text-center" as="p" textType={"sub_title"}>
          Media Partners
        </Text>
        <div className="w-full flex justify-center gap-8 flex-wrap">
          <div className="relative w-[155px] h-[100px]">
            <Image
              alt="BTC Echo"
              src="/partners/btc_echo_logo.png"
              fill={true}
              style={{ objectFit: "contain" }}
            ></Image>
          </div>
          <div className="relative w-[150px] h-[100px]">
            <Image
              alt="Superteam Germany"
              src="/partners/superteam_de_logo.png"
              fill={true}
              style={{ objectFit: "contain" }}
            ></Image>
          </div>
          <div className="relative w-[155px] h-[100px]">
            <Image
              alt="The Coin Republic"
              src="/partners/tcr_logo.png"
              fill={true}
              style={{ objectFit: "contain" }}
            ></Image>
          </div>
          <div className="relative w-[155px] h-[100px]">
            <Image
              alt="The Market Periodical"
              src="/partners/tmp_logo.png"
              fill={true}
              style={{ objectFit: "contain" }}
            ></Image>
          </div>
        </div>
      </div>
      <div className={"flex flex-col gap-6 lg:gap-12"}>
        <Text className="w-full text-center" as="p" textType={"sub_title"}>
          Community Partners
        </Text>
        <div className="w-full flex justify-center gap-8 flex-wrap">
          <div className="relative w-[155px] h-[100px] flex items-center justify-center">
            <Image
              alt="Technische Universität München"
              src="/partners/tum_logo.png"
              width={110}
              height={0}
              style={{ objectFit: "contain" }}
            ></Image>
          </div>
          <div className="relative w-[155px] h-[100px] flex items-center justify-center">
            <Image
              alt="Encode Club"
              src="/partners/encode_logo.png"
              width={110}
              height={0}
              style={{ objectFit: "contain" }}
            ></Image>
          </div>
          <div className="relative w-[150px] h-[100px]">
            <Image
              alt="Blockchain Bayern e.V."
              src="/partners/blockchain_bayern_logo.png"
              fill={true}
              style={{ objectFit: "contain" }}
            ></Image>
          </div>
          <div className="relative w-[155px] h-[100px]">
            <Image
              alt="Blockchain Bundesverband (Bundesblock)"
              src="/partners/bundesblock_logo.png"
              fill={true}
              style={{ objectFit: "contain" }}
            ></Image>
          </div>
        </div>
        <div className="w-full flex justify-center gap-8 flex-wrap">
          <div className="relative w-[155px] h-[100px]">
            <Image
              alt="BAF"
              src="/partners/BAF_logo.png"
              fill={true}
              style={{ objectFit: "contain" }}
            ></Image>
          </div>
          <div className="relative w-[155px] h-[100px] flex items-center justify-center">
            <Image
              alt="PretzelDAO"
              src="/partners/pretzelDAO.png"
              width={110}
              height={0}
              style={{ objectFit: "contain" }}
            ></Image>
          </div>
          <div className="relative w-[155px] h-[100px] flex items-center justify-center">
            <Image
              alt="CollegeDAO"
              src="/partners/collegeDAO_logo.png"
              width={110}
              height={0}
              style={{ objectFit: "contain" }}
            ></Image>
          </div>
          <div className="relative w-[155px] h-[100px]">
            <Image
              alt="Deutsches Museum"
              src="/partners/Deutsches_Museum_Logo.png"
              fill={true}
              style={{ objectFit: "contain" }}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
