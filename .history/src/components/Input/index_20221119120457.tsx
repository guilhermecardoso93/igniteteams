import { Container, Title, SubTitle} from "./styles";

type InputProps = {
  title: string;
  subtitle: string;
}


export function Input({ title, subtitle } :  InputProps ) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
}
