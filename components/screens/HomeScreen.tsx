import * as React from "react";
import { Button, StyleSheet, View } from "react-native";
import { DataStore } from "@aws-amplify/datastore";
import { Categories } from "../../src/models";
import { Predicates } from "aws-amplify";

interface ICategoryItem {
  name: string
  parent: string
  order: number
}

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

  const deleteAll = async() => {
    DataStore.delete(Categories,Predicates.ALL)
    }

  return(
    <View style={styles.screen}>
      <Button title={"Base Categories"} onPress={() => {
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

    </View>
  )
}

let styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})

export default HomeScreen
