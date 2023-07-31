import { FlatList } from "react-native";
import { ArrowUpRight } from "phosphor-react-native";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import LogoImg from "@assets/white-logo.svg";
import PlayerImg from "@assets/player.png";

import { MatchCard } from "@components/MatchCard";
import { matches } from "@utils/matches";

import {
  Container,
  Header,
  HiddenItem,
  Highlight,
  HighlightImage,
  HighlightText,
  Info,
  InfoText,
  Link,
  LinkText,
  UserImage,
} from "./styles";

export function Home() {
  const navigator = useNavigation<AppNavigatorRoutesProps>();

  return (
    <Container>
      <Header>
        <HiddenItem />
        <LogoImg />
        <UserImage source={{ uri: "https://github.com/marrcelosantana.png" }} />
      </Header>

      <Highlight colors={["#0a84ff", "#0ac4ff"]}>
        <HighlightText>
          Gerencie seus{"\n"}rachas com{"\n"}facilidade e jogue{"\n"}com paixão!
        </HighlightText>
        <HighlightImage source={PlayerImg} />
      </Highlight>

      <Info>
        <InfoText>Meu histórico de partidas</InfoText>
        <Link>
          <LinkText>Mais Detalhes</LinkText>
          <ArrowUpRight size={15} color="#0a84ff" weight="bold" />
        </Link>
      </Info>

      <FlatList
        data={matches}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 24 }}
        renderItem={({ item }) => (
          <MatchCard
            title={item.title}
            date={item.date}
            duration={item.duration}
            image={item.image}
          />
        )}
      />
    </Container>
  );
}
