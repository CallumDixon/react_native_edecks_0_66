// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BasketItem, Categories, Test } = initSchema(schema);

export {
  BasketItem,
  Categories,
  Test
};