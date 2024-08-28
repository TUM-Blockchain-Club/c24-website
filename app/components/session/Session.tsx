import React from "react";
import { Session as SessionModel } from "@/app/model/session";
import classNames from "classnames";
import { Text } from "@/app/components/text";
import { ClockIcon, SewingPinIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export type SessionElement = React.ElementRef<"div">;
export type SessionProps = React.ComponentPropsWithoutRef<"div"> & {
  session: SessionModel;
};

export const Session = React.forwardRef<SessionElement, SessionProps>(
  (props, ref) => {
    const { session, className, ...divProps } = props;

    const { startTime, endTime } = {
      startTime: new Date(session.startTime),
      endTime: new Date(session.endTime),
    };

    return (
      <div
        {...divProps}
        className={classNames(
          className,
          "border w-full border-white flex p-4 flex-col gap-4",
        )}
        ref={ref}
      >
        <div className="flex w-full flex-col gap-2">
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="flex-grow w-full max-w-[450px]">
              <Text
                textType={"sub_title"}
                as={"p"}
                className="text-wrap w-full"
              >
                {session.title}
              </Text>
            </div>
            <div className="flex gap-2 w-fit justify-end">
              {session.type && (
                <div className="min-w-fit px-3 h-fit">
                  <Text className="underline" textType={"small"}>
                    {session.type}
                  </Text>
                </div>
              )}
              {session.track && (
                <div className="min-w-fit px-3 h-fit">
                  <Text className="underline" textType={"small"}>
                    {session.track}
                  </Text>
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-x-8 flex-col md:flex-row">
            <div className="flex items-center gap-1">
              <SewingPinIcon className="text-yellow-400" />
              <Text textType={"small"}>{session.room}</Text>
            </div>
            <div className="flex items-center gap-1">
              <ClockIcon className="text-yellow-400" />
              <Text textType={"small"}>
                {startTime.toLocaleDateString("en-DE", { weekday: "short" })},{" "}
                {startTime.toLocaleTimeString("en-DE", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}{" "}
                -{" "}
                {endTime.toLocaleTimeString("en-DE", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Text>
            </div>
          </div>
        </div>
        <div className="w-full text-wrap overflow-auto">
          <Text className="w-full text-wrap overflow-auto">
            {session.description}
          </Text>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            Speaker{session.speakers && session.speakers.length > 1 && "s"}:
          </div>
          <div className="flex-grow flex gap-x-8 gap-y-4 flex-wrap">
            {session.speakers &&
              session.speakers.map((speaker, index) => (
                <div className="flex gap-2 items-center" key={index}>
                  {speaker.profilePhoto && (
                    <Image
                      src={speaker.profilePhoto}
                      alt={speaker.name}
                      width={48}
                      height={48}
                    />
                  )}
                  <Text key={index}>{speaker.name}</Text>
                </div>
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
