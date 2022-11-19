import React from "react";
import { FlatList } from "react-native";
import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

import { Container, Form } from "./styles";
import { Filter } from "@components/Filter";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight title="Nome da Turma" subtitle="Adicione a galera a turma" />
      <Form>
        <Input placeholder="Nome da Pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
     
      <FlatList 
        data={['Time A', 'Time B']}
        keyExtractor={item => item}
        renderItem={({ item, index}) => (
          <Filter title="Time A" isActive />
        )}
      />
    </Container>
  );
}
