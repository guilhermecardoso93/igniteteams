import { useState } from "react";
import { Alert, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

type RouteParams = {
  group: string;
};

export function Players() {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState([]);
  const [ newPlayerName, setNewPlayerName ] = useState('')

  const route = useRoute();
  const { group } = route.params as RouteParams;

  async function handleAddPlayer() {
    if(newPlayerName.trim().length === 0 ) {
      return Alert.alert("Novo jogador", "Informe o nome do jogador para adicionar!")
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="Adicione a galera a turma" />
      <Form>
        <Input placeholder="Nome da Pessoa" autoCorrect={false} onChangeText={setNewPlayerName}/>
        <ButtonIcon icon="add" />
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
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
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
      <Button type="SECONDARY" title="Remover Turma" />
    </Container>
  );
}
