import React, {useState} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BrowseScreen from "./BrowseScreen";
import ProductScreen from "./ProductScreen";

const Stack = createStackNavigator();

const BrowseScreenNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="Categories">
          <Stack.Screen
              name="Categories"
              component={BrowseScreen}
              initialParams={{title:"Categories",leaf_node:false}}
              options = {({navigation,route}:any) => ({
                title: route.params.title,
              })}
          />

          <Stack.Screen
            name={"Products"}
            component = {ProductScreen}
          />
      </Stack.Navigator>
  );
}
export default BrowseScreenNavigator;
