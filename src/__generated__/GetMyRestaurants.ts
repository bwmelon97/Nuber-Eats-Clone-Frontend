/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetMyRestaurantsInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetMyRestaurants
// ====================================================

export interface GetMyRestaurants_getMyRestaurants_restaurants_category {
  __typename: "Category";
  name: string;
  coverImg: string | null;
}

export interface GetMyRestaurants_getMyRestaurants_restaurants {
  __typename: "Restaurant";
  id: number;
  name: string;
  coverImg: string;
  address: string;
  category: GetMyRestaurants_getMyRestaurants_restaurants_category;
}

export interface GetMyRestaurants_getMyRestaurants {
  __typename: "GetMyRestaurantsOutput";
  ok: boolean;
  error: string | null;
  totalCounts: number | null;
  totalPages: number | null;
  restaurants: GetMyRestaurants_getMyRestaurants_restaurants[] | null;
}

export interface GetMyRestaurants {
  getMyRestaurants: GetMyRestaurants_getMyRestaurants;
}

export interface GetMyRestaurantsVariables {
  input: GetMyRestaurantsInput;
}
