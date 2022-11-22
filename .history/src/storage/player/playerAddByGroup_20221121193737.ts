import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {

  try {
    await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`, '')
  
  
  } catch (error) {
    throw(error)
  }
}