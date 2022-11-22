import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function playersGetByGroup(group: string) {
  try {

    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`)

  } catch (e) {
    throw(e)
  }

}