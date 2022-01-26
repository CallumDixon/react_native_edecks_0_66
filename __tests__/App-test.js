/**
 * @format
 */

import "react-native";
import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { categoryByOrder } from "../src/graphql/queries";
import { ModelSortDirection } from "../src/API";
import { getBasketItem, setBasketItem } from "../components/screens/ProductScreen";

import renderer from 'react-test-renderer'


const fetchCategories = async (parent) => {

  return API.graphql(graphqlOperation(categoryByOrder, {
    sortDirection: ModelSortDirection.ASC,
    parent: parent
  }));
}

it('request categories', () => {
  expect(fetchCategories("Categories"))
})

it('setsBasketItem', async () => {
  await setBasketItem("test")
  const item = await getBasketItem("test")
  expect (await getBasketItem("test")).toBeUndefined()
})
