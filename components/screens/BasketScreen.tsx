import * as React from 'react';
import { View, StyleSheet, Text } from "react-native";
import { useContext, useEffect, useState } from "react";
import { BasketContext } from "../../functions/context";

export const BasketScreen = () => {

  const basket = React.useContext(BasketContext)
  useEffect(() => {
    //console.log(basket)
  })

  return (
    <View style={styles.screen}>
      <Text>{ JSON.stringify(basket) }</Text>
    </View>
  )
}

let styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default BasketScreen;
