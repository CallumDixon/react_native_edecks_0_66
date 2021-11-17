import * as React from 'react'
import { View, StyleSheet, Button } from "react-native";
import { DataStore } from '@aws-amplify/datastore';
import { Categories, Test } from "../../src/models";

interface ICategoryItem {
  name: string
  parent: string
  order: number
}

const categories = [{name :'Decking & Handrails'}, {name : 'Deck Kits'}, {name : 'Timber'}, {name :'Garden Buildings'},
  {name :'Artificial Grass'}, {name :'Fencing & Gates'}, {name :'Paint & Stains'}, {name :'Paving'}, {name :'Bricks & Aggregate'},
  {name :'Fixings & Ironmongery'}, {name :'Building Products'}, {name :'Garden Extras'}, {name :'Tools'}, {name :'Samples'},
  {name :'Factory 2nds'}
]

const Decking_Handrails = [{name: 'All Decking'},{name: 'Softwood Deck Boards'},{name: 'Composite Deck Boards'}]

export const HomeScreen = () => {

  const post = async (parentArray:any,parentName: string) => {
    for (let i = 0; i < parentArray.length; i++) {
      await DataStore.save(
        new Categories({
          "name": parentArray[i].name,
          "parent": parentName,
          "order": i+1
        })
      );
    }
  }

  return(
    <View style={styles.screen}>
      <Button title={"Base Categories"} onPress={() => {
        post(Categories,"Categories")
      }}>Base Categories</Button>
      <Button title={"Decking & Handrails"} onPress={() => {
        post(Decking_Handrails,"Decking & Handrails")
      }}>Decking & Handrails</Button>

    </View>
  )
}

let styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})

export default HomeScreen
