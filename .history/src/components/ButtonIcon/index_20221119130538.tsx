import { TouchableOpacityProps } from "react-native"

import { Container, Icon, ButtonIconStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  icon: string;
  type?: ButtonIconStyleProps;
}

export function ButtonIcon({ icon, type='PRIMARY',...rest}: Props){
  return (
    <Container {...rest}>
      <Icon />
    </Container>
  );
}