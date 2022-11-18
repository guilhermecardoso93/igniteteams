import { Container, Logo } from "./styles";
import { CaretLeft } from 'phosphor-react-native';
import LogoImg from '../../assets/logo.png'


export function Header() {
  return (
    <Container>
      <CaretLeft color ='#fff'/>
      <Logo source={LogoImg} />
    </Container>
  )
}