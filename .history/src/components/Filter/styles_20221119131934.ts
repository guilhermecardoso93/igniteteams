import { TouchableOpacity } from "react-native";
import { UsersThree } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export type FilterStyledProps = {
  isActive?: boolean
}

export const Container = styled(TouchableOpacity)<FilterStyledProps>`
  ${({ theme, isActive }) => isActive && css`
    border: 1px solid ${theme.COLORS.GREEN_700};
  `};
    border-radius: 4px;
    margin-right: 12px;

    width: 70px;
    height: 38px;

    align-items: center;
    justify-content: center;

`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
  text-align: center;
`;

export const Icon: any = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: "fill",
}))`
  margin-right: 20px;
`;
