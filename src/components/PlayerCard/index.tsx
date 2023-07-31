import { PlayerDTO } from "@models/PlayerDTO";
import { Background, Container, Filter, Text, Title } from "./styles";

interface Props {
  player: PlayerDTO;
}

export function PlayerCard({ player }: Props) {
  return (
    <Container>
      <Background
        source={{ uri: player.image }}
        imageStyle={{ borderRadius: 15 }}
        resizeMode="cover"
      >
        <Filter colors={["transparent", "rgba(0,0,0,1)"]}>
          <Title>{player.name}</Title>
          <Text>{player.position}</Text>
        </Filter>
      </Background>
    </Container>
  );
}
