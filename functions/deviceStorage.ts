import AsyncStorage from "@react-native-async-storage/async-storage";

interface TypeKeyValuePair {
  key: string
  value: string
}

export const setBasketItem = async (name: string) => {
  try {
    await AsyncStorage.setItem(name, name)
  } catch (e) {
    // saving error
  }}

export const getBasketItem = async (name: string) => {

  try {
    return await AsyncStorage.getItem(name)
  } catch (error) {
    // Error retrieving data
  }
}

export const removeItem = async (name: string) => {
  try {
    await AsyncStorage.removeItem(name)
  } catch(e) {
    // remove error
  }
}

export const getAll = async () => {
  try {
    return(await AsyncStorage.getAllKeys())
  } catch(e) {
    // read key error
  }

}

export const getMultiple = async (KeyArray: Array<string>) => {
  try {
    return (await AsyncStorage.multiGet(KeyArray))
  }
  catch(e) {}
  return undefined
}

export const deleteMultiple = async (KeyArray: Array<string>) => {

  try {
    await AsyncStorage.multiRemove(KeyArray)
  } catch(e) {}
}
