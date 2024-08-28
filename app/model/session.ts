import Speaker from "@/app/model/speaker";

export const Tracks = [
  "Education Track",
  "Application Track",
  "Research Track",
  "Regulation Track",
  "Ecosystem Track",
  "Academic Track",
] as const;

export const Stages = [
  "Dome Stage",
  "Tech Stage",
  "Forum Stage",
  "Research Stage",
  "Workshop Stage",
] as const;

export interface Session {
  title: string;
  track?: (typeof Tracks)[number];
  type?: "Workshop" | "Panel Discussion" | "Talk";
  startTime: string;
  endTime: string;
  room: (typeof Stages)[number];
  description: string;
  speakers?: Speaker[];
}

export default Session;
