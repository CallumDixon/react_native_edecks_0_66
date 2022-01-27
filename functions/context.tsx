import * as React from "react";
import { useState, createContext, useEffect } from "react";
import { setBasketItem , getBasketItem} from "./deviceStorage";

const BasketContext = createContext <string | undefined>(undefined)
const SetBasketContext = createContext <any>(undefined)

const BasketContextProvider = ({children}:any) => {

  const [items, setItems] = useState<string>()

  useEffect(() => {
    getBasketItem("@storage_Key").then(val => {
      if(val) {
        setItems(val)
      }
    })
  },[])

  const setBasketStorage =  (key: string) => {
    setItems(key)
    console.log("changed values")
    setBasketItem(key).then(() => {
      return (1)
    })
  }

  return (
    <BasketContext.Provider value={items}>
      <SetBasketContext.Provider value = {setBasketStorage}>
        { children }
      </SetBasketContext.Provider>
    </BasketContext.Provider>
  )
}


export { BasketContext, SetBasketContext, BasketContextProvider}
