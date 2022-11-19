import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';

import { Container } from './styles';

export function Groups() {
  return (
    <Container>
      <Header/>
      <Highlight title='Turmas' subtitle='Jogue com a sua Turma!' />
      <GroupCard title='Ignite 2022' />
    </Container>
  );
}

