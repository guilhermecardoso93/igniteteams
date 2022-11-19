import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import React from "react";
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
      />
      <ButtonIcon icon='add'/>
    </Container>
  )
}