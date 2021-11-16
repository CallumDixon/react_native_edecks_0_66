import React, {useState} from "react";

import { createStackNavigator } from "@react-navigation/stack";

import CategoriesScreen from "./CategoriesScreen";
import { Button, Pressable, Text } from "react-native";

const Stack = createStackNavigator();

const CategoriesScreenNavigator = () => {
  return (
      <Stack.Navigator>
          <Stack.Screen
              name="Categories"
              component={CategoriesScreen}
              initialParams={{title:"Categories"}}
              options = {({navigation,route}:any) => ({
                title: route.params.title
              })}
          />
      </Stack.Navigator>
  );
}
export default CategoriesScreenNavigator;
