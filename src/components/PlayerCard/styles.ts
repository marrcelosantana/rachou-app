import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  width: 120px;
  height: 141px;
  margin-right: 14px;
  border-radius: 15px;
`;

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const Filter = styled(LinearGradient)`
  flex: 1;
  padding: 16px;
  align-items: flex-start;
  justify-content: flex-end;
  border-radius: 15px;
`;

export const Title = styled.Text`
  width: 100%;
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-transform: capitalize;
`;

export const Text = styled.Text`
  font-size: 10px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;
