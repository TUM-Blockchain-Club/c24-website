"use client";

import { useVersionCheck } from "@/hooks/useVersion";
import React, { useEffect, useState } from "react";
import { Container } from "@/components/container";
import { Text } from "@/components/text";
import Session, { Stages } from "@/model/session";
import Image from "next/image";
import { contentfulImageLoader } from "@/util/contentfulImageLoader";
import { Link } from "@/components/link";

// New custom hook for simulated time
const useSimulatedTime = (initialTime: Date) => {
  const [simulatedTime, setSimulatedTime] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSimulatedTime((prevTime) => new Date(prevTime.getTime() + 60000)); // Advance by 1 minute
    }, 1000); // Update every second for smoother simulation

    return () => clearInterval(intervalId);
  }, []);

  return simulatedTime;
};

export type NowProps = {
  sessions: Session[];
  simulatedDate?: Date; // New prop for simulated date
};

const Now: React.FC<NowProps> = ({ sessions, simulatedDate }) => {
  const initialTime = simulatedDate || new Date();
  const currentTime = useSimulatedTime(initialTime);
  const newVersionAvailable = useVersionCheck();

  useEffect(() => {
    if (newVersionAvailable) {
      handleRefresh();
    }
  }, [newVersionAvailable]);

  const handleRefresh = () => {
    window.location.reload();
  };

  // Re-render the page every minute
  useEffect(() => {
    const intervalId = setInterval(() => {}, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const getCurrentAndNextSessions = (
    sessionsInStage: Session[],
  ): { currentSession: Session | null; nextSession: Session | null } => {
    const now =
      simulatedDate && process.env.NEXT_PUBLIC_PRODUCTION !== "1"
        ? currentTime
        : new Date();
    let currentSession = null;
    let nextSession = null;

    sessionsInStage.sort(
      (a, b) =>
        new Date(a.startTime).getTime() - new Date(b.startTime).getTime(),
    );

    for (const session of sessionsInStage) {
      const startTime = new Date(session.startTime);
      const endTime = new Date(session.endTime);

      if (now >= startTime && now < endTime) {
        currentSession = session;
      } else if (now < startTime) {
        nextSession = session;
        break;
      }
    }

    return { currentSession, nextSession };
  };

  return (
    <div className={"flex justify-center min-h-screen"}>
      <main
        className={
          "w-full lg:max-w-7xl 2xl:max-w-full pt-[25px] lg:pt-0 z-20 pb-40 min-h-full"
        }
      >
        <Container className={"flex flex-col min-h-full"}>
          <div className={"mt-[100px] md:mt-[20vh] z-10 max-w-3xl"}>
            <div className="flex flex-col items-start">
              <Text textType={"sub_hero"} className="text-gradient text-left">
                Now
              </Text>
              <Text textType={"small"}>
                Grab it on your phone:{" "}
                <Link
                  className={"font-bold"}
                  href={"https://conference.tum-blockchain.com/now"}
                >
                  https://conference.tum-blockchain.com/now
                </Link>
              </Text>
            </div>
          </div>
          <div className={"flex flex-col pt-24 flex-grow"}>
            <div
              className={
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 md:flex-row h-full flex-wrap gap-8"
              }
            >
              {Stages.map((stage, key) => {
                const sessionsInThisStage = sessions.filter(
                  (session) =>
                    session.room === stage &&
                    new Date(session.startTime).getDate() ===
                      new Date().getDate(),
                );

                const { currentSession, nextSession } =
                  getCurrentAndNextSessions(sessionsInThisStage);

                return (
                  <div
                    className="flex md:min-h-[500px] flex-1 border p-4 flex-col gap-16"
                    key={key}
                  >
                    <div>
                      <h3 className="text-lg text-gradient font-bold">
                        {stage}
                      </h3>
                      {currentSession !== null && (
                        <div className="flex flex-col gap-4">
                          <div className="flex flex-col gap-2">
                            <Text textType={"sub_title"}>
                              {currentSession.title}
                            </Text>
                            <Text>
                              {new Date(
                                currentSession.startTime,
                              ).toLocaleTimeString("en-DE", {
                                hour: "2-digit",
                                minute: "2-digit",
                                timeZone: "Europe/Berlin",
                              })}{" "}
                              -{" "}
                              {new Date(
                                currentSession.endTime,
                              ).toLocaleTimeString("en-DE", {
                                hour: "2-digit",
                                minute: "2-digit",
                                timeZone: "Europe/Berlin",
                                timeZoneName: "short",
                              })}
                            </Text>
                          </div>
                          <div className="flex flex-col gap-4">
                            {currentSession.speakers &&
                              currentSession.speakers.map((speaker, index) => (
                                <>
                                  <div
                                    className="flex gap-2 items-start"
                                    key={index}
                                  >
                                    {speaker.profilePhoto && (
                                      <Image
                                        src={speaker.profilePhoto}
                                        loader={
                                          speaker.profilePhoto
                                            ? contentfulImageLoader
                                            : undefined
                                        }
                                        alt={speaker.name}
                                        width={48}
                                        height={48}
                                      />
                                    )}
                                    <div className="flex flex-col max-w-48">
                                      <Text>{speaker.name}</Text>
                                      <Text textType={"small"}>
                                        {speaker.description}
                                      </Text>
                                    </div>
                                  </div>
                                </>
                              ))}
                          </div>
                        </div>
                      )}
                      {currentSession === null && (
                        <Text>There is currently no active session.</Text>
                      )}
                    </div>
                    <div className="opacity-40">
                      <h4 className="font-bold">Up Next</h4>
                      {nextSession !== null && (
                        <div className="flex flex-col gap-4">
                          <div className="flex flex-col gap-1">
                            <Text
                              textType={"paragraph"}
                              className="text-ellipsis overflow-ellipsis"
                            >
                              {nextSession.title}
                            </Text>
                            <Text>
                              {new Date(
                                nextSession.startTime,
                              ).toLocaleTimeString("en-DE", {
                                hour: "2-digit",
                                minute: "2-digit",
                                timeZone: "Europe/Berlin",
                              })}{" "}
                              -{" "}
                              {new Date(nextSession.endTime).toLocaleTimeString(
                                "en-DE",
                                {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  timeZone: "Europe/Berlin",
                                  timeZoneName: "short",
                                },
                              )}
                            </Text>
                          </div>
                          {nextSession.speakers &&
                            nextSession.speakers.map((speaker, index) => (
                              <>
                                <div
                                  className="flex gap-2 items-start"
                                  key={index}
                                >
                                  {speaker.profilePhoto && (
                                    <Image
                                      src={speaker.profilePhoto}
                                      loader={
                                        speaker.profilePhoto
                                          ? contentfulImageLoader
                                          : undefined
                                      }
                                      alt={speaker.name}
                                      width={48}
                                      height={48}
                                    />
                                  )}
                                  <div className="flex flex-col max-w-48">
                                    <Text>{speaker.name}</Text>
                                    <Text textType={"small"}>
                                      {speaker.description}
                                    </Text>
                                  </div>
                                </div>
                              </>
                            ))}
                        </div>
                      )}
                      {nextSession === null && (
                        <Text>There is no next event in this room.</Text>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Now;
