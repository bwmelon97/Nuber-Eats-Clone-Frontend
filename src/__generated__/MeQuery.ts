/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserRole } from "./globalTypes";

// ====================================================
// GraphQL query operation: MeQuery
// ====================================================

export type MeQuery_me = {
  __typename: "User";
  id: number;
  email: string;
  role: UserRole;
  profileImg: string | null;
}

export interface MeQuery {
  me: MeQuery_me;
}
