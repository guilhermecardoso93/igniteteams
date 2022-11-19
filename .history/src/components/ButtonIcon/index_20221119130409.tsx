import { TouchableOpacityProps } from "react-native"

import { Container, Icon, ButtonIconStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  
}

export function ButtonIcon({ ...rest}: Props){
  return (
    <Container {...rest}>
      <Icon />
    </Container>
  );
}