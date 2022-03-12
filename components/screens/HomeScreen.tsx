import * as React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { API, Predicates } from "aws-amplify";
import * as mutations from '../../src/graphql/mutations'
import * as queries from "../../src/graphql/queries";
import { getBasketItem, removeItem } from "../../functions/deviceStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface ICategoryItem {
  name: string
  parent: string
  order: number
}
import { SetBasketContext } from "../../functions/context";
import { useContext, useState } from "react";
import { colors } from "../../config/colors";


const categories = [{name :'Timber & Sheet Materials'}, {name : 'Building Materials'}, {name : 'Landscaping & Gardening'},
  {name :'Fencing'}, {name :'Decking'}, {name :'Roofing & Insulation'},
  {name :'Plumbing & Electrical'}, {name :'Fixings & Ironmongery'}, {name :'Tools & PPE'},
  {name :'Decorating & Interiors'}, {name :'Windows, Doors & Joinery'}
]

const timber_sheet_materials = [{name: 'Timber'},{name: 'Sheet Materials'},{name: 'Cladding'},{name: 'Planed Timber'}
  ,{name: 'Mouldings'},{name: 'Skirting Board & Architrave'},{name: 'Best Sellers'}]

const building_materials = [{name: 'Bricks & Blocks'},{name:'Aggregates'},{name:'Cement & Bagged Powders'},
  {name:'Drainage'},{name:'Above Ground (Soil)'},{name:'Plaster & Plasterboards'},{name:'Lintels'},
  {name:'Building Chemicals'},{name:'Metalwork'},{name:'Damp Proof Course'},{name:'Wire & Mesh'},{name:'Best Sellers'}]


export const HomeScreen = () => {

  const setBasket = useContext(SetBasketContext)

  const post = async (parentArray:any,parentName: string) => {
    for (let i = 0; i < parentArray.length; i++) {
      await API.graphql({query: mutations.createCategory, variables: {input: {
            "name": parentArray[i].name,
            "parent": parentName,
            "order": i+1,
            "leaf_node": false
      }}})
    }
  }

  const get = async () => {
    let filter = {
      parent: {
        ne: "Categories"
      }
    }
    const categories = await API.graphql({query: queries.listCategorys,variables: {filter: filter}})
    // @ts-ignore
    console.log(categories.data.listCategorys.items)
  }

  return(
    <View style={styles.screen}>

        {/*<Text style={styles.homeItem}>Product of the Week</Text>*/}
        {/*<Text style={styles.homeItem}>Super Fast Delivery</Text>*/}
        {/*<Text style={styles.homeItem}>Contact our Sales Team</Text>*/}
        {/*<Text style={styles.homeItem}>Instant free Credit</Text>*/}
        {/*<Image style={styles.img} source={require("../../img/ken_del_2021.jpeg")}/>*/}

      <View style={styles.homeScreenItem}>
        <Image style={styles.img} source={require("../../img/k_productofweek_banner.png")}/>
      </View>

      <View style={styles.homeScreenItem}>
        <View style={styles.row2}>
          <View style={styles.row2col1}>
            <Text style={styles.homeItem}>Call Us Today On{"\n"} 01405 720127</Text>
            <Text style={styles.homeItem}>Or why not Visit Us?</Text>
          </View>
          <Image source={require("../../img/k_findus.png")}/>
        </View>
      </View>

      {/*<Button title="Add test item1 to basket" onPress={async () => {*/}
      {/*  setBasket('Item 1', 4, true);*/}
      {/*}}>setData</Button>*/}

      {/*<Button title="Add test item2 to basket" onPress={async () => {*/}
      {/*  setBasket('Item 2', 5, true);*/}
      {/*}}>setData</Button>*/}

      {/*<Button title='getData' onPress={async () => {*/}
      {/*  console.log(await getBasketItem())*/}
      {/*}}>getData</Button>*/}

      {/*<Button title='removeItem' onPress={async () => {*/}
      {/*  await removeItem()*/}
      {/*  setBasket('',1,false)*/}
      {/*}}>removeItem</Button>*/}



      {/*<Button title={"Base Categories"} onPress={() => {
        post(categories,"Categories")
      }}>Base Categories</Button>

      <Button title={"Timber & Sheet Materials"} onPress={() => {
        post(timber_sheet_materials,"Timber & Sheet Materials")
      }}>Decking & Handrails</Button>

      <Button title={"Building Materials"} onPress={() => {
        post(building_materials,"Building Materials")
      }}>Decking & Handrails</Button>

      <Button title={"Delete All"} onPress={() =>{
        deleteAll()
      }}>Delete All</Button>

      <Button title={"Query log"} onPress={() => {
        get()
      }}>Query Log</Button>*/}
    </View>
  )
}

let styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  homeScreenItem: {
    borderRadius: 20,
    borderColor: colors.ken_green,
    borderWidth: 10,
    marginVertical: 2
  },
  homeItem: {
    padding: 10,
    marginVertical: 1,
    marginHorizontal: 2,
    borderWidth:1,
    borderRadius:5,
    borderColor:'grey'
  },
  row2: {
    flexDirection: "row"
  },
  row2col1: {
    flexDirection: "column",
    justifyContent: "center"
  },
  img: {
    alignSelf: "center"
  },
})

export default HomeScreen
