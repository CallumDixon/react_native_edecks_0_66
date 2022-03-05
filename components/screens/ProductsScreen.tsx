import React, { useEffect, useState } from "react";
import { Product } from "../../src/API";
import { fetchProductsWithFilter, getProducts } from "../../functions/api";
import { ActivityIndicator, FlatList, Pressable, SafeAreaView, Text, View, StyleSheet, Image } from "react-native";
import { colors } from "../../config/colors";

interface IProductsItemView{
  item: Product
}

const ProductsScreen = ({navigation, route}: any) => {

  const [list, setList] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProductsWithFilter(route.params.title)
      .then((data) => {
        setList(data)
        setLoading(false)
      })
      .catch((e) => {})
  },[])

  const clickedItem = (name: string) => {
    navigation.push('Product', {title: name})
  }

  const ProductsScreenView = (product:Product) => {
    return (
      <Pressable onPress={() => {clickedItem(product.name)}}>
        <View style={styles.productView}>
          <View style={styles.productImageView}>
            <Image source={require("../../img/45-x-45mm-(2-x-2)-C16-Graded-PAR-Eased-Edge-Treated-Timber45-x-45mm-(2-x-2)-C16-Graded-PAR-Eased-Edge-Treated-Timber.jpeg")} style={{ width: 100, height: 100, borderRadius: 20, borderWidth: 1 }} />
          </View>
          <View style={styles.productTextView}>
            <Text style={{fontSize: 16}}>
              {product.name}
            </Text>
            <Text style={{fontSize: 16}}>
              {product.cost}
            </Text>
          </View>
        </View>
      </Pressable>
    )
  }

  const renderItem = (item: IProductsItemView) => {
    return(
      <ProductsScreenView __typename={item.item.__typename}
        id={item.item.id}
        name={item.item.name}
        parent={item.item.parent}
        description={item.item.description}
        createdAt={item.item.createdAt}
        updatedAt={item.item.updatedAt}/>
    )
  }

  return(
    <SafeAreaView>
      {loading ? <ActivityIndicator size='large' style={{ alignSelf: "center" }} />
        :
        <FlatList data={list} renderItem={renderItem} keyExtractor={item => item.name}/>
      }
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  productView: {
    flexDirection: "row",
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.ken_grey
  },
  productImageView: {
    flex: 1,
    alignSelf: "flex-start",
    height: 100,
  },
  productTextView: {
    flex: 1.5,
    flexDirection: "column",
    alignSelf: "center",
    height: 100,
    justifyContent: "space-evenly",
    padding: 10,
    borderWidth:1,
    borderRadius:20,
    borderStyle: "dashed",
  }
})

export default ProductsScreen
