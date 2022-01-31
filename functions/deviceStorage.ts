import AsyncStorage from "@react-native-async-storage/async-storage";

interface TypeKeyValuePair {
  key: string
  value: string
}

export const setBasketItem = async (index: number,items: object) => {
  try {
    await AsyncStorage.setItem(String(index), JSON.stringify(items))
  } catch (e) {}
}

export const getBasketItem = async () => {

  try {
    const basket = await AsyncStorage.getItem('@storage_KeyRN')
    return basket != null ? JSON.parse(basket) : null
  } catch (error) {}
}

export const removeItem = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
  }
}

export const getAll = async () => {
  try {
    return(await AsyncStorage.getAllKeys())
  } catch(e) {
    // read key error
  }

}

export const getMultiple = async (KeyArray: Array<string> | undefined) => {
  try {
    if(KeyArray) return (await AsyncStorage.multiGet(KeyArray))
  }
  catch(e) {}
  return undefined
}

export const deleteMultiple = async (KeyArray: Array<string>) => {

  try {
    await AsyncStorage.multiRemove(KeyArray)
  } catch(e) {}
}
