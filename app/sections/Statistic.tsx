import { Text } from "@/app/components/text";

const Statistic = () => {
  return (
    <section
      className={
        "w-full flex flex-col lg:flex-row justify-center items-center xl:items-start gap-12"
      }
    >
      <div className={"flex flex-col items-center"}>
        <Text textType={"sub_title"} className={""}>
          Last Year Statistic
        </Text>
        <div className={"flex flex-col items-center lg:flex-row gap-12 mt-12"}>
          <div className={"flex flex-col gap-2 items-center lg:items-start"}>
            <Text className={""} textType={"sub_hero"}>
              1000+
            </Text>
            <Text textType={"sub_title"}>Attendees</Text>
          </div>
          <div className={"flex flex-col gap-2 items-center lg:items-start"}>
            <Text className={""} textType={"sub_hero"}>
              100+
            </Text>
            <Text textType={"sub_title"}>Speakers</Text>
          </div>
          <div className={"flex flex-col gap-2 items-center lg:items-start"}>
            <Text className={""} textType={"sub_hero"}>
              40+
            </Text>
            <Text textType={"sub_title"}>Talks</Text>
          </div>
          <div className={"flex flex-col gap-2 items-center lg:items-start"}>
            <Text className={""} textType={"sub_hero"}>
              20+
            </Text>
            <Text textType={"sub_title"}>Sponsors</Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
