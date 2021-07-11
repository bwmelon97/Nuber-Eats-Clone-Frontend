/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SearchRestaurantsInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: SearchRestaurantsQuery
// ====================================================

export interface SearchRestaurantsQuery_searchRestaurants_restaurants_category {
  __typename: "Category";
  name: string;
  coverImg: string | null;
}

export interface SearchRestaurantsQuery_searchRestaurants_restaurants {
  __typename: "Restaurant";
  id: number;
  name: string;
  coverImg: string;
  address: string;
  category: SearchRestaurantsQuery_searchRestaurants_restaurants_category;
}

export interface SearchRestaurantsQuery_searchRestaurants {
  __typename: "SearchRestaurantsOutput";
  ok: boolean;
  error: string | null;
  totalCounts: number | null;
  totalPages: number | null;
  restaurants: SearchRestaurantsQuery_searchRestaurants_restaurants[] | null;
}

export interface SearchRestaurantsQuery {
  searchRestaurants: SearchRestaurantsQuery_searchRestaurants;
}

export interface SearchRestaurantsQueryVariables {
  input: SearchRestaurantsInput;
}
