import * as React from 'react';
import { View, StyleSheet, Text, FlatList, SafeAreaView } from "react-native";
import { useContext, useEffect, useState } from "react";
import { BasketContext } from "../../functions/context";
import { getProduct, getProducts } from "../../functions/api";

interface IBasketItem {
  name: String
  quantity: Number
}

interface IBasketItemView {
  item: IBasketItem
}

export const BasketScreen = () => {

  const contextBasket = React.useContext<Array<IBasketItem>>(BasketContext)
  const [BasketItems,setBasketItems] = useState<Array<IBasketItem>>([])

  useEffect(() => {

    let arr = contextBasket.map((item) => JSON.stringify(item.name))

    getProducts(arr).then(products => {

      let productArray = products.data.listProducts.items

      for(let i = 0; i < productArray.length; i++){
        console.log(productArray[i].name)
      }
    })
  },[contextBasket])

  const Item = ({ name } : IBasketItem) => (
    <View>
      <Text>{name}</Text>
    </View>
  )

  const renderItem = ({ item } : IBasketItemView) => (
    <Item name={item.name} quantity={item.quantity}/>
  )

  return (
    <SafeAreaView>
      <FlatList
        data={contextBasket}
        renderItem={renderItem}
        keyExtractor={item => item.name}/>
    </SafeAreaView>
  )
}

let styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default BasketScreen;
