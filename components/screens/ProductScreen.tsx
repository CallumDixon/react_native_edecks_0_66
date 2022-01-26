import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { listProducts } from "../../src/graphql/queries";
// @ts-ignore

export interface IProduct {
  id: String
  name: String
  parent: String
  description: String
  cost: Number
}

const getProduct = async (name: String) => {

  let filter = { name: { eq: name} }
  return API.graphql(graphqlOperation(listProducts, { filter: filter }));
}

/*export const setBasketItem = async (name: string) => {
  await AsyncStorage.setItem(name, String(1));
}

export const getBasketItem = async (name: string) => {

  try {
    const value = await AsyncStorage.getItem(name);
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
}*/

const ProductScreen = ({navigation,route} :any) => {

  const [products,setProducts] = useState<IProduct | undefined>(undefined)
  const [loading,setLoading] = useState(true)

  useEffect( () => {
    getProduct(route.params.name )
      .then((product) => {
      // @ts-ignore
        setProducts(product.data.listProducts.items[0])
        setLoading(false)
    })
  },[])

  return(
    <SafeAreaView style = {styles.container}>
      <ScrollView>
      {loading ?
        <ActivityIndicator size='large' style={{alignSelf:"center"}}/>
        :
        <View style={styles.productView}>
          <Text style = {styles.name} >{products?.name}</Text>
          <Image style={styles.img} source={require("../../img/45-x-45mm-(2-x-2)-C16-Graded-PAR-Eased-Edge-Treated-Timber45-x-45mm-(2-x-2)-C16-Graded-PAR-Eased-Edge-Treated-Timber.jpeg")}/>
          <Text style = {styles.cost}>{products?.description}</Text>
          <Text style = {styles.description}>{products?.cost}</Text>
          <Button title="Add to Basket" >Add to Basket</Button>
        </View>
      }
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent:"center"
  },
  productView: {
    flex:1,
    flexDirection: "column",
    padding: 20,
    alignItems: "flex-start"
  },
  name: {
    padding: 20,
    //marginVertical: 4,
    //marginHorizontal: 16,
    borderWidth:1,
    borderRadius:5,
    borderColor:'grey',
    fontSize: 20
  },
  img: {
    width: 200,
    height: 200,
    alignSelf: "center"
  },
  cost: {
    padding: 20,
    //marginVertical: 4,
    //marginHorizontal: 16,
    borderWidth:1,
    borderRadius:5,
    borderColor:'grey',
  },
  description: {
    padding: 20,
    //marginVertical: 4,
    //marginHorizontal: 16,
    borderWidth:1,
    borderRadius:5,
    borderColor:'grey',
  }
})

export default ProductScreen
