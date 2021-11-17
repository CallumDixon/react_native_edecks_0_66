import * as React from 'react'
import { View, StyleSheet, Button } from "react-native";
import { DataStore } from '@aws-amplify/datastore';
import { Categories, Test } from "../../src/models";

const categories = [{name :'Decking & Handrails'}, {name : 'Deck Kits'}, {name : 'Timber'}, {name :'Garden Buildings'},
  {name :'Artificial Grass'}, {name :'Fencing & Gates'}, {name :'Paint & Stains'}, {name :'Paving'}, {name :'Bricks & Aggregate'},
  {name :'Fixings & Ironmongery'}, {name :'Building Products'}, {name :'Garden Extras'}, {name :'Tools'}, {name :'Samples'},
  {name :'Factory 2nds'}
]

const sub_categories = [{name: 'All Decking'},{name: 'Softwood Deck Boards'},{name: 'Composite Deck Boards'}]

export const HomeScreen = () => {

  const post = async () => {
    for (let i = 0; i < categories.length; i++) {
      await DataStore.save(
        new Categories({
          "name": categories[i].name,
          "parent": "Categories"
        })
      );
    }
  }

  return(
    <View style={styles.screen}>
      <Button title={"post"} onPress={post}>post</Button>
    </View>
  )
}

let styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})

export default HomeScreen
