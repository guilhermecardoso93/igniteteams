import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Form = styled.View`
  width: 100%;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 15px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  border-radius: 6px;
`;

export const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 32px 0 12px;
`;
