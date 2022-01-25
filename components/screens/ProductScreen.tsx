import React, { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { listProducts } from "../../src/graphql/queries";

export interface IProduct {
  id: String
  name: String
  parent: String
  description: String
  cost: Number
}

const ProductScreen = ({navigation,route} :any) => {


  useEffect( () => {
    getProduct()
      .then((product) => {
      console.log(product)
    })

  },[])

  const getProduct = async () => {
    let filter = { name: { eq: route.params.name } }

    return API.graphql(graphqlOperation(listProducts, { filter: filter }));
  }

  return(
    <SafeAreaView>
      <Text>Product</Text>
    </SafeAreaView>
  )
}

export default ProductScreen
