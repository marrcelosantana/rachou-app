import { createContext, ReactNode, useState } from "react";

import { PlayerDTO } from "@models/PlayerDTO";
import { MatchDTO } from "@models/MatchDTO";

import { api } from "@services/api";

export interface MatchContextDataProps {
  players: PlayerDTO[];
  matches: MatchDTO[];
  fetchMatches: () => Promise<void>;
  fetchPlayers: () => Promise<void>;
}

interface MatchContextProviderProps {
  children: ReactNode;
}

export const MatchContext = createContext<MatchContextDataProps>(
  {} as MatchContextDataProps
);

export function MatchContextProvider({ children }: MatchContextProviderProps) {
  const [matches, setMatchs] = useState<MatchDTO[]>([]);
  const [players, setPlayers] = useState<PlayerDTO[]>([]);

  async function fetchMatches() {
    try {
      const response = await api.get("/matches");
      setMatchs(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchPlayers() {
    try {
      const response = await api.get("/players");
      setPlayers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <MatchContext.Provider
      value={{ matches, players, fetchMatches, fetchPlayers }}
    >
      {children}
    </MatchContext.Provider>
  );
}
