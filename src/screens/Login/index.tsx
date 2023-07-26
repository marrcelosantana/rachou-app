import Logo from "@assets/blue-logo.svg";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { Input } from "@components/Input";

import {
  Button,
  ButtonText,
  Container,
  Form,
  FormContainer,
  Subtitle,
  Title,
} from "./styles";

export function Login() {
  const navigator = useNavigation<AppNavigatorRoutesProps>();

  return (
    <Container source={require("../../assets/image-bg.png")} resizeMode="cover">
      <Logo />
      <FormContainer>
        <Title>Seja bem vindo!</Title>
        <Form>
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Subtitle>Esqueceu a senha?</Subtitle>
          <Button>
            <ButtonText>Continuar</ButtonText>
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
}
