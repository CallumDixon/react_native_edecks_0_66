import * as React from "react";
import { useState, createContext, useEffect } from "react";
import { setBasketItem , getBasketItem} from "./deviceStorage";

const BasketContext = createContext <object | undefined>(undefined)
const SetBasketContext = createContext <any>(undefined)

const BasketContextProvider = ({children}:any) => {

  const [items, setItems] = useState({})

  console.log("render")

  // Read the basket items from the disk and add them to the initial state
  useEffect(() => {
    getBasketItem().then(val => {
      if(val) {
        setItems(val)
      }
    })
  },[])

  // Function that allows context consumers to change the basket
  // It updates the context state and then saves it to the device
  const setBasketStorage =  (name : string, quantity : number, AddFlag: boolean) => {

    if(AddFlag){
      const size  = Object.keys(items).length
      const newItem =  { [size] : { "name" : name, "quantity" : quantity }}

      let oldItems = items

      let newItems = Object.assign(oldItems,newItem)
      setItems(newItem)
      //setBasketItem(newItem).then(() => 1)
    }

    else {

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
