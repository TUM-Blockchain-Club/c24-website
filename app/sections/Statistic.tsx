import { Text } from "@/app/components/text";

const Statistic = () => {
  return (
    <section className={"w-full flex justify-start items-start gap-12"}>
      <div className={"lg:w-[50%] flex flex-col mt-12"}>
        <Text textType={"sub_title"} className={""}>Last Year Statistic</Text>
      </div>
      <div className={"lg:w-[50%] flex flex-col gap-12"}>
        <div className={"flex flex-col gap-2"}>
          <Text className={""} textType={"hero"}>1000+</Text>
          <Text textType={"sub_title"}>Attendees</Text>
        </div>
        <div className={"flex flex-col gap-2"}>
          <Text className={""} textType={"hero"}>100+</Text>
          <Text textType={"sub_title"}>Speakers</Text>
        </div>
        <div className={"flex flex-col gap-2"}>
          <Text className={""} textType={"hero"}>40+</Text>
          <Text textType={"sub_title"}>Talks</Text>
        </div>
        <div className={"flex flex-col gap-2"}>
          <Text className={""} textType={"hero"}>20+</Text>
          <Text textType={"sub_title"}>Sponsors</Text>
        </div>
      </div>
    </section>
  )
}

export default Statistic;
