import { TouchableOpacityProps } from "react-native"

import { Container, Icon, ButtonIconStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonIconStyleProps;
}

export function ButtonIcon({title, type = 'PRIMARY', ...rest}: Props){
  return (
    <Container {...rest}>
      <Icon />
    </Container>
  );
}