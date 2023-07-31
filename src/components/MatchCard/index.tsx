import { Calendar, Clock } from "phosphor-react-native";
import { MatchDTO } from "@models/MatchDTO";

import { Background, Container, Filter, Info, Text, Title } from "./styles";

interface Props {
  match: MatchDTO;
}

export function MatchCard({ match }: Props) {
  return (
    <Container>
      <Background
        source={{ uri: match.image }}
        imageStyle={{ borderRadius: 15 }}
      >
        <Filter colors={["transparent", "rgba(0,0,0,1)"]}>
          <Title numberOfLines={1}>{match.title}</Title>
          <Info>
            <Calendar size={12} color="#8E8E93" />
            <Text>{match.date}</Text>
          </Info>
          <Info>
            <Clock size={12} color="#8E8E93" />
            <Text>{match.duration}</Text>
          </Info>
        </Filter>
      </Background>
    </Container>
  );
}
