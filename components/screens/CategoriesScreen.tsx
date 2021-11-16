import React, {FunctionComponent, useState} from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";

const catagories= [{name :'Decking & Handrails'}, {name : 'Deck Kits'}, {name : 'Timber'}, {name :'Garden Buildings'},
  {name :'Artificial Grass'}, {name :'Fencing & Gates'}, {name :'Paint & Stains'}, {name :'Paving'}, {name :'Bricks & Aggregate'},
  {name :'Fixings & Ironmongery'}, {name :'Building Products'}, {name :'Garden Extras'}, {name :'Tools'}, {name :'Samples'},
  {name :'Factory 2nds'}
]

const sub_catagories = [{name: 'All Decking'},{name: 'Softwood Deck Boards'},{name: 'Composite Deck Boards'}]

export interface IcatagoryItem {
  name: string
}

export interface IitemView {
  item: IcatagoryItem
}

const CategoriesScreen = ({navigation,route} :any) => {

  const [list] = useState(route.params.title == "Categories" ? catagories : sub_catagories)

  const clickedItem = (name : string) => {
    navigation.push('Categories',{title:name})
  }

  const Item = ({ name } : IcatagoryItem) => (
      <Pressable onPress={() => clickedItem(name)}>
        <View style={styles.item}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </Pressable>
  );

  const renderItem = ({ item } : IitemView) => (
      <Item name={item.name} />
  );

  return (
      <SafeAreaView style={styles.container}>
          <FlatList
              data={list}
              renderItem={renderItem}
              keyExtractor={item => item.name}
          />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
