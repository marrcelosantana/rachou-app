import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-top: ${RFValue(120)}px;
`;

export const FormContainer = styled.View`
  width: 100%;
  height: ${RFValue(376)}px;
  border-radius: 15px 15px 0px 0px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};
  backdrop-filter: blur(8px);
  padding: 40px 40px 0 40px;
`;

export const Form = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
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
