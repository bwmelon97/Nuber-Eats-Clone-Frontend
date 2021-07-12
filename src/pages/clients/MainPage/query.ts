import { gql } from "@apollo/client";
import { CATEGORY_FRAGMENT, RESTAURANT_FRAGMENT } from "@fragments";

export const MAIN_PAGE_QUERY = gql`
    query MainPageQuery ($input: GetAllRestaurantsInput!) {
        getAllCategories {
            ok
            error
            categories {
                ...CategoryFragment
                name
            }
        }
        getAllRestaurants(input: $input) {
            ok
            error
            totalPages
            totalCounts
            restaurants {
                ...RestaurantFragment
            }
        }
    }
    ${CATEGORY_FRAGMENT}
    ${RESTAURANT_FRAGMENT}
`

export const CATEGORY_QUERY = gql`
    query CategoryQuery {
        getAllCategories {
            ok
            error
            categories {
                ...CategoryFragment
            }
        }
    }
    ${CATEGORY_FRAGMENT}
`;

export const RESTAURANTS_QUERY = gql`
    query RestaurantsQuery ($input: GetAllRestaurantsInput!) {
        getAllRestaurants(input: $input) {
            ok
            error
            totalPages
            totalCounts
            restaurants {
                ...RestaurantFragment
            }
        }
    }
    ${RESTAURANT_FRAGMENT}
`