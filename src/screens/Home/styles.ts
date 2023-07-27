import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 80px 24px 0 24px;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const HiddenItem = styled.View``;

export const UserImage = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 9999px;
`;

export const Highlight = styled.View`
  margin-top: 32px;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  border-radius: 15px;
  height: 171px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
`;

export const HighlightText = styled.Text`
  font-size: ${RFValue(17.5)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  line-height: 24px;
  max-width: 100%;
  margin-top: 30px;
`;

export const HighlightImage = styled.Image`
  width: ${RFValue(180)}px;
  height: ${RFValue(170)}px;
  bottom: 0;
  right: 0;
  position: absolute;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
`;

export const Button = styled.TouchableOpacity``;

export const Subtitle = styled.Text`
  margin-top: 12px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
