/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetAllRestaurantsInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: RestaurantsQuery
// ====================================================

export interface RestaurantsQuery_getAllRestaurants_restaurants_category {
  __typename: "Category";
  name: string;
  coverImg: string | null;
}

export interface RestaurantsQuery_getAllRestaurants_restaurants {
  __typename: "Restaurant";
  id: number;
  name: string;
  coverImg: string;
  address: string;
  category: RestaurantsQuery_getAllRestaurants_restaurants_category;
}

export interface RestaurantsQuery_getAllRestaurants {
  __typename: "GetAllRestaurantsOutput";
  ok: boolean;
  error: string | null;
  totalPages: number | null;
  totalCounts: number | null;
  restaurants: RestaurantsQuery_getAllRestaurants_restaurants[] | null;
}

export interface RestaurantsQuery {
  getAllRestaurants: RestaurantsQuery_getAllRestaurants;
}

export interface RestaurantsQueryVariables {
  input: GetAllRestaurantsInput;
}
