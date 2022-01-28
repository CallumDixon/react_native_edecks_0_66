import AsyncStorage from "@react-native-async-storage/async-storage";

interface TypeKeyValuePair {
  key: string
  value: string
}

export const setBasketItem = async (items: object) => {
  try {
    await AsyncStorage.setItem('@storage_KeyRN', JSON.stringify(items))
  } catch (e) {}
}

export const getBasketItem = async () => {

  try {
    const basket = await AsyncStorage.getItem('@storage_KeyRN')
    return basket != null ? JSON.parse(basket) : null
  } catch (error) {}
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
