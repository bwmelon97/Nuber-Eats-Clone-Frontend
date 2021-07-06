import React from "react";
import { gql, useQuery } from "@apollo/client";
import { MainPageQuery, MainPageQueryVariables } from "@gql-types/MainPageQuery";

const MAIN_PAGE_QUERY = gql`
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

const MainPage = () => {
    const { loading, data } = useQuery<
        MainPageQuery, 
        MainPageQueryVariables
    >(MAIN_PAGE_QUERY, {
        variables: {
            input: {
                page: 1
            }
        }
    })

    return (
        <div>
            Main Page
        </div>
    )
}

export default MainPage