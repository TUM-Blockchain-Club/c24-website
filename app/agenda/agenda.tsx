"use client";

import { Text } from "@/app/components/text";
import { Button } from "@/app/components/button";
import { Session, Stages, Tracks } from "@/app/model/session";
import { Session as SessionComponent } from "@/app/components/session";
import React, { useState } from "react";

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
                <Button
                  onClick={() =>
                    dayFilter && isSameDay(dayFilter, date)
                      ? setDayFilter(undefined)
                      : setDayFilter(date)
                  }
                  className="block py-2 w-full"
                  key={index}
                >
                  <Text textType={"small"} className="text-center" as="p">
                    {date.toLocaleDateString("en-DE", {
                      weekday: "long",
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </Text>
                </Button>
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
              <Button
                onClick={() =>
                  stageFilter === stage
                    ? setStageFilter(undefined)
                    : setStageFilter(stage)
                }
                key={index}
                className="block py-2 w-full"
              >
                <Text textType={"small"} className="text-center" as="p">
                  {stage}
                </Text>
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Text textType={"paragraph"} className="font-bold text-left" as="p">
            Tracks
          </Text>
          <div className="flex flex-col gap-2">
            {Tracks.map((track, index) => (
              <Button
                onClick={() =>
                  trackFilter === track
                    ? setTrackFilter(undefined)
                    : setTrackFilter(track)
                }
                key={index}
                className="block py-2 w-full"
              >
                <Text textType={"small"} className="text-center" as="p">
                  {track}
                </Text>
              </Button>
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
