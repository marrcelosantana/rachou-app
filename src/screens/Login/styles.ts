import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { BlurView } from "expo-blur";

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-top: ${RFValue(140)}px;
`;

export const FormContainer = styled(BlurView)`
  width: 100%;
  height: ${RFValue(396)}px;
  border-radius: 15px 15px 0px 0px;
  padding: 40px 40px 0 40px;
`;

export const Form = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-bottom: 16px;
`;

export const Subtitle = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: right;
  margin-bottom: 16px;
`;

export const Button = styled.Pressable`
  width: 100%;
  height: 54px;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 16px;
`;

export const Divider = styled.View`
  width: 100%;
  margin: 16px 0 16px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Word = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 10px;
`;

export const Line = styled.View`
  width: 45%;
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const Social = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: 24px;
  align-items: center;
  justify-content: center;
`;

export const FooterText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 12px;
  margin-right: 6px;
`;

export const Link = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  color: ${({ theme }) => theme.COLORS.LIGHT_TEAL};
  font-size: 12px;
`;
