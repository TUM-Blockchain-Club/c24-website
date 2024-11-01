import { Text } from "@/components/text";
import { Button } from "@/components/button";
import Image from "next/image";
import SuiLogo from "@/public/grants/sui-logo-grants.svg";
import Link from "next/link";

const Grants = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center gap-8 lg:gap-12"
      id="grants"
    >
      <Text textType={"sub_hero"} className="text-gradient text-center">
        Grants
      </Text>
      <div className="w-full flex flex-col items-center">
        <Text
          textType={"paragraph"}
          className="text-left max-w-[250px] sm:max-w-[42rem]"
        >
          Our commitment to fostering innovation, curiosity, and an inclusive
          environment drives our efforts. To make the conference more
          accessible, we are excited to announce builder and academic ticket
          grants, as well as student travel grants!
        </Text>
      </div>
      <div className="w-full flex justify-center flex-wrap gap-y-12">
        <div className="p-5 w-full flex justify-center items-center md:w-96 flex-col gap-4">
          <Text textType="sub_title">Academic Grant</Text>
          <Text>For all curious learners and educators</Text>
          <Button disabled className="w-fit">
            Apply for Academic Grant
          </Button>
        </div>
        <div className="p-5 w-full flex justify-center items-center md:w-96 flex-col gap-4">
          <Text textType="sub_title">Builder Grant</Text>
          <Text>For all the innovative trailblazers</Text>
          <Button disabled className="w-fit">
            Apply for Builder Grant
          </Button>
        </div>
        <div className="p-5 w-full flex justify-center items-center flex-col gap-4">
          <Text textType="sub_title">Student Travel Grant</Text>
          <Image
            className={"object-cover"}
            src={SuiLogo}
            alt={"Sui Logo"}
            width={100}
            height={100}
          />
          <Button className="w-fit" disabled>
            Application Closed
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Grants;
