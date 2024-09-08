import { FAQ } from "@/components/FAQ";
import { faqItems } from "@/constants/FAQData";

const FAQSection = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
      id="faq"
    >
      <div className="w-full max-w-[275px] sm:max-w-[400px] md:max-w-7xl">
        <FAQ items={faqItems} contactEmail="conference@tum-blockchain.com" />
      </div>
    </section>
  );
};

export default FAQSection;
