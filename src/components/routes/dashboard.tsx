import { useUser } from "reactfire";
import { Metrics } from "./metrics";

export function Dashboard() {
  const { data: user } = useUser();

  if (!user) return null;

  return <Metrics />;
}
