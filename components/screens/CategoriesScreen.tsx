import React, { FunctionComponent, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";

import { DataStore } from '@aws-amplify/datastore';
import { Categories} from "../../src/models";
import { SortDirection } from "aws-amplify";

export interface ICategoryItem {
  name: string
  parent: string
  order: number
}

export interface IitemView {
  item: ICategoryItem
}

const CategoriesScreen = ({navigation,route} :any) => {

  const [list,setList] = useState<ICategoryItem[]>([])
  const [loading,setLoading] = useState(true)

  // The Following are used to fetch the Categories
  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () => {
    const categories = await DataStore.query(Categories,c => c.parent('eq',route.params.title),
      {  sort: (s) => s.order(SortDirection.ASCENDING),
    })
    // @ts-ignore
    setList(categories.map(item => ({name:item.name,parent:item.parent,order:item.order})))

    setLoading(false)
    return categories
  }

  // When a Category is picked, load the next page
  const clickedItem = (name : string) => {
    navigation.push('Categories',{title:name})
  }

  // Defining our list of Categories
  const Item = ({ name } : ICategoryItem) => (
      <Pressable onPress={() => clickedItem(name)}>
        <View style={styles.item}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </Pressable>
  );

  const renderItem = ({ item } : IitemView) => (
      <Item name={item.name} parent={item.parent} order={item.order}/>
  );

  return (
      <SafeAreaView style={styles.container}>
          {loading ?
            <ActivityIndicator size='large' style={{alignSelf:"center"}}/>
            :
            <FlatList
              data={list}
              renderItem={renderItem}
              keyExtractor={item => item.name}
            />
          }
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent:"center"
  },
  item: {
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 16,
    borderWidth:1,
    borderRadius:5,
    borderColor:'grey'
  },
  name: {
    fontSize: 16,
  },
});

export default CategoriesScreen;
