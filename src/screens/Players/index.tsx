import { Pressable } from "react-native";

import { ArrowLeft } from "phosphor-react-native";
import { Avatar } from "@components/Avatar";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import {
  Container,
  Content,
  Divider,
  Header,
  HeaderTitle,
  Info,
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
        <Avatar />
      </Header>

      <Divider />

      <Content>
        <Info>
          <Title>Jogador</Title>
          <Subtitle>Pontuação</Subtitle>
        </Info>
      </Content>
    </Container>
  );
}
