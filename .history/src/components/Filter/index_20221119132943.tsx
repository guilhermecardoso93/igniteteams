import { TouchableOpacityProps } from "react-native";
import { Container, Title, FilterStyleProps } from "./styles";

type Props = FilterStyleProps &
  TouchableOpacityProps & {
    title: string;
  };

export function Filter({ title, ...rest }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}
