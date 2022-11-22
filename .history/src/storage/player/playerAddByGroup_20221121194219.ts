import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    const storagePlayers = await playersGetByGroup(group);

    const playerAlreadyExists = storagePlayers.filter(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists.length > 0) {
      throw new AppError("Essa pessoa já esta adicionada em um time!");
    }

    const storage = JSON.stringify([...storagePlayers, newPlayer]);

    await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`);
  } catch (error) {
    throw error;
  }
}
