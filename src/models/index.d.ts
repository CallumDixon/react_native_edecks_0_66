import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CategoriesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TestMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Categories {
  readonly id: string;
  readonly name?: string;
  readonly parent?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Categories, CategoriesMetaData>);
  static copyOf(source: Categories, mutator: (draft: MutableModel<Categories, CategoriesMetaData>) => MutableModel<Categories, CategoriesMetaData> | void): Categories;
}

export declare class Test {
  readonly id: string;
  readonly test?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Test, TestMetaData>);
  static copyOf(source: Test, mutator: (draft: MutableModel<Test, TestMetaData>) => MutableModel<Test, TestMetaData> | void): Test;
}