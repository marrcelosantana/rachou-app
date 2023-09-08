import { FlatList, Pressable } from "react-native";

import { ArrowLeft } from "phosphor-react-native";

import { Avatar } from "@components/Avatar";
import { PlayerInfo } from "@components/PlayerInfo";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { players } from "@utils/players";

import {
  Container,
  Content,
  Divider,
  Header,
  HeaderTitle,
  Info,
  PlayersContainer,
  Subtitle,
  Title,
} from "./styles";

export function Players() {
  const navigator = useNavigation<AppNavigatorRoutesProps>();

  return (
    <Container>
      <Header>
        <Pressable onPress={() => navigator.goBack()}>
          <ArrowLeft size={22} color="white" />
        </Pressable>
        <HeaderTitle>Jogadores cadastrados</HeaderTitle>
        <Avatar uri="https://github.com/marrcelosantana.png" />
      </Header>

      <Divider />

      <Content>
        <Info>
          <Title>Jogador</Title>
          <Subtitle>Pontuação</Subtitle>
        </Info>

        <PlayersContainer>
          <FlatList
            data={players}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <PlayerInfo player={item} />}
            contentContainerStyle={{ paddingBottom: 24 }}
            showsVerticalScrollIndicator={false}
          />
        </PlayersContainer>
      </Content>
    </Container>
  );
}
