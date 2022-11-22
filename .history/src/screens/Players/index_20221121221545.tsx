import { useState, useEffect, useRef } from "react";
import { Alert, FlatList, TextInput } from "react-native";
import { useRoute } from "@react-navigation/native";

import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playersGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";

import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { AppError } from "@utils/AppError";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";


type RouteParams = {
  group: string;
};

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  const newPlayerNameInputRef = useRef<TextInput>(null);

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        "Novo jogador",
        "Informe o nome do jogador para adicionar!"
      );
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);
      newPlayerNameInputRef.current?.blur();

      setNewPlayerName("");
      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Jogador", error.message);
      } else {
        console.log(error);
        Alert.alert("Novo Jogador", "Não foi possível adicionar Jogador!");
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam: any = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert("Jogadores", "Não foi possivel carregar os jogadores.");
    }
  }

  async function handleRemovePlayer(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group);
      fetchPlayersByTeam();
    } catch (error) {
      console.log(error);
      Alert.alert("Remover Jogador", "Não foi possível remover jogador!");
    }
  }

  async function groupRemove() {
    try {
      await groupRemoveByName()

    } catch (error) {
      console.log(error);
      Alert.alert("Remover grupo", "Não foi possível remover o grupo.")
    }
  }

  async function handleGroupRemove() {
    Alert.alert('Remover!', "Deseja remover o Grupo?", [
      { text: 'Não', style: 'cancel'},
      { text: 'Sim', onPress: () => groupRemove()}
    ])
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="Adicione a galera a turma" />
      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder="Nome do Jogador"
          value={newPlayerName}
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
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
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard name={item.name} onRemove={() => handleRemovePlayer(item.name)} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas neste Time. Adicionar Jogadores!" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <Button type="SECONDARY" title="Remover Turma" onPress={handleGroupRemove}/>
    </Container>
  );
}
