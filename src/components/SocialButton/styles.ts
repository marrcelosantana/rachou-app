import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Button = styled.Pressable`
  width: ${RFValue(70)}px;
  height: ${RFValue(43)}px;
  align-items: center;
  justify-content: center;
  border-radius: 31px;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
`;
