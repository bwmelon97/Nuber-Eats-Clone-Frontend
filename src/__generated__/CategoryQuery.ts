/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CategoryQuery
// ====================================================

export interface CategoryQuery_getAllCategories_categories {
  __typename: "Category";
  id: number;
  name: string;
  coverImg: string | null;
  slug: string;
  restaurantCounts: number;
}

export interface CategoryQuery_getAllCategories {
  __typename: "GetAllCategoriesOutput";
  ok: boolean;
  error: string | null;
  categories: CategoryQuery_getAllCategories_categories[] | null;
}

export interface CategoryQuery {
  getAllCategories: CategoryQuery_getAllCategories;
}
