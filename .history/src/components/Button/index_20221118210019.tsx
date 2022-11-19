import { TouchableOpacityProps } from "react-native";
import { Button, Title, ButtonStyleProps } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type?: ButtonStyleProps;
};

export function Button({ title, type = "PRIMARY", ...rest }: ButtonProps) {
  return (
    <Button type={type} {...rest}>
      <Title>{title}</Title>
    </Button>
  );
}
