import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.View`
  width: 100%;
  height: ${RFValue(396)}px;
  border-radius: 15px 15px 0px 0px;
  backdrop-filter: blur(6.5px);
  background-color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const Title = styled.Text`
  font-size: 32px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Button = styled.TouchableOpacity``;

export const Subtitle = styled.Text`
  margin-top: 12px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
