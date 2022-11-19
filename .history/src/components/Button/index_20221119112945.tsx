import { TouchableOpacityProps } from "react-native";

import { Container, Title, ButtonStyleProps } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type?: ButtonStyleProps;
};

export function Button({ title, type= "SECONDARY", ...rest }: ButtonProps) {
  return (
    <Container type={type} {...rest} >
      <Title>{title}</Title>
    </Container>
  );
}
