import { useState } from "react";
import { Platform, Pressable } from "react-native";

import Logo from "@assets/blue-logo.svg";
import AppleSvg from "@assets/apple.svg";
import GoogleSvg from "@assets/google.svg";

import { EnvelopeSimple, Eye } from "phosphor-react-native";

import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { Input } from "@components/Input";
import { SocialButton } from "@components/SocialButton";

import {
  Button,
  ButtonText,
  Container,
  Divider,
  Footer,
  FooterText,
  Form,
  FormContainer,
  Line,
  Link,
  Social,
  Subtitle,
  Title,
  Word,
} from "./styles";

export function Login() {
  const [passwordVisible, setPasswordVisible] = useState(true);

  const navigator = useNavigation<AppNavigatorRoutesProps>();

  return (
    <Container source={require("../../assets/image-bg.png")} resizeMode="cover">
      <Logo />
      <FormContainer intensity={45}>
        <Title>Seja bem vindo!</Title>

        <Form>
          <Input
            placeholder="Email"
            keyboardType="email-address"
            autoCorrect={false}
            rightElement={
              <EnvelopeSimple
                size={24}
                color="#8e8e93"
                style={{ marginRight: 16 }}
              />
            }
          />
          <Input
            placeholder="Senha"
            secureTextEntry={passwordVisible}
            rightElement={
              <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
                <Eye size={24} color="#8e8e93" style={{ marginRight: 16 }} />
              </Pressable>
            }
          />
          <Subtitle>Esqueceu a senha?</Subtitle>
          <Button>
            <ButtonText>Continuar</ButtonText>
          </Button>
        </Form>

        <Divider>
          <Line />
          <Word>OU</Word>
          <Line />
        </Divider>

        <Social>
          {Platform.OS === "ios" && (
            <SocialButton svg={AppleSvg} style={{ marginRight: 20 }} />
          )}
          <SocialButton svg={GoogleSvg} />
        </Social>

        <Footer>
          <FooterText>É a sua primeira vez aqui?</FooterText>
          <Link>Cadastre-se.</Link>
        </Footer>
      </FormContainer>
    </Container>
  );
}
