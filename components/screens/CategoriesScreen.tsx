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

import { graphqlOperation, SortDirection } from "aws-amplify";
import { API } from 'aws-amplify';
import * as queries from '../../src/graphql/queries'
import { categoryByOrder, listCategorys } from "../../src/graphql/queries";
import { ModelSortDirection } from "../../src/API";

export interface ICategoryItem {
  name: string
  parent: string
  order: number
  leaf_node: boolean
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
      .then((data) => {
      console.log(data)
      })
      .catch((e) => {
        console.log(e)
      })
  },[])

  const fetchData = async () => {
    let filter = {
      parent: {
        eq: route.params.title
      }
    }

    const categories = await API.graphql(graphqlOperation(categoryByOrder,{
      sortDirection: ModelSortDirection.ASC,
      parent: route.params.title
    }))

    // @ts-ignore
    setList(categories.data.categoryByOrder.items.map((item: { name: any; parent: any; order: any; }) => ({name:item.name,parent:item.parent,order:item.order})))

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
      <Item name={item.name} parent={item.parent} order={item.order} leaf_node={item.leaf_node}/>
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
