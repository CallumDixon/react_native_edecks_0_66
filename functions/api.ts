import { API, graphqlOperation } from "aws-amplify";
import { listProducts, productByOrder } from "../src/graphql/queries";
import { Storage } from "@aws-amplify/storage"
import { ModelSortDirection } from "../src/API";

export const getProduct = async (name: String) => {

  let filter = { name: { eq: name} }
  return API.graphql(graphqlOperation(listProducts, { filter: filter }));
}

export const getProducts = async (names: Array<string>) => {

  let fieldName = "name"
  let filteredMembers = names.map((item) => JSON.parse(`{ "${fieldName}": {"eq":${item}}}`))
  let filter = {or:filteredMembers}
  return API.graphql(graphqlOperation(listProducts,{filter: filter}))
}

export const fetchProductsWithFilter = async (parent: string) => {

  let variables = {
    sortDirection: ModelSortDirection.ASC,
    parent: parent
  }

  let products
  let data
  if(parent == "All"){
    products = await API.graphql(graphqlOperation(listProducts))
    // @ts-ignore
    data = products.data.listProducts
  }
  else {
    products = await API.graphql(graphqlOperation(productByOrder, variables))
    // @ts-ignore
    data = products.data.productByOrder
  }
  return data.items
}

export const fetchImage = async (name: string) => {

  return await Storage.get(name, {
    level: "public"
  })
}
