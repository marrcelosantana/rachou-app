import { Avatar } from "@components/Avatar";
import { PlayerDTO } from "@models/PlayerDTO";

import {
  Container,
  InfoContainer,
  Info,
  Name,
  Position,
  Level,
} from "./styles";

interface PlayerInfoProps {
  player: PlayerDTO;
}

export function PlayerInfo({ player }: PlayerInfoProps) {
  return (
    <Container>
      <InfoContainer>
        <Avatar uri={player.image} />
        <Info>
          <Name numberOfLines={1}>{player.name}</Name>
          <Position>{player.position}</Position>
        </Info>
      </InfoContainer>
      <Level>{player.rate}</Level>
    </Container>
  );
}
