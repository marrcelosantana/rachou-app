import { useCallback } from "react";
import { FlatList, Pressable } from "react-native";

import { ArrowLeft } from "phosphor-react-native";

import { Avatar } from "@components/Avatar";
import { PlayerInfo } from "@components/PlayerInfo";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { useMatch } from "@hooks/useMatch";

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
  const { players, fetchPlayers } = useMatch();
  const navigator = useNavigation<AppNavigatorRoutesProps>();

  useFocusEffect(
    useCallback(() => {
      fetchPlayers();
    }, [])
  );

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
          <Subtitle>Estrelas</Subtitle>
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
