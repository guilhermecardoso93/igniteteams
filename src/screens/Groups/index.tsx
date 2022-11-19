import React, { useState } from "react";

import { FlatList } from "react-native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import { Container } from "./styles";

export function Groups() {
  const [groups, setGroups] = useState(["Galera da Rocket!", "Discovery 2022"]);

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com a sua Turma!" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Vamos cadastrar a primeira turma?!" />
        )}
      />
      <Button title="Criar nova turma" />
    </Container>
  );
}
