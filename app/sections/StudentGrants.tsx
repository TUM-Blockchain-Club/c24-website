import { Text } from "@/app/components/text";
import { Button } from "../components/button";
import Image from "next/image";
import SuiLogo from "@/public/grants/sui-logo-grants.svg";

const StudentGrants = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center gap-12 lg:gap-20"
      id="grants"
    >
      <Text textType={"sub_hero"} className="text-gradient text-center">
        Student
        <br className="sm:hidden" /> Grants
      </Text>
      <div className="w-full flex flex-col items-center">
        <Text
          textType={"paragraph"}
          className="text-left max-w-[250px] sm:max-w-[42rem]"
        >
          <br />
          <br />
          We are committed to creating an inclusive environment where everyone
          has the opportunity to participate. To ensure that finances do not
          prevent you from attending, we are excited to announce, in partnership
          with the Sui Foundation, the availability of travel grants for
          students.
        </Text>
      </div>
      <div className="w-full flex justify-center">
        <Image
          className={"object-cover"}
          src={SuiLogo}
          alt={"check"}
          width={100}
          height={100}
        />
      </div>
      <div className="w-full flex justify-center mt-10">
        <Button buttonType={"cta"} asChild>
          <a
            href={
              "https://apply.tum-blockchain.com/student-travel-grant-conference-24"
            }
          >
            Apply for Travel Grant
          </a>
        </Button>
      </div>
    </section>
  );
};

export default StudentGrants;
