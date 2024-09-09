export const dynamic = "force-static";

import Agenda from "@/app/agenda/agenda";
import { Container } from "@/components/container";
import { Text } from "@/components/text";
import { useSession } from "@/hooks/useSession";

const AgendaPage = async () => {
  const sessions = await useSession();

  return (
    <div className={"flex justify-center"}>
      <main className={"w-full max-w-7xl pt-[25px] lg:pt-0 z-20 pb-40"}>
        <Container>
          <div className={"mt-[100px] md:mt-[20vh] z-10 max-w-3xl"}>
            <div className="lg:flex items-center">
              <Text textType={"sub_hero"} className="text-gradient text-left">
                Agenda
              </Text>
            </div>
          </div>
          <Agenda sessions={sessions} />
        </Container>
      </main>
    </div>
  );
};

export default AgendaPage;
