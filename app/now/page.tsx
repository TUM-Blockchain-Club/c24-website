import { useSession } from "@/hooks/useSession";
import Now from "@/app/now/now";

export default async function NowPage() {
  const sessions = await useSession();

  return (
    <Now sessions={sessions} simulatedDate={new Date("2024-09-12T11:00:00")} />
  );
}