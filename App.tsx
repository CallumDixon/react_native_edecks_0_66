import * as React from 'react';
import { Image, LogBox, Text, View } from "react-native";
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './components/screens/HomeScreen';
import CategoriesScreenNavigator from "./components/screens/CategoriesNavigatorScreen";
import CategoriesScreen from './components/screens/CategoriesScreen';
import MyAccountScreen from './components/screens/MyAccountScreen';
import BasketScreen from './components/screens/BasketScreen';
import {colors} from "./config/colors";
import 'react-native-gesture-handler';
const Tab = createBottomTabNavigator();


const App = () => {
    return (
        <NavigationContainer>

            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.ken_green,
                    },
                    tabBarInactiveTintColor: '#4d4d4d',
                    tabBarActiveTintColor: colors.ken_green,
                    tabBarStyle:{
                    }
                }}>

                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                      tabBarIcon: ({color}) => (
                          <Icon name="home" size={30} color={color}/>
                      ),
                      headerTitle:() => {
                        return(
                          <View style={[{flexDirection:"row"}]}>
                            <Image style={[{width:25,height:25}]} source={require("./favicons.png")}/>
                            <Text style={[{fontSize:16,fontWeight:"bold"}]}>Kennings</Text>
                          </View>
                        )
                      }
                    }}/>

                <Tab.Screen
                    name="Browse"
                    component={CategoriesScreenNavigator}
                    options={{
                        tabBarIcon: ({color}) => (
                            <Icon name="book" size={30} color={color}/>
                        )
                    }}/>

                <Tab.Screen
                    name="My Account"
                    component={MyAccountScreen}
                    options={{
                        tabBarIcon: ({color}) => (
                            <Icon name="user" size={30} color={color}/>
                        )
                    }}/>

                <Tab.Screen
                    name="Basket"
                    component={BasketScreen}
                    options={{
                        tabBarIcon: ({color}) => (
                            <Icon name="shopping-basket" size={30} color={color}/>
                        )
                    }}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default withAuthenticator(App)
