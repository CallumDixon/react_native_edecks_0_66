import * as React from "react";
import { useState, createContext, useEffect } from "react";
import { setBasketItem , getAll, getMultiple} from "./deviceStorage";

interface IBasketItem {
  name: String
  quantity: Number
}

const BasketContext = createContext <object | undefined>(undefined)
const SetBasketContext = createContext <any>(undefined)

const BasketContextProvider = ({children}:any) => {

  const [items, setItems] = useState<Array<IBasketItem>>([])

  // Read the basket items from the disk and add them to the initial state
  useEffect(() => {
    getAll()
      .then(keys => {
        getMultiple(keys)
          .then((keyValue) => {
            if(keyValue){

              let newItems = []

              for (let i = 0; i <keyValue.length; i++) {
                newItems.push(JSON.parse(keyValue[i][1] as string))
              }
              // @ts-ignore
              setItems([...newItems])
            }
          })
      })
  },[])

  // Function that allows context consumers to change the basket
  // It updates the context state and then saves it to the device
  const setBasketStorage =  (name : string, quantity : number, AddFlag: boolean) => {

    if(AddFlag){

      const newItem = { "name" : name, "quantity" : quantity }

      const oldItems = items;
      oldItems.push(newItem)

      setItems([...oldItems])
      setBasketItem(items.length,newItem).then(() => 1)
    }

    else {
      setItems([])
    }
  }

  return (
    <BasketContext.Provider value={items}>
      <SetBasketContext.Provider value = {setBasketStorage}>
        { children }
      </SetBasketContext.Provider>
    </BasketContext.Provider>
  )
}

// Pass down the current basket and function to change the basket
export { BasketContext, SetBasketContext, BasketContextProvider}
