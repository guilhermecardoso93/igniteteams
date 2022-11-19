import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  min-height: 56px;
  max-height: 56px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_500};
  `};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
`;
