import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeAsyncData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    // error reading value
  }
}

export const getAsyncData = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key)
  } catch (e) {
    // error reading value
  }
}

export const removeAsyncData = async (key: string) => {
  try {
    return await AsyncStorage.removeItem(key)
  } catch (e) {
    // error reading value
  }
}

export const clearAsyncData = async () => {
  try {
    return await AsyncStorage.clear()
  } catch (e) {
    // error reading value
  }
}