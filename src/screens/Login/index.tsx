import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import Logo from "@assets/blue-logo.svg";

import { Container, Form } from "./styles";

export function Login() {
  const navigator = useNavigation<AppNavigatorRoutesProps>();

  return (
    <Container source={require("../../assets/image-bg.png")} resizeMode="cover">
      <Logo />
      <Form></Form>
    </Container>
  );
}
