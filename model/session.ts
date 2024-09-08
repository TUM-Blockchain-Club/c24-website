import Speaker from "@/model/speaker";

export const Dates = [
  new Date("2024-09-12").toISOString(),
  new Date("2024-09-13").toISOString(),
] as const;

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
  isSpecialSession?: boolean;
  registrationLink?: string;
}

export default Session;
