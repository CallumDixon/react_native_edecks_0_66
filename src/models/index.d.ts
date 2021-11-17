import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BasketItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CategoriesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TestMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class BasketItem {
  readonly id: string;
  readonly item_name?: string;
  readonly quantity?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<BasketItem, BasketItemMetaData>);
  static copyOf(source: BasketItem, mutator: (draft: MutableModel<BasketItem, BasketItemMetaData>) => MutableModel<BasketItem, BasketItemMetaData> | void): BasketItem;
}

export declare class Categories {
  readonly id: string;
  readonly name?: string;
  readonly parent?: string;
  readonly order?: number;
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