import React, { useState } from "react";
import { FlatList } from "react-native";
import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";

import { Container, Form } from "./styles";

export function Players() {
  const [team, setTeam] = useState("Time A");

  return (
    <Container>
      <Header showBackButton />
      <Highlight title="Nome da Turma" subtitle="Adicione a galera a turma" />
      <Form>
        <Input placeholder="Nome da Pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <FlatList
        data={["Time A", "Time B"]}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <Filter
            title={item}
            isActive={item === team}
            onPress={() => setTeam(item)}
          />
        )}
        horizontal
      />
    </Container>
  );
}
