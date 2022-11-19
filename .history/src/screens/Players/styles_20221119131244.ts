import { SafeAreaView} from "react-native-safe-area-context";
import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";
 
export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;  
`;

export const Form = styled.View`
  justify-content: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 6px;
`;

