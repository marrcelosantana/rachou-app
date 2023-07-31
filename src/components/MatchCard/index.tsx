import { Calendar, Clock } from "phosphor-react-native";
import { Background, Container, Filter, Info, Text, Title } from "./styles";

interface Props {
  title: string;
  date: string;
  duration: string;
  image: string;
}

export function MatchCard({ title, date, duration, image }: Props) {
  return (
    <Container>
      <Background source={{ uri: image }} imageStyle={{ borderRadius: 15 }}>
        <Filter colors={["transparent", "rgba(0,0,0,0.8)"]}>
          <Title numberOfLines={1}>{title}</Title>
          <Info>
            <Calendar size={12} color="#8E8E93" />
            <Text>{date}</Text>
          </Info>
          <Info>
            <Clock size={12} color="#8E8E93" />
            <Text>{duration}</Text>
          </Info>
        </Filter>
      </Background>
    </Container>
  );
}
