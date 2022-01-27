import AsyncStorage from "@react-native-async-storage/async-storage";

export const setBasketItem = async (name: string) => {
  try {
    await AsyncStorage.setItem(name, '1')
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
