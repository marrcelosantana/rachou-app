import { useContext } from "react";
import { MatchContext } from "@contexts/matchContext";

export function useMatch() {
  const context = useContext(MatchContext);
  return context;
}
