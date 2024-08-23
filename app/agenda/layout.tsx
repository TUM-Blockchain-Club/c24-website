import { useSession } from "../hooks/useSession";
import Agenda from "./page";

export default async function AgendaLayout() {
  const sessions = await useSession();

  return <Agenda sessions={sessions} />;
}
