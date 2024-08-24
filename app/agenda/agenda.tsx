"use client";

import { Text } from "@/app/components/text";
import { Button } from "@/app/components/button";
import { Session, Stages, Tracks } from "@/app/model/session";
import { Session as SessionComponent } from "@/app/components/session";
import React, { useState } from "react";
import { Toggle } from "@/app/components/toggle";

type AgendaProps = { sessions: Session[] };

export const Agenda: React.FC<AgendaProps> = ({ sessions }) => {
  const [dayFilter, setDayFilter] = useState<Date>();
  const [trackFilter, setTrackFilter] = useState<Session["track"]>();
  const [stageFilter, setStageFilter] = useState<Session["room"]>();

  function isSameDay(d1: Date, d2: Date) {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }

  return (
    <div className={"flex relative gap-2 lg:gap-8 mt-24"}>
      <div className="sticky top-24 border border-white p-6 w-[250px] flex flex-col gap-6">
        <Text textType={"sub_title"} className="text-left" as="p">
          Filter
        </Text>
        <div className="flex flex-col gap-3">
          <Text textType={"paragraph"} className="font-bold text-left" as="p">
            Days
          </Text>
          <div className="flex flex-col gap-2">
            {[new Date("2024-09-12"), new Date("2024-09-13")].map(
              (date, index) => (
                <Toggle
                  onClick={() =>
                    dayFilter !== undefined && isSameDay(dayFilter, date)
                      ? setDayFilter(undefined)
                      : setDayFilter(date)
                  }
                  pressed={
                    dayFilter !== undefined && isSameDay(dayFilter, date)
                  }
                  className="block py-2 w-full"
                  key={index}
                >
                  <Text
                    textType={"small"}
                    className="!text-inherit text-center"
                    as="p"
                  >
                    {date.toLocaleDateString("en-DE", {
                      weekday: "long",
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </Text>
                </Toggle>
              ),
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Text textType={"paragraph"} className="font-bold text-left" as="p">
            Stages
          </Text>
          <div className="flex flex-col gap-2">
            {Stages.map((stage, index) => (
              <Toggle
                onClick={() =>
                  stageFilter === stage
                    ? setStageFilter(undefined)
                    : setStageFilter(stage)
                }
                pressed={stageFilter === stage}
                key={index}
                className="block py-2 w-full"
              >
                <Text
                  textType={"small"}
                  className="!text-inherit text-center"
                  as="p"
                >
                  {stage}
                </Text>
              </Toggle>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Text textType={"paragraph"} className="font-bold text-left" as="p">
            Tracks
          </Text>
          <div className="flex flex-col gap-2">
            {Tracks.map((track, index) => (
              <Toggle
                onClick={() =>
                  trackFilter === track
                    ? setTrackFilter(undefined)
                    : setTrackFilter(track)
                }
                pressed={trackFilter === track}
                key={index}
                className="block py-2 w-full"
              >
                <Text
                  textType={"small"}
                  className="!text-inherit text-center"
                  as="p"
                >
                  {track}
                </Text>
              </Toggle>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-grow flex-col">
        {sessions &&
          sessions
            .filter(
              (item) =>
                (!dayFilter ||
                  isSameDay(dayFilter, new Date(item.startTime))) &&
                (!trackFilter || trackFilter === item.track) &&
                (!stageFilter || stageFilter === item.room),
            )
            .map((item, index) => (
              <SessionComponent session={item} key={index} />
            ))}
      </div>
    </div>
  );
};
Agenda.displayName = "Agenda";

export default Agenda;
