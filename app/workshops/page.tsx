export const dynamic = "force-static";

import { Container } from "@/components/container";
import { Text } from "@/components/text";
import { WorkshopsContainer } from "@/components/workshops/WorkshopsContainer";
import { workshopItems } from "@/constants/WorkshopData";

const Workshops = async () => {
  return (
    <div className={"overflow-x-hidden"}>
      <main className={"w-full pt-[25px] lg:pt-0 z-20 2xl:px-[225px] pb-40"}>
        <Container className="flex justify-center">
          <div className={"mt-[100px] md:mt-[20vh] z-10 max-w-3xl"}>
            <Text
              textType={"sub_hero"}
              className="text-gradient text-left mb-20"
              as="p"
            >
              Workshops
            </Text>
            <WorkshopsContainer items={workshopItems} />
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Workshops;
