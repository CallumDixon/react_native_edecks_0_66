import { API, graphqlOperation } from "aws-amplify";
import { listProducts } from "../src/graphql/queries";

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
