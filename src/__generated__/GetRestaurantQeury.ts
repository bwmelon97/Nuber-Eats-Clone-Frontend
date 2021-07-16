/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetRestaurantByIdInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetRestaurantQeury
// ====================================================

export interface GetRestaurantQeury_getRestaurantById_restaurant_category {
  __typename: "Category";
  name: string;
  coverImg: string | null;
}

export interface GetRestaurantQeury_getRestaurantById_restaurant {
  __typename: "Restaurant";
  id: number;
  name: string;
  coverImg: string;
  address: string;
  category: GetRestaurantQeury_getRestaurantById_restaurant_category;
}

export interface GetRestaurantQeury_getRestaurantById {
  __typename: "GetRestaurantByIdOutput";
  ok: boolean;
  error: string | null;
  restaurant: GetRestaurantQeury_getRestaurantById_restaurant | null;
}

export interface GetRestaurantQeury {
  getRestaurantById: GetRestaurantQeury_getRestaurantById;
}

export interface GetRestaurantQeuryVariables {
  input: GetRestaurantByIdInput;
}
