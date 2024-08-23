"use client";

import { useState } from "react";
import { Button } from "../components/button";
import { Container } from "../components/container";
import Session from "../components/session/Session";
import { Text } from "../components/text";

export type AgendaProps = {
  sessions: any[];
};

export default function Agenda(props: AgendaProps) {
  const [dayFilter, setDayFilter] = useState<Date>();
  const [trackFilter, setTrackFilter] = useState<string>();
  const [stageFilter, setStageFilter] = useState<string>();

  function sameDay(d1: Date, d2: Date) {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }

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
              Agenda
            </Text>
            <div className="flex">
              <div className="border-[1px] border-white p-6">
                <Text textType={"sub_title"} className="text-left" as="p">
                  Filter
                </Text>
                <Text textType={"paragraph"} className="text-left mt-6" as="p">
                  Days
                </Text>
                <div>
                  <Button
                    id="day-12"
                    onClick={() => setDayFilter(new Date("2024-09-12"))}
                    className="block mt-3 py-2 w-[200px]"
                    type="reset"
                  >
                    <Text textType={"small"} className="text-left" as="p">
                      Thursday, 12th October 2024
                    </Text>
                  </Button>
                  <Button
                    id="day-13"
                    onClick={() => setDayFilter(new Date("2024-09-13"))}
                    className="mt-3 py-2 w-[200px]"
                    type="reset"
                  >
                    <Text textType={"small"} className=" text-center" as="p">
                      Friday, 13th October 2024
                    </Text>
                  </Button>
                </div>
                <Text textType={"paragraph"} className="text-left mt-6" as="p">
                  Stages
                </Text>
                <div>
                  <Button
                    onClick={() => setStageFilter("Dome Stage")}
                    className="block mt-3 py-2 w-[200px]"
                    type="reset"
                  >
                    <Text textType={"small"} className="text-center" as="p">
                      Dome Stage
                    </Text>
                  </Button>
                  <Button
                    onClick={() => setStageFilter("Tech Stage")}
                    className="mt-3 py-2 w-[200px]"
                    type="reset"
                  >
                    <Text textType={"small"} className=" text-center" as="p">
                      Tech Stage
                    </Text>
                  </Button>
                  <Button
                    onClick={() => setStageFilter("Education Stage")}
                    className="block mt-3 py-2 w-[200px]"
                    type="reset"
                  >
                    <Text textType={"small"} className="text-center" as="p">
                      Education Stage
                    </Text>
                  </Button>
                  <Button
                    onClick={() => setStageFilter("Workshop Stage")}
                    className="mt-3 py-2 w-[200px]"
                    type="reset"
                  >
                    <Text textType={"small"} className=" text-center" as="p">
                      Workshop Stage
                    </Text>
                  </Button>
                </div>
                <Text textType={"paragraph"} className="text-left mt-6" as="p">
                  Tracks
                </Text>
                <div>
                  <Button
                    onClick={() => setTrackFilter("Education Track")}
                    className="block mt-3 py-2 w-[200px]"
                    type="reset"
                  >
                    <Text textType={"small"} className="text-center" as="p">
                      Education Track
                    </Text>
                  </Button>
                  <Button
                    onClick={() => setTrackFilter("Application Track")}
                    className="mt-3 py-2 w-[200px]"
                    type="reset"
                  >
                    <Text textType={"small"} className=" text-center" as="p">
                      Application Track
                    </Text>
                  </Button>
                  <Button
                    onClick={() => setTrackFilter("Research Track")}
                    className="block mt-3 py-2 w-[200px]"
                    type="reset"
                  >
                    <Text textType={"small"} className="text-center" as="p">
                      Research Track
                    </Text>
                  </Button>
                  <Button
                    onClick={() => setTrackFilter("Regulation Track")}
                    className="mt-3 py-2 w-[200px]"
                    type="reset"
                  >
                    <Text textType={"small"} className=" text-center" as="p">
                      Regulation Track
                    </Text>
                  </Button>
                  <Button
                    onClick={() => setTrackFilter("Ecosystem Track")}
                    className="block mt-3 py-2 w-[200px]"
                    type="reset"
                  >
                    <Text textType={"small"} className=" text-center" as="p">
                      Ecosystem Track
                    </Text>
                  </Button>
                </div>
              </div>
              <div>
                {props.sessions &&
                  props.sessions
                    .filter((item, index) => {
                      console.log(item);
                      console.log(dayFilter, trackFilter, stageFilter);
                      if (!item) return false;
                      if (item.track != trackFilter) return false;
                      if (item.stage != stageFilter) return false;
                      let itemDate = new Date(item.startTime);
                      if (!dayFilter) return false;
                      return sameDay(dayFilter, itemDate);
                    })
                    .map((item, index) => <Session session={item} />)}
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
