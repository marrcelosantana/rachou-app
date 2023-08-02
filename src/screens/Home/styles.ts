import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";

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

export const Highlight = styled(LinearGradient)`
  max-width: 100%;
  height: 190px;
  margin-top: 32px;
  border-radius: 15px;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
`;

export const HighlightText = styled.Text`
  font-size: ${RFValue(17.5)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  line-height: 24px;
  margin-top: ${RFValue(36)}px;
`;

export const HighlightImage = styled.Image`
  width: ${RFValue(185)}px;
  height: ${RFValue(175)}px;
  bottom: 0;
  right: 0;
  position: absolute;
`;

export const Info = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 24px;
  flex-direction: row;
`;

export const InfoText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Link = styled.Pressable`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const LinkText = styled.Text`
  font-size: 10px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.BLUE};
  margin-right: 5px;
`;

export const CardsContainer = styled.View``;
