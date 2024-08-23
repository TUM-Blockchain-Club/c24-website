import React from "react";
import { Session as SessionModel } from "@/app/model/session";
import classNames from "classnames";
import { Text } from "@/app/components/text";
import { ClockIcon, SewingPinIcon } from "@radix-ui/react-icons";

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
        className={classNames(className, "border w-full flex p-4 flex-col")}
        ref={ref}
      >
        <div className="flex justify-between w-full">
          <div className="flex-grow max-w-[300px]">
            <Text textType={"sub_title"} as={"p"} className="text-wrap">
              {session.title}
            </Text>
          </div>
          <div className="flex gap-2">
            <div className="w-fit border px-3 h-fit">
              <Text textType={"small"}>{session.type}</Text>
            </div>
            <div className="w-fit border px-3 h-fit">
              <Text textType={"small"}>{session.track}</Text>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex items-center gap-1">
            <SewingPinIcon className="text-yellow-400" />
            <Text>{session.room}</Text>
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon className="text-yellow-400" />
            <Text>
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
        <div className="mt-4">
          <Text>{session.description}</Text>
        </div>
      </div>
    );
  },
);
Session.displayName = "Session";

export default Session;
