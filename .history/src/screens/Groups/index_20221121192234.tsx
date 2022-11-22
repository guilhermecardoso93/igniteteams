import React, { useState, useEffect, useCallback } from "react";

import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import { Container } from "./styles";
import { groupsGetAll } from "@storage/group/groupsGetAll";

export function Groups() {
  const [groups, setGroups] = useState([""]);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate("players", { group });
  }

  useEffect(
    useCallback(() => {
      console.log("UseEffect is running");
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com a sua Turma!" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={handleOpenGroup} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Vamos cadastrar a primeira turma?!" />
        )}
      />
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
