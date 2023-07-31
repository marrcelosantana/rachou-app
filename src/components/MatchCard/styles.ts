import styled from "styled-components/native";

export const Container = styled.View`
  width: 153px;
  height: 142px;
  border-radius: 15px;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  padding: 16px;
  margin-right: 10px;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-bottom: 8px;
`;

export const Info = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;

export const Text = styled.Text`
  font-size: 10px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  margin-left: 3px;
`;
