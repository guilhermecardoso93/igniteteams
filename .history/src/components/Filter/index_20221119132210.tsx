import { TouchableOpacityProps } from "react-native";
import { Container, Title, FilterStyledProps} from "./styles";

type Props = FilterStyledProps & TouchableOpacityProps & {
  title: string
}

export function Filter({title, ...rest}: Props) {

  return (
    <Container>
      <Title>
        {title}
      </Title>
    </Container>
  );
}