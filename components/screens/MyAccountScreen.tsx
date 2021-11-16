import * as React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import LoggedInView from "./LoggedInView";
import {useState} from "react";
import {ActivityIndicator} from "react-native";

export const MyAccountScreen = () => {

  const [LoggedIn,setLoggedIn] = useState(false)
  const [isLoading,setLoading] = useState(true)

  return (
    <View style={styles.screen}>
      <Text>Account Screen</Text>
      {/*isLoading ? <ActivityIndicator size='large' color='green'/> : LoggedIn ? <LoggedInView/> : <LoginView test = {test} isLoggedIn = {isLoggedIn}/>*/}
    </View>
  )
}

let styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
})

export default MyAccountScreen;
