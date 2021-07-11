/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RestaurantFragment
// ====================================================

export interface RestaurantFragment_category {
  __typename: "Category";
  name: string;
  coverImg: string | null;
}

export interface RestaurantFragment {
  __typename: "Restaurant";
  id: number;
  name: string;
  coverImg: string;
  address: string;
  category: RestaurantFragment_category;
}
