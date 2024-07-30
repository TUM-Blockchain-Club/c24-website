import Image from "next/image";
import { Text } from "../components/text";

const Partners = () => {
  return (
    <section className="w-full" id="tickets">
      <Text className="w-full text-center" as="p" textType={"sub_title"}>
        Knowledge Partner
      </Text>
      <div className="w-full flex justify-center md:mt-10">
        <div className="relative w-[150px] h-[100px]">
          <Image
            alt="IEEE Blockchain"
            src="/papers/ieee_logo.png"
            fill={true}
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
      </div>
      <Text className="mt-20 w-full text-center" as="p" textType={"sub_title"}>
        Media Partners
      </Text>
      <div className="w-full flex justify-center md:mt-10">
        <div className="sm:flex sm:space-x-8">
          <div className="relative w-[155px] h-[100px]">
            <Image
              alt="IEEE Blockchain"
              src="/partners/btc_echo_logo.png"
              fill={true}
              style={{ objectFit: "contain" }}
            ></Image>
          </div>
          <div className="relative w-[150px] h-[100px] flex">
            <Image
              alt="IEEE Blockchain"
              src="/partners/superteam_de_logo.png"
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
