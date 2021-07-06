import { gql } from "@apollo/client";

export const MAIN_PAGE_QUERY = gql`
    query MainPageQuery ($input: GetAllRestaurantsInput!) {
        getAllCategories {
            ok
            error
            categories {
                id
                name
                coverImg
                slug
                restaurantCounts
            }
        }
        getAllRestaurants(input: $input) {
            ok
            error
            totalPages
            totalCounts
            restaurants {
                id
                name
                coverImg
                address
                category {
                    name
                }
            }
        }
    }
`

export const CATEGORY_QUERY = gql`
    query CategoryQuery {
        getAllCategories {
            ok
            error
            categories {
                id
                name
                coverImg
                slug
                restaurantCounts
            }
        }
    }
`;