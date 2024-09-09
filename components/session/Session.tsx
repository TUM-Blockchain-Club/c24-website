"use client";

import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { Session as SessionModel } from "@/model/session";
import { ClockIcon, SewingPinIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { contentfulImageLoader } from "@/util/contentfulImageLoader";

export type SessionElement = React.ElementRef<"div">;
export type SessionProps = React.ComponentPropsWithoutRef<"div"> & {
  session: SessionModel;
};

export const Session = React.forwardRef<SessionElement, SessionProps>(
  (props, ref) => {
    const { session, className, ...divProps } = props;
    const [clamped, setClamped] = useState<boolean>(true);
    const [isLineClampClamped, setIsLineClampClamped] =
      useState<boolean>(false);
    const lineClampRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
      const checkLineClamping = () => {
        if (lineClampRef.current) {
          const lineClampElement = lineClampRef.current;
          setIsLineClampClamped(
            lineClampElement.scrollHeight > lineClampElement.clientHeight,
          );
        }
      };

      checkLineClamping();

      // Re-check on window resize
      window.addEventListener("resize", checkLineClamping);

      return () => {
        window.removeEventListener("resize", checkLineClamping);
      };
    }, [lineClampRef]);

    const { startTime, endTime } = {
      startTime: new Date(session.startTime),
      endTime: new Date(session.endTime),
    };

    return (
      <div
        {...divProps}
        className={classNames(
          className,
          "border w-full flex p-4 flex-col gap-4 bg-opacity-40",
          {
            "bg-green-950": session.track === "Education Track",
            "bg-yellow-950": session.track === "Research Track",
            "bg-blue-950": session.track === "Ecosystem Track",
            "bg-purple-950": session.track === "Research Track",
            "bg-red-950": session.track === "Regulation Track",
            "bg-orange-950": session.track === "Academic Track",
            "bg-teal-950": session.track === "Application Track",
          },
        )}
        ref={ref}
      >
        <div className="flex w-full flex-col gap-2">
          <div className="flex flex-col md:flex-row justify-between w-full gap-1">
            <div
              className={classNames("flex-grow w-full", {
                "md:max-w-[450px]": !session.isSpecialSession,
                "md:max-w-[400px]": session.isSpecialSession,
              })}
            >
              <Text
                textType={"sub_title"}
                as={"p"}
                className="text-wrap w-full"
              >
                {session.title}
              </Text>
            </div>
            <div className="flex gap-2 w-fit justify-end">
              {session.isSpecialSession && (
                <div className="min-w-fit border px-3 h-fit">
                  <Text textType={"small"} className="text-white">
                    Keynote
                  </Text>
                </div>
              )}
              {session.type && (
                <div className="min-w-fit border px-3 h-fit">
                  <Text textType={"small"} className="text-white">
                    {session.type}
                  </Text>
                </div>
              )}
              {session.track && (
                <div
                  className={classNames("min-w-fit border px-3 h-fit", {
                    "border-green-400": session.track === "Education Track",
                    "border-yellow-400": session.track === "Research Track",
                    "border-blue-400": session.track === "Ecosystem Track",
                    "border-purple-400": session.track === "Research Track",
                    "border-red-400": session.track === "Regulation Track",
                    "border-orange-400": session.track === "Academic Track",
                    "border-teal-400": session.track === "Application Track",
                  })}
                >
                  <Text
                    textType={"small"}
                    className={classNames({
                      "text-green-400": session.track === "Education Track",
                      "text-yellow-400": session.track === "Research Track",
                      "text-blue-400": session.track === "Ecosystem Track",
                      "text-purple-400": session.track === "Research Track",
                      "text-red-400": session.track === "Regulation Track",
                      "text-orange-400": session.track === "Academic Track",
                      "text-teal-400": session.track === "Application Track",
                    })}
                  >
                    {session.track}
                  </Text>
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-x-8 flex-col md:flex-row">
            <div className="flex items-center gap-1">
              <SewingPinIcon className="text-yellow-400" />
              <Text>{session.room}</Text>
            </div>
            <div className="flex items-center gap-1">
              <ClockIcon className="text-yellow-400" />
              <Text>
                {startTime.toLocaleDateString("en-DE", {
                  weekday: "short",
                  timeZone: "Europe/Berlin",
                })}
                ,{" "}
                {startTime.toLocaleTimeString("en-DE", {
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZone: "Europe/Berlin",
                })}{" "}
                -{" "}
                {endTime.toLocaleTimeString("en-DE", {
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZone: "Europe/Berlin",
                  timeZoneName: "short",
                })}
              </Text>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col text-wrap">
          <Text
            ref={lineClampRef}
            className={classNames("w-full text-wrap", {
              "line-clamp-3": clamped,
              "line-clamp-none": !clamped,
            })}
          >
            {session.description}
          </Text>
          {isLineClampClamped && (
            <Text
              onClick={() => setClamped(!clamped)}
              className={classNames("cursor-pointer", {
                "text-green-400": session.track === "Education Track",
                "text-yellow-400":
                  session.track === "Research Track" || !session.track,
                "text-blue-400": session.track === "Ecosystem Track",
                "text-purple-400": session.track === "Research Track",
                "text-red-400": session.track === "Regulation Track",
                "text-orange-400": session.track === "Academic Track",
                "text-teal-400": session.track === "Application Track",
              })}
            >
              {clamped ? "Show More" : "Show Less"}
            </Text>
          )}
          {session.registrationLink && (
            <div className="mt-5 mb-4">
              <Button asChild>
                <Link
                  href={session.registrationLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Register for Workshop
                </Link>
              </Button>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div>
            Speaker{session.speakers && session.speakers.length > 1 && "s"}:
          </div>
          <div className="grid md:grid-cols-2 gap-2">
            {session.speakers &&
              session.speakers.map((speaker, index) => (
                <>
                  <div className="flex gap-2 items-start" key={index}>
                    {speaker.profilePhoto && (
                      <Link href={speaker.url || "#"}>
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
                      </Link>
                    )}
                    <div className="flex flex-col max-w-48">
                      <Text key={index}>{speaker.name}</Text>
                      <Text key={index} textType="small">
                        {speaker.description}
                      </Text>
                    </div>
                  </div>
                </>
              ))}
            {(!session.speakers || session.speakers.length === 0) && (
              <Text>Coming soon...</Text>
            )}
          </div>
        </div>
      </div>
    );
  },
);
Session.displayName = "Session";

export default Session;
