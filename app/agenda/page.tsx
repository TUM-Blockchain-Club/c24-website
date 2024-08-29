import { Container } from "@/app/components/container";
import { Text } from "@/app/components/text";
import React from "react";
import Agenda from "@/app/agenda/agenda";
import Session from "../model/session";
import { Tracks, Stages } from "../model/session";
import Speaker from "@/app/model/speaker";
import { useSession } from "@/app/hooks/useSession";

const AgendaPage = async () => {
  const sessions = await useSession();
  // TEST SESSION
  /*const sessions = [
    {
      title: "The ABC of DEF",
      track: Tracks[0],
      type: "Workshop",
      startTime: "2024-09-12",
      endTime: "2024-09-12",
      room: Stages[0],
      description: "We are going through the alphabet and explain every letter to the audience in order to propell humanity.",
      speakers: [{
        name: "Carlos Kunos",
        profilePhoto: "https://img.a.transfermarkt.technology/portrait/big/159100-1441377950.jpg?lm=1",
        description: "My name is Carlos Kunos but you can call me Carlos Kunos",
        priority: 1
      }] as Speaker[]
    },
    {
      title: "The ABC of DEF",
      track: Tracks[0],
      type: "Workshop",
      startTime: "2024-09-12",
      endTime: "2024-09-12",
      room: Stages[0],
      description: "We are going through the alphabet and explain every letter to the audience in order to propell humanity.",
      speakers: [{
        name: "Carlos Kunos",
        profilePhoto: "https://img.a.transfermarkt.technology/portrait/big/159100-1441377950.jpg?lm=1",
        description: "My name is Carlos Kunos but you can call me Carlos Kunos",
        priority: 1
      }] as Speaker[]
    }
  ] as Session[];*/

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
