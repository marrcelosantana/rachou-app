import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  border-bottom-width: 0.2px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_1};
  padding: 0 24px 10px 24px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.View`
  margin-left: 10px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  font-size: ${RFValue(12)}px;
  line-height: 22px;
  width: 100%;
`;

export const Position = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  font-size: ${RFValue(10)}px;
  line-height: 22px;
`;

export const Level = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  font-size: ${RFValue(12)}px;
  line-height: 22px;
`;
