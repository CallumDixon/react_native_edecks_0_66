import * as React from 'react';
import { View, StyleSheet, Text } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setBasketItem } from "../../functions/deviceStorage";
import { BasketContext } from "../../functions/context";

export const BasketScreen = () => {

  const basket = React.useContext(BasketContext)
  return (
    <View style={styles.screen}>
    <Text>{basket}</Text>
    </View>
  );
};

let styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default BasketScreen;
