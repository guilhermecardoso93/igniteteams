import { Container, Logo } from "./styles";
import LogoImg from '../../assests/logo.png'


export function Header() {
  return (
    <Container>
      <Logo source={LogoImg} />
    </Container>
  )
}