import { gql } from "@apollo/client";

export const RESTAURANT_FRAGMENT = gql`
    fragment RestaurantFragment on Restaurant {
        id
        name
        coverImg
        address
        category {
            name
            coverImg
        }
    }
`;

export const CATEGORY_FRAGMENT = gql`
    fragment CategoryFragment on Category {
        id
        name
        coverImg
        slug
        restaurantCounts
    }
`;

// Backend Resolver에 추가해야 함.
// export const PAGINATION_FRAGMENT = gql``;