/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum UserRole {
  Client = "Client",
  Delivery = "Delivery",
  Owner = "Owner",
}

export interface CreateUserInput {
  email: string;
  password: string;
  role: UserRole;
  profileImg?: string | null;
}

export interface EditProfileInput {
  email?: string | null;
  password?: string | null;
  profileImg?: string | null;
}

export interface GetAllRestaurantsInput {
  page?: number | null;
}

export interface GetMyRestaurantsInput {
  page?: number | null;
}

export interface GetRestaurantByIdInput {
  restaurantId: number;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface SearchRestaurantsInput {
  page?: number | null;
  query: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
