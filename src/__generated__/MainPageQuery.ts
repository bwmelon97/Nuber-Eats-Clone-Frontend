/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetAllRestaurantsInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: MainPageQuery
// ====================================================

export interface MainPageQuery_getAllCategories_categories {
  __typename: "Category";
  id: number;
  name: string;
  coverImg: string | null;
  slug: string;
  restaurantCounts: number;
}

export interface MainPageQuery_getAllCategories {
  __typename: "GetAllCategoriesOutput";
  ok: boolean;
  error: string | null;
  categories: MainPageQuery_getAllCategories_categories[] | null;
}

export interface MainPageQuery_getAllRestaurants_restaurants_category {
  __typename: "Category";
  name: string;
}

export interface MainPageQuery_getAllRestaurants_restaurants {
  __typename: "Restaurant";
  id: number;
  name: string;
  coverImg: string;
  address: string;
  category: MainPageQuery_getAllRestaurants_restaurants_category;
}

export interface MainPageQuery_getAllRestaurants {
  __typename: "GetAllRestaurantsOutput";
  ok: boolean;
  error: string | null;
  totalPages: number | null;
  totalCounts: number | null;
  restaurants: MainPageQuery_getAllRestaurants_restaurants[] | null;
}

export interface MainPageQuery {
  getAllCategories: MainPageQuery_getAllCategories;
  getAllRestaurants: MainPageQuery_getAllRestaurants;
}

export interface MainPageQueryVariables {
  input: GetAllRestaurantsInput;
}
