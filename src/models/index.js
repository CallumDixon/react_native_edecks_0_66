// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Categories, Test } = initSchema(schema);

export {
  Categories,
  Test
};