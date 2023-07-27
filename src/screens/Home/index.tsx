import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import LogoImg from "@assets/white-logo.svg";
import PlayerImg from "@assets/player.png";

import {
  Container,
  Header,
  HiddenItem,
  Highlight,
  HighlightImage,
  HighlightText,
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

      <Highlight>
        <HighlightText>
          Gerencie seus{"\n"}rachas com{"\n"}facilidade e jogue{"\n"}com paixão!
        </HighlightText>

        <HighlightImage source={PlayerImg} />
      </Highlight>
    </Container>
  );
}
