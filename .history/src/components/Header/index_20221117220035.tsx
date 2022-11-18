import { Container, Logo, BackButton, BackIcon } from "./styles";

import LogoImg from "../../assets/logo.png";

export function Header() {
  return (
    <Container>
      <BackButton>
        <BackIcon/>
      </BackButton>
      <Logo source={LogoImg} />
    </Container>
  );
}
