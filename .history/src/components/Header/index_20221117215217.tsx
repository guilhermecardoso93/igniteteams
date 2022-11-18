import { Container, Logo } from "./styles";

import LogoImg from "../../assets/logo.png";

export function Header() {
  return (
    <Container>
      <CaretLeft color="#fff" size={32}/>
      <Logo source={LogoImg} />
    </Container>
  );
}
