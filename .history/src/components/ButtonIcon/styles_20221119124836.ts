import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonIconStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonIconStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  height: 56px;
  width: 56px;

  justify-content: center;
  align-items: center;
  margin-left: 12px;
  color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;
