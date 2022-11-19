import { TouchableOpacityProps } from "react-native"

import { Container, Title, ButtonIconStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonIconStyleProps;
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