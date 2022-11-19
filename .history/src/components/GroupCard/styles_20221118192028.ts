import { TouchableOpacity } from 'react-native'
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: {( {  theme }) => theme.COLORS.GRay_500};

  flex-direction: row;
  align-items: center;

  padding: 24px;
  margin-bottom: 24px;
`;
