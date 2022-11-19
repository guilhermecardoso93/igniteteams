import React from "react";

import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

import { Container } from "./styles";


export function Players () {
  return (
    <Container>
      <Header showBackButton/>
      <Highlight 
        title='Nome da Turma'
        subtitle='Adicione a galera a turma'      
      />
      <Input 
        placeholder='Nome da Pessoa'
        autoCorrect={false}
      />
      <ButtonIcon icon='add'/>
    </Container>
  )
}