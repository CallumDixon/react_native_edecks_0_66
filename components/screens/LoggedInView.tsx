import React, {useState} from 'react'
import {Pressable, StyleSheet, Text, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const LoggedInView = () => {

    return(
        <View style={styles.AccountViewStyles}>
            <Pressable
                style={styles.LoginButtonPressable}
                onPress={() => {
                    AsyncStorage.clear()
                }}>
                <View style={styles.LoginButtonView}>
                    <Text style={{}}>Clear User Token</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    AccountViewStyles: {
        flex: 1,
        backgroundColor: '#eeeeee',
    },
    AccountElementTextStyles: {
        margin: 10,
        fontSize: 25,
    },
    TextInputStyles: {
        margin: 10,
        height: '10%',
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 25,
    },
    LoginButtonPressable: {
        height: '10%',
        padding: '3%',
        width: '50%',
        alignSelf: 'flex-end',
    },
    LoginButtonView: {
        borderWidth: 2,
        borderStyle: 'dashed',
        orderColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoggedInView
