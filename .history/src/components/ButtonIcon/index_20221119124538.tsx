import { TouchableOpacityProps } from "react-native"

import { Container, Title, ButtonStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonStyleProps;
}

export function ButtonIcon({title, type = 'PRIMARY', ...rest}: Props){
  return (
    <Container type={type} {...rest}>
      <Title>
        {title}
      </Title>
    </Container>
  );
}