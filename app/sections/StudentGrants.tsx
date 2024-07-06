import { Text } from "@/app/components/text";
import { Button } from "../components/button";
import { FAQ } from "@/app/components/grantFAQ";
import { faqItems } from "@/app/constants/FAQData";

const StudentGrants = () => {
  return (
    <section className="w-full" id="tickets">
      <div className="flex w-full justify-center items-center">
        <Text textType={"sub_hero"} className="text-gradient">
          Student Grants
        </Text>
      </div>
      <div className="w-full flex justify-center mt-20">
        <Button buttonType={"cta"} asChild>
          <a
            href={
              "https://apply.tum-blockchain.com/student-grant-conference-24"
            }
          >
            Apply Now
          </a>
        </Button>
      </div>
      <div className="w-full flex justify-center mt-20">
        <FAQ items={faqItems} />
      </div>
    </section>
  );
};

export default StudentGrants;
